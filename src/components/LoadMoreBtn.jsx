import React from "react";
import styled from "styled-components";
import { theme } from "../theme";

import { useDispatch } from "react-redux";
import { nextPage } from "../redux/carSlice";

const StyleLoadMoreButton = styled.button`
  color: ${theme.colors.primaryBlue};
  font-weight: 500;
  line-height: 24px;
  text-decoration-line: underline;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;

const LoadMoreBtn = ({ onLoadMore }) => {
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    dispatch(nextPage());
    onLoadMore();
  };

  return (
    <StyleLoadMoreButton onClick={handleLoadMore}>
      Load more
    </StyleLoadMoreButton>
  );
};

export default LoadMoreBtn;
