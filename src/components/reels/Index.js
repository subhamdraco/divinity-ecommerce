import React, { useRef } from "react";
import "./Index.css";
import { Link } from "react-router-dom";

const reels = ["https://divinityimpex.com/videos/vid-1.mp4", "https://divinityimpex.com/videos/vid-2.mp4", "https://divinityimpex.com/videos/vid-3.mp4"]
const Reels = () => {

  const videoRefs = useRef([]);

  const handleMouseEnter = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.play();
    }
  };


  return (
    <section className="reels-section">

    <h2 className="section-title reels-title">Premium Performance Brand</h2>
      <Link to="https://www.youtube.com/@TitanCoreOfficial">
        <div className="reels-grid">
          {reels.map((video, index) => (
            <div
              className="reel-card"
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
            >

              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={video}
                muted
                autoPlay
                loop
                playsInline
                preload="metadata"
              />
            </div>
          ))}
        </div>
      </Link>

    </section>
  );
};

export default Reels;