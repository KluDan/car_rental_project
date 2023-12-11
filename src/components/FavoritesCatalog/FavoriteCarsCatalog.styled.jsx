import styled from "styled-components";
import { theme } from "../../theme";
import Loader from "../Loader";

export const StyledCatalogContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 29px;
  grid-row-gap: 50px;
  margin-bottom: 100px;
`;

export const ErrorMessage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  font-weight: 600;
  line-height: 1.4;
  width: 600px;
  text-align: center;
  a {
    margin: 5px;
    text-decoration: none;
    color: ${theme.colors.primaryBlue};
    position: relative;
    &::after {
      position: absolute;
      content: "";
      left: 50%;
      transform: translateX(-50%);
      bottom: -2px;
      display: block;
      width: 100%;
      height: 1px;
      background: ${theme.colors.primaryBlue};
      width: 0;
      transition: ${theme.transitions.default};
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

export const StyledLoader = styled(Loader)`
  margin: auto;
`;
