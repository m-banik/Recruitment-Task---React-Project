import React, { useState, useContext } from "react";
import { StyledFormModal } from "./form-modal.styles";
import api from "../../config.json";
import $ from "jquery";
import { TokenContext } from "../../contexts/contexts";

const FormModal = ({ postId, handler }) => {
  const { token } = useContext(TokenContext);
  const [formData, setFormData] = useState({
    name: "",
    id: postId,
    comment: "",
    acceptance: false
  });
  const { name, comment, acceptance } = formData;
  const handleSendComment = async () => {
    await fetch(`${api.url}comments`, {
      method: "POST",
      headers: {
        "X-Token": token
      },
      body: JSON.stringify({ ...formData })
    })
      .then(async res => {
        const json = await res.json();
        if (json.data.status === "ok") {
          setFormData({
            name: "",
            id: postId,
            comment: "",
            acceptance: false
          });
        } else throw Error;
      })
      .then(() => handler(postId))
      .catch(() =>
        alert("Something went wrong. Couldn't connect or send comment.")
      );
  };
  const handleSubmit = e => {
    e.preventDefault();
    $(`#formModal`).modal("toggle");
    handleSendComment();
  };
  const handleFormChange = e => {
    let { id, value } = e.target;
    if (id === "acceptance") value = e.target.checked;
    setFormData({ ...formData, [id]: value });
  };
  return (
    <StyledFormModal>
      <div
        className="modal fade"
        id="formModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="formModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="formModalLabel">
                Add Comment
              </h5>
            </div>
            <div className="modal-body">
              <form id="commentsForm" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="userName"
                  id="name"
                  className="form-control form-control-sm"
                  placeholder="Your name"
                  value={name}
                  onChange={handleFormChange}
                  required
                />
                <textarea
                  name="commentContent"
                  id="comment"
                  className="form-control form-control-sm"
                  placeholder="Your comment"
                  value={comment}
                  onChange={handleFormChange}
                  cols="30"
                  rows="10"
                  required
                ></textarea>
                <div className="custom-control custom-checkbox mr-sm-2">
                  <input
                    type="checkbox"
                    id="acceptance"
                    className="custom-control-input"
                    checked={acceptance}
                    onChange={handleFormChange}
                    required
                  />
                  <label
                    id="acceptance-label"
                    className="custom-control-label text-muted"
                    htmlFor="acceptance"
                  >
                    <small>I Accept</small>
                  </label>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <input
                type="submit"
                value="Submit"
                form="commentsForm"
                className="btn btn-primary btn-sm"
              />
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </StyledFormModal>
  );
};

export default FormModal;
