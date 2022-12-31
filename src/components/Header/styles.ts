import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 5rem;
  height: 7rem;

  margin-top: 1rem;

  nav { 
    display: flex;
    gap: 1rem;
       
    a {
      width: 3rem;
      height: 3rem;
      text-decoration: none;
      color: ${props => props.theme.white};
    }
  }
`;
