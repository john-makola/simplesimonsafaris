import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "@/images/Logo.png";
import Styles from "@/styles/Nav.module.css";
import { FaBars, FaChevronDown, FaChevronUp } from "react-icons/fa";
import MobileNav from "./hikemenumobilenav";

function Nav({ posts }) {
  const router = useRouter();
  const [showLinks, setShowLinks] = useState(false);
  const currentRoute = router.pathname;
  const [isOpenHikes, setOpenHikes] = useState(false);
  const [isOpenTrails, setOpenTrails] = useState(false);

  const handleMouseEnterHikes = () => {
    setOpenHikes(true);
  };
  const handleMouseLeaveHikes = () => {
    setOpenHikes(false);
  };
  const handleMouseEnterTrails = () => {
    setOpenTrails(true);
  };

  const handleMouseLeaveTrails = () => {
    setOpenTrails(false);
  };

  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setShowLinks(!showLinks);
    setHover(!hover);
  };

  return (
    <div className={Styles.Navbar}>
      <div
        className={Styles.leftSide}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <button style={{ border: "none", background: "var(--primaryColor)" }}>
          <FaBars border="none " color="#fff" />
        </button>
        <div className={Styles.imageContainer}>
          <Image
            src={Logo}
            fill
            alt="Simple Simon Safaris"
            className={Styles.image}
          />
        </div>
        <div className={Styles.links} id={!showLinks ? "" : Styles.hidden}>
          {MobileNav.map((menu) => (
            <div className={Styles.mobileMenus}>
              <ul>
                <Link href={menu.link}>
                  <li key={menu.id}>{menu.menu}</li>
                </Link>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={Styles.rightSide}>
        <div id={!showLinks ? "" : Styles.hidden}>
          <ul>
            <li key="home">
              <Link
                href="/"
                className={
                  currentRoute === "/" ? Styles.active : Styles.nonActive
                }
              >
                Home
              </Link>
            </li>
            <li
              onMouseEnter={handleMouseEnterHikes}
              onMouseLeave={handleMouseLeaveHikes}
              key="hikes"
            >
              <p>Hikes {isOpenHikes ? <FaChevronUp /> : <FaChevronDown />}</p>
              <>
                <div className={isOpenHikes ? Styles.menus : Styles.menusNone}>
                  <ul>
                    <li key="Allhikes">
                      <Link href={"/hikes"}>All Hikes</Link>
                    </li>
                    {posts.map((post) => (
                      <li key={post.path}>
                        <Link href={`/posts/${post.path}`}>
                          {post.title}&#x3e;
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            </li>

            <li
              onMouseEnter={handleMouseEnterTrails}
              onMouseLeave={handleMouseLeaveTrails}
              key="trails"
            >
              <p>Trails {isOpenTrails ? <FaChevronUp /> : <FaChevronDown />}</p>
              <>
                <div className={isOpenTrails ? Styles.menus : Styles.menusNone}>
                  {posts.map((post) => (
                    <ul>
                      <li key={post.path}>
                        <Link href={`/posts/${post.path}`}>
                          {post.title}&#x3e;
                        </Link>
                      </li>
                    </ul>
                  ))}
                </div>
              </>
            </li>

            <li key="gears">
              <Link
                href="/gears"
                className={
                  currentRoute === "/gears" ? Styles.active : Styles.nonActive
                }
              >
                Gears
              </Link>
            </li>
            <li key="contactus">
              <Link
                href="/contact"
                className={
                  currentRoute === "/contact" ? Styles.active : Styles.nonActive
                }
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
