import styled from "styled-components";
import { theme } from "../../theme";

export const HeroSection = styled.section`
  background-color: ${theme.colors.secondaryBlue};
  height: 400px;
  padding-block: 20px;
  color: ${theme.colors.bodyMain};
`;
export const HeroContainer = styled.div`
  max-width: 1213px;
  padding: 15px;
  margin: 70px auto;
`;
export const HeroTitle = styled.h1`
  max-width: 500px;
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 30px;
`;
export const HeroText = styled.p`
  max-width: 600px;
  font-weight: 500;
  font-size: 30px;
`;
