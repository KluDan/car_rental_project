import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setFilterPriceValue } from "../../redux/carSlice";

import {
  ChevronIcon,
  DropdownButton,
  DropdownItem,
  DropDownMain,
  DropdownOptions,
  DropdownWrapper,
  StyledLabel,
} from "./DropDownPrice.styled";

const DropDownPrice = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const numbersArray = Array.from(
      { length: 20 },
      (_, index) => (index + 1) * 10
    );
    setFilteredOptions(numbersArray);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownWrapper ref={dropdownRef}>
      <StyledLabel>Price/ 1hour</StyledLabel>
      <DropDownMain>
        <p>To {selectedItem}$</p>
        <DropdownButton onClick={handleToggleDropdown}>
          {isOpen ? (
            <ChevronIcon>
              <IoIosArrowUp />
            </ChevronIcon>
          ) : (
            <ChevronIcon>
              <IoIosArrowDown />
            </ChevronIcon>
          )}
        </DropdownButton>
      </DropDownMain>

      {isOpen && (
        <DropdownOptions>
          {filteredOptions.map((item, index) => (
            <DropdownItem
              key={index}
              selected={selectedItem === item}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </DropdownItem>
          ))}
        </DropdownOptions>
      )}
    </DropdownWrapper>
  );
};

export default DropDownPrice;
