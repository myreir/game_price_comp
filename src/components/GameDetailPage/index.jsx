import styles from "./GameDetailPage.module.scss"
import React from 'react';
import testImg2 from "../../assets/hello.png";
import testImg from "../../assets/halo.png";
import testImg3 from "../../assets/banjo.png";

function GameDetailPage(props) {
    return (
        <div className={styles.main_container}>

            <div className={styles.main_container__images} >
                <img src={testImg2} alt="Image 2" />
                <img src={testImg} alt="Image 2" />
                <img src={testImg3} alt="Image 2" />
            </div>

            <div className={styles.cmain_container__prices} >

            </div>

        </div>
    );
}

export default GameDetailPage;