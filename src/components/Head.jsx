import "../App.css";
import Logo from "./images/logo.png"
import { Link } from 'react-router-dom';
import Menu from "./images/menu.png"
import Chiziq from "./images/1.png"
import Utish from "./images/utish.png"
import KommentRasm from "./images/Avatar group.png"
import Xayron from "./images/xayron.png"
import Round9 from "./images/roun9.png"
import Round8 from "./images/roun8.png"
import Birinchi from "./images/birinchi.png"
import Ikkinchi from "./images/ikkinchi.png"
import Xbrand from "./images/brands.png"
import Kalla from "./images/kalla.png"
import Qush from "./images/qush.png"
import { useState } from "react";
import Belgi from "./images/belgi.png"
import Linkcha from "./images/linkcha.png"
import Slider from "react-slick";



function Head() {
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
  
       const [selected , setSelected] = useState(null)
       const toogle = (i) =>{
          if(selected === i){
            return setSelected(null)
          }


          setSelected(i)
       }

       const [Mobile ,setMobile] = useState(false)

   
    return ( 
        <>
            <div className="container-fluid all-items">
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

                    <div className="container">
                        <p className='glav'  data-aos="fade-right">Powering the future of dYdX through community grants <br /> <img src={Chiziq} alt="" /></p>

                        <div className="nuqta" data-aos="fade-down">
                            <button className='   past'>Discover RFPs</button>
                            <button className='  yon'>Apply for grant <img src={Utish} alt="" /></button>

                        </div>

                        <div className="komment" data-aos="fade-up">
                            <div className="komm">
                                <p className='son'>100+ </p>
                                <p className='qiymat'>projects funded</p>
                            </div>
                            <div className="komm">
                            <p className='son'>$3+ milion </p>
                                <p className='qiymat'>awarded</p>
                            </div>
                            <div className="komm">
                            <p className='son'>400+ </p>
                                <p className='qiymat'>projects funded</p>
                            </div>
                        </div>
                        <img  className='belgi' src={Belgi} alt="" />
                    </div>

                    <div className="container" data-aos="fade-left">
                        <div className="izoh">
                            <p className='propet'>Projects built with grants</p>
                            <p className="compas">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero.</p>
                            <p className='ato linkcha'><Link className='ato linkcha'> View all funded projects <img src={Linkcha} alt="" /></Link></p>
                        </div>

                    </div>

                    {/* karusel */}

                <div className="container conteudo" data-aos="fade-up">
                    <Slider {...settings}>
                        <div>
                              <article className="items carusel-items img-fluid" width={500}>
                                    <p className="boshlash">Crowdfund</p>
                                    <p className="keyin">Funding rates page</p>
                                    <p className="keyingi">Funding amount : $5,000 - $6,000</p>
                                    <p className=" psti">Grant will be used to build a dedicated web app to give traders a view of all dYdX asset funding rates across multiple timeframes. The page will be interactive to include deep diving across different assets and historical analysis of changing rates. It will also include API functionalities to allow developer access.</p>
                                    <img  className=' pas1 kommentrasm' src={KommentRasm} alt="" />
                                </article>
                        </div>
                         <div>
                                 <article className="items carusel-items img-fluid" width={500}>
                                    <p className="dashbord"></p>
                                    <p className="boshlash">Edition</p>
                                    <p className="keyin">Tradingview integration</p>
                                    <p className="keyingi">Funding amount : $5,000 - $6,000</p>
                                    <p className="psti">Grant will be used to build a dedicated web app to give traders a view of all dYdX asset funding rates across multiple timeframes. The page will be interactive to include deep diving across different assets and historical analysis of changing rates. It will also include API </p>
                                    
                                    <img  className=' pas3 kommentrasm ite-commit' src={KommentRasm} alt="" />
                                </article>
                         </div>
                         <div>
                                <article className="items carusel-items img-fluid" width={500}>
                                    <p className="boshlash">Entry</p>
                                    <p className="keyin">Rewards optimization research and paper</p>
                                    <p className="keyingi">Funding amount : $5,000 - $6,000</p>
                                    <p className="psti">The Grant will be used to write a full research report and code samples that will determine optimal trading strategies for rewards maximization. The paper will be marketed across several platforms and shared among trading circles to help readership shared .</p>
                                    <img  className=' pas2 kommentrasm' src={KommentRasm} alt="" />
                                </article>
                         </div>
                         <div>
                               <article className="items carusel-items img-fluid" width={500}>
                                    <p className="boshlash">Crowdfund</p>
                                    <p className="keyin">Funding rates page</p>
                                    <p className="keyingi">Funding amount : $5,000 - $6,000</p>
                                    <p className=" psti">Grant will be used to build a dedicated web app to give traders a view of all dYdX asset funding rates across multiple timeframes. The page will be interactive to include deep diving across different assets and historical analysis of changing rates. It will also include API functionalities to allow developer access.</p>
                                    <img  className=' pas1 kommentrasm' src={KommentRasm} alt="" />
                                </article>
                        </div>
                          <div>
                                <article className="items carusel-items img-fluid" width={500}>
                                    <p className="dashbord"></p>
                                    <p className="boshlash">Edition</p>
                                    <p className="keyin">Tradingview integration</p>
                                    <p className="keyingi">Funding amount : $5,000 - $6,000</p>
                                  
                                    <p className="psti">Grant will be used to build a dedicated web app to give traders a view of all dYdX asset funding rates across multiple timeframes. The page will be interactive to include deep diving across different assets and historical analysis of changing rates. It will also include API </p>
                                 
                                    <img  className=' pas3 kommentrasm ite-commit' src={KommentRasm} alt="" />
                                </article>
                          </div>
                          <div>
                              <article className="items carusel-items img-fluid" width={500}>
                                    <p className="boshlash">Entry</p>
                                    <p className="keyin">Rewards optimization research and paper</p>
                                    <p className="keyingi">Funding amount : $5,000 - $6,000</p>
                                    <p className="psti">The Grant will be used to write a full research report and code samples that will determine optimal trading strategies for rewards maximization. The paper will be marketed across several platforms and shared among trading circles to help readership shared .</p>
                                    <img  className=' pas2 kommentrasm' src={KommentRasm} alt="" /> 
                                </article>
                             </div>
                     </Slider>
                </div>

               
                <div className="container hello" data-aos="fade-left">
                    <img className="xayron dolor " src={Xayron} alt="" />
                    <p className="wild">What’s new? </p>
                    <p className="kolaa">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero.</p>
                    <p className=' ato linkcha'><Link className='ato linkcha'> Read more on our blog<img src={Linkcha} alt="" /></Link></p>
                </div>

                <div className="container round" data-aos="fade-down"  >
                    <div className="round2">
                        <div className="roun">
                            <img src={Round9} alt="" />
                            <p className="p1">Funding round</p>
                            <p className="p2">Round 9 of approvals</p>
                            <p className="p3">January 1, 2022</p>
                        </div>
                        <div className="roun">
                            <img src={Round8} alt="" />
                            <p className="p1">Funding round</p>
                            <p className="p2">Round 8 of approvals</p>
                            <p className="p3">January 1, 2022</p>

                        </div>
                    </div>
                </div>


                <div className="container hello" data-aos="fade-right"  >
                    <img className="xayron non" src={Xayron} alt="" />
                    <p className="wild"> Frequently asked questions</p>
                    <p className="kolaa">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero.</p>
                
                </div>

            
            
            
                <div className="container wrapper" data-aos="fade-down">
                    <div className="accordion">
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


                <div className="container helloo " data-aos="fade-left">
                    <img className="xayron non" src={Xayron} alt="" />
                    <p className="wild"> Application process</p>
                    <p className="kolaa">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero.</p>
                
                </div>


                <div className="container alarm" data-aos="fade-up">
                    <div className="inter">
                        <div className="colaab rotat">
                            <p className="al12">1</p>
                            <p className="al13">Apply</p>
                            <p className="al14">Submit a complete application to the dYdX Grants Team including as many details as possible about the proposed idea and their background. </p>
                        </div>
                        <img src={Ikkinchi} className="bir" alt="" />
                        <div className="rotatt colaab">
                        <p className="al12">2</p>
                            <p className="al13">Interview</p>
                            <p className="al14">If your application is selected, the dYdX Grants will conduct 1-2 interviews to collect more information on the Applicant's background and the proposal. </p>
                        </div>
                        <img src={Birinchi} className="ikki" alt="" />
                        <div className="rota colaab">
                        <p className="al12">3</p>
                            <p className="al13">Grant offer</p>
                            <p className="al14">The dYdX Grants team will determine if the proposal fits into the grant program. A vesting schedule and timeline for product development reports will also be determined in the offer; </p>
                        </div>
                    </div>
                </div>


                <div className="container blur" data-aos="fade-up">
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

export default Head;
