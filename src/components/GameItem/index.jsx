import styles from "./GameItem.module.scss"

import testImage from "../../assets/img.png"
import {useEffect, useState} from "react";
import gameTestData from "../../assets/testData.json";
function GameItem({gameTitle, prices}) {



    const [priceData, setPriceData] = useState([]); // Updated this line

    useEffect(() => {
       setPriceData(prices)
    }, []);

    return (
        <>
            <div className={styles.game_item_display__container}>
                <p>{gameTitle}</p>

                {console.log(priceData)}

                {priceData.map((data, index) =>(
                    <div key = {index}>
                        <p>{data.date}</p>
                        {Object.entries(data.prices).map(([platform, price], index) => (
                            <p key={index}>{platform}: ${price}</p>
                        ))}
                    </div>
                ))}

            </div>
        </>
    );
}

export default GameItem