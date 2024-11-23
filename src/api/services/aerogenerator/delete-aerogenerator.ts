import { IAerogenerator } from "@/src/types/Aerogenerator";
import { api } from "../..";

export const deleteAerogenerator = async (id: number) => {
  return await api.delete(`/aerogerador/${id}`);
};
