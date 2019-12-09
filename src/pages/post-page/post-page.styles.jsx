import styled from "styled-components";

export const StyledCommentsContainer = styled.div`
  width: 60%;
  margin: 10px auto;
  overflow: hidden;
  .comment-box {
    margin: 10px 0;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 0.5rem;
    span {
      display: block;
      margin-right: 5px;
      text-align: right;
      font-style: italic;
    }
  }
`;
