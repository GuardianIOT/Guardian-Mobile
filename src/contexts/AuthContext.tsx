import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from 'expo-router'
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { Alert } from 'react-native'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types'
import { api } from '../api'
import { decodeJWT } from '../utils/decodeJWT'

interface User {
  id: number
  nome: string
  email: string
  // Adicione outras propriedades conforme necessário
}

interface AuthContextData {
  user: User | null
  loading: boolean
  signIn: (data: SignInData) => Promise<void>
  signOut: () => void
}

interface SignInData {
  email: string
  password: string
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadStorageData = async () => {
      const storedUser = await AsyncStorage.getItem('@Guardian:user')
      const storedToken = await AsyncStorage.getItem('@Guardian:token')

      if (storedUser && storedToken) {
        api.defaults.headers.Authorization = `Bearer ${storedToken}`
        setUser(JSON.parse(storedUser))
      }

      setLoading(false)
    }

    loadStorageData()
  }, [])

  const signIn = async ({ email, password }: SignInData) => {
    try {
      const response = await api.post('login', {
        email,
        senha: password,
      })

      if (response.status === 200) {
        const { token } = response.data

        // Decodifica o token JWT para extrair os dados do usuário
        const decodedUser: {
          exp: number
          iat: number
          idUsuario: number
          iss: string
          sub: string
        } = decodeJWT(token)

        console.log(decodedUser)

        await AsyncStorage.setItem(
          '@Guardian:user',
          JSON.stringify(decodedUser),
        )
        await AsyncStorage.setItem('@Guardian:token', token)

        api.defaults.headers.Authorization = `Bearer ${token}`

        setUser({
          email: decodedUser.sub,
          id: decodedUser.idUsuario,
          nome: 'João',
        })

        navigation.navigate('(root)')
      }
    } catch (err) {
      Alert.alert('Essa conta não existe, tente novamente!')
      console.error(err)
    }
  }

  const signOut = async () => {
    await AsyncStorage.clear()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext

export const useAuth = () => {
  return useContext(AuthContext)
}
