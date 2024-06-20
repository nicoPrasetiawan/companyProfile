import Image from "next/image";

import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";
import classes from "./page.module.css";

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

export default async function ServicesPage() {
  const contents = await fetchContent();

  return (
    <>
      {contents?.map((content) => (
        <section className={classes.productsServices} key={content.sys.id}>
          <header className={classes.header}>
            <h1>
              {content.fields.offeringsTitle}{" "}
              <span className={classes.highlight}>
                {content.fields.offeringsTitleSpan}
              </span>
            </h1>
            <p className={classes.p}>
              Get all the benefits for <s>Rp. 250,000</s>{" "}
              <span className={classes.span}>FREE!</span>
            </p>
          </header>
          <div className={classes.productContainer}>
            <div className={classes.product}>
              <Image src={mealIcon} alt="mealIcon" />

              <h3>{content.fields.offeringsHeader1}</h3>
              <p>{content.fields.offeringsContent1}</p>
              <a href="#learn-more" className={classes.ctaButton}>
                Learn More
              </a>
            </div>
            <div className={classes.product}>
              <Image src={communityIcon} alt="communityIcon" />

              <h3>{content.fields.offeringsHeader2}</h3>
              <p>{content.fields.offeringsContent2}</p>
              <a href="#learn-more" className={classes.ctaButton}>
                Learn More
              </a>
            </div>
            <div className={classes.product}>
              <Image src={eventsIcon} alt="eventsIcon" />
              <h3>{content.fields.offeringsHeader3}</h3>
              <p>{content.fields.offeringsContent3}</p>
              <a href="#learn-more" className={classes.ctaButton}>
                Learn More
              </a>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
