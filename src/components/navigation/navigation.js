'use client';

import styles from './navigation.module.css';
import { FaHamburger } from "react-icons/fa";
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import NavigationLinks from '../navigationlinks/navigationlinks';


const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
      setIsOpen(!isOpen);
    };
    

  return (
    <>
      <div className={styles.navigation}>
        <Image
          src="/square_logo.png"
          alt="MediaCollege Denmark"
          width={150}
          height={150}
          className={styles.logo}
        />
        <FaHamburger className={styles.faBurger} onClick={handleClick} />
      </div>
      <div className={`${styles.navigationDropDown} ${isOpen ? styles.down : ""}`}>
        <NavigationLinks />
      </div>
    </>
  );
};

export default Navigation;