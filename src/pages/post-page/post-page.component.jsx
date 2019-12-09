import React, { useState, useEffect, useContext } from "react";
import UserHeader from "../../components/user-header/user-header.component";
import api from "../../config.json";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";
import DetailedPost from "../../components/detailed-post/detailed-post.component";
import { StyledCommentsContainer } from "./post-page.styles";
import { TokenContext } from "../../contexts/contexts";

const PostPage = ({ match }) => {
  const { token } = useContext(TokenContext);
  const [state, setState] = useState({
    status: false,
    post: null,
    comments: null
  });
  const [startTime] = useState(new Date());
  const { status, post, comments } = state;
  const handleComments = async (id, post) => {
    await fetch(`${api.url}posts/${id}/comments`, {
      method: "GET",
      headers: {
        "X-Token": token
      }
    })
      .then(async res => {
        const json = await res.json();
        if (json.code === 200) {
          const newState = { ...state, status: true, comments: json.data };
          if (!!post) newState.post = post;
          setState(newState);
        }
      })
      .catch(() => setState({ ...state, status: true, post, comments: null }));
  };
  const handleFetchPostData = async id => {
    await fetch(`${api.url}posts/${id}`, {
      method: "GET",
      headers: {
        "X-Token": token
      }
    })
      .then(async res => {
        const json = await res.json();
        if (json.code === 200) return json.data;
        return null;
      })
      .then(post => handleComments(id, post))
      .catch(() => {
        alert("Something went wrong. Couldn't get data from the backend.");
        setState({ ...state, status: true });
      });
  };
  useEffect(() => {
    const { id } = match.params;
    handleFetchPostData(id);
    return async () => {
      const time = new Date() - startTime;
      await fetch(`${api.url}time/${id}`, {
        method: "PUT",
        headers: {
          "X-Token": token
        },
        body: JSON.stringify({ time })
      })
        .then(async res => {
          const json = await res.json();
          if (json.data.status === "ok") console.log("Time was sent.");
          else throw Error;
        })
        .catch(() =>
          alert("Something went wrong. Couldn't send time to the backend.")
        );
    };
    //eslint-disable-next-line
  }, []);
  return (
    <main>
      <UserHeader />
      {status ? (
        <section>
          {post ? (
            <DetailedPost
              post={post}
              handler={id => handleComments(id, post)}
            />
          ) : (
            <h2>Error: couldn't get post data from the backend.</h2>
          )}
          <StyledCommentsContainer className="text-center">
            {!comments ? (
              <p className="text-light bg-danger font-weight-bold">
                Error: couldn't get comments from the backend.
              </p>
            ) : comments.length ? (
              comments.map((data, index) => (
                <div key={index} className="comment-box bg-light text-lead">
                  <p className="text-left">{data.comment}</p>
                  <span>- {data.name}</span>
                </div>
              ))
            ) : (
              <p className="text-light bg-secondary font-weight-light">
                There are no comments on this post yet.
              </p>
            )}
          </StyledCommentsContainer>
        </section>
      ) : (
        <LoadingSpinner />
      )}
    </main>
  );
};

export default PostPage;
