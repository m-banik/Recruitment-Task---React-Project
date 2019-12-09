import styled from "styled-components";

export const StyledPost = styled.div`
  width: 100%;
  margin: 8px auto 0;
  padding: 8px;
  border: 1px solid #000;
  border-radius: 0.5rem;
  .flex-post {
    display: flex;
    height: 20vh;
    img {
      height: 100%;
      margin-right: 10px;
    }
    div.flex-text {
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 5px 0;
      font-size: 0.8em;
      h2 {
        font-size: 1.4em;
        font-weight: 700;
        letter-spacing: 1px;
        a {
          color: #000;
          text-decoration: none;
          transition: 0.2s;
          cursor: pointer;
          &:hover {
            color: #888;
          }
        }
      }
    }
    div.flex-buttons {
      margin-left: auto;
      align-self: center;
      button {
        margin: 0 5px;
      }
    }
  }
  &.grid-view {
    position: relative;
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    overflow: hidden;
    transition: 0.3s;
    &:hover {
      background-color: #ddd;
      box-shadow: 0 0 0 2px #000;
      border-radius: 0.4rem;
    }
    .flex-post {
      display: flex;
      height: 6vh;
      img {
        position: absolute;
        top: 20%;
        left: 50%;
        height: calc(80% - 8px);
        margin-right: 0;
        transform: translateX(-50%);
      }
      div.flex-text {
        .flex-text-date {
          display: none;
        }
        h2 {
          position: absolute;
          top: 8px;
          left: 0;
          width: 100%;
          padding: 0 8px;
          color: #000;
          text-align: center;
          font-size: 1.1em;
        }
      }
      div.flex-buttons {
        display: none;
      }
    }
  }
`;

export const StyledExcerpt = styled.div`
  max-height: 0;
  transition: max-height 2s ease-out;
  overflow: hidden;
  &.active {
    max-height: 1000px;
    transition: max-height 5s linear;
  }
  span {
    display: block;
    margin: 10px 0;
  }
  button {
    display: block;
    margin: 0 10px 5px auto;
  }
`;
