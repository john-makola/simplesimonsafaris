import React from "react";
import Image from "next/image";
import Link from "next/link";
import MtKenya from "@/images/mtkenya.jpg";
import Styles from "@/styles/featuredTrip.module.css";
import { MDXProvider } from "@mdx-js/react";
import { MDXRemote } from "next-mdx-remote";

function FeaturedTrip({ posts, source }) {
  return (
    <div className={Styles.container}>
      <div className={Styles.containerA}>
        {posts.slice(2, 3).map((post) => (
          <div>
            <h2>{post.title}</h2>
            <h6>
              Up-Coming Challenge :{" "}
              <span
                style={{ color: "var(--primaryColor)", fornWeight: "bold" }}
              >
                {post.date}
              </span>
            </h6>
            <div className={Styles.content}>
              <MDXRemote {...source} />
            </div>
            {/* <div>
              {post.content.slice(0, 200)? (
                <MDXProvider>{post.content.substring(0, 500)}</MDXProvider>
              ) : (
                <MDXProvider>{post.content.substring(0, 1000)}</MDXProvider>
              )}
            </div> */}

            <Link href={`/posts/${post.path}`}>
              <button className={Styles.button}>Readme </button>
            </Link>
          </div>
        ))}
      </div>
      <div className={Styles.containerB}>
        <div className={Styles.imageContainer}>
          <Image
            src={MtKenya}
            fill
            alt="SimpleSimon Safaris"
            className={Styles.image}
          />
        </div>
      </div>
    </div>
  );
}

export default FeaturedTrip;
