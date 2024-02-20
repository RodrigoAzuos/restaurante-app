import axios from 'axios';

const axiosClient = axios.create({
    baseURL: "http://localhost:3000"
});

export async function getPratos(){
   const response = await axiosClient.get('/listar-pratos');

   return response
}