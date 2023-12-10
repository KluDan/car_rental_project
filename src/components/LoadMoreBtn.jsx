import React from "react";
import styled from "styled-components";
import { theme } from "../theme";

import { useDispatch } from "react-redux";
import { nextPage } from "../redux/carSlice";

const StyleLoadMoreButton = styled.button`
  max-width: 100px;
  color: ${theme.colors.primaryBlue};
  font-weight: 500;
  line-height: 24px;
  text-decoration: underline;
  background-color: inherit;
  transition: ${theme.transitions.default};
  &:hover {
    color: ${theme.colors.secondaryBlue};
  }
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
