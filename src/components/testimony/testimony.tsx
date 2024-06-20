import styles from "./testimony.module.css";
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

export default async function Testimony() {
  const contents = await fetchContent();

  return (
    <>
      {contents?.map((content) => (
        <section
          id="testimonials"
          className={styles.testimonialsSection}
          key={content.sys.id}
        >
          <h2>What People Are Saying</h2>
          <div className={styles.testimonial}>
            <img
              src="https://randomuser.me/api/portraits/women/3.jpg"
              alt="Jane Doe"
              className={styles.photo}
            />
            <div>
              <p>{content.fields.testimony1}</p>
              <p className={styles.author}>{content.fields.testimonyName1}</p>
            </div>
          </div>
          <div className={styles.testimonial}>
            <img
              src="https://randomuser.me/api/portraits/men/3.jpg"
              alt="John Smith"
              className={styles.photo}
            />
            <div>
              <p>{content.fields.testimony2}</p>
              <p className={styles.author}>{content.fields.testimonyName2}</p>
            </div>
          </div>
          <div className={styles.testimonial}>
            <img
              src="https://randomuser.me/api/portraits/men/8.jpg"
              alt="John Smith"
              className={styles.photo}
            />
            <div>
              <p>{content.fields.testimony3}</p>
              <p className={styles.author}>{content.fields.testimonyName3}</p>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
