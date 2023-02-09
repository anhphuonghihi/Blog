import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./slider.scss";
import Mqdefault from "../../assets/mqdefault.jpg";
import Mqdefault1 from "../../assets/mqdefault(1).jpg";
import Mqdefault2 from "../../assets/mqdefault(2).jpg";
import Mqdefault3 from "../../assets/mqdefault(3).jpg";
import Mqdefault4 from "../../assets/mqdefault(4).jpg";
import Mqdefault5 from "../../assets/mqdefault(5).jpg";
import Mqdefault6 from "../../assets/mqdefault(6).jpg";
import Mqdefault7 from "../../assets/mqdefault(7).jpg";
import Mqdefault8 from "../../assets/mqdefault(8).jpg";
import YouTube from "react-youtube";
import { grey } from "@mui/material/colors";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useWindowSize } from "@internals/hooks";
import { useEffect } from "react";
const Carouselmage = () => {
  const [current, setCurrent] = useState(0);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  const video = [
    {
      img: Mqdefault,
      id: "bWYxUxm9lbs",
    },
    {
      img: Mqdefault1,
      id: "stGvDpRLHIY",
    },
    {
      img: Mqdefault2,
      id: "Cnv45LZs1JM",
    },
    {
      img: Mqdefault3,
      id: "F0IOidaHDXE",
    },
    {
      img: Mqdefault4,
      id: "5jfIXKsEDC8",
    },
    {
      img: Mqdefault5,
      id: "NdQZHBdbUIY",
    },
    {
      img: Mqdefault6,
      id: "PBqQSJsQxk8",
    },
    {
      img: Mqdefault7,
      id: "icEyRP-xFe8",
    },
    {
      img: Mqdefault8,
      id: "4P7nTkO47h0",
    },
  ];
  const [width, setWidth] = useState(0);
  const [youtobe, setYoutobe] = useState("");
  const size = useWindowSize();
  useEffect(() => {
    if (size.width < 768) {
      setWidth(size.width - 30);
    } else {
      setWidth(size.width - 50);
    }
  }, [size]);
  const onClickBtn = (item, index) => {
    setCurrent(index);
    setYoutobe(item.id);
  };
  return (
    <div >
      <YouTube
        opts={{
          width,
          height: width * (9 / 16),
          playerVars: {
            autoplay: 1,
          },
        }}
        videoId={youtobe}
        className={"youtobe"}
      />
      <div className="slider1">
        <Carousel breakPoints={breakPoints}>
          {video.map((item, index) => (
            <Item
              onClick={() => onClickBtn(item, index)}
              className={index === current ? "slider-active" : ""}
            >
              <img src={item.img} alt="" />
              <PlayArrowIcon
                className={index === current ? "active" : ""}
                sx={{ color: grey[400] }}
              />
            </Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Carouselmage;
