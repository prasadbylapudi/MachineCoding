import React, { useRef, useState } from "react";

function Comment({ comment, addReply }) {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyText, setReplyText] = useState("");

  const inputRef = useRef(null);

  const handleReplyBtn = (e) => {
    setShowReplyBox(true);
    setTimeout(() => {
      inputRef.current.focus();
    }, 200);
  };

  const handleReplySave = (commentId) => {
    console.log("comment Id :", commentId, replyText);
    addReply(commentId, replyText);
    // setShowReplyBox(false);
    setReplyText("");
  };

  const handleCancel = () => {
    setShowReplyBox(false);
    setReplyText("");
  };

  const handleKeyDown = (e, commentId) => {
    console.log(e.key);
    if (e.key === "Enter") {
      handleReplySave(commentId);
    }
  };

  return (
    <div className="comment">
      <li style={{ padding: "10px", marginLeft: "5px" }} key={comment.id}>
        {comment.text}
        {!showReplyBox && (
          <button className="reply-button" onClick={handleReplyBtn}>
            Reply
          </button>
        )}
        {showReplyBox ? (
          <div>
            <input
              type="text"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              ref={inputRef}
              onKeyDown={(e) => {
                handleKeyDown(e, comment.id);
              }}
            />
            <br />
            <button>save</button>
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
