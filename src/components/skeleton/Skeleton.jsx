import React from "react";

export const Skeleton = () => {
  return (
    <article className="card fx-deep-shadow-dinamyc fx-move-up skeleton-card">
      <div className="media skeleton-box" />

      <div className="supporting-text">
        <p className="skeleton-box skeleton-text short"></p>
        <h3 className="skeleton-box skeleton-text medium"></h3>
        <p className="skeleton-box skeleton-text long"></p>
        <p className="skeleton-box skeleton-text long"></p>

        <div className="footer">
          <div className="price">
            <h4 className="skeleton-box skeleton-text short"></h4>
            <span className="skeleton-box skeleton-text short"></span>
          </div>

          <ul className="actions">
            <span className="skeleton-box skeleton-icon"></span>
            <button className="skeleton-box skeleton-button"></button>
          </ul>
        </div>
      </div>
    </article>
  );
};