import styles from "@/styles/Slider.module.css";
import Image from "next/legacy/image";

const Slider = () => {
    const images = [
        "/img/slider.png",
        "/img/slider2.png",
        "/img/slider3.png",
    ];

    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{ left: 0 }}>
                <Image src="/img/slider-left.png" alt="" layout="fill" objectFit="contain"/>
            </div>
            <div className={styles.wrapper}>
                {images.map((img, i) => (
                    <div className={styles.imgContainer} key={i}>
                        <Image src={img} alt="" layout="fill" objectFit="contain" />
                    </div>
                ))}
            </div>
            <div className={styles.arrowContainer} style={{ right: 0 }}>
                <Image src="/img/slider-right.png" alt="" layout="fill" objectFit="contain"/>
            </div>
        </div>
    );
};

export default Slider;

