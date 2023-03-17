import React from "react";
import { Comment } from "../typings";

interface CommentProps {
  comment: Comment;
}

const Comment = ({ comment }: CommentProps) => {
  return (
    <div>
      <p>
        <span className="text-yellow-500">{comment.name}: </span>
        {comment.comment}
      </p>
      <p className="text-xs text-gray-400 mt-1">Commented on: {new Date(comment._createdAt).toLocaleString()}</p>
    </div>
  );
};

export default Comment;
