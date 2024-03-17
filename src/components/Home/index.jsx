import styles from "./Home.module.scss"
import {useEffect, useState} from "react";
// import testData from "../../../src/assets/content/test_data.json";

import gameTestData from "../../assets/testData.json"

import GameItem from "../GameItem/index.jsx";

const Home = () => {
    const [content, setContent] = useState([]);

    useEffect(() => {
        setContent(gameTestData.games)
    }, []);


    return (
        <>
            <div className={styles.main_container}>

                <h1>Games</h1>
                {/*{console.log(content)}*/}

                {content.map((data, index) =>(
                    <div key = {index}>
                        <GameItem gameTitle={data.name} prices={data.price_history}/>
                    </div>
                ))}





                {/*<div className={styles.main_container__data_display}>*/}

                {/*    {content.map((data, index) =>(*/}
                {/*        <div key = {index}>*/}
                {/*            <h1>{data.game}</h1>*/}
                {/*            <h3>{data.date}:</h3>*/}
                {/*            <GameItem price_history = {data.prices}/>*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*</div>*/}

            </div>
        </>
    );
}

export default Home