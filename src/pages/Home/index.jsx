import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import {getPratos} from '../../api/restaurante'
import {Box, Typography, CircularProgress, Button  } from '@mui/material'
import CardPrato from '../../componentes/CardPrato'

export default function Home() {
  const [pratos, setPratos] = useState()
  const [erro, setErro] = useState(false)
  const [carregando, setCarregando] = useState(false)
  const navigateTo = useNavigate();

  useEffect(() => {
    setCarregando(true)
    setErro(false)
    const resposta = getPratos();
    resposta.then((dados) => {
      setPratos(dados.data);
    }).catch((erro) => {
      setErro(true)
    }).finally(() => {
      setCarregando(false)
    })
  }, []);

  const handleLink = () => {
    return navigateTo("/pedidos")
  }

  return (
    <>
        <Button  variant="outlined" onClick={handleLink}>Click click</Button>
        {carregando && <span>Carregando</span>}
        {erro && <span>Erro ao carregar pratos</span>}
        <Typography gutterBottom variant="h2" component="div" sx={{textAlign: 'center'}}>
            Cardápio
        </Typography>
        {(pratos && pratos.length > 0) && <Box>
            {pratos.map((prato) => (
            <CardPrato key={prato.id} prato={prato}/>
            ))}
        </Box>
        }
    </>
  )
}
