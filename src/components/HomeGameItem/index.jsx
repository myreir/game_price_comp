import React from 'react';
import styles from "./HomeGameItem.module.scss"
import testImg2 from "../../assets/half.png";
function HomeGameItem(props) {
    return (
        <div className={styles.item_container}>

            <img src={testImg2} alt="Image 2" />

            <div className={styles.item_container__prices}>
                <h3>Steam: 12.99</h3>
                <h3>Amazon: 11.99</h3>
                <h3>G2A: 10.99</h3>
            </div>


        </div>
    );
}

export default HomeGameItem;