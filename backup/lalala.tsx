import Image from "next/image";

import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";
import classes from "./page.module.css";

export default function ServicesPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          One shared passion: <span className={classes.highlight}>Food</span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>
      <main className={classes.main}>
        <h2>Our Offerings</h2>

        <ul className={classes.perks}>
          <li>
            <Image src={mealIcon} alt="A delicious meal" />
            <p>Meal Exploration</p>
            {/* Discover new dishes from around the world and find inspiration for your next meal. */}
          </li>
          <li>
            <Image src={communityIcon} alt="A crowd of people, cooking" />
            <p>Community Engagement</p>
            {/* Connect with other food lovers, participate in cooking challenges, and share your culinary journey. */}
          </li>
          <li>
            <Image
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
            />
            <p>Recipe Sharing</p>
            {/* Share your favorite recipes with the community and explore others' culinary creations. */}
          </li>
        </ul>
      </main>
    </>
  );
}
