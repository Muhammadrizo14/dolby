import { useEffect } from "react";
import banner from "../../assets/img/banner.png";
import Link from "../../common/Links/Links";
import styles from './style.module.scss'
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import gsap from "gsap";


const Banner: React.FC = () => {

  


  useEffect(()=> {
    gsap.from('.banner__info__uptitle', 0.3, {
      y: 100,
      opacity: 0,
      delay: 0.1,
      ease: "none",
    })
  },[])

  return (
    <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1} resetOnLeave>
      <div className={`${styles.banner} container`}>
        <div className={styles.banner__info}>
          <p className={styles.banner__info__uptitle}>Featured Film</p>
          <h1 className={styles.banner__info__title}>ZERO CONTACT</h1>
          <p className={styles.banner__info__subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit gravida enim, orci morbi elementum gravida. </p>
          <Link suptitle='Let’s get started' />
          <ul className={styles.banner__info__list}>
            <li><span>2k |</span> Active user</li>
            <li><span>5k |</span> Music Video</li>
            <li><span>7k |</span> Visual Art</li>
          </ul>
        </div>
        <div className={styles.banner__image}>
          <MouseParallaxChild factorX={1} factorY={1}>
            <img src={banner} alt="" />
          </MouseParallaxChild>
        </div>

      </div>
    </MouseParallaxContainer>
  );
}

export default Banner;