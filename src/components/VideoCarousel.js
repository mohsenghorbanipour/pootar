import "./../styles/VideoCarousel.css";
import React from "react";
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.css";

const VideoCarousel = () => {
  const videos = [
    {
      id: 1,
      src: "https://res.cloudinary.com/ddinxvgsh/video/upload/v1682704323/vid1_o2ok67.mp4",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/ddinxvgsh/video/upload/v1682704386/vid2_u5gfxe.mp4",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/ddinxvgsh/video/upload/v1682704529/vid3_lvs0zx.mp4",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/ddinxvgsh/video/upload/v1682704725/vid4_lkozjq.mp4",
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/ddinxvgsh/video/upload/v1682704269/vid5_ctf0yn.mp4",
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/ddinxvgsh/video/upload/v1682704891/vid6_l4cr4m.mp4",
    },
    {
      id: 7,
      src: "https://res.cloudinary.com/ddinxvgsh/video/upload/v1682704934/vid7_w7qcut.mp4",
    },
    {
      id: 8,
      src: "https://res.cloudinary.com/ddinxvgsh/video/upload/v1682704946/vid8_uow2ee.mp4",
    },
    {
      id: 9,
      src: "https://res.cloudinary.com/ddinxvgsh/video/upload/v1682704959/vid9_rjkych.mp4",
    },
    {
      id: 10,
      src: "https://res.cloudinary.com/ddinxvgsh/video/upload/v1682704970/vid10_k1ngys.mp4",
    },
    {
      id: 11,
      src: "https://res.cloudinary.com/ddinxvgsh/video/upload/v1682705088/vid11_dsuem7.mp4",
    },
    {
      id: 12,
      src: "https://res.cloudinary.com/ddinxvgsh/video/upload/v1682705111/vid12_r1fl4m.mp4",
    },
    {
      id: 13,
      src: "https://res.cloudinary.com/ddinxvgsh/video/upload/v1682705133/vid13_hii1gp.mp4",
    },
    {
      id: 14,
      src: "https://res.cloudinary.com/ddinxvgsh/video/upload/v1682705160/vid14_usdidy.mp4",
    },
    {
      id: 15,
      src: "https://res.cloudinary.com/ddinxvgsh/video/upload/v1682705175/vid15_wggfbm.mp4",
    },
    {
      id: 16,
      src: "https://res.cloudinary.com/ddinxvgsh/video/upload/v1682705410/vid16_foxtgb.mp4",
    },
    {
      id: 17,
      src: "https://res.cloudinary.com/ddinxvgsh/video/upload/v1682705429/vid17_mzpng2.mp4",
    },
    {
      id: 18,
      src: "https://res.cloudinary.com/ddinxvgsh/video/upload/v1682705442/vid18_fayfok.mp4",
    },
    {
      id: 19,
      src: "https://res.cloudinary.com/ddinxvgsh/video/upload/v1682705455/vid19_rcbrck.mp4",
    },
    {
      id: 20,
      src: "https://res.cloudinary.com/ddinxvgsh/video/upload/v1682705484/vid20_icsavb.mp4",
    },
    {
      id: 21,
      src: "https://res.cloudinary.com/ddinxvgsh/video/upload/v1682705542/vid21_ofufnx.mp4",
    },
    {
      id: 22,
      src: "https://res.cloudinary.com/ddinxvgsh/video/upload/v1682705565/vid22_tdbt0r.mp4",
    },
    {
      id: 23,
      src: "https://res.cloudinary.com/ddinxvgsh/video/upload/v1682705585/vid23_s1n14r.mp4",
    },
    {
      id: 24,
      src: "https://res.cloudinary.com/ddinxvgsh/video/upload/v1682705605/vid24_dqeb1m.mp4",
    },
    {
      id: 25,
      src: "https://res.cloudinary.com/ddinxvgsh/video/upload/v1682705617/vid25_mi46vn.mp4",
    },
    {
      id: 26,
      src: "https://res.cloudinary.com/ddinxvgsh/video/upload/v1682705630/vid26_jllias.mp4",
    },
    {
      id: 27,
      src: "https://res.cloudinary.com/ddinxvgsh/video/upload/v1682705641/vid27_p1yaf9.mp4",
    },
  ];

  return (
    <div className="box">
      <Carousel interval={null}>
        {videos.map((video) => {
          return (
            <Carousel.Item key={video.id}>
              <ReactPlayer
                url={video.src}
                pip={true}
                width="100%"
                controls={false}
                playing={true}
                loop={true}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default VideoCarousel;
