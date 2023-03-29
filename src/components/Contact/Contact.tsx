import style from './style.module.scss'

function Contact() {
  return (
    <div className={`container ${style.contact}`}>
      <h1 className={style.contact__title}>Never Miss a drop!</h1>
      <p className={style.contact__subtitle}>
        Subscribe to our ultra-exclusive drop list and be the first to know about upcoming dolby drops.
      </p>
      <form>
        <div className={style.contact__form}>
          <input type="email" placeholder="Email Address" />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;