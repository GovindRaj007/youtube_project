import React, { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "../utils/constants";
import CommentsList from "./CommentsList";

// const commentsData = [
//   {
//     name: "Akshay Saini",
//     text: "Lorem ipsum,dhkjcndk dcdouihad kmodkvndi",
//     replies: [
//       {
//         name: "Akshay Saini",
//         text: "Lorem ipsum,dhkjcndk dcdouihad kmodkvndi",
//         replies: [
//           {
//             name: "Akshay Saini",
//             text: "Lorem ipsum,dhkjcndk dcdouihad kmodkvndi",
//             replies: [
//               {
//                 name: "Akshay Saini",
//                 text: "Lorem ipsum,dhkjcndk dcdouihad kmodkvndi",
//                 replies: [
//                   {
//                     name: "Akshay Saini",
//                     text: "Lorem ipsum,dhkjcndk dcdouihad kmodkvndi",
//                   },
//                 ],
//               },
//             ],
//           },
//           {
//             name: "Akshay Saini",
//             text: "Lorem ipsum,dhkjcndk dcdouihad kmodkvndi",
//             replies: [
//               {
//                 name: "Akshay Saini",
//                 text: "Lorem ipsum,dhkjcndk dcdouihad kmodkvndi",
//                 replies: [
//                   {
//                     name: "Akshay Saini",
//                     text: "Lorem ipsum,dhkjcndk dcdouihad kmodkvndi",
//                   },
//                 ],
//               },
//             ],
//           },
//         ],
//       },
//       {
//         name: "Akshay Saini",
//         text: "Lorem ipsum,dhkjcndk dcdouihad kmodkvndi",
//       },
//       {
//         name: "Akshay Saini",
//         text: "Lorem ipsum,dhkjcndk dcdouihad kmodkvndi",
//       },
//     ],
//   },
//   {
//     name: "Akshay Saini",
//     text: "Lorem ipsum,dhkjcndk dcdouihad kmodkvndi",
//   },
//   {
//     name: "Akshay Saini",
//     text: "Lorem ipsum,dhkjcndk dcdouihad kmodkvndi",
//   },
//   {
//     name: "Akshay Saini",
//     text: "Lorem ipsum,dhkjcndk dcdouihad kmodkvndi",
//   },
//   {
//     name: "Akshay Saini",
//     text: "Lorem ipsum,dhkjcndk dcdouihad kmodkvndi",
//   },
// ];

// const Comment = ({ data }) => {
//   const { name, text } = data;

//   return (
//     <div className="flex gap-2 my-2">
//       <div>
//         <FaUserAlt
//           size={24}
//           className="border-2 border-black rounded-full p-1"
//         />
//       </div>
//       <div>
//         <p className="font-semibold">{name}</p>
//         <p>{text}</p>
//       </div>
//     </div>
//   );
// };

// const CommentsList = ({ comments }) => {
//   // Dont use index as keys
//   return comments?.map((comment, index) => (
//     <div key={index}>
//       <Comment data={comment} />
//       <div className="border-l-2 border-l-black pl-6">
//         <CommentsList comments={comment.replies} />
//       </div>
//     </div>
//   ));
// };



const CommentsContainer = ({ videoId }) => {

  const [comments, setComments] = useState([]);

  const getComments = async () => {
    const data = await fetch("https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=" + videoId + "&key=" + GOOGLE_API_KEY);
    const json = await data?.json();
    setComments(json.items);
    console.log(json.items, "comments");

  }
  useEffect(() => {
    getComments();

  }, []);

  return comments ? (<div className=" pt-[24px] border-box w-auto">
    <h1 className="text-xl font-semibold">Comments</h1>
    <CommentsList comments={comments} />
  </div>) : null;
};

export default CommentsContainer;
