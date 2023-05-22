import React, { useState, useEffect } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXProvider } from "@mdx-js/react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import Image from "next/image";
import Styles from "@/styles/leftlinks.module.css";
import Simon from "@/images/simplesimon.png";
import Layout from "@/components/Layout";
import HikeModalSinglePage from "@/components/hikemodalSinglePage";
import Hikes from "@/components/hikeData";

const components = {};

export default function Post({ source, frontMatter, leftSideLinks, content }) {
  const [show, setShow] = useState(false);
  const [postId, setPostId] = useState(null);
  const [post, setPost] = useState(null);

  const handleShow = (event) => {
    !show ? setShow(true) : setShow(false);
    setPostId(event.target.id);
  };

  useEffect(() => {
    const selectedItem = content;
    setPost(selectedItem);
  }, [postId]);

  return (
    <Layout posts={leftSideLinks}>
      <div className={Styles.container}>
        <div className={Styles.column1}>
          <div className={Styles.imageContainer}>
            <Image
              src={Simon}
              fill
              alt="Simple Simon"
              className={Styles.image}
            />
            <hr />
            <div>
              <div className={Styles.card}>
                <p>Up-Coming Trails & Treks</p>
                <ul>
                  <li>
                    <Link href={"/hikes"}>All Hikes</Link>
                  </li>
                </ul>
                {leftSideLinks.map((post) => (
                  <ul>
                    <li key={post.path}>
                      <Link href={`/posts/${post.path}`}>
                        {post.title}&#x3e;
                      </Link>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.column2}>
          <button
            className={Styles.button}
            onClick={handleShow}
            id={frontMatter.title}
          >
            Book Hike
          </button>
          <MDXProvider components={components}>
            <div>
              <h1 style={{ textAlign: "center" }}>{frontMatter.title}</h1>
              <hr />
              <h4>Date: {frontMatter.date}</h4>
              <MDXRemote {...source} />
            </div>
          </MDXProvider>

          <button
            className={Styles.button}
            onClick={handleShow}
            id={frontMatter.title}
          >
            Book Hike
          </button>

          <div>
            {show ? (
              <div className={Styles.modal}>
                <HikeModalSinglePage
                  title={frontMatter.title}
                  date={frontMatter.date}
                  post={post}
                  toggle={show}
                  setModal={setShow}
                  setPostId={setPostId}
                  Hikes={Hikes}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  //Fetch Specific Post
  const { posts } = params;
  const filePath = path.join(process.cwd(), "pages", "hikes", `${posts}.mdx`);
  const source = fs.readFileSync(filePath);
  const { content, data } = matter(source);
  const mdxSource = await serialize(content, {
    scope: data,
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  });

  //Fetching Links for The Page
  const postsDirectory = path.join(process.cwd(), "pages", "hikes");
  const filenames = fs.readdirSync(postsDirectory);
  const files = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const content = fs.readFileSync(filePath, "utf-8");
    const linkFiles = matter(content);
    return {
      filename,
      linkFiles,
    };
  });
  const leftSideLinks = files.map((file) => {
    return {
      path: file.filename.replace(".mdx", ""),
      title: file.linkFiles.data.title,
    };
  });

  return {
    props: {
      content,
      leftSideLinks,
      source: mdxSource,
      frontMatter: data,
    },
  };
}
