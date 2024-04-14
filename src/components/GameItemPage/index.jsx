import styles from "./GameDetailPage.module.scss"
import SearchBar from "../SearchBar/index.jsx";
import React, {useEffect, useState} from 'react';
import testImg2 from "../../assets/halo2.png";
import testImg from "../../assets/halo.png";
import testImg3 from "../../assets/halo3.png";
import testImg4 from "../../assets/halo4.png";

import gameTestData from "../../assets/testData1.json";

import gameTestData2 from "../../assets/testData2.json"

function GameDetailPage(props) {
    // find the specific game inside of the json data using the GAMEID variable

    // LEAVE THIS FOR LATE
    // const [content, setContent] = useState(null);
    //
    // useEffect(() => {
    //     setContent(gameTestData.games.find(game => game.gameID === 12345))
    // }, []);

    // If game not found display to user game not found

    const [content, setContent] = useState(gameTestData2);



    if (!content) {
        // Data has not loaded yet, return loading state or null
        return <div>Loading...</div>;
    }


    return (
        <div className={"container "+styles.main_container}> 
         <SearchBar/>
            <h1 className="title is-1">{content.title}</h1>
            {/*Image links will need to be added manually in database*/}
            <div className={styles.main_container__images} >
                <img src={testImg2} alt="Image 2" />
                <img src={testImg} alt="Image 2" />
                <img src={testImg3} alt="Image 2" />
                <img src={testImg4} alt="Image 2" />
            </div>
            <div className={styles.main_container__prices} >
               {  <div className="container">
                    <h2 className="title is-2">
                        Retailers
                    </h2>
                
                    {/* <h1>
                        Retail Price:
                    </h1>
                    <h1>
                        Store Name:
                    </h1>
                    <h1>
                        Store Price:
                    </h1>
                    <h1>
                        Savings:
                    </h1> */}
                </div>}
                <div className={styles.main_container__prices__history}>

                    {
                        content.deals.map((deal, index) => (
                            <div  className={styles.main_container__prices__history__stores} key={deal.dealID}>
                                <div>Date: {deal.date.join('-')}</div>
                                <div>Retail Price: ${deal.retailPrice}</div>
                                <div>Store Name: {deal.storeID}</div>
                                <div>Store Price: ${deal.price}</div>
                                <div>Savings: {deal.savings.toFixed(2)}%</div>
                            </div>
                        ))}

                </div>

            </div>

        </div>
    );
}

export default GameDetailPage;