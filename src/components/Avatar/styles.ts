import styled from "styled-components";

export const AvatarContainer = styled.img`
  border-radius: 50%;

  transition: all 0.2s ease;

  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
