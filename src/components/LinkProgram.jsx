import React from 'react';
import "../App.css";
import "../App.css";
import "../components/cssstyles/grants.css"
import "../components/cssstyles/linkprogram.css"
import KommentRasm from "./images/Avatar group.png"
import { Link } from 'react-router-dom';
import Menu from "./images/menu.png"
import Logo from "./images/logo.png"
import HeadFoto from "./images/headfoto.png"
import Chectitem from "./images/chectitem.svg"
import Linkcha from "./images/linkcha.png"
import Deletetype from "./images/deletetype.png"
import Avatar1 from "./images/avatar1.png"
import Greylink from "./images/greylink.png"
import Avatar2 from "./images/avatar2.png"
import Newlink from "./images/newlink.png"
import Bluearrow from "./images/bluearrow.png"
import { useState } from "react";
// import Linkcha from "./linkcha.png"
// import { Swiper, SwiperSlide } from 'swiper/react';
// import KommentRasm from "./Avatar group.png"
import Kalla from "./images/kalla.png"
import Xbrand from "./images/brands.png"
import Qush from "./images/qush.png"


function LinkProgram() {
    const [Mobile ,setMobile] = useState(false)
    // const [toogle, setToogle] =useState(1)

    // function updateToggle(id){
    //     setToogle(id)
    // }

    // const [showImage, setShowImage] = useState(false);
    // function deleteType() {
    //     setShowImage(true);
    //   }

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
           <div className="container  single-adds">
               <center>
               <img className='header-foto' src={HeadFoto} data-aos="fade-right" />
               <Link to="/grants"><img className='deletetype  nonedelete' src={Deletetype} alt="" data-aos="fade-right" /></Link>
               
               </center>

               <p className="categor" data-aos="fade-right">Category</p>

               <h3 className='youtube' data-aos="fade-right">Youtube dYdX Education Library</h3>

               <div className="flex-founder" data-aos="fade-left">
                   <div className="first-founder">
                    <button className='check-founder'>Funded <img src={Chectitem} alt="" /></button>
                    <p className='founder-money'>Funding amount: <span>$5,000</span> </p>
                   </div>
                  <button className='project-link'>Project link <img src={Newlink} alt="" /></button>
               </div>

               {/*  */}
                 <p className='team'>Team</p>

                 <div className="profile-apps" data-aos="fade-down">
                 <Link to="/theresawebb">
                    <button className='pro-file'><img src={Avatar1} alt="" /><p>Theresa Webb</p></button>
                 </Link>
                 <Link to="/janecooper">
                 <button className='pro-file'><img src={Avatar2} alt="" /><p>Jenny Wilson</p></button>
                 </Link>
                 </div>
                 <br />
                <hr />
                <br />

                <div className="texts-apps" data-aos="fade-right">
                 <p className='team'>Description</p>
                    <p className='includes'>Grant includes work on Funding Rates page, Rewards & Tracking Simulator, and CLI Trading tool. All will be combined in a community accessible webpage that will continue to host additional work done and maintenance on behalf of Chaos Labs.</p>
                </div>
                <div className="texts-apps" data-aos="fade-left">
                 <p className='team'>Purpose</p>
                    <p className='includes'>Funding Rates page will help promote and guide traders around Perpetual premiums found across all assets traded on dYdX. Rewards & Tracking simulator will help market the benefits of trading on dYdX and assist current traders in mapping out their rewards. The CLI trading tool will make it easier for non-UI based traders to execute quickly on dYdX. The general purpose of this grant is to recruit Chaos Labs, a very qualified contributor, to work with dYdX on current and future projects.</p>
                </div>
                <div className="texts-apps" data-aos="fade-right">
                 <p className='team'>Execution</p>
                    <p className='includes'>3 months to completion. Each individual grant is estimated to take 120 days, but will be worked on concurrently.</p>
                </div>
                <div className="texts-apps" data-aos="fade-left">
                 <p className='team'>Payment structure</p>
                    <p className='includes'>25% upfront / 75% at completion of all Grants</p>
                </div>
                <div className="texts-apps" data-aos="fade-right">
                 <p className='team'>Useful links</p>
                   
                 <Link to="https://www.figma.com/file/eWP1AMJzYWDDTbxzkSu4Bg/dYdX-Grants?type=design&node-id=2352-25001&mode=design&t=N3IQv1oNkNuHYnDz-0"><p className='includes revision'>www.granttitleproject.com <img src={Bluearrow} alt="" /></p></Link>
                 <Link to="https://www.figma.com/file/eWP1AMJzYWDDTbxzkSu4Bg/dYdX-Grants?type=design&node-id=2352-25001&mode=design&t=N3IQv1oNkNuHYnDz-0"><p className='includes revision'>www.granttitleproject.com <img src={Bluearrow} alt="" /></p></Link>
                 <Link to="https://www.figma.com/file/eWP1AMJzYWDDTbxzkSu4Bg/dYdX-Grants?type=design&node-id=2352-25001&mode=design&t=N3IQv1oNkNuHYnDz-0"><p className='includes revision'>www.granttitleproject.com <img src={Bluearrow} alt="" /></p></Link>
                
                </div>
                <div className="texts-apps">
                 <p className='team'>Funding transactions</p>
                   <div className="rounder"  data-aos="zoom-in">
                     <div className="rou">
                        <p className="rou9">Round 9</p>
                        <p className="ro8">Date</p>
                        <p className="ro7">Description</p>
                     </div>
                     <p className='team-money'><span>$250,000.00</span> <img src={Greylink} alt="" /></p>
                   </div>
                   <br />
                   <div className="rounder"  data-aos="zoom-in">
                     <div className="rou">
                        <p className="rou9">Funding title</p>
                        <p className="ro8">Date</p>
                        <p className="ro7">Description</p>
                     </div>
                     <p className='team-money'><span>$30,000.00</span> <img src={Greylink} alt="" /></p>
                   </div>
                </div>
                <br />
                <br />
    <div className="container hello this"  data-aos="zoom-in">
        <p className="wild more-this">More grants like this </p>
       
        <p className=' ato linkcha'><Link className='ato linkcha'> View all similar projects<img src={Linkcha} alt="" /></Link></p>
    </div>

      <div className="container roadmap" >
      <article className="items togle2 roadmap-adds"  data-aos="fade-right">
                 <p className="boshlash">Category</p>
                 <p className="keyin">Gitcoin Grants Round 13 sponsorship</p>
                 <p className="keyingi">Funding amount:$5,000 - $6,000</p>
                 <p className="psti">So we have to learn about them in a sort of abstract or imaginative fashion and not by connection with our direct experience.</p>
               <br />
                 
                 <img  className=' pas2 kommentrasm' src={KommentRasm} alt="" />
            
             </article>
             <article className="items togle2 roadmap-adds"  data-aos="fade-right">
                 <p className="boshlash">Category</p>
                 <p className="keyin">Rust SDK</p>
                 <p className="keyingi">Funding amount:$5,000 - $6,000</p>
                 <p className="psti">At the end of the 19th century, physics appeared to be at an apex. Several people are reported to have said something like this</p>
             <br />
             <br />
              
   
                 <img  className=' pas2 kommentrasm' src={KommentRasm} alt="" />
            
             </article>
      </div>



           </div>

        {/*  */}
        
    <div className="container blur"  data-aos="fade-down">
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
    
    
    </> );
}

export default LinkProgram;