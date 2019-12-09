import React, { useEffect, useState, useContext } from "react";
import { StyledModalBody } from "./author-modal.styles";
import api from "../../config.json";
import { TokenContext } from "../../contexts/contexts";

const AuthorModal = ({ authId, postId }) => {
  const token = useContext(TokenContext).token;
  const [authorData, setAuthorData] = useState({ status: false, data: null });
  const { status } = authorData;
  const handleAuthorData = async () => {
    await fetch(`${api.url}author/${authId}`, {
      method: "GET",
      headers: {
        "X-Token": token
      }
    })
      .then(async res => {
        const json = await res.json();
        if (json.code === 200)
          setAuthorData({ ...authorData, status: true, data: json.data });
      })
      .catch(() => {
        alert("Something went wrong. Couldn't get data from the backend.");
      });
  };
  useEffect(() => {
    handleAuthorData();
    //eslint-disable-next-line
  }, [authId]);
  return (
    status && (
      <div
        className="modal fade"
        id={`aboutAuthor${postId}`}
        tabIndex="-1"
        role="dialog"
        aria-labelledby={`aboutAuthor${postId}Label`}
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <StyledModalBody className="modal-body">
              <div className="authorSpec">
                <h2>{authorData.data.name}</h2>
                <img src={authorData.data.avatar} alt={authorData.data.name} />
              </div>
              <p>{authorData.data.description}</p>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </StyledModalBody>
          </div>
        </div>
      </div>
    )
  );
};

export default AuthorModal;
