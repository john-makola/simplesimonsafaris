import ContactMe from "@/components/contactme";
import PageComponent from "@/components/pagecomponent";
import React from "react";
import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";
import Layout from "@/components/Layout";

function Contact({ posts }) {
  return (
    <div>
      <Layout posts={posts}>
        <PageComponent posts={posts}>
          <ContactMe />
        </PageComponent>
      </Layout>
    </div>
  );
}
export async function getServerSideProps() {
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
    };
  });

  return {
    props: {
      posts,
    },
  };
}
export default Contact;
