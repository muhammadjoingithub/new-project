import React from 'react'
import "../App.css";
import "../components/cssstyles/discover.css"
import { Link } from 'react-router-dom';
import Menu from "./images/menu.png"
import Logo from "./images/logo.png"
import { useState } from "react";
import Linkcha from "./images/linkcha.png"
import Kalla from "./images/kalla.png"
import Xbrand from "./images/brands.png"
import Greylink from "./images/greylink.png"
import "../components/cssstyles/program.css"


import Qush from "./images/qush.png"

function Program() {

    const [Mobile ,setMobile] = useState(false)

    const [toogle, setToogle] =useState(1)

function updateToggle(id){
    setToogle(id)
}




    return ( 
        <>
    <div className="container-fluid all-fluid">
    <div className= " container-fluid navbar">
    <Link to="/"> <img className='logotip' src={Logo} alt="" /></Link>
            <div className="ulli">
                <ul className={Mobile? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}> 
                    <li><Link to="/"></Link></li>

                    <li><Link to="/discover">Discover initiatives</Link></li>
                    <li><Link to="/grants">Funded grants</Link></li>
                    <li><Link to="/program">Program expenses</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>

                </ul>
                
                <Link to="/apply"><button className='navbtn'>Apply for grant</button></Link>
                <img onClick={() => setMobile(!Mobile)}  src={Menu} alt="" className={Mobile ? "fa-plus" : "fa-minus  menu"} />
            </div>
        </div>

         {/* ortaliq vazifasi */}
          <div className="container" data-aos="fade-right">
          <p className='glav'>Program expenses</p>
         
          </div>

          {/* tabs */}

          <div className="container tabs" data-aos="fade-left">
             <div className="block-tabs programtabs">
            <div className="flex-fill" onClick={()=>updateToggle(1)}>All</div>
            <div className="flex-fill" onClick={()=>updateToggle(2)}>Category</div>
            <div className="flex-fill" onClick={()=>updateToggle(3)}>Category</div>
            <div className="flex-fill" onClick={()=>updateToggle(4)}>Category</div>

             </div>
          </div>

          {/* natijalar */}
          <div className="container all-founder grogram-all">
            <center>
            <div className={toogle === 1 ? "show-content" : "content"}>
                   <div className="rounder program-round" data-aos="zoom-in">
                     <div className="rou">
                        <p className="rou9">Airtable Yearly Subscription</p>
                        <p className="ro8">Vendor</p>
                        <p className="ro7">Airtable is used to build the application form and store all application data.</p>
                     </div>
                     <p className='team-money'><span>$250.00</span> <img src={Greylink} alt="" /></p>
                   </div>
                   <div className="rounder program-round" data-aos="zoom-in">
                     <div className="rou">
                        <p className="rou9">Expense title</p>
                        <p className="ro8">Type</p>
                        <p className="ro7">Description</p>
                     </div>
                     <p className='team-money'><span>$30,000.00</span> <img src={Greylink} alt="" /></p>
                   </div>
                   <div className="rounder program-round" data-aos="zoom-in">
                     <div className="rou">
                        <p className="rou9">Expense title</p>
                        <p className="ro8">Type</p>
                        <p className="ro7">Description</p>
                     </div>
                     <p className='team-money'><span>$30,000.00</span> <img src={Greylink} alt="" /></p>
                   </div>
                   <div className="rounder program-round"  data-aos="zoom-in">
                     <div className="rou">
                        <p className="rou9">Expense title</p>
                        <p className="ro8">Type</p>
                        <p className="ro7">Description</p>
                     </div>
                     <p className='team-money'><span>$30,000.00</span> <img src={Greylink} alt="" /></p>
                   </div>
                   <div className="rounder program-round" data-aos="zoom-in">
                     <div className="rou">
                        <p className="rou9">Expense title</p>
                        <p className="ro8">Type</p>
                        <p className="ro7">Description</p>
                     </div>
                     <p className='team-money'><span>$30,000.00</span> <img src={Greylink} alt="" /></p>
                   </div>
                   <div className="rounder program-round" data-aos="zoom-in">
                     <div className="rou">
                        <p className="rou9">Expense title</p>
                        <p className="ro8">Type</p>
                        <p className="ro7">Description</p>
                     </div>
                     <p className='team-money'><span>$30,000.00</span> <img src={Greylink} alt="" /></p>
                   </div>
                   <div className="rounder program-round" data-aos="zoom-in">
                     <div className="rou">
                        <p className="rou9">Expense title</p>
                        <p className="ro8">Type</p>
                        <p className="ro7">Description</p>
                     </div>
                     <p className='team-money'><span>$30,000.00</span> <img src={Greylink} alt="" /></p>
                   </div>
                   <div className="rounder program-round" data-aos="zoom-in">
                     <div className="rou">
                        <p className="rou9">Expense title</p>
                        <p className="ro8">Type</p>
                        <p className="ro7">Description</p>
                     </div>
                     <p className='team-money'><span>$30,000.00</span> <img src={Greylink} alt="" /></p>
                   </div>
           
           </div>
            <div className={toogle === 2 ? "show-content" : "content"}>
            <div className="rounder program-round" data-aos="zoom-in">
                     <div className="rou">
                        <p className="rou9">Expense title</p>
                        <p className="ro8">Type</p>
                        <p className="ro7">Description</p>
                     </div>
                     <p className='team-money'><span>$30,000.00</span> <img src={Greylink} alt="" /></p>
                   </div>
                   <div className="rounder program-round" data-aos="zoom-in">
                     <div className="rou">
                        <p className="rou9">Airtable Yearly Subscription</p>
                        <p className="ro8">Vendor</p>
                        <p className="ro7">Airtable is used to build the application form and store all application data.</p>
                     </div>
                     <p className='team-money'><span>$250.00</span> <img src={Greylink} alt="" /></p>
                   </div>
            </div>
            <div className={toogle === 3 ? "show-content" : "content"}>
                <div className="rounder program-round" data-aos="zoom-in">
                     <div className="rou">
                        <p className="rou9">Airtable Yearly Subscription</p>
                        <p className="ro8">Vendor</p>
                        <p className="ro7">Airtable is used to build the application form and store all application data.</p>
                     </div>
                     <p className='team-money'><span>$250.00</span> <img src={Greylink} alt="" /></p>
                </div>
                <div className="rounder program-round" data-aos="zoom-in">
                     <div className="rou">
                        <p className="rou9">Expense title</p>
                        <p className="ro8">Type</p>
                        <p className="ro7">Description</p>
                     </div>
                     <p className='team-money'><span>$30,000.00</span> <img src={Greylink} alt="" /></p>
                </div>
            </div>

            <div className={toogle === 4 ? "show-content" : "content"}>
            <div className="rounder program-round" data-aos="zoom-in">
                     <div className="rou">
                        <p className="rou9">Expense title</p>
                        <p className="ro8">Type</p>
                        <p className="ro7">Description</p>
                     </div>
                     <p className='team-money'><span>$30,000.00</span> <img src={Greylink} alt="" /></p>
                </div>
                <div className="rounder program-round" data-aos="zoom-in">
                     <div className="rou">
                        <p className="rou9">Expense title</p>
                        <p className="ro8">Type</p>
                        <p className="ro7">Description</p>
                     </div>
                     <p className='team-money'><span>$30,000.00</span> <img src={Greylink} alt="" /></p>
                </div>
                <div className="rounder program-round" data-aos="zoom-in">
                     <div className="rou">
                        <p className="rou9">Expense title</p>
                        <p className="ro8">Type</p>
                        <p className="ro7">Description</p>
                     </div>
                     <p className='team-money'><span>$30,000.00</span> <img src={Greylink} alt="" /></p>
                </div>

            </div>
            </center>
         </div>


     <br />
     <br />
         {/* ortaliq vazifasi */}


        <div className="container blur" data-aos="fade-down">
       <div className="blura">
       <p className="mind">
        Have a project in mind?
        </p>
        <p className="create">
        Let’s create something awesome.
        </p>
        <p className="hug">Apply for grant <img src={Linkcha} className="linkcha" alt="" /></p>
       </div>

    </div>

    <div className="container footr">
        <div className="footer">
           <div className="xbrand">
           <img src={Xbrand} alt="" />
           <Link className="alink" to="/about">About</Link>
           <Link className="alink" to="/faq">FAQ</Link>
           <Link className="alink" to="/assets">Brand assets</Link>
           <Link className="alink" to="/foundation">dYdX Foundation</Link>
           <Link className="alink" to="/trading">dYdX trading</Link>
           </div>
           <div className="ybrand">
               <img src={Qush} alt="" />
               <img src={Kalla} alt="" />
           </div>

        </div>
    </div>
    </div>
        </>
     );
}

export default Program;