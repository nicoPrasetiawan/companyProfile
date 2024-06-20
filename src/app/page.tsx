import Link from "next/link";

import classes from "./page.module.css";
import ImageSlideshow from "@/components/images/image-slideshow";

import ServicesPage from "./our-offerings/page";
import AboutFoodHub from "./about/page";
import Testimony from "@/components/testimony/testimony";
import Footer from "@/components/footer/footer";
import { fetchContent } from "./our-offerings/page";

export default async function Home() {
  const contents = await fetchContent();

  return (
    <>
      {/* sebenernya ga perlu fetch contentful, tapi pengen coba aja untuk latihan */}
      {contents?.map((content) => (
        <header className={classes.header} key={content.sys.id}>
          <div className={classes.slideshow}>
            <ImageSlideshow />
          </div>
          <div>
            <div className={classes.hero}>
              <h1>{content.fields.title}</h1>
              <p>{content.fields.tagline}</p>
            </div>
            <div className={classes.cta}>
              <Link href="/our-offerings">{content.fields.menu1}</Link>
              <Link href="/meals">{content.fields.menu2}</Link>
            </div>
          </div>
        </header>
      ))}

      <main>
        <ServicesPage />

        <Testimony />

        <AboutFoodHub />

        <Footer />
      </main>
    </>
  );
}
