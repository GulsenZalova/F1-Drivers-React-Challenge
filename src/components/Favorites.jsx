import React, { useContext } from 'react'
import { dataContext } from '../contexts/DataContext'

function Favorites() {
  let {favorites,setFavorites,toast,setToast}=useContext(dataContext)
  const deleteFavorites=(name)=>{
    let filteredFavorite=favorites.filter((x)=>x.name!=name)
    setFavorites(filteredFavorite)
    setToast(true)
    setTimeout(()=>{
      setToast(false)
    },1000)
  }
  const allFavoritesDelete=()=>{
     setFavorites([])
     setToast(true)
     setTimeout(()=>{
       setToast(false)
     },1000)
  }
  return (
    <div className='container'>
        <div className='driver'>
        <div className='allDelete'><button className='btn deleteBTN' onClick={()=>allFavoritesDelete()}>All Favotites</button></div>
            {
              (
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
                                favorites && favorites.map((element) => (
                                    <tr key={element.name}>
                                        <td>{element.name}</td>
                                        <td>{element.birth_year}</td>
                                        <td>{element.eye_color}</td>
                                        <td>{element.skin_color}</td>
                                        <td>{element.hair_color}</td>
                                        <td style={{ color: element.gender == "female" ? "red" : "blue" }}>{element.gender}</td>
                                        <td><button className='btn deleteBTN' onClick={() => deleteFavorites(element.name)}>Delete Favorite</button></td>
                                    </tr>
                                ))

                            }
                        </tbody>
                    </table>

                )
            }

        {
            toast &&(
                <div id="toasts">
                <div className="toast success-toast">
                    <p className="message">Success Delete</p>
                </div>
            </div>
            )
        }
        </div>
    </div>
  )
}

export default Favorites
