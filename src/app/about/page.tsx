import classes from "./page.module.css";

const teamMembers = [
  {
    img: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Michael Johnson",
    role: "Head Chef",
  },
  {
    img: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Sarah Brown",
    role: "Founder & CEO",
  },
  {
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "James Williams",
    role: "Recipe Developer",
  },
];

export default function AboutFoodHub() {
  return (
    <section className={classes.aboutSection}>
      <h2>About Food Hub</h2>
      <p>
        Food Hub is a platform for food enthusiasts to share their favorite
        recipes with the world. Our mission is to connect culinary lovers and
        offer a space to discover new dishes, learn from diverse culinary
        traditions, and connect with fellow food enthusiasts.
      </p>
      <p>
        At Food Hub, we celebrate the rich tapestry of global cuisines and the
        stories behind them. Our community is a melting pot of flavors,
        techniques, and cultures, making it the perfect place for culinary
        explorers.
      </p>

      <div className={classes.team}>
        <h3>Meet Our Team</h3>
        <div className={classes.teamMembers}>
          {teamMembers.map((member, index) => (
            <div key={index} className={classes.teamMember}>
              <img src={member.img} alt={`${member.name}'s photo`} />
              <p className={classes.name}>{member.name}</p>
              <p className={classes.role}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
