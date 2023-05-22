import React, { useState, useEffect } from "react";
import Styles from "@/styles/hikes1.module.css";
import Image from "next/image";
import HikeModal from "./hikemodal";
import Link from "next/link";
import Hikes from "@/components/hikeData";

function HikesComponent1({ posts }) {
  const [show, setShow] = useState(false);
  const [postId, setPostId] = useState(null);
  const [post, setPost] = useState(null);

  const handleShow = (event) => {
    !show ? setShow(true) : setShow(false);
    setPostId(event.target.id);
  };
  useEffect(() => {
    const selectedItem = posts.find((post) => post.path === postId);
    setPost(selectedItem);
  }, [postId]);

  return (
    <div>
      <div>
        <p style={{ textAlign: "center" }}>
          Lists upcoming Hikes{" "}
          <span style={{ fontWeight: "bold", color: "var(--primaryColor)" }}>
            {" "}
            2023
          </span>
        </p>
      </div>
      <div>
        <div className={Styles.grid}>
          {posts.slice(0, 4).map((post) => (
            <div key={post.path} className={Styles.card}>
              <div className={Styles.title}>
                <h6>{post.title.substring(0, 20)}</h6>
              </div>
              <div className={Styles.hikeDetails}>
                <h6
                  style={{ textAlign: "center", color: "var(--primaryColor)" }}
                >
                  {post.date}
                </h6>
                <div>
                  {Hikes.filter((hike) => hike.title === post.title).map(
                    (hike) => (
                      <div className={Styles.imageContainer}>
                        <Image
                          src={hike.src}
                          fill
                          alt="SimpleSimon Safaris"
                          className={Styles.image}
                        />
                      </div>
                    )
                  )}
                  {/* {`${post.content.substring(0, 100)}...`} */}
                </div>
              </div>
              <div className={Styles.bookHike}>
                <h6 style={{ textAlign: "center" }}>
                  <Link href={`/posts/${post.path}`}>Read More Details</Link>
                </h6>
                <button
                  className={Styles.button}
                  onClick={handleShow}
                  id={post.path}
                >
                  Book Hike
                </button>
              </div>
            </div>
          ))}
        </div>{" "}
        <h5
          style={{
            padding: "0.25rem 8rem",
            textAlign: "right",
            fontWeight: "bold",
          }}
        >
          <Link href="/hikes">Check out more Hikes {`>>`}</Link>
        </h5>
      </div>

      {show ? (
        <div className={Styles.modal}>
          <HikeModal
            post={post}
            toggle={show}
            setModal={setShow}
            setPostId={setPostId}
            Hikes={Hikes}
          />
        </div>
      ) : null}
    </div>
  );
}

export default HikesComponent1;
