import { api } from '../..'

export const createAccount = async ({
  firstName,
  lastName,
  email,
  password,
}: {
  firstName: string
  lastName: string
  email: string
  password: string
}) => {
  const reqObj = {
    nome: firstName,
    sobrenome: lastName,
    email,
    senha: password,
    idCompanhia: 0,
  }

  console.log(reqObj)

  await api.post('/usuario', reqObj)
}
