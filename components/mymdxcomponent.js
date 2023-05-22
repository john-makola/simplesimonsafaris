// components/MyMdxComponent.js
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function MyMdxComponent({ source, frontMatter }) {
  return (
    <div>
      <h1>{frontMatter.title}</h1>
      <MDXRemote {...source} />
    </div>
  );
}

export async function getStaticProps() {
 
    const filePath = path.join(process.cwd(), "pages", "hikes");
  const fileContents = fs.readdirSync(filePath);
  const { data, content } = matter(fileContents);
  const source = await serialize(content);

  return {
    props: {
      source,
      frontMatter: data,
    },
  };
}
