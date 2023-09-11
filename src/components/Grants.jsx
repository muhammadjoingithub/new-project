import React from 'react';
import "../App.css";
import "../App.css";
import "../components/cssstyles/grants.css"
import { Link } from 'react-router-dom';
import Menu from "./images/menu.png"
import Logo from "./images/logo.png"
import { useState } from "react";
import Linkcha from "./images/linkcha.png"
import KommentRasm from "./images/Avatar group.png"
import Kalla from "./images/kalla.png"
import Xbrand from "./images/brands.png"
import Qush from "./images/qush.png"
import Slider from "react-slick";
function Grants() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    const [Mobile ,setMobile] = useState(false)
    const [toogle, setToogle] =useState(1)

    function updateToggle(id){
        setToogle(id)
    }

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


        {/* fonded Grants */}
             <div className="container head-grans" data-aos="fade-right">
                <h1> Funded grants </h1>
             </div>

             {/*  */}

             {/*  */}

       
               <div className="container" data-aos="fade-left">
               <Slider {...settings}>
    <div>
    <div className="flex-fill wrapper-grants img-fluid" width={500} onClick={()=>updateToggle(1)}>All</div>
    </div>
    <div>
    <div className="flex-fill wrapper-grants img-fluid" width={500} onClick={()=>updateToggle(2)}>Technical / Tool Development</div>
    </div>
    <div>
    <div className="flex-fill wrapper-grants img-fluid" width={500} onClick={()=>updateToggle(3)}>Governance</div>
    </div>
    <div>
    <div className="flex-fill wrapper-grants img-fluid" width={500} onClick={()=>updateToggle(4)}>Growth / Marketing</div>
    </div>
    <div>
    <div className="flex-fill wrapper-grants img-fluid" width={500} onClick={()=>updateToggle(5)}>Analytics</div>
    </div>
    <div>
    <div className="flex-fill wrapper-grants img-fluid" width={500} onClick={()=>updateToggle(6)}>Third Party Provider</div>
    </div>
  </Slider>
               </div>



       




             {/*  */}

        <div className="container grants-header ">
             <div className={toogle === 1 ? "show-content" : "content"}>
            <div className="all-granttypes">
            <Link to="/foundedgrants" className='first-linkidein'>
            <article className="items" data-aos="fade-right">
                 <p className="boshlash">Crowdfund</p>
                 <p className="keyin">Funding rates page</p>
                 <p className="keyingi">Funding amount : $5,000 - $6,000</p>
                 <p className=" psti">Grant will be used to build a dedicated web app to give traders a view of all dYdX asset funding rates across multiple timeframes. The page will be interactive to include deep diving across different assets and historical analysis of changing rates. It will also include API functionalities to allow developer access.</p>
  
                 <img  className=' pas1 kommentrasm' src={KommentRasm} alt="" />
            
             </article>
            </Link>
            <article className="items" data-aos="fade-down">
                 <p className="boshlash">Crowdfund</p>
                 <p className="keyin">Funding rates page</p>
                 <p className="keyingi">Funding amount : $5,000 - $6,000</p>
                 <p className=" psti">Grant will be used to build a dedicated web app to give traders a view of all dYdX asset funding rates across multiple timeframes. The page will be interactive to include deep diving across different assets and historical analysis of changing rates. It will also include API functionalities to allow developer access.</p>
  
                 <img  className=' pas1 kommentrasm' src={KommentRasm} alt="" />
            
             </article>

             <article className="items" data-aos="fade-left">
                 <p className="dashbord"></p>
                 <p className="boshlash">Edition</p>
                 <p className="keyin">Tradingview integration</p>
                 <p className="keyingi">Funding amount : $5,000 - $6,000</p>
                 <p className="psti">Grant will be used to build a dedicated web app to give traders a view of all dYdX asset funding rates across multiple timeframes. The page will be interactive to include deep diving across different assets and historical analysis of changing rates. It will also include API </p>
             
                 <img  className=' pas3 kommentrasm' src={KommentRasm} alt="" />
            
             </article>

             <article className="items" data-aos="fade-right">
                 <p className="boshlash">Entry</p>
                 <p className="keyin">Rewards optimization research and paper</p>
                 <p className="keyingi">Funding amount : $5,000 - $6,000</p>
                 <p className="psti">The Grant will be used to write a full research report and code samples that will determine optimal trading strategies for rewards maximization. The paper will be marketed across several platforms and shared among trading circles to help readership shared .</p>

                 <img  className=' pas2 kommentrasm' src={KommentRasm} alt="" />
            
             </article>

             <article className="items" data-aos="fade-down">
                 <p className="boshlash">Crowdfund</p>
                 <p className="keyin">Funding rates page</p>
                 <p className="keyingi">Funding amount : $5,000 - $6,000</p>
                 <p className=" psti">Grant will be used to build a dedicated web app to give traders a view of all dYdX asset funding rates across multiple timeframes. The page will be interactive to include deep diving across different assets and historical analysis of changing rates. It will also include API functionalities to allow developer access.</p>
  
                 <img  className=' pas1 kommentrasm' src={KommentRasm} alt="" />
            
             </article>

             <article className="items" data-aos="fade-left">
                 <p className="dashbord"></p>
                 <p className="boshlash">Edition</p>
                 <p className="keyin">Tradingview integration</p>
                 <p className="keyingi">Funding amount : $5,000 - $6,000</p>
                 <p className="psti">Grant will be used to build a dedicated web app to give traders a view of all dYdX asset funding rates across multiple timeframes. The page will be interactive to include deep diving across different assets and historical analysis of changing rates. It will also include API </p>
             
                 <img  className=' pas3 kommentrasm' src={KommentRasm} alt="" />
            
             </article>

             <article className="items" data-aos="fade-right">
                 <p className="boshlash">Entry</p>
                 <p className="keyin">Rewards optimization research and paper</p>
                 <p className="keyingi">Funding amount : $5,000 - $6,000</p>
                 <p className="psti">The Grant will be used to write a full research report and code samples that will determine optimal trading strategies for rewards maximization. The paper will be marketed across several platforms and shared among trading circles to help readership shared .</p>

                 <img  className=' pas2 kommentrasm' src={KommentRasm} alt="" />
            
             </article>
            </div>
             </div>
             <div className={toogle === 2 ? "show-content" : "content"}>
          
            <div className="toogle2">
            <article className="items togle2" data-aos="fade-right">
                 <p className="boshlash">Category</p>
                 <p className="keyin">Hedgie banner</p>
                 <p className="keyingi">They can be used to deliver spacecraft to the ends of the solar system with hyper-pinpoint accuracy.</p>
                 <p className="psti">Funding amount:$5,000 - $6,000</p>

                 <img  className=' pas2 kommentrasm' src={KommentRasm} alt="" />
            
             </article>
             <article className="items togle2" data-aos="fade-up">
                 <p className="boshlash">Category</p>
                 <p className="keyin">Hedgie educational content</p>
                 <p className="keyingi">Funding amount:
