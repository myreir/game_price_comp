import { useState, useEffect } from 'react';
import styles from "./About.module.scss"
import aboutData from "../../content/about.json";

function About() {
    const [content, setContent] = useState([]); // Updated this line

    useEffect(() => {
        setContent(aboutData);
    }, []);




    return (
        <>
            <div className={styles.about_container}>

                <div className={styles.about_container__content} >
                    {content.map((data, index) =>(
                        <div key = {index}>
                            <h1>{data.title}:</h1>
                            <p>{data.content}</p>
                        </div>
                    ))}
                </div>




            </div>
        </>
    );
}

export default About;