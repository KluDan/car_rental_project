import styled from "styled-components";
import { theme } from "../../theme";

export const DropdownWrapper = styled.div`
  width: 224px;
  position: relative;
  display: inline-block;
`;
export const DropDownMain = styled.div`
  width: 224px;
  border-radius: 14px;
  background-color: ${theme.colors.inputBackground};
  padding: 14px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const DropdownInput = styled.input`
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

export const StyleLabel = styled.label`
  color: ${theme.colors.labelText};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  display: inline-block;
  margin-bottom: 8px;
`;

export const DropdownButton = styled.button`
  background: none;
  width: 20px;
  height: 20px;
  display: flex;
  padding: 5px;
  justify-content: center;
  align-items: center;
`;

export const ChevronIcon = styled.span`
  font-size: 20px;
  color: ${theme.colors.primaryText};
`;

export const DropdownOptions = styled.ul`
  width: 100%;
  height: 272px;
  overflow: auto;
  position: absolute;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 8px;
  top: 100%;
  left: 0;
  margin-top: 4px;
  margin: 0;
  padding: 14px 8px 14px 18px;
  list-style: none;
  background-color: ${theme.colors.bodyMain};
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);

  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  cursor: pointer;
`;

export const DropdownItem = styled.li`
  color: ${({ selected }) =>
    selected ? theme.colors.primary : "rgba(18, 20, 23, 0.2)"};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  &:hover {
    background-color: ${theme.colors.inputBackground};
  }
`;
