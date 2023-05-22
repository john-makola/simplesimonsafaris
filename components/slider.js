import React, { useState, useEffect } from "react";
import Image from "next/image";
import SimpleSimon from "@/images/simplesimon.png";
import Styles from "@/styles/slider.module.css";
import slides from "./sliderimages";
import Link from "next/link";
import Subscribe from "@/images/subscribe.png";
import Subscribe1 from "@/images/subscribe1.png";

function ImageComponent({ src, alt, width, height }) {
  return (
    <div className={Styles.imageContainer}>
      <Image
        src={src}
        fill
        alt="SimpleSimon Safaris"
        className={Styles.image}
      />
    </div>
  );
}

function ImageGallery({ slides }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentImageIndex, slides.length]);

  return (
    <div className={Styles.backImage}>
      <ImageComponent
        src={slides[currentImageIndex].src}
        alt={slides[currentImageIndex].alt}
      />
    </div>
  );
}

function SliderComponent() {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };

  return (
    <div>
      <ImageGallery slides={slides} />

      <div className={Styles.about}>
        <div className={Styles.aboutLeftSide}>
          <p>
            My name is <span>Simon</span>, and I am the founder of{" "}
            <span style={{ color: "var(--NavContact)" }}>
              Simple Simon Safaris
            </span>
            . As an avid nature lover, I have spent years exploring the stunning
            landscapes of <span>Kenya and Tanzania </span>. I have a passion for
            hiking, trails, and trekking, and I want to share that passion with
            you.
          </p>
        </div>
        <div className={Styles.aboutRightSide}>
          <div className={Styles.imageContainer}>
            <Image
              src={SimpleSimon}
              fill
              alt="SimpleSimon"
              className={Styles.imageSimon}
            />
          </div>
        </div>
      </div>
      <div className={Styles.subscribe}>
        <div className={Styles.subscribeA}>
          <Link href="/">
            <h2>
              Up-Coming <span>Hikes</span>
            </h2>
          </Link>
        </div>
        <div
          className={Styles.subscribeB}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          <Link href="/">
            <div className={Styles.imageSubscribeContainer}>
              <Image
                src={hover ? Subscribe1 : Subscribe}
                fill
                alt="SimpleSimon Safaris"
                className={Styles.imageSubscribe}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SliderComponent;
