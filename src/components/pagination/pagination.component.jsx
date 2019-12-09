import React from "react";
import { StyledPagination } from "./pagination.styles";
import { Link } from "react-router-dom";

const Pagination = ({ pagData: { page, totalPages } }) => {
  const generateLi = () => {
    const sites = [];
    for (let i = 1; i <= totalPages; ++i) {
      sites.push(
        <li className="page-item" key={i}>
          <Link
            className={`page-link ${
              i === page
                ? "active-page"
                : i < page - 2 || i > page + 2
                ? "disable-pagination-link"
                : ""
            }`}
            to={`/${i}`}
          >
            {i}
          </Link>
        </li>
      );
    }
    return sites;
  };
  return (
    <StyledPagination aria-label="Page navigation sites">
      <ul className="pagination pagination-sm">
        <li className="page-item">
          {page > 1 ? (
            <Link
              className="page-link"
              aria-label="Previous"
              to={`/${page - 1}`}
            >
              <span aria-hidden="true">&laquo;</span>
            </Link>
          ) : (
            <span
              className="page-link"
              id="disabled-arrow"
              aria-label="Previous"
            >
              <span aria-hidden="true">&laquo;</span>
            </span>
          )}
        </li>
        {page > 3 && (
          <li className="page-item">
            <span className="page-link inactive">...</span>
          </li>
        )}
        {generateLi()}
        {page < totalPages - 2 && (
          <li className="page-item">
            <span className="page-link inactive">...</span>
          </li>
        )}
        <li className="page-item">
          {page < totalPages ? (
            <Link className="page-link" aria-label="Next" to={`/${page + 1}`}>
              <span aria-hidden="true">&raquo;</span>
            </Link>
          ) : (
            <span className="page-link" id="disabled-arrow" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </span>
          )}
        </li>
      </ul>
    </StyledPagination>
  );
};

export default Pagination;
