import React, { useState, useEffect, useContext } from "react";
import { StyledMainPage } from "./main-page.styles";
import api from "../../config.json";
import WithLinkPost from "../../components/with-link-post/with-link-post.component";
import Pagination from "../../components/pagination/pagination.component";
import UserHeader from "../../components/user-header/user-header.component";
import { TokenContext } from "../../contexts/contexts";

const MainPage = ({ match, history }) => {
  const token = useContext(TokenContext).token;
  const [state, setState] = useState({
    status: false,
    posts: null,
    grid: false
  });
  const fetchData = async (value, direction) => {
    let endpoint = `${api.url}posts`;
    if (value === "page") endpoint += `?page=${direction}`;
    else endpoint += `?orderBy=${value}&order=${direction}`;
    await fetch(endpoint, {
      method: "GET",
      headers: {
        "X-Token": token
      }
    })
      .then(async res => {
        const json = await res.json();
        if (json.code === 200)
          setState({ ...state, status: true, posts: json });
      })
      .catch(error => {
        history.goBack();
        alert("Something went wrong. Couldn't get posts from the backend.");
        console.log(error.message);
      });
  };
  useEffect(() => {
    fetchData("page", match.params.site);
    // eslint-disable-next-line
  }, [match]);
  return (
    <section>
      <UserHeader />
      <StyledMainPage className={state.grid && "grid-view"}>
        <div className="dropdowns">
          <div className="dropdowns-sorting">
            <div className="dropdown">
              <button
                className="btn btn-sm btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuByAlphaButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sort A-Z
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuByAlphaButton"
              >
                <span
                  className="dropdown-item"
                  onClick={e => {
                    document.body.querySelector(
                      "#dropdownMenuByAlphaButton"
                    ).innerText = e.target.innerText;
                    fetchData("title", "asc");
                  }}
                >
                  Sort A-Z
                </span>
                <span
                  className="dropdown-item"
                  onClick={e => {
                    document.body.querySelector(
                      "#dropdownMenuByAlphaButton"
                    ).innerText = e.target.innerText;
                    fetchData("title", "desc");
                  }}
                >
                  Sort Z-A
                </span>
              </div>
            </div>
            <div className="dropdown">
              <button
                className="btn btn-sm btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuByDateButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sort by date
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuByDateButton"
              >
                <span
                  className="dropdown-item"
                  onClick={e => {
                    document.body.querySelector(
                      "#dropdownMenuByDateButton"
                    ).innerText = e.target.innerText;
                    fetchData("date", "asc");
                  }}
                >
                  Sort by date
                </span>
                <span
                  className="dropdown-item"
                  onClick={e => {
                    document.body.querySelector(
                      "#dropdownMenuByDateButton"
                    ).innerText = e.target.innerText;
                    fetchData("date", "desc");
                  }}
                >
                  Sort by date - reverse
                </span>
              </div>
            </div>
          </div>
          <div className="dropdowns-grid">
            <button
              className="btn btn-sm btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuListButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              List
            </button>
            <div
              className="dropdown-menu"
              aria-labelledby="dropdownMenuListButton"
            >
              <span
                className="dropdown-item"
                onClick={e => {
                  document.body.querySelector(
                    "#dropdownMenuListButton"
                  ).innerText = e.target.innerText;
                  setState({ ...state, grid: false });
                }}
              >
                List
              </span>
              <span
                className="dropdown-item"
                onClick={e => {
                  document.body.querySelector(
                    "#dropdownMenuListButton"
                  ).innerText = e.target.innerText;
                  setState({ ...state, grid: true });
                }}
              >
                Grid
              </span>
            </div>
          </div>
        </div>
        {state.status && (
          <div className="posts-container">
            {state.posts.data.map((post, index) => (
              <WithLinkPost key={index} post={post} grid={state.grid} />
            ))}
          </div>
        )}
        {state.posts && (
          <div className="pagination-container">
            <Pagination
              id="pagination-panel"
              pagData={state.posts.pagination}
              handler={fetchData}
            />
          </div>
        )}
      </StyledMainPage>
    </section>
  );
};

export default MainPage;
