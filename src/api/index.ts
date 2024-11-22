import axios, { AxiosError } from 'axios'

export const api = axios.create({
  baseURL: `https://guardian-b2d7eggyhgewctg7.canadacentral-01.azurewebsites.net/api/v1/`,
})
