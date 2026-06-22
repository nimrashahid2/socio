import React, { useState } from "react";
import "./PostCard.css";

const PostCard = ({post}) => {

  return (
    <div className="card">

      {/* Header */}
      <div className="card-header">
        <div className="avatar">{post.avatar}</div>

        <div className="header-text">
          <h3>{post.title}</h3>
          <span>{post.date}</span>
        </div>

        <button className="menu-btn">⋮</button>
      </div>

      {/* Image */}
      <div className="card-media">
        <img
          src={post.image}
          alt="Paella dish"
        />
      </div>

      {/* Content */}
      <div className="card-content">
        <p>
          {post.content}
        </p>
      </div>

      {/* Actions */}
      <div className="card-actions">
        <button className="icon-btn">♡</button>
        <button className="icon-btn">↗</button>
      </div>
    </div>
  );
};

export default PostCard;