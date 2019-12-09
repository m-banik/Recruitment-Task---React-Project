import styled from "styled-components";

export const StyledPagination = styled.nav`
  .page-link {
    box-shadow: none;
    text-decoration: none;
    &.active-page {
      color: #fff;
      background-color: #138496;
    }
    &.inactive {
      cursor: default;
      &:hover {
        background-color: #fff;
      }
    }
    &#disabled-arrow {
      color: #666;
      background-color: #ddd;
      cursor: default;
      & > span {
        cursor: default;
      }
    }
    &.disable-pagination-link {
      display: none;
    }
  }
`;
