'use client'
import { register } from "swiper/element/bundle";
import styles from './swiper.module.css';
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";



const Swiper = ({authorImages}) => {

    const swiperRef = useRef(null);


    useEffect(() => {
        console.log('swiper registered')
        register();
    }, []);


    const nextSlide = () => {
      swiperRef.current.swiper.slideNext(1000);
    };

       const previousSlide = () => {
         console.log("PREVIOUS");
         swiperRef.current.swiper.slidePrev(1000);
       };

    return (
      <div className={styles.slider}>
        <FaChevronRight
          className={styles.changeImgBtnNext}
          onClick={() => nextSlide()}
        />
        <FaChevronLeft
          className={styles.changeImgBtnPrev}
          onClick={() => previousSlide()}
        />
        <swiper-container
          slides-per-view="1"
          keyboard="true"
          ref={swiperRef}
          rewind='true'
        >
          {authorImages
            ? authorImages.map((image, index) => {
                return (
                  <swiper-slide
                    key={index}
                    className={styles.slide}
                    lazy="true"
                  >
                    <Image
                      loading="lazy"
                      src={image.path}
                      alt={image.name}
                      width={image.width}
                      height={image.height}
                      className={styles.image}
                    ></Image>
                    <div class="swiper-lazy-preloader"></div>
                  </swiper-slide>
                );
              })
            : "Click name to show images"}
        </swiper-container>
      </div>
    );

};

export default Swiper;