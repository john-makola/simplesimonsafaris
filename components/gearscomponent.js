import React, { useState, useEffect } from "react";
import { getGearData } from "./gearData";
import Styles from "@/styles/gears.module.css";
import Image from "next/image";
import Modal from "./modal";

const GearComponent = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [gearId, setGearId] = useState(null);
  const [gear, setGear] = useState(null);
  //Fetch Gear Data
  useEffect(() => {
    const fetchData = async () => {
      const items = getGearData();
      setData(items);
    };

    fetchData();
  }, []);

  //Handle Show Modal
  const handleShow = (event) => {
    !show ? setShow(true) : setShow(false);
    setGearId(event.target.id);
  };
  //Set Selected Gear
  useEffect(() => {
    const selectedItem = data.find((gear) => gear.id === Number(gearId));
    setGear(selectedItem);
  }, [gearId]);

  return (
    <div>
      <div>
        <p style={{ textAlign: "center" }}>
          Did you forget to get your Hiking gear{" "}
          <span style={{ fontWeight: "bold", color: "var(--primaryColor)" }}>
            {" "}
            Don't worry, i got you
          </span>
        </p>
      </div>
      <div className={Styles.grid}>
        {data.map((gear) => (
          <div key={gear.id} className={Styles.card}>
            <div className={Styles.title}>
              <h6>{gear.item}</h6>
              <div className={Styles.imageContainer}>
                <Image
                  src={gear.src}
                  fill
                  alt="SimpleSimon Safaris"
                  className={Styles.image}
                />
                <ul>
                  <li>{`${gear.description.substring(0, 20)}...`}</li>
                  <li
                    id={gear.id}
                    onClick={handleShow}
                    style={{
                      color: "var(--primaryColor)",
                      cursor: "pointer",
                    }}
                  >
                    Read More
                  </li>
                </ul>

                <button
                  className={Styles.button}
                  onClick={handleShow}
                  id={gear.id}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {show ? (
        <div className={Styles.modal}>
          <Modal gear={gear} toggle={show} setModal={setShow} />
        </div>
      ) : null}
    </div>
  );
};

export default GearComponent;
