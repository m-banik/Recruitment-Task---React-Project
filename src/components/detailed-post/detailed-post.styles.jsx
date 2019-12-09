import styled from "styled-components";

export const StyledDetailedComponent = styled.div`
  width: 60%;
  margin: 10px auto;
  padding: 10px;
  border-bottom: 1px solid #000;
  .post-title {
    text-align: center;
  }
  img {
    display: block;
    height: 50vh;
    margin: 10px auto;
  }
  .in-post-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  p {
    display: block;
    margin: 10px 0;
  }
  .post-comment-button {
    display: block;
    margin: 40px auto;
  }
`;
