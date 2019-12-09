import styled from "styled-components";

export const StyledLoginPage = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 15%;
  .login-form-container {
    padding: 30px 20px 40px;
    border: 1px solid #000;
    border-radius: 0.5rem;
    form {
      display: flex;
      flex-direction: column;
      flex-wrap: no-wrap;
      input {
        margin: 10px 0;
        padding: 5px;
        text-align: center;
        font-size: 0.8rem;
        outline: none;
        transition: 0.2s linear;
        &[type="submit"] {
          margin: 10px auto;
        }
      }
    }
  }
`;
