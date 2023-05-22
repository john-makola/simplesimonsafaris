import React from "react";
import Styles from "@/styles/modal.module.css";
import { BsFillXCircleFill } from "react-icons/bs";
import Image from "next/image";
import PlaceOrder from "./placeorder";

export default function Modal({ gear, toggle, setModal }) {
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
          {gear ? (
            <div className={Styles.modalContent}>
              <div className={Styles.headerModal}>
                <h4>{gear.item}</h4>
              </div>
              <div className={Styles.insideContent}>
                <div className={Styles.gearMobileDiv}>
                  <div>
                    <p>{gear.description}</p>
                  </div>

                  <div className={Styles.gearMobileDiv2}>
                    <PlaceOrder gear={gear} />
                  </div>
                </div>
                <div className={Styles.imageContainerDetailed}>
                  <Image
                    src={gear.src}
                    fill
                    alt="SimpleSimon Safaris"
                    className={Styles.imageDetailed}
                  />
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
