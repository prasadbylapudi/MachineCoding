import React from "react";

const CommentBox = ({ data }) => {
  return (
    <div>
      {data.map((comment, index) => {
        return (
          <div key={index} className="comment-box">
            <div className="comment-container">
              <div className="reddit-username">
                <img src={`${comment.imgSrc}`} alt="user-img" />
              </div>
              <div>
                <p className="username">{comment.username}</p>
                <p className="content-msg">{comment.comment}</p>
              </div>
            </div>
            <div>
              {comment?.replies && <CommentBox data={comment?.replies} />}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentBox;
