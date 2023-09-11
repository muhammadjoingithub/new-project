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
import Round9 from "./images/roun9.png"
import Round8 from "./images/roun8.png"
import Round7 from "./images/round7.png"
import Round6 from "./images/round6.png"
import Round5 from "./images/round5.png"
import Round4 from "./images/round4.png"



import Qush from "./images/qush.png"

function Blog() {

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
          <div className="container"  data-aos="fade-up">
          <p className='glav'>Blog</p>
         
          </div>

          {/* tabs */}

          <div className="container tabs"  data-aos="zoom-in-up">
             <div className="block-tabs programtabs">
            <div className="flex-fill" onClick={()=>updateToggle(1)}>Latest</div>
            <div className="flex-fill" onClick={()=>updateToggle(2)}>Funding round</div>
            <div className="flex-fill" onClick={()=>updateToggle(3)}>Spotlight</div>
            <div className="flex-fill" onClick={()=>updateToggle(4)}>News & updates</div>

             </div>
          </div>

          {/* natijalar */}
          <div className="container all-founder grogram-all" >
            {/* <center> */}
            <div className={toogle === 1 ? "show-content" : "content"}>
                      <div className="round2" >
                        <div className="roun" data-aos="fade-right">
                            <img src={Round9} alt="" />
                            <p className="p1 blog-left">Funding round</p>
                            <p className="p2 blog-left">Round 9 of approvals</p>
                            <p className="p3 blog-left">January 1, 2022</p>
                        </div>
                        <div className="roun" data-aos="fade-left">
                            <img src={Round8} alt="" />
                            <p className="p1 blog-left">Funding round</p>
                            <p className="p2 blog-left">Round 8 of approvals</p>
                            <p className="p3 blog-left">January 1, 2022</p>

                        </div> 
                        <div className="roun" data-aos="fade-right">
                            <img src={Round7} alt="" />
                            <p className="p1 blog-left">Funding round</p>
                            <p className="p2 blog-left">Round 9 of approvals</p>
                            <p className="p3 blog-left">January 1, 2022</p>
                        </div>
                        <div className="roun" data-aos="fade-left">
                            <img src={Round6} alt="" />
                            <p className="p1 blog-left">Funding round</p>
                            <p className="p2 blog-left">Round 8 of approvals</p>
                            <p className="p3 blog-left">January 1, 2022</p>
                        </div> 
                        <div className="roun" data-aos="fade-right">
                            <img src={Round5} alt="" />
                            <p className="p1 blog-left">Funding round</p>
                            <p className="p2 blog-left">Round 9 of approvals</p>
                            <p className="p3 blog-left">January 1, 2022</p>
                        </div>
                        <div className="roun" data-aos="fade-left">
                            <img src={Round4} alt="" />
                            <p className="p1 blog-left">Funding round</p>
                            <p className="p2 blog-left">Round 8 of approvals</p>
                            <p className="p3 blog-left">January 1, 2022</p>

                        </div> 
                    </div>  
           
           </div>
            <div className={toogle === 2 ? "show-content" : "content"}>
            <div className="round2">
                    <div className="roun" data-aos="fade-right">
                            <img src={Round6} alt="" />
                            <p className="p1 blog-left">Funding round</p>
                            <p className="p2 blog-left">Round 8 of approvals</p>
                            <p className="p3 blog-left">January 1, 2022</p>
                        </div> 
                        <div className="roun" data-aos="fade-left">
                            <img src={Round5} alt="" />
                            <p className="p1 blog-left">Funding round</p>
                            <p className="p2 blog-left">Round 9 of approvals</p>
                            <p className="p3 blog-left">January 1, 2022</p>
                        </div>
                        <div className="roun" data-aos="fade-right">
                            <img src={Round4} alt="" />
                            <p className="p1 blog-left">Funding round</p>
                            <p className="p2 blog-left">Round 8 of approvals</p>
                            <p className="p3 blog-left">January 1, 2022</p>

                        </div> 
                        <div className="roun" data-aos="fade-left">
                            <img src={Round9} alt="" />
                            <p className="p1 blog-left">Funding round</p>
                            <p className="p2 blog-left">Round 9 of approvals</p>
                            <p className="p3 blog-left">January 1, 2022</p>
                        </div>
                        <div className="roun" data-aos="fade-right">
                            <img src={Round8} alt="" />
                            <p className="p1 blog-left">Funding round</p>
                            <p className="p2 blog-left">Round 8 of approvals</p>
                            <p className="p3 blog-left">January 1, 2022</p>

                        </div> 
                        <div className="roun" data-aos="fade-left">
                            <img src={Round7} alt="" />
                            <p className="p1 blog-left">Funding round</p>
                            <p className="p2 blog-left">Round 9 of approvals</p>
                            <p className="p3 blog-left">January 1, 2022</p>
                        </div>
                      
                    </div>  
            </div>
            <div className={toogle === 3 ? "show-content" : "content"}>
            <div className="round2">
                     <div className="roun" data-aos="fade-right">
                            <img src={Round4} alt="" />
                            <p className="p1 blog-left">Funding round</p>
                            <p className="p2 blog-left">Round 8 of approvals</p>
                            <p className="p3 blog-left">January 1, 2022</p>

                        </div> 
                        <div className="roun" data-aos="fade-left">
                            <img src={Round9} alt="" />
                            <p className="p1 blog-left">Funding round</p>
                            <p className="p2 blog-left">Round 9 of approvals</p>
                            <p className="p3 blog-left">January 1, 2022</p>
                        </div>
                        <div className="roun" data-aos="fade-right">
                            <img src={Round8} alt="" />
                            <p className="p1 blog-left">Funding round</p>
                            <p className="p2 blog-left">Round 8 of approvals</p>
                            <p className="p3 blog-left">January 1, 2022</p>

                        </div> 
                    <div className="roun" data-aos="fade-left">
                            <img src={Round6} alt="" />
                            <p className="p1 blog-left">Funding round</p>
                            <p className="p2 blog-left">Round 8 of approvals</p>
                            <p className="p3 blog-left">January 1, 2022</p>
                        </div> 
                        <div className="roun" data-aos="fade-right">
                            <img src={Round5} alt="" />
                            <p className="p1 blog-left">Funding round</p>
                            <p className="p2 blog-left">Round 9 of approvals</p>
                            <p className="p3 blog-left">January 1, 2022</p>
                        </div>
                      
                        <div className="roun" data-aos="fade-left">
                            <img src={Round7} alt="" />
                            <p className="p1 blog-left">Funding round</p>
                            <p className="p2 blog-left">Round 9 of approvals</p>
                            <p className="p3 blog-left">January 1, 2022</p>
                        </div>
                      
                    </div>  
            </div>

            <div className={toogle === 4 ? "show-content" : "content"}>
            <div className="round2">
            <div className="roun" data-aos="fade-right">
                            <img src={Round5} alt="" />
                            <p className="p1 blog-left">Funding round</p>
                            <p className="p2 blog-left">Round 9 of approvals</p>
                            <p className="p3 blog-left">January 1, 2022</p>
                        </div>
                      
                        <div className="roun" data-aos="fade-left">
                            <img src={Round7} alt="" />
                            <p className="p1 blog-left">Funding round</p>
                            <p className="p2 blog-left">Round 9 of approvals</p>
                            <p className="p3 blog-left">January 1, 2022</p>
                        </div>
                     <div className="roun" data-aos="fade-right">
                            <img src={Round4} alt="" />
                            <p className="p1 blog-left">Funding round</p>
                            <p className="p2 blog-left">Round 8 of approvals</p>
                            <p className="p3 blog-left">January 1, 2022</p>

                        </div> 
                        <div className="roun" data-aos="fade-left">
                            <img src={Round9} alt="" />
                            <p className="p1 blog-left">Funding round</p>
                            <p className="p2 blog-left">Round 9 of approvals</p>
                            <p className="p3 blog-left">January 1, 2022</p>
                        </div>
                        <div className="roun" data-aos="fade-right">
                            <img src={Round8} alt="" />
                            <p className="p1 blog-left">Funding round</p>
                            <p className="p2 blog-left">Round 8 of approvals</p>
                            <p className="p3 blog-left">January 1, 2022</p>

                        </div> 
                    <div className="roun" data-aos="fade-left">
                            <img src={Round6} alt="" />
                            <p className="p1 blog-left">Funding round</p>
                            <p className="p2 blog-left">Round 8 of approvals</p>
                            <p className="p3 blog-left">January 1, 2022</p>
                        </div> 
                      
                      
                    </div>  

            </div>
            {/* </center> */}
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

export default Blog;