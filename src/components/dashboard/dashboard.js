'use client'
import styles from './dashboard.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Swiper from '@/components/swiper/swiper';
import { useState } from 'react';


const Dashboard = ({author, authorImages}) => {
  const [showSwiper, setShowSwiper] = useState(false);

  const handleButtonClick = () => {
    setShowSwiper(!showSwiper);
  };
  
  
  // const galleries = await fetchAuthorsByGalleryName(author);


    return (
      <div className={styles.dashboardContainer}>
        <div className={styles.dashboard}>
          {author.map((author, index) => {
            let url = `/galleries/${author.gallery}/${author.niceUrl}`;
            return (
              <div key={index} className={styles.authorName}>
                <Link href={url}>{author.author}</Link>
              </div>
            );
          })}
        </div>
          <button onClick={handleButtonClick} className={styles.button}>Switch</button>
        <div className={styles.imgContainer} style={showSwiper ? {} : {display: 'grid'}}>
          {showSwiper ? (
            <Swiper authorImages={authorImages}></Swiper>
          ) : (
            authorImages &&
            authorImages.map((image, index) => {
              return (
                <Image
                  className={styles.image}
                  key={index}
                  src={image.path}
                  alt="hej"
                  width={600}
                  height={350}
                ></Image>
              );
            })
          )}
        </div>
      </div>
    );
};

export default Dashboard;