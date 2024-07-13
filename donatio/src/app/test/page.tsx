"use client";
import { postImage } from "@/gateway/Images/postImage";
import { createPost } from "@/gateway/Posts/postPosts";
import { Post } from "@/types/types";
import React, { useState } from "react";

const CreatePostComponent: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [newPost, setNewPost] = useState<Omit<Post, "image">>({
    causes: "",
    description: "",
    likes: 0,
    reposts: 0,
    time: new Date().toISOString(),
    user_image: "",
    username: "",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleUpload = async () => {
    if (file) {
      const imageUrl = await postImage(file);
      await createPost(newPost, imageUrl);
    } else {
      console.error("No file selected");
    }
  };
  console.log("trigger deploy");
  return (
    <div>
      <input
        type="text"
        name="causes"
        placeholder="Causes"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="user_image"
        placeholder="User Image"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleInputChange}
      />
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Create Post</button>
    </div>
  );
};

export default CreatePostComponent;
