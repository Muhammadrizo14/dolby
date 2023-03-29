import { useEffect, useRef } from "react";
import banner from "../../assets/img/banner.png";
import Link from "../../common/Links/Links";
import styles from './style.module.scss'
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import gsap from "gsap";


const Banner: React.FC = () => {

  const bannerInfoUptitle = useRef<HTMLParagraphElement>(null)
  const bannerInfoTitle = useRef<HTMLHeadingElement>(null)
  const bannerInfoSubTitle = useRef<HTMLParagraphElement>(null)
  const bannerInfoLink = useRef<HTMLDivElement>(null)
  const bannerInfoList1 = useRef<HTMLLIElement>(null)
  const bannerInfoList2 = useRef<HTMLLIElement>(null)
  const bannerInfoList3 = useRef<HTMLLIElement>(null)
  const imageRight = useRef<HTMLDivElement>(null)

  useEffect(() => {
    var tl = gsap.timeline();
    tl.from(bannerInfoUptitle.current, 0.3, {
      y: 100,
      opacity: 0,
      delay: 0.1,
      ease: "none",
    })
    tl.from(bannerInfoTitle.current, 0.3, {
      y: 100,
      opacity: 0,
      delay: 0.1,
      ease: "none",
    }, "-=0.2")
    tl.from(imageRight.current, 0.3, {
      x: 100,
      opacity: 0,
      delay: 0.1,
      ease: "none",
    }, "-=0.3")
    tl.from(bannerInfoSubTitle.current, 0.3, {
      y: 100,
      opacity: 0,
      delay: 0.1,
      ease: "none",
    }, "-=0.2")
    tl.from(bannerInfoLink.current, 0.3, {
      y: 100,
      opacity: 0,
      delay: 0.1,
      ease: "none",
    }, "-=0.2")
    tl.from(bannerInfoList1.current, 0.3, {
      y: 100,
      opacity: 0,
      delay: 0.1,
      ease: "none",
    }, "-=0.2")
    tl.from(bannerInfoList2.current, 0.3, {
      y: 100,
      opacity: 0,
      delay: 0.1,
      ease: "none",
    }, "-=0.2")
    tl.from(bannerInfoList3.current, 0.3, {
      y: 100,
      opacity: 0,
      delay: 0.1,
      ease: "none",
    }, "-=0.2")   
  }, [])

  return (
    <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1} resetOnLeave>
      <div className={`${styles.banner} container`}>
        <div className={styles.banner__info}>
          <p className={styles.banner__info__uptitle} ref={bannerInfoUptitle}>Featured Film</p>
          <h1 className={styles.banner__info__title} ref={bannerInfoTitle}>ZERO CONTACT</h1>
          <p ref={bannerInfoSubTitle} className={styles.banner__info__subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit gravida enim, orci morbi elementum gravida. </p>
          <div ref={bannerInfoLink}>
            <Link suptitle='Let’s get started' />
          </div>
          <ul className={styles.banner__info__list}>
            <li ref={bannerInfoList1}><span>2k |</span> Active user</li>
            <li ref={bannerInfoList2}><span>5k |</span> Music Video</li>
            <li ref={bannerInfoList3}><span>7k |</span> Visual Art</li>
          </ul>
        </div>
        <div className={styles.banner__image} ref={imageRight}>
          <MouseParallaxChild factorX={1} factorY={1}>
            <img src={banner} alt="" />
          </MouseParallaxChild>
        </div>

      </div>
    </MouseParallaxContainer>
  );
}

export default Banner;