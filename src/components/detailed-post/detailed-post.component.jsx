import React from "react";
import $ from "jquery";
import { StyledDetailedComponent } from "./detailed-post.styles";
import AuthorModal from "../author-modal/author-modal.component";
import FormModal from "../form-modal/form-modal.component";

const DetailedPost = ({
  post: { thumbnail, title, date, content, id, authorId },
  handler
}) => {
  const handleAuthorModal = () => $(`#aboutAuthor${id}`).modal("toggle");
  const handleFormModal = () => $(`#formModal`).modal("toggle");
  return (
    <StyledDetailedComponent>
      <h2 className="post-title">{title}</h2>
      <img src={thumbnail} alt="Thumbnail" />
      <div className="in-post-wrapper">
        <span>{`${date.slice(8, 10)}.${date.slice(5, 7)}.${date.slice(
          0,
          4
        )}`}</span>
        <button className="btn btn-sm btn-info" onClick={handleAuthorModal}>
          i
        </button>
      </div>
      <p>{content}</p>
      <button
        className="btn btn-primary btn-sm post-comment-button"
        onClick={handleFormModal}
      >
        Comment
      </button>
      <AuthorModal authId={authorId} postId={id} />
      <FormModal postId={id} handler={handler} />
    </StyledDetailedComponent>
  );
};

export default DetailedPost;
