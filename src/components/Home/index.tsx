import { Avatar } from "../Avatar";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Avatar width="300px" height="300px"/>
      <div>
        <p>Hi!</p>
        <p>I'm <span>Guilherme Rodrigues</span></p>
      </div>
    </HomeContainer>
  );
}
