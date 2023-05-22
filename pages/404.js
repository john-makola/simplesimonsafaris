import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";
import Image from "next/image";
import PageComponent from "@/components/pagecomponent";
import Styles from "@/styles/pagenotfound.module.css";
import pagenotfound from "@/images/pagenotfound.jpg";
import Layout from "@/components/Layout";

const PageNotFound = ({ posts }) => {
  // const router = useRouter();
  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push("/");
  //   }, 1500);
  // }, []);

  return (
    <Layout posts={posts}>
      <div
        style={{
          minHeight: "100vh",
        }}
      >
        <PageComponent posts={posts}>
          <div className={Styles.container}>
            <h3>Page Not Found</h3>
            <hr />
            <div className={Styles.imageContainer}>
              <Image
                src={pagenotfound}
                fill
                alt="John Makola"
                className={Styles.image}
              />
            </div>
          </div>
        </PageComponent>
      </div>
    </Layout>
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
    };
  });

  return {
    props: {
      posts,
    },
  };
}
export default PageNotFound;
