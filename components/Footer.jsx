import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.item}>
            <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
        </div>

        <div className={styles.item}>
            <div className={styles.card}>
                <h2 className={styles.motto}>
                    OH YES, WE DID.THE PIZZA RESTRO, WELL BAKED SLICE OF PIZZA.
                </h2>
            </div>

            <div className={styles.card}>
                <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
                    <p className={styles.text}>
                        Kaikhali, VIP Road #304.
                        <br /> Kolkata, 700052
                        <br /> (634) 823-1212
                    </p>
                    <p className={styles.text}>
                        K. Laquie Rd #235.
                        <br /> Kolkata,  700023
                        <br /> (634) 823-1213
                    </p>
                    <p className={styles.text}>
                        Camac St #104.
                        <br /> Kolkata, 700012
                        <br /> (634) 823-1214
                    </p>
                    <p className={styles.text}>
                        Rashbihari Road #125.
                        <br /> Kolkata, 700005
                        <br /> (634) 823-1215
                    </p>
            </div>


            <div className={styles.card}>
                <h1 className={styles.title}>WORKING HOURS</h1>
                <p className={styles.text}>
                    MONDAY UNTIL FRIDAY
                    <br /> 9:00 – 22:00
                </p>
                <p className={styles.text}>
                    SATURDAY - SUNDAY
                    <br /> 12:00 – 24:00
                </p>
            </div>


        </div>

    </div>

  );
};

export default Footer;