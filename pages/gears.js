import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";
import PageComponent from "@/components/pagecomponent";
import Styles from "@/styles/pagenotfound.module.css";
import Layout from "@/components/Layout";
import GearComponent from "@/components/gearscomponent";

const Gears = ({ posts }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
      }}
    >
      {" "}
      <Layout posts={posts}>
        <PageComponent posts={posts}>
          <div className={Styles.container}>
            <h3>Life is better on hiking boots</h3>
            <hr />
            <div className={Styles.imageContainer}>
              <GearComponent />
            </div>
          </div>
        </PageComponent>
      </Layout>
    </div>
  );
};

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
    },
  };
}

export default Gears;
