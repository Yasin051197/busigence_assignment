import React, { useState } from 'react'
import "../Css/SideNav.css"
import logo from "../Assets/logo.png"
import crm_1 from "../Assets/crm_1.png"
import crm_2 from "../Assets/crm_2.png"
import home1 from "../Assets/home_1.png"
import twiter1 from "../Assets/twitter_1.png"
import { useNavigate } from 'react-router-dom'
import table_black from "../Assets/table_black.png"
import table_blue from "../Assets/table_blue.png"
const Page_crm_join_1 = () => {
  const [dragging, setDragging] = useState(false);
  const [offsetY, setOffsetY] = useState(0);

  const handleMouseDown = (e) => {
    setDragging(true);
    setOffsetY(e.clientY);
    console.log(e.taget)
  };

 
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
                    <div style={{backgroundColor:"rgb(96, 220, 96)",color:"white"}}><h1 >JOIN</h1></div>
                    <div><h1>FILTER</h1></div>
                  </div>
                  <div id="page_two_child" >
                    <div id="page_two_child_first" >
                      <div className="table" onMouseDown={handleMouseDown}>
                        <img src={table_black} alt={table_black} />
                        <h3>accounts</h3>
                      </div>
                      <div className="table" onMouseDown={handleMouseDown}>
                        <img src={table_black} alt={table_black} />
                        <h3>clicks</h3>
                        </div>
                      <div className="table" onMouseDown={handleMouseDown}>
                      <img src={table_black} alt={table_black} />
                        <h3>products</h3>
                      </div>
                      <div className="table" onMouseDown={handleMouseDown}>
                      <img src={table_black} alt={table_black} />
                        <h3>sales_pipeline</h3>
                      </div>
                      <div className="table" onMouseDown={handleMouseDown}>
                      <img src={table_black} alt={table_black} />
                        <h3>sales_teams</h3>
                      </div>
                    </div>
                    <div>

                    </div>
                  </div>
                </div>
                <div id="rsidebar"></div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Page_crm_join_1