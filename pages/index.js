import Head from "next/head";
import Image from "next/image";
import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";
import { Inter } from "@next/font/google";
import Layout from "@/components/Layout";
import Styles from "@/styles/Home.module.css";
import SliderComponent from "@/components/slider";
import Speciality from "@/components/speciality";
import FeaturedTrip from "@/components/featuredTrip";
import HikesComponent1 from "@/components/hikescomponent1";
import { serialize } from "next-mdx-remote/serialize";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts, source }) {
  return (
    <Layout posts={posts}>
      <SliderComponent />
      <HikesComponent1 posts={posts} />
      <Speciality />
      <FeaturedTrip posts={posts} source={source} />
    </Layout>
  );
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "pages/hikes/");
  const filenames = fs.readdirSync(postsDirectory);
  const files = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const content = fs.readFileSync(filePath, "utf-8");
    const matter = grayMatter(content);
    return {
      filename,
      matter,
    };
  });

  const mdxFilePath = path.join(
    process.cwd(),
    "excerpts",
    "03_mount_kenya.mdx"
  );
  const mdxSource = fs.readFileSync(mdxFilePath, "utf-8");
  const mdxCompiled = await serialize(mdxSource);

  const posts = files.map((file) => {
    return {
      path: file.filename.replace(".mdx", ""),
      title: file.matter.data.title,
      date: file.matter.data.date,
      content: file.matter.content,
    };
  });

  return {
    props: {
      posts,
      source: mdxCompiled,
    },
  };
}
