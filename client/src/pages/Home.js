/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Image } from "cloudinary-react";
import "./Home.css";

import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

function Home() {
  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      localStorage.setItem("loggedIn", false);
    }
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3001/upload").then((response) => {
      setUploads(response.data);
    });
  }, []);

  const likePost = (id, key) => {
    var tempLikes = uploads;
    tempLikes[key].likes = tempLikes[key].likes + 1;

    Axios.post("http://localhost:3001/upload/like", {
      userLiking: localStorage.getItem("email"),
      postId: id,
    }).then((response) => {
      setUploads(tempLikes);
    });
  };

  return (
    <div className="Home">
      {uploads.map((val, key) => {
        return (
          <div className="Post">
            <div className="Image">
              <Image cloudName="ayman-ouchker-inc" publicId={val.image} />
            </div>
            <div className="Content">
              <div className="title">
                {" "}
                {val.title} / by @{val.author.split("@")[0]}
              </div>
              <div className="description">{val.description}</div>
            </div>
            <div className="Engagement">
              <ThumbUpAltIcon
                id="likeButton"
                onClick={() => {
                  likePost(val.id, key);
                }}
              />
              {val.likes}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
