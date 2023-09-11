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
import "../components/cssstyles/program.css"
import "../components/cssstyles/blog.css"
import "../components/cssstyles/faq.css"





import Qush from "./images/qush.png"

function Faq() {

    const [Mobile ,setMobile] = useState(false)

    const data = [
      {
         question:  'How do I apply?',
         answer:'lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet' 
      },
      {
          question:  'Can I apply as a U.S. based person/company?',
          answer:'lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet' 
       },
       {
          question:  'How will I be compensated?',
          answer:'lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet' 
       },
       {
          question:  'How will I be compensated?',
          answer:'lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet' 
       },
       {
          question:  'What is the application timeline? When can I expect to hear back?',
          answer:'lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet' 
       },
       {
          question:  'How can I increase my chances of getting funded?',
          answer:'lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet' 
       },
       {
          question:  'How often do you approve new Rounds of funding?',
          answer:'lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet' 
       }
     ]  

     const faq = [
      {
         question:  'What is the dYdX Grants Trust?',
         answer:'lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet' 
      },
      {
          question:  'Where are funds held?',
          answer:'lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet' 
       },
       {
          question:  'When was the program launched?',
          answer:'lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet' 
       },
       {
          question:  'Who are the Trustees?',
          answer:'lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet' 
       },
       {
          question:  'What and who is the Enforcer?',
          answer:'lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet' 
       },
   
     ]  
     const lorem = [
      {
         question:  'What is the dYdX Grants Trust?',
         answer:'lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet' 
      },
      {
          question:  'Where are funds held?',
          answer:'lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet' 
       },
       {
          question:  'When was the program launched?',
          answer:'lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet' 
       },
       {
          question:  'Who are the Trustees?',
          answer:'lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet' 
       },
       {
          question:  'What and who is the Enforcer?',
          answer:'lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet' 
       },
   
     ]  

     const [selected , setSelected] = useState(null)
     const toogle = (i) =>{
        if(selected === i){
          return setSelected(null)
        }


        setSelected(i)
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
          <div className="container faq-glav" data-aos="fade-right">
          <p className='glav'>Frequently asked questions</p>
         
          </div>

          {/* tabs */}
          <div className="container questions-faq" data-aos="fade-left">
            <p className='application'>Grant application process</p>

            <div className=" faq-wrapper">
                    <div className="accordion accordion-faq">
                        {data.map((item,i) => (
                            <div className="item">
                                <div className="title" onClick={() => toogle(i)}>
                                    {item.question}
                                    <span>{selected === i ? '-' : '+'}</span>
                                </div>
                                <div className={selected === i ? 'content-show' : 'content '}>
                                    {item.answer}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
          </div>
          <div className="container questions-faq" data-aos="fade-right">
            <p className='application'>Selection criteria</p>

            <div className=" faq-wrapper">
                    <div className="accordion accordion-faq">
                        {faq.map((item,i) => (
                            <div className="item">
                                <div className="title" onClick={() => toogle(i)}>
                                    {item.question}
                                    <span>{selected === i ? '-' : '+'}</span>
                                </div>
                                <div className={selected === i ? 'content-show' : 'content '}>
                                    {item.answer}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

               
          </div>
          <div className="container questions-faq" data-aos="fade-left">
            <p className='application'>The Grants Trust</p>

            <div className=" faq-wrapper">
                    <div className="accordion accordion-faq">
                        {lorem.map((item,i) => (
                            <div className="item">
                                <div className="title" onClick={() => toogle(i)}>
                                    {item.question}
                                    <span>{selected === i ? '-' : '+'}</span>
                                </div>
                                <div className={selected === i ? 'content-show' : 'content '}>
                                    {item.answer}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

               
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

export default Faq;