$5,000 - $6,000</p>
                 <p className="psti">They are mathematically consistent in the sense that no one rule would ever violate another.</p>
                   <br />
                 <img  className=' pas2 kommentrasm' src={KommentRasm} alt="" />
            
             </article>
             <article className="items togle2" data-aos="fade-left">
                 <p className="boshlash">Category</p>
                 <p className="keyin">DGP referral program</p>
                 <p className="keyingi">Funding amount:
$5,000 - $6,000</p>
                 <p className="psti">Funding amount:$5,000 - $6,000</p>
                 <br />
                 <br />
                 <img  className=' pas2 kommentrasm' src={KommentRasm} alt="" />
            
             </article>
            </div>
                </div>
                <div className={toogle === 3 ? "show-content" : "content"}>
                   <div className="toogle2" data-aos="fade-right">
                   <article className="items togle2">
                 <p className="dashbord"></p>
                 <p className="boshlash">Category</p>
                 <p className="keyin">Hedgie educational content</p>
                 <p className="keyingi">Funding amount:
$5,000 - $6,000</p>
                 <p className="psti">This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then ...</p>
           <br />
           <br />
           <br />
                 <img  className=' pas3 kommentrasm' src={KommentRasm} alt="" />
            
             </article>

             <article className="items togle2" data-aos="fade-down">
                 <p className="dashbord"></p>
                 <p className="boshlash">Category</p>
                 <p className="keyin">Japanese content website</p>
                 <p className="keyingi">Funding amount:$5,000 - $6,000</p>
                 <p className="psti">Historically, the electron, for example, was thought to behave like a particle, and then it was found that in many respects it behaved like a ...</p>
           <br />
           <br />
                 <img  className=' pas3 kommentrasm' src={KommentRasm} alt="" />
            
             </article>

             <article className="items togle2" data-aos="fade-left">
                 <p className="dashbord"></p>
                 <p className="boshlash">Category</p>
                 <p className="keyin">ETHGlobal event sponsorship</p>
                 <p className="keyingi">Funding amount:$5,000 - $6,000</p>
                 <p className="psti">Because atomic behavior is so unlike ordinary experience, it is very difficult to get used to, and it appears peculiar and mysterious to everyon ...</p>
           <br />
           <br />
                 <img  className=' pas3 kommentrasm' src={KommentRasm} alt="" />
            
             </article>

                   </div>
                </div>
                <div className={toogle === 4 ? "show-content" : "content"}>
               <div className="toogle2">
               <article className="items togle2" data-aos="fade-right">
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
             <article className="items togle2" data-aos="fade-up">
                 <p className="boshlash">Entry</p>
                 <p className="keyin">Rewards optimization research and paper</p>
                 <p className="keyingi">Funding amount : $5,000 - $6,000</p>
                 <p className="psti">The Grant will be used to write a full research report and code samples that will determine optimal trading strategies for rewards maximization. The paper will be marketed across several platforms and shared among trading circles to help readership shared .</p>

                 <img  className=' pas2 kommentrasm' src={KommentRasm} alt="" />
            
             </article>
             <article className="items togle2" data-aos="fade-left">
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
             <article className="items togle2" data-aos="fade-left">
                 <p className="boshlash">Entry</p>
                 <p className="keyin">Rewards optimization research and paper</p>
                 <p className="keyingi">Funding amount : $5,000 - $6,000</p>
                 <p className="psti">The Grant will be used to write a full research report and code samples that will determine optimal trading strategies for rewards maximization. The paper will be marketed across several platforms and shared among trading circles to help readership shared .</p>

                 <img  className=' pas2 kommentrasm' src={KommentRasm} alt="" />
            
             </article>
             <article className="items togle2" data-aos="fade-down">
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
                <div className={toogle === 5 ? "show-content" : "content"}>
                <div className="toogle2">
                <article className="items togle2" data-aos="fade-right">
                 <p className="boshlash">Category</p>
                 <p className="keyin">Rust SDK</p>
                 <p className="keyingi">Funding amount:
