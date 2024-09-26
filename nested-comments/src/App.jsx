import { useState } from "react";
import Comment from "./Comment";
function App() {
  const [text, setText] = useState("");

  const [comments, setComments] = useState([
    {
      id: 1,
      text: "Hello",
      replies: [
        {
          id: 2,
          text: "Hi, how are you?",
          replies: [
            {
              id: 3,
              text: "I am fine",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      id: 4,
      text: "what's up guys?",
      replies: [
        {
          id: 5,
          text: "nothing much",
          replies: [],
        },
      ],
    },
  ]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const newComment = (text) => {
    return {
      id: Math.random(),
      text: text,
      replies: [],
    };
  };

  const handleNewComment = () => {
    if (text) {
      setComments([...comments, newComment()]);
      setText("");
    }
  };

  const handleReply = (parentID, replyText) => {
    //find the equivalent id in the comments and push the replyText into the replies array,
    //then update the comments array
    console.log(parentID, replyText);
    const copyComments = [...comments];
    addReply(copyComments, parentID, replyText);
  };

  const addReply = (copyComments, parentID, replyText) => {
    for (let i = 0; i < copyComments.length; i++) {
      let comment = copyComments[i];
      console.log(comment);
      if (comment.id === parentID) {
        console.log("found your comment", comment.id);
        comment.replies.unshift(newComment(replyText));
      }
      let commentReplies = comment.replies;
      addReply(commentReplies, parentID, replyText);
    }
  };

  return (
    <>
      <h2>Nested Comments :</h2>
      <div>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="comment"
        />
      </div>
      {/* handle button */}

      <div>
        <button className="comment-button" onClick={handleNewComment}>
          Comment
        </button>
      </div>

      {/* nested comments.  */}
      <div className="comment-container">
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              comment={comment}
              addReply={handleReply}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
