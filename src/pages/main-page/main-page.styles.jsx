import styled from "styled-components";

export const StyledMainPage = styled.main`
  margin: 0 auto 10px;
  padding: 10px;
  width: 70%;
  & .dropdowns {
    display: flex;
    justify-content: space-between;
    width: 100%;
    & .dropdowns-sorting {
      display: flex;
      & > div {
        margin-right: 5px;
      }
    }
    .dropdown-item {
      cursor: pointer;
    }
  }
  .pagination-container {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    span {
      cursor: pointer;
    }
  }
  &.grid-view {
    width: 100%;
    .posts-container {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-column-gap: 8px;
    }
  }
`;
