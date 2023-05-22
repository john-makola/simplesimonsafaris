import React from "react";
import Image from "next/image";
import pagenotfound from "@/images/pagenotfound.jpg";
import Styles from "@/styles/pagenotfound.module.css";
function MdxData() {
  return (
    <div className={Styles.container}>
      <h3>Mdx Data</h3>
      <hr />
      <div className={Styles.imageContainer}>
        <Image
          src={pagenotfound}
          fill
          alt="John Makola"
          className={Styles.image}
        />
      </div>
    </div>
  );
}

export default MdxData;
