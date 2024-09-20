function CommentBox({ data }) {
  console.log("data....", data);
  const imgUrl =
    "https://styles.redditmedia.com/t5_fgb65/styles/profileIcon_snoof7d8373b-71ae-4cb1-8d75-e2f4e5bb3b52-headshot.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=2b7e1b3b515f53faaf91ee1a5ceef9a4e6deca75";
  return data.map((comment, index) => (
    <div
      style={{ marginLeft: "20px", borderLeft: "1px solid black" }}
      key={index}
    >
      <div>
        <div className="" style={{ display: "flex", flexDirection: "row" }}>
          <img style={{ width: "40px", height: "40px" }} src={imgUrl} />
          <h4>{comment.username}</h4>
        </div>
        <p style={{ marginLeft: "10px" }}>{comment.comment}</p>
        {comment?.replies && <CommentBox data={comment.replies} />}
      </div>
    </div>
  ));
}

export default CommentBox;
