import { IAerogenerator } from "@/src/types/Aerogenerator";
import { api } from "../..";

export const getAllAerogenerators = async (): Promise<IAerogenerator[]> => {
  const response = await api.get("/aerogerador");

  return response.data as IAerogenerator[];
};
