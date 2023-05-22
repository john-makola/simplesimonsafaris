import Link from "next/link";
import styles from "@/styles/footer.module.css";

const Footer = ({ posts }) => {
  return (
    <>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h1>Call Today</h1>
          <h5>+254 788 619 630</h5>
          <h5>+254 725 588 966</h5>
          <hr />
        </div>

        <div className={styles.card}>
          <p>Up-Coming Hikes</p>
          {posts.map((post) => (
            <ul>
              <li key={post.path}>
                <Link href={`/posts/${post.path}`}>{post.title}&#x3e;</Link>
              </li>
            </ul>
          ))}
          <hr />
        </div>
        <div className={styles.card}>
          <p>Up-Coming Trails & Treks</p>
          {posts.map((post) => (
            <ul>
              <li key={post.path}>
                <Link href={`/posts/${post.path}`}>{post.title}&#x3e;</Link>
              </li>
            </ul>
          ))}
          {/* <ul>
            <li>
              <Link href="/">Karura Forest &#x3e;</Link>
            </li>
            <li>
              <Link href="/">Oloolua Nature Trail &#x3e;</Link>
            </li>
            <li>
              <Link href="/">Bamburi Nature Trail &#x3e;</Link>
            </li>
            <li>
              <Link href="/">Keru Safaris & Toues &#x3e;</Link>
            </li>
            <li>
              <Link href="/">Torok Waterfalls &#x3e;</Link>
            </li>
          </ul> */}
        </div>
      </div>

      <div className={styles.copyright}>
        <hr />
        <div className={styles.containerCopyright}>
          <p>
            {" "}
            Copyright : &copy; {new Date().getFullYear()} Simple Simon Safaris
          </p>
        </div>

        <div className={styles.containerCopyright}>
          <ul>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/">Privacy & Cookies</Link>
            </li>
            <li>
              <Link href="/">Help</Link>{" "}
            </li>
            <li>
              <Link href="/">Feedback</Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
