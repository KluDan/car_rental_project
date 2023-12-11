import styled from "styled-components";
import { theme } from "../../theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InputMain = styled.div`
  width: 320px;
  border-radius: 14px;
  background-color: ${theme.colors.inputBackground};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InputBlock = styled.div`
  display: flex;
  align-items: center;
  padding-block: 14px;
  padding-left: 24px;
  width: 50%;
  position: relative;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  &:first-of-type {
    border-right: 1px solid ${theme.colors.additionalGray};
  }

  span {
    display: inline-block;
    margin-right: 4px;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  outline: none;
  background-color: transparent;
  color: ${theme.colors.primaryText};
  border: none;
  cursor: pointer;
  padding: 0 5px 0 0;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`;

export const StyledLabel = styled.label`
  color: ${theme.colors.labelText};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  display: inline-block;
  margin-bottom: 8px;
`;