$5,000 - $6,000</p>
                 <p className="psti">At the end of the 19th century, physics appeared to be at an apex. Several people are reported to have said something like this</p>
   <br />
   
                 <img  className=' pas2 kommentrasm' src={KommentRasm} alt="" />
            
             </article>
             <article className="items togle2" data-aos="fade-up">
                 <p className="boshlash">Category</p>
                 <p className="keyin">Hack for Inclusion Sponsorship</p>
                 <p className="keyingi">Funding amount:
$5,000 - $6,000</p>
                 <p className="psti">Later, however (in the beginning of the twentieth century), it was found that light did indeed sometimes behave like a particle. </p>

                 <img  className=' pas2 kommentrasm' src={KommentRasm} alt="" />
            
             </article>
             <article className="items togle2" data-aos="fade-left">
                 <p className="boshlash">Category</p>
                 <p className="keyin">Gitcoin Grants Round 13 sponsorship</p>
                 <p className="keyingi">Funding amount:
$5,000 - $6,000</p>
                 <p className="psti">So we have to learn about them in a sort of abstract or imaginative fashion and not by connection with our direct experience.</p>

                 <img  className=' pas2 kommentrasm' src={KommentRasm} alt="" />
            
             </article>
                </div>
                </div>
                <div className={toogle === 6 ? "show-content" : "content"}>
                <div className="toogle2">
                <article className="items togle2" data-aos="fade-right">
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
             <article className="items togle2" data-aos="fade-down">
                 <p className="boshlash">Category</p>
                 <p className="keyin">Gitcoin Grants Round 13 sponsorship</p>
                 <p className="keyingi">Funding amount:
$5,000 - $6,000</p>
                 <p className="psti">So we have to learn about them in a sort of abstract or imaginative fashion and not by connection with our direct experience.</p>
<br /><br />
<br />
                 <img  className=' pas2 kommentrasm' src={KommentRasm} alt="" />
            
             </article>
             <article className="items togle2" data-aos="fade-left">
                 <p className="boshlash">Category</p>
                 <p className="keyin">Rust SDK</p>
                 <p className="keyingi">Funding amount:
$5,000 - $6,000</p>
                 <p className="psti">At the end of the 19th century, physics appeared to be at an apex. Several people are reported to have said something like this</p>
   <br />
   <br /><br />
   <br />
   
                 <img  className=' pas2 kommentrasm' src={KommentRasm} alt="" />
            
             </article>
                </div>
                </div>
             </div>

        {/* fonded Grants  */}




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
    
    
    </> );
}

export default Grants;