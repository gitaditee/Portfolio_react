import React from "react";
import Marquee from "react-fast-marquee";
import Experinec from "./Experinec";
import Contact from "./Contact";
function Skills(){
return(
    <>
    <p  class="fs-1">
        Skills
    </p>
    <Marquee >
        <div className="d-flex flex-column me-5 ">
    <img src="./images/react.png" width="100px"></img>
    
    <p className=" d-flex justify-content-center">React</p>
    </div>

<div className="d-flex flex-column me-5">
<img src="./images/flas.png" width="100px"></img>

<p className=" d-flex justify-content-center">Flask</p>
</div>
<div className="d-flex flex-column me-5">
<img src="./images/bootstrap.png" width="100px"></img>

<p className=" d-flex justify-content-center">BootStrap</p>
</div>
<div className="d-flex flex-column me-5">
<img src="./images/html.png" width="100px"></img>

<p className=" d-flex justify-content-center">HTML</p>
</div>
<div className="d-flex flex-column me-5">
<img src="./images/css.png" width="100px"></img>

<p className=" d-flex justify-content-center">CSS</p>
</div>
<div className="d-flex flex-column me-5">
<img src="./images/js.png" width="100px"></img>

<p className=" d-flex justify-content-center">Java Script</p>
</div>

<div className="d-flex flex-column me-5">
<img src="./images/figma.png" width="100px"></img>

<p className=" d-flex justify-content-center">Figma</p>
</div>
<div className="d-flex flex-column me-5">
<img src="./images/c.png" width="100px"></img>

<p className=" d-flex justify-content-center">C</p>
</div>
<div className="d-flex flex-column me-5">
<img src="./images/c++.png" width="100px"></img>

<p className=" d-flex justify-content-center">C++</p>
</div>

<div className="d-flex flex-column me-5">
<img src="./images/java.png" width="100px"></img>

<p className=" d-flex justify-content-center">Java</p>
</div>

<div className="d-flex flex-column me-5">
<img src="./images/python.png" width="100px"></img>

<p className=" d-flex justify-content-center">Python</p>
</div>
<div className="d-flex flex-column me-5">
<img src="./images/git.png" width="100px"></img>

<p className=" d-flex justify-content-center">Git</p>
</div>
</Marquee>
<Experinec></Experinec>
<Contact></Contact>
</>
)
}
export default Skills;