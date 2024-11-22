export const decodeJWT = (token: string): any => {
  try {
    const payload = token.split('.')[1]
    const decodedPayload = atob(payload)
    return JSON.parse(decodedPayload)
  } catch (err) {
    console.error('Erro ao decodificar o JWT:', err)
    return null
  }
}
