import Link from "next/link";

import classes from "./page.module.css";
import ImageSlideshow from "@/components/images/image-slideshow";

import ServicesPage from "./our-offerings/page";
import AboutFoodHub from "./about/page";
import Testimony from "@/components/testimony/testimony";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Cultural Cuisines For Culinary Explorers</h1>
            <p>Discover and Delight in Worldwide Flavors.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/our-offerings">Our Offerings</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <ServicesPage />

        <Testimony />

        <AboutFoodHub />

        <Footer />
      </main>
    </>
  );
}
