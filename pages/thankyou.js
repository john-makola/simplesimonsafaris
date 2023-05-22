import React, { useEffect } from "react";
import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";
import Image from "next/image";
import Signature from "@/images/signature.png";
import Styles from "@/styles/thankyou.module.css";

function ThankYou({ name }) {
  // const router = useRouter();
  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push("/");
  //   }, 5000);
  // }, []);

  return (
    <div>
      {/* <PageComponent> */}
      <div>
        <h3>Thank You</h3>
        Dear {name},
        <p>
          {" "}
          Thank you for your interest in taking a group tour with{" "}
          <span style={{ color: "var(--primaryColor)", fontWeight: "bold" }}>
            Simple Simon Safaris
          </span>
          . Our{" "}
          <span
            style={{ color: "var(--primaryColor)", fontWeight: "bold" }}
          > Hikes, Trails, Treks, Jungle Safaris and tours expeditions,</span>{" "}
          are a never miss ultimate experience.
        </p>
        <p>
          Our team is committed to providing you with exceptional service and
          ensuring that every detail of your trip is meticulously planned and
          executed.
        </p>
        <p>
          We will review your request and carefully consider your requirements and provide
          you with a proposal that fits your budget and expectations.
        </p>
        <p>
          {" "}
          Thank you for considering{" "}
          <span style={{ color: "var(--primaryColor)", fontWeight: "bold" }}>
            Simple Simon Safaris
          </span>{" "}
          as your travel partner. We are excited about the prospect of serving
          you and creating unforgettable memories together.
        </p>
        <p>Best regards,</p>
      </div>
      <div className={Styles.imageContainer}>
        <Image
          src={Signature}
          fill
          alt="Simple Simon Safaris"
          className={Styles.image}
        />
      </div>
      <span>Email:</span> <p>simplesimonsafaris@gmail.com</p>
      <span>Email 2:</span> <p>info@simplesimonsafaris.com</p>
      <span>Tel No:</span> <p>+254 726 474 326</p>
      <span>Tel No:</span> <p>+254 725 588 966</p>
      {/* </PageComponent> */}
    </div>
  );
}

export default ThankYou;
