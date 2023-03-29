
import styles from './styles.module.scss'

import priceImage from '../../../assets/img/Fetures Card/price.png'
import like from '../../../assets/img/Fetures Card/like.png'

type Iprops = {
  image: any,
  price: number
}


const FeaturesCard:React.FC<Iprops> = ({image, price})=> {
  return (
    <div className={styles.features__card}>
      <img src={image} alt="" />
      <div className={styles.features__card__info}>
        <h3 className={styles.features__card__info__title}>Jenuine Ruddy Girl</h3>
        <p className={styles.features__card__info__suptitle}>Till Lindemann by NFT Frame Art</p>
        <div className={styles.features__card__info__price}>
          <p>
            Price
          </p>
          <div className={styles.features__card__info__price__text}>
            <img src={priceImage} alt="" />
            <span>€{price}</span>
          </div>
        </div>
      </div>
      <div className={styles.features__card__buy}>
          <img src={like} alt="" />
          <button>buy</button>
        </div>
    </div>
  );
}

export default FeaturesCard;