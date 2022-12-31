import styled from "styled-components";

export const LightContainer = styled.div`
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  --size: 250px;
  --speed: 50s;
  --easing: cubic-bezier(0.8, 0.2, 0.2, 0.8);

  width: var(--size);
  height: var(--size);
  filter: blur(calc(var(--size) / 2));
  background-image: linear-gradient(
    90deg,
    rgba(255, 248, 180, 1) 0%,
    rgba(230, 197, 155, 1) 42%,
    rgba(118, 233, 236, 1) 100%
  );
  animation: rotate var(--speed) var(--easing) alternate infinite;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
`;
