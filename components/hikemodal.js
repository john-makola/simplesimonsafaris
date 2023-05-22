import React from "react";
import Styles from "@/styles/hikemodal.module.css";
import { BsFillXCircleFill } from "react-icons/bs";
import Image from "next/image";
import BookHike from "./bookhike";
import Draggable from "react-draggable";


export default function HikeModal({ post, toggle, setModal, Hikes }) {
  const toggleModal = () => {
    setModal(!toggle);
  };

  return (
    <>
      {toggle && (
        <div style={{ height: "80vh" }} className={Styles.modal}>
          <div onClick={toggleModal} className={Styles.overlay}></div>
          {post ? (
            <div className={Styles.modalContent}>
              <div className={Styles.headerModal}>
                <h6>{`${post.title} ---- ${post.date}`}</h6>
              </div>
              <div className={Styles.insideContent}>
                <div className={Styles.postMobileDiv}>
                  <BookHike post={post} />
                </div>
                <div className={Styles.imageContainerDetailed}>
                  {Hikes.filter((hike) => hike.title === post.title).map(
                    (hike) => (
                      <Image
                        src={hike.src}
                        fill
                        alt="SimpleSimon Safaris"
                        className={Styles.imageDetailed}
                      />
                    )
                  )}

                  <div>
                    <p>{post.content.substring(0, 400)}</p>
                  </div>
                </div>
              </div>
              <button className={Styles.closeModal} onClick={toggleModal}>
                <BsFillXCircleFill />
              </button>
            </div>
          ) : (
            <div>No selectedItem</div>
          )}
        </div>
      )}
    </>
  );
}
