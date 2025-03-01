
import './App.css'
import React, { useState } from 'react'
import Search from './components/Search'


const App = () => {

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <main>
      <div calssName = "pattern"/> 

      <div className="wrapper">
        <header>
          <img src='./hero.png' alt='Hero Banner'/>
          <h1>
            Find <span className="text-gradient">Trending</span> Movies You'll Enjoy
          </h1>
        </header>
        
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

    </main>
  )
}
export default App
