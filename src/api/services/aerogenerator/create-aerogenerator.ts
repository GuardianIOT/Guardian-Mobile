import { IAerogenerator } from '@/src/types/Aerogenerator'
import { api } from '../..'

export const createAerogenerator = async (aerogenerator: IAerogenerator) => {
  return await api.post('/aerogerador', { aerogenerator })
}
