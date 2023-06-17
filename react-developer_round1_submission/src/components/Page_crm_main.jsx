import React from 'react'
import "../Css/SideNav.css"
import logo from "../Assets/logo.png"
import crm_1 from "../Assets/crm_1.png"
import crm_2 from "../Assets/crm_2.png"
import home1 from "../Assets/home_1.png"
import twiter1 from "../Assets/twitter_1.png"
import { useNavigate } from 'react-router-dom'
const Page_crm_main = () => {
const navigate=useNavigate()
  const handleClick=()=>{
    navigate("/join1")
  }
  return (
    <div>
      <div id="SideNav_container">
        <div id="SideNav_container_child1">
            <div>
                <img id="logo" src={logo} alt={logo} />
            </div>
            <div id="data">
                <div>
                    <div><img src={home1} alt={twiter1} />Home</div>
                    <div><h3>Social Data</h3></div>
                </div>
                <div>
                    <div><img src={twiter1} alt={twiter1} />Twiter</div>
                    <div><h3>Customer Data</h3></div>
                </div>
            </div>
            <div>
                <button id="CRM"><img src={crm_2} alt={crm_2} />CRM</button>
            </div>
        </div>
        <div id="SideNav_container_child2">
            <div id="nav"></div>
            <div id="main_container">
                <div id="mainpage_container_div">
                  <div id="mainpage_container_div_child1">
                    <div onClick={handleClick}><h1>JOIN</h1></div>
                    <div><h1>FILTER</h1></div>
                  </div>
                  <div id="mainpage_container_div_child2">
                    <div><h2>Welcome to CRM</h2></div>
                  </div>
                </div>
                <div id="rsidebar"></div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Page_crm_main