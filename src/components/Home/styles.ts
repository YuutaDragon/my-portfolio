import styled from "styled-components";

export const HomeContainer = styled.section`
  min-height: 80vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  
  padding-inline: 5rem;

  div {
    text-align: center;
    font-size: 2rem;

    p {
      & + p {
        margin-top: 2rem;
      }
    }
  }

  span {
    font-weight: 700;
  }
`;
