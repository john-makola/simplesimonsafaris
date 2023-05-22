import React from "react";
import Styles from "@/styles/hikemodalsinglepage.module.css";
import { BsFillXCircleFill } from "react-icons/bs";
import Image from "next/image";
import PlaceOrder from "./placeorder";
import BookHike from "./bookhike";

export default function HikeModalSinglePage({
  post,
  toggle,
  setModal,
  title,
  date,
  Hikes,
}) {
  const toggleModal = () => {
    setModal(!toggle);
  };

  return (
    <>
      {toggle && (
        <div
          style={{ height: "80vh", overflow: "scroll" }}
          className={Styles.modal}
        >
          <div onClick={toggleModal} className={Styles.overlay}></div>
          {post ? (
            <div className={Styles.modalContent}>
              <div className={Styles.headerModal}>
                <h4>
                  {title} {":->"}
                  {date}
                </h4>
              </div>
              <div className={Styles.insideContent}>
                <div className={Styles.postMobileDiv}>
                  <BookHike post={post} />
                </div>

                <div className={Styles.imageContainerDetailed}>
                  {Hikes.filter((hike) => hike.title === title).map((hike) => (
                    <Image
                      src={hike.src}
                      fill
                      alt="SimpleSimon Safaris"
                      className={Styles.imageDetailed}
                    />
                  ))}
                  <div>
                    <p>{post.substring(0, 400)}</p>
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
