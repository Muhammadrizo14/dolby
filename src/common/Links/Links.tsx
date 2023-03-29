import style from './style.module.scss'
import contactImg from "../../assets/img/arrowLeft.png";

type IProps = {
  suptitle: string
}

const Link:React.FC<IProps> = ({suptitle})=> {
  return (
    <button className={style.link}>
      {suptitle}
      <img src={contactImg} alt="" />
    </button>
  );
}

export default Link;