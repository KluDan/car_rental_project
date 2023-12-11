import styled from "styled-components";
import { theme } from "../../theme";

export const StyledSection = styled.section`
  max-width: 1213px;
  padding: 15px;
  margin: auto;
  padding-block: 50px;
`;
export const PromotionsTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${theme.colors.primaryText};
  margin-bottom: 50px;
`;

export const PromotionsContent = styled.div`
  display: flex;
  gap: 30px;

  h3 {
    font-size: 20px;
  }
  p {
    font-size: 18px;
  }
`;
export const ContentItem = styled.div`
  flex: 0 1 33.333%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  gap: 10px;
  height: auto;
`;
export const StyledImageDiv = styled.div`
  height: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
