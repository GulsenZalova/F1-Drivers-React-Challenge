import { useEffect, useState } from 'react'
import { Link, Route, Routes } from "react-router-dom"
import { routes } from './routes/routes'
import './App.css'

function App() {

  return (
    <div className="App">
      <header>
         <ul>
          <li><Link to={"/"}>Drivers</Link></li>
          <li><Link to={"/favotites"}>Favotites</Link></li>
         </ul>
      </header>

      {
       <Routes>
        {
            routes.map((element)=>{
              return <Route path={element.path} element={element.element}></Route>
          })
        }
       </Routes>
      }
    </div>
  )
}

export default App
