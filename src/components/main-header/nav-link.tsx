"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import classes from "./nav-link.module.css";

interface INavLink {
  href: string;
  children: ReactNode;
}

export default function NavLink({ href, children }: INavLink) {
  const path: string = usePathname();

  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
}
