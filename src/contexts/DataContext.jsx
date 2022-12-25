import { createContext, useContext, useState, useEffect } from "react";
export const dataContext = createContext(null)
export const DataProvider = ({ children }) => {
   
    const [data, setData] = useState([])
    const [isloading,setİsLoading]=useState(false)
    const [count,setCount]=useState(1)
    const [favorites,setFavorites]=useState([])
    const [toast,setToast]=useState(false)
    const values = {
        data,
        isloading,
        count,
        setCount,
        favorites,
        setFavorites,
        toast,
        setToast
    }

    const getData = () => {
        setİsLoading(true)
        fetch(`https://swapi.dev/api/people?page=${count}`)
            .then(res => res.json())
            .then(info =>
               {
                setData(info.results)
                setİsLoading(false)
            }
            )
    }

    useEffect(() => {
        getData()
    }, [count])

    return <dataContext.Provider value={values}>{children}</dataContext.Provider>
}

// `http://ergast.com/api/f1/drivers.json?limit=30&offset=31`