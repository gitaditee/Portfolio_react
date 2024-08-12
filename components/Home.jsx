import 'bootstrap/dist/css/bootstrap.css';

import {useTypewriter,Cursor} from 'react-simple-typewriter';
import { useEffect,useState } from 'react';
import Header from '../components/Header';
import Techprofile from '../components/Techprofile';
import Projects from '../components/Projects';
import Experinec from '../components/Experinec';
import Edu from '../components/Edu';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import "./Header.css";
function Home() {
  const [text, helper]= useTypewriter({
    words:['4 year B.Tech student','Software Developer', 'Android Developer', 'Java Developer', 'Web Developer'],
    loop: 5, 
    typeSpeed: 70, 
    deleteSpeed: 50, 
    delaySpeed: 1000, 
 });
  
 const { isType, isDelete, isDelay, isDone } = helper;

    return(
 <>
 {/* <div className='bg-danger'> */}
  <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
    <img src="./images/image.png" class="fixed-img " style={{objectFit:"cover" , position: "absolute" , top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  zIndex:-1
  }}>

  </img>
    <div className='h-60 w-60 mx-auto mycard bg-warning-subtle ' style={{marginLeft:"8px"}}>
  <img src="./images/aditee.jpg" class="rounded-circle photo mx-auto p-2 " height="250px" width="250px"/>
    <div class="col-md-6 p-lg-5 mx-auto my-5">
    <h2 class=" text-dark">Welcome to my portfolio</h2>
      <h1 class="display-3 fw-bold text-dark">Hey folks, I'm Aditee</h1>
    <h3><span  className='text-dark'> I'm a {text} </span>
<Cursor cursorColor='black'/>
</h3>
      <div class="d-flex gap-3 justify-content-center lead fw-normal">
      
      </div>
    </div>
    <div class="product-device shadow-sm d-none d-md-block"></div>
    <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>  
  </div>
  {/* </div> */}
  <Techprofile></Techprofile>


        </>
    )
}
export default Home;
