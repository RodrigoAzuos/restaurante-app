import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Pedidos() {
    const navidateTo = useNavigate();

    const hadleClick = () => {
        return navidateTo("/")
    }
  return (
    <>
        Pedidos

        <Button onClick={hadleClick} variant="contained">Voltar</Button>
    </>
  )
}
