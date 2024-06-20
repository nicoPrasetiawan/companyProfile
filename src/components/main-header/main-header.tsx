import Link from "next/link";

import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBakcground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBakcground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="logoImg" priority />
          Food Hub
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/our-offerings">Our Offerings</NavLink>
            </li>
            <li>
              <NavLink href="/about">About Us</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
