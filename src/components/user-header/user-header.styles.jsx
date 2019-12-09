import styled from "styled-components";

export const StyledUserHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 7vh;
  padding: 5px;
  border-bottom: 1px solid #000;
  span {
    color: #007bff;
    cursor: pointer;
    &:hover {
      color: #007bce;
      text-decoration: underline;
    }
  }
`;
