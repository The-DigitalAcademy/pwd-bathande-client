import React from "react";
import "../Video/video.css"

const Video = () => {
  return (
    <div>
      <video className="videos mt-2 ml-7" autoPlay muted loop>
        <source src="https://media.istockphoto.com/id/457336874/video/shoppers-at-the-mall.mp4?s=mp4-640x640-is&k=20&c=irKIVblgdOAvcP-1AyyM8fuizYig1OtPwLv940tQHnE=" />
      </video>
    </div>
  );
};

export default Video;
