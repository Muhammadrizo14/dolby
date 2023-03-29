import styles from './styles.module.scss'
import twitter from '../../assets/img/footer/twitter.png'
import instagram from '../../assets/img/footer/instagram.png'
import discord from '../../assets/img/footer/discord.png'
import email from '../../assets/img/footer/email.png'
import mlast from '../../assets/img/footer/mlast.png'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__community}>
          <h1 className={styles.footer__community__title}>Join the community</h1>
          <ul className={styles.footer__community__icons}>
            <li className={styles.footer__community__icons__icon}>
              <img src={twitter} alt="" />
            </li>
            <li className={styles.footer__community__icons__icon}>
              <img src={instagram} alt="" />
            </li>
            <li className={styles.footer__community__icons__icon}>
              <img src={discord} alt="" />
            </li>
            <li className={styles.footer__community__icons__icon}>
              <img src={mlast} alt="" />
            </li>
            <li className={styles.footer__community__icons__icon}>
              <img src={email} alt="" />
            </li>

          </ul>
        </div>
        <div className={styles.footer__lists}>
          <ul className={styles.footer__list}>
            <li>Menu</li>
            <li>
              Explore
            </li>
            <li>
              My items
            </li>
            <li>
              Create
            </li>
          </ul>
          <ul className={styles.footer__list}>
            <li>Info</li>
            <li>
              Privacy Policy
            </li>
            <li>
              Terms of service
            </li>
            <li>
              Help!
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;