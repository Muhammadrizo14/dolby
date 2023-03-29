import Link from '../../common/Links/Links';
import style from './style.module.scss'

function Marketplace() {
  return (
    <div className={`${style.marketplace}`}>
      <div className='container'>
        <h1 className={style.marketplace__title}>The Premier Marketplace for Nifties</h1>
        <p className={style.marketplace__subtitle}>
          dolby is the premier marketplace for Nifties, which are digital items you can truly own. Digital Items have existed for a long time, but never like this.
        </p>
        <Link suptitle='Let’s get started' />
      </div>
    </div>
  );
}

export default Marketplace;