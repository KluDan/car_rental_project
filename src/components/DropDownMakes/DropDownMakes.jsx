import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setInputValue } from "../../redux/filterSlice";

import {
  ChevronIcon,
  DropdownButton,
  DropdownInput,
  DropdownItem,
  DropDownMain,
  DropdownOptions,
  DropdownWrapper,
  StyledLabel,
} from "./DropDownMakes.styled";

const DropDownMakes = () => {
  const [jsonData, setJsonData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [inputText, setInputText] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/car_rental_project/makes.json");
        const data = await response.text();
        const dataArray = JSON.parse(data);
        setJsonData(dataArray);
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchData();
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
    setInputText(item.charAt(0).toUpperCase() + item.slice(1));
    setIsOpen(false);
    setFilteredOptions(jsonData);
    dispatch(setInputValue(item));
  };

  const handleInputChange = (event) => {
    const text = event.target.value.trim().toLowerCase();
    setInputText(text);
    setIsOpen(true);
    setFilteredOptions(
      jsonData.filter((item) => item.toLowerCase().includes(text.toLowerCase()))
    );
    console.log(text);
  };

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
    setFilteredOptions(jsonData);
  };

  return (
    <DropdownWrapper ref={dropdownRef}>
      <StyledLabel htmlFor="carMakes">Car Brand:</StyledLabel>
      <DropDownMain>
        <DropdownInput
          id="carMakes"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter the text"
        />

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
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </DropdownItem>
          ))}
        </DropdownOptions>
      )}
    </DropdownWrapper>
  );
};

export default DropDownMakes;
