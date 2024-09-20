import React from "react";
import CommentBox from "./commentBox";
function Comments() {
  const data = [
    {
      username: "Gary Peterson",
      comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
      replies: [
        {
          username: "prasad bylapudi",
          comment:
            "Lorem ipsum dolor sit amet consectetur adip occurence velit",
        },
      ],
    },
    {
      username: "Elon Musk",
      comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
      replies: [
        {
          username: "prasad bylapudi",
          comment:
            "Lorem ipsum dolor sit amet consectetur adip occurence velit",
          replies: [
            {
              username: "Deepika Padukone",
              comment:
                "Lorem ipsum dolor sit amet consectetur adip occurence velit",
              replies: [
                {
                  username: "hitesh",
                  comment:
                    "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                  replies: [
                    {
                      username: "kenny sebastian",
                      comment:
                        "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                      replies: [
                        {
                          username: "samantha",
                          comment:
                            "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                          replies: [
                            {
                              username: "prasad bylapudi",
                              comment:
                                "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              username: "Deepika Padukone",
              comment:
                "Lorem ipsum dolor sit amet consectetur adip occurence velit",
            },
          ],
        },
        {
          username: "Deepika Padukone",
          comment:
            "Lorem ipsum dolor sit amet consectetur adip occurence velit",
        },
      ],
    },
    {
      username: "Sachin Tendulkar",
      comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
    },
  ];

  return (
    <div>
      <CommentBox data={data} />
    </div>
  );
}

export default Comments;
