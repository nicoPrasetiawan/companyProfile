import Link from "next/link";

import classes from "./page.module.css";
import ImageSlideshow from "@/components/images/image-slideshow";

import ServicesPage from "./our-offerings/page";
import AboutFoodHub from "./about/page";
import Testimony from "@/components/testimony/testimony";
import Footer from "@/components/footer/footer";
import { client } from "@/utils/contentful";
import { TypeCompanyProfileFields } from "@/types/contentful";

export async function fetchContent() {
  try {
    const data = await client.getEntries<TypeCompanyProfileFields>();

    console.log(data.items);
    return data?.items;
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {
  const contents = await fetchContent();

  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        {contents?.map((content) => (
          <div key={content.sys.id}>
            <div className={classes.hero}>
              <h1>{content.fields.title}</h1>
              <p>{content.fields.tagline}</p>
            </div>
            <div className={classes.cta}>
              <Link href="/our-offerings">{content.fields.menu1}</Link>
              <Link href="/meals">{content.fields.menu2}</Link>
            </div>
          </div>
        ))}
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
