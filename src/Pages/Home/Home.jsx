import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Exploremenu from '../../components/Exploremenu/Exploremenu'
import FoodDisplay from '../../components/Fooddisplay/FoodDisplay'
import Appdownload from '../../components/Mobileapp/Appdownload'
const Home = () => {
  const [category,setCategory]=useState("All");
  return (
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <Appdownload/>
    </div>
  )
}

export default Home
