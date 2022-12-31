import { AvatarContainer } from "./styles";

import avatar from "../../assets/avatar.png";

interface AvatarProps {
  width?: string;
  height?: string;
}

export function Avatar({ width = "65px", height = "65px" }: AvatarProps) {
  const scrollTo = () => {
    window.scrollTo(0, 0);
  }
  
  return (
    <>
      <AvatarContainer onClick={() => scrollTo()} src={avatar} width={width} height={height} />
    </>
  );
}
