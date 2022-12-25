import React, { useContext, useEffect } from 'react'
import { dataContext } from '../contexts/DataContext'
import { Link } from "react-router-dom"
function Drivers() {
    let {
        data,
        isloading,
        count,
        setCount,
        favorites,
        setFavorites,
        toast,
        setToast
    }
        = useContext(dataContext)
    // console.log(data)
    // console.log(favorites)
    const prev = () => {
        if (count > 1) {
            setCount(count -= 1)
        }
    }
    const next = () => {
        setCount(count += 1)
    }
    const addFavorites = (element) => {
        console.log(element)
        let findFavorit = favorites.find((x) => x.name == element.name)
        if (!findFavorit) {
            setFavorites([...favorites, {
                name: element.name,
                birth_year:element.birth_year,
                eye_color:element.eye_color,
                skin_color:element.skin_color,
                hair_color:element.hair_color,
                gender:element.gender
            }])
            setToast(true)
            setTimeout(()=>{
                setToast(false)
            },1000)
        }
    }
    return (
        <div className='driver'>
            <div>{count}/9</div>
            {
                isloading ? (
                    <div className="loader"></div>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Birth Year</th>
                                <th>Eye Color</th>
                                <th>Skin Color</th>
                                <th>Hair Color</th>
                                <th>Gender</th>
                                <th>Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data && data.map((element) => (
                                    <tr key={element.name}>
                                        <td>{element.name}</td>
                                        <td>{element.birth_year}</td>
                                        <td>{element.eye_color}</td>
                                        <td>{element.skin_color}</td>
                                        <td>{element.hair_color}</td>
                                        <td style={{ color: element.gender == "female" ? "red" : "blue" }}>{element.gender}</td>
                                        <td><button onClick={() => addFavorites(element)}>Add Favotites</button></td>
                                    </tr>
                                ))

                            }
                        </tbody>
                    </table>

                )
            }
            <div>
                <button style={{ display: count == 1 ? "none" : "block" }} onClick={() => prev()}>Prev</button>
                <button style={{ display: count == 9 ? "none" : "block" }} onClick={() => next()}>Next</button>
            </div>

        {
            toast &&(
                <div id="toasts">
                <div className="toast ${situation}-toast">
                    <p className="message">Add Favorites</p>
                </div>
            </div>
            )
        }
        </div>
    )
}

export default Drivers
