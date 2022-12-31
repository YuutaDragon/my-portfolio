import { Avatar } from "../Avatar";
import { Button } from "../Button";
import { HeaderContainer } from "./styles";

export function Header() {
 async function sendEmail() {
  window.location.href = "mailto:guilherme.rodrigues@estudante.ufscar.br";
 }

  return (
    <HeaderContainer>
      <Avatar />
      <Button title="Hire me" onClick={() => sendEmail()}/>
    </HeaderContainer>
  );
}
