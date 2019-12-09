import React from "react";
import $ from "jquery";
import { StyledPost, StyledExcerpt } from "./post.styles";
import AuthorModal from "../author-modal/author-modal.component";
import { Link } from "react-router-dom";

const Post = ({
  post: { thumbnail, title, date, excerpt, authorId, id },
  grid
}) => {
  const excerptRef = React.createRef();
  const handleModal = () => $(`#aboutAuthor${id}`).modal();
  return (
    <StyledPost className={grid && "grid-view"}>
      <div className="flex-post">
        <img src={thumbnail} alt="Thumbnail" />
        <div className="flex-text">
          <p className="flex-text-date">{`${date.slice(8, 10)}.${date.slice(
            5,
            7
          )}.${date.slice(0, 4)}`}</p>
          <h2>{grid ? `${title}` : <Link to={`/post/${id}`}>{title}</Link>}</h2>
        </div>
        <div className="flex-buttons">
          <button
            className="btn btn-sm btn-warning"
            onClick={() => excerptRef.current.classList.toggle("active")}
          >
            e
          </button>
          <button className="btn btn-sm btn-info" onClick={() => handleModal()}>
            i
          </button>
        </div>
      </div>
      <StyledExcerpt ref={excerptRef}>
        <span>{excerpt}</span>
        <button
          className="btn btn-sm btn-secondary"
          onClick={() => excerptRef.current.classList.remove("active")}
        >
          Close
        </button>
      </StyledExcerpt>
      <AuthorModal authId={authorId} postId={id} />
    </StyledPost>
  );
};

export default Post;
