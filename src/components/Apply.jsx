import React from 'react'
import "../App.css";
import "../components/cssstyles/discover.css"
import { Link } from 'react-router-dom';
import Menu from "./images/menu.png"
import Logo from "./images/logo.png"
import { useState } from "react";
import Kalla from "./images/kalla.png"
import Xbrand from "./images/brands.png"
import "../components/cssstyles/program.css"
import "../components/cssstyles/blog.css"
import "../components/cssstyles/faq.css"
import "../components/cssstyles/apply.css"






import Qush from "./images/qush.png"

function Apply() {

    const [Mobile ,setMobile] = useState(false)

   

   




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
                
                <Link to="/apply"><button className='navbtn' >Apply for grant</button></Link>
                <img onClick={() => setMobile(!Mobile)}  src={Menu} alt="" className={Mobile ? "fa-plus" : "fa-minus  menu"} />
            </div>
        </div>

         {/* ortaliq vazifasi */}
          <div className="container faq-glav" data-aos="fade-right">
          <p className='glav'>Apply for a grant</p>
         
          </div>

          {/* tabs */}
          <div className="container questions-faq"  data-aos="zoom-in-up">
            <p className='application '>Grant application</p>
             <div className="create-apply">
                <form className='apply-form'>
                   <label htmlFor="">Name</label><span>*</span>
                   <br />
                   <input type="text" name="" id="" />
                   <br /><br />
                   <label htmlFor="">Email</label><span>*</span>
                   <br />
                   <label htmlFor="" className='out-label'>Primary contact applying  as a team / company</label>
                   <br />
                   <input type="email" />
                   <br /><br />
                   <label htmlFor="">About You</label><span>*</span>
                   <br />
                   <label htmlFor="" className='out-label'>Tell us about yourselfand/your team</label>
                   <br />
                   <input type="text" />
                   <br /><br />
                   <label htmlFor="">Additional Links</label>
                   <br />
                   <label htmlFor="" className='out-label'>if helphul , please share any links about you ( e.g. Website ,Github ,Twitter)</label>
                   <br />
                   <input type="text" />
                   <br />
                   <br />
                   <br />
                   <button className='apply-send'>Send</button>
                </form>
             </div>
          
          </div>
         

         


     <br />
     <br />
         {/* ortaliq vazifasi */}



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

export default Apply;