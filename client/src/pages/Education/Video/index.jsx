import { ImageGallery, Title } from "@internals/components";
import React from "react";
const Video = () => {
  return (
    <div className={"video"}>
      <Title
        title="Trung Tâm Video"
        content="Xem các video hướng dẫn, chia sẻ kinh nghiệm và hơn thế nữa!"
      />
      <ImageGallery />;
    </div>
  );
};

export default Video;
