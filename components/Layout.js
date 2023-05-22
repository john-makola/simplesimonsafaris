import Nav from "./Nav";
import Meta from "./Meta";
import Footer from "./footer";

const Layout = ({ children, posts }) => {
  return (
    <>
      <Meta />
      <div className="top">
        <Nav posts={posts} />
      </div>
      {children}
      <Footer posts={posts}/>
    </>
  );
};

export default Layout;
