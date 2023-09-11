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
import Checitem from "./images/chectitem.svg"


import Qush from "./images/qush.png"

function Discover() {

    const [Mobile ,setMobile] = useState(false)

    const [toogle, setToogle] =useState(1)

function updateToggle(id){
    setToogle(id)
}

const align = [

    {
        name:  'Discord bots',
        answer:'Additional Discord bots that notify members of activity on dYdX and governance',
        money: 'Funding amount : $45,000 - $85,000' ,
  
        open:'Open',
    
 
     },
     {
        name:  'Funding Rate Page',
        answer:'Page that provides a live look at all funding rates with popular timeframes in annualized format',
        money: 'Funding amount : $45,000 - $85,000' ,
      
        open:'Open',
      
 
     },
 

 ]

     
      const founde = [


           {
            name:  'CLI Trading Tool',
            answer:'Self-hosted CLI tool leveraging the dYdX API to allow all functionalities from a terminal',
            money: 'Funding amount:$25,000 - $40,000' ,
            founded:'Founded',
            open:'Open',
            completed:'Completed'
     
         },
        {
            name:  'Funding Rate Page',
            answer:'Page that provides a live look at all funding rates with popular timeframes in annualized format',
            money: 'Funding amount : $45,000 - $85,000' ,
            founded:'Founded',
            open:'Open',
            completed:'Completed'
     
         },
      
         {
            name:  'Delegation Tool',
            answer:'Webpage to allow active participants to market their voting and enable direct delegation from DYDX holders',
            money: 'Funding amount:$15,000 - $30,000' ,
            founded:'Founded',
            open:'Open',
            completed:'Completed'
     
         },
    
         {
             name:  'Academy Contributions',
             answer:'Webpages, Courses, Glossaries and Youtube libraries educating new users on dYdX',
             money: 'Funding amount:$10,000 - $25,000' ,
             founded:'Founded',
             open:'Open',
             completed:'Completed'
      
          },]

           const complet = [

        {
            name:  'Liquidation Alert Tool',
            answer:'Self-hosted tool that alerts the trader of upcoming liquidation prices across multiple messaging venues',
            money: 'Funding amount:$30,000 - $50,000' ,
            founded:'Founded',
            open:'Open',
            completed:'Completed'
     
         },
         {
            name:  'Funding Rate Page',
            answer:'Page that provides a live look at all funding rates with popular timeframes in annualized format',
            money: 'Funding amount : $45,000 - $85,000' ,
            founded:'Founded',
            open:'Open',
            completed:'Completed'
     
         },
         
        {
            name:  'Liquidation Alert Tool',
            answer:'Self-hosted tool that alerts the trader of upcoming liquidation prices across multiple messaging venues',
            money: 'Funding amount:$30,000 - $50,000' ,
            founded:'Founded',
            open:'Open',
            completed:'Completed'
     
         },
   
    
         {
             name:  'Funding Rate Page',
             answer:'Page that provides a live look at all funding rates with popular timeframes in annualized format',
             money: 'Funding amount : $45,000 - $85,000' ,
             founded:'Founded',
             open:'Open',
             completed:'Completed'
      
          },]


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
          <p className='glav'>Discover initiatives (RFPs)</p>
          <p className="compas">The list below includes initial ideas that we think could make excellent Grants. This is a living list that will continue to update as ideas popup.</p>
          </div>

          {/* tabs */}

          <div className="container tabs" data-aos="fade-left">
             <div className="block-tabs">
            <div className="flex-fill" onClick={()=>updateToggle(1)}>All</div>
            <div className="flex-fill" onClick={()=>updateToggle(2)}>Open</div>
            <div className="flex-fill" onClick={()=>updateToggle(3)}>Funded</div>
            <div className="flex-fill" onClick={()=>updateToggle(4)}>Completed</div>

             </div>
          </div>

          {/* natijalar */}
          <div className="container all-founder">
            <center>
            <div className={toogle === 1 ? "show-content" : "content"}>
           
                <div className="itemat" data-aos="zoom-in">
                  <div className="second-all">
                  <p className='rate'>Funding Rate Page</p>  
                  <p className='page'>Page that provides a live look at all funding rates with popular timeframes in annualized format</p>  
                  <p className='amount'>Funding amount:$45,000 - $85,000</p>  


                  </div>
                   <p className='list-founded'>Founded</p>
                </div>
                
                <div className="itemat" data-aos="zoom-in">
                  <div className="second-all">
                  <p className='rate'>CLI Trading Tool</p>  
                  <p className='page'>Self-hosted CLI tool leveraging the dYdX API to allow all functionalities from a terminal</p>  
                  <p className='amount'>Funding amount:$25,000 - $40,000</p>  


                  </div>
                   <p className='list-founded'>Founded</p>
                </div>
                <div className="itemat" data-aos="zoom-in">
                  <div className="second-all">
                  <p className='rate'>New Language SDKs</p>  
                  <p className='page'>Replicate existing Python SDK to new programming languages with all the same features</p>  
                  <p className='amount'>Funding amount:$25,000 - $40,000</p>  


                  </div>
                   <p className='list-open'>Open</p>
                </div>

                <div className="itemat" data-aos="zoom-in">
                  <div className="second-all">
                  <p className='rate'>Liquidation Alert Tool</p>  
                  <p className='page'>Self-hosted tool that alerts the trader of upcoming liquidation prices across multiple messaging venues</p>  
                  <p className='amount'>Funding amount:$30,000 - $50,000</p>  


                  </div>
                   <p className='list-completed'>Completed <img src={Checitem} alt="" /></p>
                </div>

                <div className="itemat" data-aos="zoom-in">
                  <div className="second-all">
                  <p className='rate'>Governance Dashboard</p>  
                  <p className='page'>Governance page to promote  discussions, proposals, delegation and voting</p>  
                  <p className='amount'>Funding amount:
$15,000 - $30,000</p>  


                  </div>
                   <p className='list-founded'>Founded</p>
                </div>

                <div className="itemat" data-aos="zoom-in">
                  <div className="second-all">
                  <p className='rate'>Delegation Tool</p>  
                  <p className='page'>Webpage to allow active participants to market their voting and enable direct delegation from DYDX holders</p>  
                  <p className='amount'>Funding amount:
$15,000 - $30,000</p>  


                  </div>
                   <p className='list-founded'>Founded</p>
                </div>
                <div className="itemat" data-aos="zoom-in">
                  <div className="second-all">
                  <p className='rate'>Funding Rate Page</p>  
                  <p className='page'>Page that provides a live look at all funding rates with popular timeframes in annualized format</p>  
                  <p className='amount'>Funding amount:$45,000 - $85,000</p>  


                  </div>
                   <p className='list-founded'>Founded</p>
                </div>
                <div className="itemat" data-aos="zoom-in">
                  <div className="second-all">
                  <p className='rate'>Funding Rate Page</p>  
                  <p className='page'>Page that provides a live look at all funding rates with popular timeframes in annualized format</p>  
                  <p className='amount'>Funding amount:$45,000 - $85,000</p>  


                  </div>
                   <p className='list-founded'>Founded</p>
                </div>
                <div className="itemat" data-aos="zoom-in">
                  <div className="second-all">
                  <p className='rate'>Discord bots</p>  
                  <p className='page'>Additional Discord bots that notify members of activity on dYdX and governance</p>  
                  <p className='amount'>Funding amount:
$5,000 - $10,000</p>  


                  </div>
                   <p className='list-open'>Open</p>
                </div>
           
            </div>
            <div className={toogle === 2 ? "show-content" : "content"}>
            {align.map((item) => (
                <div className="itemat" data-aos="zoom-in">
                  <div className="second-all">
                  <p className='rate'>{item.name}</p>  
                  <p className='page'>{item.answer}</p>  
                  <p className='amount'>{item.money}</p>  


                  </div>
                   <p className='list-open'>{item.open}</p>
                </div>
            ))} 
            </div>
            <div className={toogle === 3 ? "show-content" : "content"}>
            {founde.map((item) => (
                <div className="itemat" data-aos="zoom-in">
                  <div className="second-all">
                  <p className='rate'>{item.name}</p>  
                  <p className='page'>{item.answer}</p>  
                  <p className='amount'>{item.money}</p>  


                  </div>
                   <p className='list-founded'>{item.founded}</p>
                </div>
            ))}
            </div>
            <div className={toogle === 4 ? "show-content" : "content"}>
            {complet.map((item) => (
                <div className="itemat" data-aos="zoom-in">
                  <div className="second-all">
                  <p className='rate'>{item.name}</p>  
                  <p className='page'>{item.answer}</p>  
                  <p className='amount'>{item.money}</p>  


                  </div>
                   <p className='list-completed'>{item.completed} <img src={Checitem} alt="" /></p>
                </div>
            ))}
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

export default Discover;