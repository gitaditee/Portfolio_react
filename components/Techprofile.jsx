import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import {FlippingCard,FlippingCardBack,FlippingCardFront} from 'react-ui-cards';
import Skills from './Skills';
import Edu from './Edu';
import "./Techprofile.css";
function Techprofile(){
    
    const [isflipgfg,setisflipgfg] =useState(false);
       function flipcardgfg(){
     setisflipgfg(!isflipgfg);
        }
        
        const [isfliple,setisflile] =useState(false);
        function flipcardle(){
      setisflile(!isfliple);
         }

         const [isfliphack,setisfliphack] =useState(false);
         function flipcardhack(){
       setisfliphack(!isfliphack);
          }
          const [isflipgit,setisflipgit] =useState(false);
          function flipcardgit(){
        setisflipgit(!isflipgit);
           }

     return(
         <>
            <div class="container marketing">

 <div class="row">
   <div class="col">
       <ReactCardFlip flipDirection='horizontal' isFlipped={isflipgfg}>
         <div  onClick={flipcardgfg}>
         <img className="img-thumbnail rounded-circle h-20 w-50"  src="/images/gfg.png" />              
                    <a  href="https://auth.geeksforgeeks.org/user/21itgjti"/ >
                 </div>
                
      
         <div onClick={flipcardgfg}>
           <div className='h-20 w-50 text-center' >
         <p>Geeks For Geeks</p>
         </div>
         </div>
       </ReactCardFlip>
   </div>
   <div class="col">
   <ReactCardFlip flipDirection='horizontal' isFlipped={isfliple} >
         <div onClick={flipcardle} >
         <img className="img-thumbnail rounded-circle h-20 w-50"   src="/images/leetcode.jpeg" />              
                    <a  href="https://auth.geeksforgeeks.org/user/21itgjti"/ >
                </div>
                
      
         <div onClick={flipcardle}>
           <div className='h-20 w-50 text-center' >
         <p>LeetCode</p>
         </div>
         </div>
       </ReactCardFlip>
   </div>

   <div class="col">
   <ReactCardFlip flipDirection='horizontal' isFlipped={isfliphack}>
         <div  onClick={flipcardhack}>
         <img className="img-thumbnail rounded-circle h-30 w-50"  src="/images/hackerank.jpeg" />              
                    <a  href="https://auth.geeksforgeeks.org/user/21itgjti"/ >
                </div>
                
      
         <div onChange={flipcardhack}>
           <div className='h-20 w-50 text-center' >
        <p>HackerRank</p> 
         </div>
         </div>
      </ReactCardFlip>
    
   </div>
   <div class="col">
   <ReactCardFlip flipDirection='horizontal' isFlipped={isflipgit}>
         <div onClick={flipcardgit} >
         <img className="img-thumbnail rounded-circle h-20 w-50"  src="/images/git.jpeg" />              
                    <a  href="https://auth.geeksforgeeks.org/user/21itgjti"/ >
               </div>
                
      
         <div onChange={flipcardgit}>
           <div className='h-20 w-50 text-center' >
         <p>Git Hub</p>
         </div>
        </div>
       </ReactCardFlip>
   </div>
 </div>
</div>

 
 
<hr class="featurette-divider"/>

<div class="row featurette ms-5">
  <div class="col-md-7">
    <h2 class="featurette-heading fw-normal lh-1 aboutme">About me <span></span></h2>
    <p>Hello there! 
      <br/>
      I'm Aditee, a passionate final-year engineering student with a flair for innovation and problem-solving. My journey in the world of engineering has been a thrilling exploration
                    of turning theoretical concepts into real-world solutions.       
                    I am fluent in classics like Java , Data Structure & Algorithms.      
                    My Field of interest's are explorig Web Technology.</p>
                    <br/>
                      <ul >
                        <li>Name   : Aditee</li>
                        <br/>
                        <li>Age    : 19</li>
                        <br/>
                        <li>Adress : Ajmer , Rajasthan</li>
                        <br/>
                        <li>Email: aditeesingh03@gmail.com</li>
                     </ul> 
                     <a href="https://drive.google.com/file/d/1bDbaQo0Z03BG9-s6nsgV0la7-vMYjEn6/view?usp=sharing"><button id="cv" className='btn'>Download CV</button></a>
                  
           
  </div>
  <div class="col-md-5">
 <img  className="rounded mx-auto d-block h-100 w-50"src="/images/image - Copy.jpg"></img>
  </div>
</div> 
<div>
<Skills></Skills>

</div>
        </>
    )
}
export default Techprofile;