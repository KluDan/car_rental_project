import styled from "styled-components";
import { theme } from "../../theme";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  position: relative;
  max-width: 541px;
  max-height: 90vh;
  overflow: auto;
  background: ${theme.colors.bodyMain};
  padding: 40px;
  border-radius: 24px;
  width: 100%;
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 248px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 14px;
  background-color: #f0f0f0;
`;

export const ModalTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 8px;
  span:first-of-type {
    color: ${theme.colors.primaryBlue};
  }
`;

export const ModalDescription = styled.p`
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 24px;
`;

export const ModalCloseButton = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  cursor: pointer;
`;

export const ModalMainInfo = styled.div`
  max-width: 277px;
  margin-bottom: 14px;
`;

export const RentalCarButton = styled.a`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: ${theme.colors.bodyMain};
  display: flex;
  max-width: 168px;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: ${theme.colors.primaryBlue};
  text-decoration: none;
  transition: ${theme.transitions.default};
  &:hover {
    background-color: ${theme.colors.secondaryBlue};
  }
`;

export const ModalTextListTitle = styled.p`
  margin-bottom: 8px;
`;
