import styles from "./style.module.css";

export function Main() {
  const style = styles;
  return (
    <div className={style.main}>
      <div className={style.content}>
        <h1>
          Beautiful food & takeaway,<span>delivered</span> to your door.
        </h1>
        <h2>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500.
        </h2>
        <button className={style.btn}>Place an Order</button>
      </div>
      <div className={style.image}>
      <img src="IMAGE.png" alt="альтернативный текст"/>
      </div>
    </div>
  );
}
