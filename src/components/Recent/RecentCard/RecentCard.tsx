import { useEffect, useRef } from 'react'


import styles from './style.module.scss'
import priceImage from '../../../assets/img/Fetures Card/price.png'

type Iprops = {
  image: any,
  price: number
}



const RecentCard: React.FC<Iprops> = ({ image, price }) => {



  return (
    <div className={styles.recent__card}>
      <div className={styles.recent__card__image}>
        <div className={styles.recent__card__image__item}>
          <img src={image} alt="1" />
        </div>
      </div>
      <div className={styles.recent__card__info}>
        <p className={styles.recent__card__info__suptitle}>Keeping yourself safe when buying NFTs on dolbi</p>
        <div className={styles.recent__card__info__price}>
          <img src={priceImage} alt="" />
          <span>€{price}</span>
        </div>
      </div>
    </div>
  );
}

export default RecentCard;