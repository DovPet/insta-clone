import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  PaperAirplaneIcon,
  HeartIcon
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  doc,
  deleteDoc
} from "firebase/firestore";
import Moment from "react-moment";
import { db } from "../firebase";

function Post({ id, username, userImg, img, caption }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [hasLiked, setHasLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => {
        setComments(snapshot.docs);
      }
    );
  }, [db, id]);

  useEffect(() => {
    onSnapshot(collection(db, "posts", id, "likes"), (snapshot) => 
      setLikes(snapshot.docs)
    );
  }, [db, id]);

  useEffect(() => {
    console.log(session?.user?.uid);
    setHasLiked(
      likes.findIndex((like) => (like.id == session?.user?.uid)) !== -1
    );
  }, [likes]);

  const likePost = async () => {
    console.log(hasLiked);
    console.log(session.user.uid);
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
      //setHasLiked(false)
    } else {
      await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
        username: session.user.username
      });
      //setHasLiked(true)
    }
  };

  const sendComment = async (e) => {
    e.preventDefault();

    const commentToSend = comment;
    setComment("");

    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp()
    });
  };

  return (
    <div className="bg-white my-7 border rounded-sm">
      <div className="flex items-center p-5">
        <img
          className="rounded-full h-12 w-12 object-contains border p-1 mr-3"
          src={userImg}
          alt={username}
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      <div className="relative h-[450px] sm:h-[600px]">
        <Image src={img} layout="fill" objectFit="cover" alt={caption} />
      </div>

      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            {hasLiked ? (
              <HeartIconFilled
                onClick={likePost}
                className="btn text-red-600"
              />
            ) : (
              <HeartIcon onClick={likePost} className="btn" />
            )}

            <ChatIcon className="btn" />
            <PaperAirplaneIcon className="btn" />
          </div>

          <BookmarkIcon className="btn" />
        </div>
      )}

      <p className="p-5 truncate">
        {likes.length > 0 && (
          <p className="font-bold mb-1">{likes.length} likes</p>
        )}
        <span className="font-bold mr-1">{username} </span>
        {caption}
      </p>

      {comments.length > 0 && (
        <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
          {comments.map((comm) => (
            <div key={comm.id} className="flex items-center space-x-2 mb-3">
              <img
                className="h-7 rounded-full"
                src={comm.data().userImage}
                alt=""
              />
              <p className="text-sm flex-1">
                <span className="font-bold">{comm.data().username}</span>{" "}
                {comm.data().comment}
              </p>
              <Moment fromNow className="pr-5 text-xs">
                {comm.data().timestamp.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}

      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border-none flex-1 focus:ring-0 outline-none"
            type="text"
            placeholder="Add a comment..."
          />
          <button
            onClick={sendComment}
            type="submit"
            disabled={!comment.trim()}
            className="font-semibold text-blue-400"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;
