import React, { useRef, useState } from "react";

function Comment({ comment, addReply }) {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyText, setReplyText] = useState("");

  const inputRef = useRef(null);

  const handleReply = (e) => {
    setShowReplyBox(true);
    setTimeout(() => {
      inputRef.current.focus();
    }, 200);
    setReplyText(e.target.value);
  };

  const handleReplySave = (commentId) => {
    console.log("comment Id :", commentId, replyText);
    addReply(commentId, replyText);
    // setShowReplyBox(false);
  };

  const handleCancel = () => {
    setShowReplyBox(false);
    setReplyText("");
  };

  return (
    <div className="comment">
      <li style={{ padding: "10px" }} key={comment.id}>
        {comment.text}
        {!showReplyBox && (
          <button
            className="reply-button"
            onClick={() => setShowReplyBox(true)}
          >
            Reply
          </button>
        )}
        {showReplyBox ? (
          <div>
            <input
              type="text"
              value={replyText}
              onChange={handleReply}
              ref={inputRef}
            />
            <br />
            <button onClick={handleReplySave(comment.id)}>save</button>
            <button onClick={handleCancel}>cancel</button>
          </div>
        ) : null}
        {comment.replies?.map((reply) => {
          return <Comment key={reply.id} comment={reply} addReply={addReply} />;
        })}
      </li>
    </div>
  );
}

export default Comment;
