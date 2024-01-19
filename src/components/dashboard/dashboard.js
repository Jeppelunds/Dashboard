import styles from './dashboard.module.css';

const Dashboard = () => {
    return (
      <div className={styles.dashboardContainer}>
        <div className={styles.dashboard}>
          <div className={styles.authorName}>
            <a href="#">portfolie navn</a>
          </div>
          <div className={styles.authorName}>
            <a href="#">portfolie navn</a>
          </div>
          <div className={styles.authorName}>
            <a href="#">portfolie navn</a>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            praesentium suscipit veritatis modi sunt blanditiis labore quidem
            deleniti tempora deserunt nisi culpa mollitia nulla ex officiis
            perspiciatis voluptatum, hic et sequi! Quibusdam explicabo quis
            tempora illum, esse odit fuga nesciunt.
          </p>
        </div>
      </div>
    );
};

export default Dashboard;