/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from 'react-router-dom';

function Upload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState([]);

  let  navigate = useNavigate();

  const upload = () => {
    const formData = new FormData();
    formData.append("file", image[0]);
    formData.append("upload_preset", "rkoeqpel");
    Axios.post(
      `https://api.cloudinary.com/v1_1/ayman-ouchker-inc/image/upload`,
      formData
    ).then((response) => {
      const fileName = response.data.public_id;

      Axios.post("http://localhost:3001/upload", {
        title: title,
        description: description,
        image: fileName,
        author: localStorage.getItem("email"),
      }).then(() => {
        navigate("/");
      });
    });
  };

  return (
    <div className="grid place-content-evenly mr-6 ml-6 mt-20 lg:mt-40">
      <div className="w-full max-w-xl">
        <form className="bg-white rounded-xl px-8 pt-6 pb-8 mb-4">
          <div className="mb-6 flex justify-center">
            <h1 className="text-xl font-bold">Create a post</h1>
          </div>
          <div className="mb-10">
            <input
              name="title"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6"
              id="title"
              type="text"
              placeholder="Title..."
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
            <input
              name="description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              type="text"
              placeholder="Description..."
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </div>
          <div className="mb-10 flex flex-col justify-center">
            <div className="flex justify-center mb-8">
              <input type="file" onChange={(event) => {
                setImage(event.target.files)
              }}/>
              <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline"
                        type="button" id="loginButton"
                        onClick={upload}>
                        Upload
                    </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Upload;
