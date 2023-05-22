import React from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from "@/styles/pagecomponent.module.css";
import Simon from "@/images/simplesimon.png";

export default function PageComponent({ children, posts }) {
  return (
    <div className={Styles.container}>
      <div className={Styles.column1}>
        <div className={Styles.imageContainer}>
          <Image src={Simon} fill alt="Simple Simon" className={Styles.image} />
          <hr />
        </div>

        <div className={Styles.card}>
          <p>Up-Coming Hikes & Trails</p>
          <ul>
            <li>
              <Link href={"/hikes"}>All Hikes</Link>
            </li>
          </ul>
          {posts.map((post) => (
            <ul>
              <li key={post.path}>
                <Link href={`/posts/${post.path}`}>{post.title}&#x3e;</Link>
              </li>
            </ul>
          ))}
        </div>
      </div>
      <div className={Styles.column2}>{children}</div>
    </div>
  );
}
