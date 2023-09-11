import React from 'react';
import "../App.css";
import "../App.css";
import "../components/cssstyles/grants.css"
import "../components/cssstyles/linkprogram.css"
import "../components/cssstyles/profile.css"

import Deletetype from "./images/deletetype.png"

import { Link } from 'react-router-dom';
import Menu from "./images/menu.png"
import Logo from "./images/logo.png"
import Linkedin from "./images/linkedin.png"
import Github from "./images/github.png"
import Twitter from "./images/twitter.png"
import Website from "./images/filink.png"
import KommentRasm from "./images/Avatar group.png"
import Profilesingle from "./images/profisingle.png"
import Kalla from "./images/kalla.png"
import Xbrand from "./images/brands.png"
import Qush from "./images/qush.png"
import { useState } from "react";




function Profiles() {
    const [Mobile ,setMobile] = useState(false)
    // const [toogle, setToogle] =useState(1)

    // function updateToggle(id){
    //     setToogle(id)
    // }

    return ( 
    
    <>
   <div className="container-fluid all-grants">
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

        {/*  */}
         <div className="container profile-single">
            <center>
               <img className='single-foto' src={Profilesingle}  data-aos="fade-left"/>
               <Link to="/foundedgrants"><img className='deletetype del-button' src={Deletetype} alt=""  data-aos="fade-left" /></Link>
                <p className="cuper-profile" data-aos="fade-left">Jane Cooper</p>
            </center>
             <br />
             <div className="texts-apps" data-aos="fade-right">
                 <p className='team'>About</p>
                    <p className='includes'>For athletes, high altitude produces two contradictory effects on performance. For explosive events (sprints up to 400 metres, long jump, triple jump) the reduction in atmospheric pressure means there is less resistance from the atmosphere and the athlete's performance will generally be better at high altitude.</p>
            </div>
            <div className="texts-apps" data-aos="fade-left">
                 <p className='team'>Links</p>
                <div className="single-links">
                     <Link>
                     <div className="twit-link twice-link" data-aos="zoom-in">
                        <img src={Twitter} alt=""/>
                        <p>Twitter</p>
                      </div>
                     </Link>
                     <Link>
                     <div className="linkedin-link twice-link" data-aos="zoom-in">
                        <img src={Linkedin} alt=""/>
                        <p>LinkedIn</p>
                      </div>
                     </Link>
                    <Link>
                    <div className="github-link twice-link" data-aos="zoom-in">
                        <img src={Github} alt=""/>
                        <p>Github</p>
                      </div>
                    </Link>
                  <Link>
                  <div className="website-link twice-link" data-aos="zoom-in">
                        <img src={Website} alt=""/>
                        <p>Website</p>
                      </div>
                  </Link>
                </div>
            </div>


                 <div className="container hello this" data-aos="fade-up">
                     <p className="wild more-this">Projects</p>
                 </div>


            <div className="container roadmap">
      <article className="items togle2 roadmap-adds" data-aos="fade-right">
                 <p className="boshlash">Category</p>
                 <p className="keyin">Gitcoin Grants Round 13 sponsorship</p>
                 <p className="keyingi">Funding amount:$5,000 - $6,000</p>
                 <p className="psti">So we have to learn about them in a sort of abstract or imaginative fashion and not by connection with our direct experience.</p>
               <br />
                 
                 <img  className=' pas2 kommentrasm' src={KommentRasm} alt="" />
            
             </article>
             <article className="items togle2 roadmap-adds" data-aos="fade-left">
                 <p className="dashbord"></p>
                 <p className="boshlash">Category</p>
                 <p className="keyin">Japanese content website</p>
                 <p className="keyingi">Funding amount:$5,000 - $6,000</p>
                 <p className="psti">Historically, the electron, for example, was thought to behave like a particle, and then it was found that in many respects it behaved like a ...</p>
           <br />
           <br />
           <br />
                 <img  className=' pas3 kommentrasm' src={KommentRasm} alt="" />
            
             </article>
      </div>

         </div>

        {/*  */}

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
    
    
    </> );
}

export default Profiles;