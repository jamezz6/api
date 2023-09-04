import { useState, useEffect } from "react"
import { React } from "react"
import styles from "./mystyle.module.css"
import x from "./components/background.js"
import "./App.css"

const App = () => {

    const [beer, setBeer] = useState(``)

    const [error, setError] = useState(null)

    const handler = async () => {
        try {
        let response = await fetch("https://api.punkapi.com/v2/beers/random")
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        let data = await response.json()
        setBeer(data[0])
        console.log(beer)
    } catch (error) {
        setError(`Could not fetch any data`)
        console.log(error.message)
    }
    }
    useEffect(() => { 
        handler()
    }, [])
    return (
        <div> <style>{`body { background-color: #ffe6e2; }`}</style>
        <div className={styles.container}>
                    <h1 className={styles.bigblue}>The Alcoholic Beverage Randomiser</h1></div> <div className={styles.container2}>
            <button className={styles.button} onClick={handler}>Click on me!</button></div>
            {beer ? (
                <div>
                    <div className={styles.container3}>
                    <h1 className={styles.bigblue2}>{beer.name}</h1></div><div className={styles.container4}>
                    <h2 className={styles.bigblue3}>{beer.description}</h2></div> <div className={styles.container5}>
                    <h2 className={styles.bigblue4}><img src={beer.image_url} width="105" height="320" /></h2> </div>
                    <div>

                        <> 
                            {beer.ingredients.malt.map((item, index
                            ) => {
                                return (<div className={styles.container6}> <h2 className={styles.bigblue5}><p>{item.name}</p></h2></div>)
                            })} 
                        </>
                    </div>
                </div>
            )
                :
                (
                <h1>loading...</h1>
            )
                        }  
        </div> 
            ) 
        } 

export default App