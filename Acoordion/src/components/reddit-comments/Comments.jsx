import React from "react";

import CommentBox from "./CommentBox";
const data = [
  {
    imgSrc:
      "https://preview.redd.it/snoovatar/avatars/f49bf227-7c9e-4b10-9281-3f30d4864f6c-headshot.png?width=64&height=64&crop=smart&auto=webp&s=0df0997f81a22f0e3e4325cdeb34fd300690c232",
    username: "prasad bylaupdi",
    comment: "lorem  ipsum commento de genario commento boxo reddito comments.",
    replies: [
      {
        imgSrc:
          "https://styles.redditmedia.com/t5_3culx/styles/communityIcon_dk2sgjxepm6d1.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=7bc3f7bd62efa1fe3d1966ba53b3e9adf0cc106f",
        username: "complete bus",
        comment:
          "Kannappa cinemani Vishnu 52 gantalu teesadantaga nijamena bhayya?",
      },
    ],
  },
  {
    imgSrc:
      "https://preview.redd.it/snoovatar/avatars/f49bf227-7c9e-4b10-9281-3f30d4864f6c-headshot.png?width=64&height=64&crop=smart&auto=webp&s=0df0997f81a22f0e3e4325cdeb34fd300690c232",
    username: "sundar pichai",
    comment: "lorem  ipsum commento de genario commento boxo reddito comments.",
    replies: [
      {
        imgSrc:
          "https://styles.redditmedia.com/t5_3culx/styles/communityIcon_dk2sgjxepm6d1.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=7bc3f7bd62efa1fe3d1966ba53b3e9adf0cc106f",
        username: "mad max",
        comment:
          "Kannappa cinemani Vishnu 52 gantalu teesadantaga nijamena bhayya?",
        replies: [
          {
            imgSrc:
              "https://styles.redditmedia.com/t5_3culx/styles/communityIcon_dk2sgjxepm6d1.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=7bc3f7bd62efa1fe3d1966ba53b3e9adf0cc106f",
            username: "mad max",
            comment:
              "Kannappa cinemani Vishnu 52 gantalu teesadantaga nijamena bhayya?",
            replies: [
              {
                imgSrc:
                  "https://styles.redditmedia.com/t5_3culx/styles/communityIcon_dk2sgjxepm6d1.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=7bc3f7bd62efa1fe3d1966ba53b3e9adf0cc106f",
                username: "mad max",
                comment:
                  "Kannappa cinemani Vishnu 52 gantalu teesadantaga nijamena bhayya?",
                replies: [
                  {
                    imgSrc:
                      "https://styles.redditmedia.com/t5_3culx/styles/communityIcon_dk2sgjxepm6d1.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=7bc3f7bd62efa1fe3d1966ba53b3e9adf0cc106f",
                    username: "mad max",
                    comment:
                      "Kannappa cinemani Vishnu 52 gantalu teesadantaga nijamena bhayya?",
                    replies: [
                      {
                        imgSrc:
                          "https://styles.redditmedia.com/t5_3culx/styles/communityIcon_dk2sgjxepm6d1.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=7bc3f7bd62efa1fe3d1966ba53b3e9adf0cc106f",
                        username: "mad max",
                        comment:
                          "Kannappa cinemani Vishnu 52 gantalu teesadantaga nijamena bhayya?",
                      },
                    ],
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
    imgSrc:
      "https://preview.redd.it/snoovatar/avatars/3d36cc14-206d-46f2-995c-3d45e5f93950-headshot.png?width=64&height=64&crop=smart&auto=webp&s=aa7f7edde320022199add7d942c0834e209c23a8",
    username: "gary peterson",
    comment: "lorem  ipsum commento de genario commento boxo reddito comments.",
    replies: [
      {
        username: "gary tendulkar",
        comment: "awesome batting bro in ind vs us",
        imgSrc:
          "https://styles.redditmedia.com/t5_3culx/styles/communityIcon_dk2sgjxepm6d1.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=7bc3f7bd62efa1fe3d1966ba53b3e9adf0cc106f",
      },
    ],
  },
];

const Comments = () => {
  return (
    <div>
      <CommentBox data={data} />
    </div>
  );
};

export default Comments;
