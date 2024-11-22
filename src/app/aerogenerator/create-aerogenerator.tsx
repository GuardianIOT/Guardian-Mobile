import React, { useState } from 'react'
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native'
import Button from '@/src/components/shared/Button'
import Input from '@/src/components/shared/Input'
import { createAerogenerator } from '@/src/api/services/aerogenerator/create-aerogenerator'
import { IAerogenerator } from '@/src/types/Aerogenerator'
import Colors from '@/src/constants/Colors'

const CreateAerogenerator = () => {
  const [form, setForm] = useState<IAerogenerator>({
    modelo: '',
    tecnologia: '',
    capacidadeMW: 0,
    alturaMastro: 0,
    velocidadeCorte: 0,
    statusOperacao: 'Em operação',
    diametroMotor: 0,
    dataInstalacao: '',
    garantia: '',
    parqueId: 1,
  })

  const [loading, setLoading] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value })
  }

  const handleSubmit = async () => {
    setLoading(true)
    try {
      console.log(form)

      await createAerogenerator(form)
      Alert.alert('Sucesso', 'Aerogerador criado com sucesso!')
      setForm({
        modelo: '',
        tecnologia: '',
        capacidadeMW: 0,
        alturaMastro: 0,
        velocidadeCorte: 0,
        statusOperacao: 'Em operação',
        diametroMotor: 0,
        dataInstalacao: '',
        garantia: '',
        parqueId: 0,
      }) // Reseta o formulário
    } catch (err) {
      Alert.alert(
        'Erro',
        'Não foi possível criar o aerogerador. Tente novamente.',
      )
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Input
        label="Modelo"
        value={form.modelo}
        onChangeText={(value) => handleInputChange('modelo', value)}
      />

      <Input
        label="Tecnologia"
        value={form.tecnologia}
        onChangeText={(value) => handleInputChange('tecnologia', value)}
      />

      <Input
        label="Capacidade (MW)"
        value={form.capacidadeMW.toString()}
        keyboardType="numeric"
        onChangeText={(value) => handleInputChange('capacidadeMW', value)}
      />

      <Input
        label="Altura do Mastro (m)"
        value={form.alturaMastro.toString()}
        keyboardType="numeric"
        onChangeText={(value) => handleInputChange('alturaMastro', value)}
      />

      <Input
        label="Velocidade de Corte (m/s)"
        value={form.velocidadeCorte.toString()}
        keyboardType="numeric"
        onChangeText={(value) => handleInputChange('velocidadeCorte', value)}
      />

      <Input
        label="Diâmetro do Motor (m)"
        value={form.diametroMotor.toString()}
        keyboardType="numeric"
        onChangeText={(value) => handleInputChange('diametroMotor', value)}
      />

      <Input
        label="Data de Instalação"
        value={form.dataInstalacao}
        placeholder="DD/MM/YYYY"
        keyboardType="numeric"
        onChangeText={(value) => handleInputChange('dataInstalacao', value)}
      />

      <Input
        label="Garantia até"
        value={form.garantia}
        placeholder="DD/MM/YYYY"
        keyboardType="numeric"
        onChangeText={(value) => handleInputChange('garantia', value)}
      />

      {loading ? (
        <ActivityIndicator size="large" color={Colors.primary} />
      ) : (
        <Button label="Criar Aerogerador" onPress={handleSubmit} />
      )}
    </ScrollView>
  )
}

export default CreateAerogenerator

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    gap: 20,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
})
