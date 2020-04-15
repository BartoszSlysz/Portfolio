import styled from "styled-components";
import { device } from "../../styles/globalSizes";

export const HamburgerContainer = styled.button`
  display: none;

  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 150;

  width: 5rem;
  height: 5rem;

  border-radius: 50%;
  padding: 1rem;
  outline: none;
  border: ${({ isopen }) => (isopen ? ".1rem solid white" : "transparent")};
  background-color: ${({ theme }) => theme.baseRedColor};
  transition: 0.2s all ease-in-out;

  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  transform: scale(1);
  animation: pulse 2s infinite;

  cursor: pointer;

  i {
    color: #950740;
  }

  @media ${device.laptopS} {
    display: block;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 #950740;
    }

    70% {
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }

    100% {
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }
`;
