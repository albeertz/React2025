import { useEffect, useState } from "react"

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${threeFirstWords}`


export function App () {

    const [fact, setFact] = useState()
   
 
    // useEffect (() => {}, [])

    useEffect (() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)

                // const firstWord = fact.split(' ', 3)
                const threeFirstWords = fact.split(' ').slice(0, 3).join(' ')
                console.log(threeFirstWords)

                fetch(`https://cataas.com/cat/says/${threeFirstWords}`,{
                    headers: {
                      'Accept': 'application/json'  // Indicamos que esperamos un JSON como respuesta
                    }
                  })
                .then(res => res.json())
                .then( response => {
                    console.log(response) 
                } )
                // console.log (url)

                
        
            })
    }, [])


    return (
        <main>
            <h1>App de gatitos</h1>
            <p>{fact}</p>
        </main>
    )
}

