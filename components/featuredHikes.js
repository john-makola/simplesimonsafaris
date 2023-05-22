import React from "react";
import Image from "next/image";
import Styles from "@/styles/featuredHikes.module.css";
import Hikes from "./hikeData";
import { Table } from "react-bootstrap";
function FeaturedHikes() {
  const Tabs = {
    tabSize: 8,
  };
  return (
    <div className={Styles.grid}>
      {Hikes.map((hike) => (
        <div className={Styles.card}>
          <div
            className={hike.card === "A" ? Styles.location : Styles.locationB}
          >
            <p>{hike.location}</p>
          </div>
          <div className={Styles.cost}>
            <span>{hike.cost}</span>
          </div>
          <div className={Styles.cardDetails}>
            <Table striped bordered hover>
              <tbody>
                <tr>
                  <td>Date</td>
                  <td style={{fontWeight:"bold"}}>{hike.date}</td>
                </tr>
                <tr>
                  <td>Max Latitude</td>
                  <td style={{fontWeight:"bold"}}>{hike.maxLatitude}</td>
                </tr>
                <tr>
                  <td>Difficulty</td>
                  <td style={{fontWeight:"bold"}}>{hike.difficulty}</td>
                </tr>
                <tr>
                  <td>Distance</td>
                  <td style={{fontWeight:"bold"}}>{hike.distance}</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div>
            <button
              className={hike.card === "A" ? Styles.button : Styles.buttonB}
            >
              I'm Interested
            </button>
          </div>
        </div> 
      ))}
    </div>
  );
}

export default FeaturedHikes;
