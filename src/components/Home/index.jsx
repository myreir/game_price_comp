import styles from "./Home.module.scss"
import {useEffect, useState} from "react";
// import testData from "../../../src/assets/content/test_data.json";

import gameTestData from "../../assets/testData1.json"

import GameItem from "../GameItem/index.jsx";
import SearchBar from "../SearchBar/index.jsx";
import GameCarousel from "../GameCarousel/index.jsx";
import HomeGameItem from "../HomeGameItem/index.jsx";


const Home = () => {
    const [content, setContent] = useState([]);

    useEffect(() => {
        setContent(gameTestData.games)
    }, []);


    return (
        <>
            <div className={styles.main_container}>

                <SearchBar/>

                <div className={styles.main_container__section1}>
                    <GameCarousel/>
                </div>

                <div className={styles.main_container__top_gallery}>
                    <h1>TOP SELLERS</h1>
                    <div className={styles.main_container__top_gallery__items}>
                        <HomeGameItem/>
                        <HomeGameItem/>
                        <HomeGameItem/>

                        <HomeGameItem/>
                        <HomeGameItem/>
                        <HomeGameItem/>
                    </div>
                </div >

                {/*<div className={styles.main_container__popular_gallery}>*/}


                {/*    <p>IMAGES FOR SOME PRODUCST WILL BE SHOWN HERE </p>*/}

                {/*</div>*/}




                {/*<h1>Games</h1>*/}
                {/*/!*{console.log(content)}*!/*/}

                {/*{content.map((data, index) =>(*/}
                {/*    <div key = {index}>*/}
                {/*        <GameItem gameTitle={data.name} prices={data.price_history}/>*/}
                {/*    </div>*/}
                {/*))}*/}





                {/*<div className={styles.main_container__data_display}>*/}

                {/*    {content.map((data, index.jsx) =>(*/}
                {/*        <div key = {index.jsx}>*/}
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