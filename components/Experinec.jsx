import React from "react"
import { Chrono } from "react-chrono";
import './chrono.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import"./exp.css";
import Projects from "./Projects";
import Edu from "./Edu";
function Experinec(){
        return(
        <>
        <Edu></Edu>
    <div>
     <p class="fs-1">Experiences </p>
      </div>
    
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: "white", color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="June-2024"
     dateClassName="date-white"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <img src="./images/narl.png" style={{width:"50%"}}></img>
    <h4 className="vertical-timeline-element-title">National Atmospheric Research Laboratory, ISRO</h4>
    <p className="vertical-timeline-element-subtitle">Tirupathi Andhra Pradesh</p>
    <p>
    Full Stack Developer Internship </p>  
    <p>Department – Computer Data Management Group (CDMG)</p>
  
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: "white", color: 'black'}}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="May-2024"
    dateClassName="date-white"
  >
    <img src="./images/tata.png" style={{width:"50%"}}></img>
    <h4 className="vertical-timeline-element-title">TATA Steel Ltd.</h4>
    <p className="vertical-timeline-element-subtitle">Remote</p>
    <p>
    TATA Prashikshan Vocational Training Program, TATA Steel Ltd, Jamshedpur, Jharkhand</p>
    <p> Department - IT Services 
    </p>
  </VerticalTimelineElement>
  
  
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: "white", color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="May 2023"
    dateClassName="date-white"
  >
    <img src="./images/idex.png" style={{width:"50%"}}></img>
    <h4 className="vertical-timeline-element-title">iDEX-DIO</h4>
    <p className="vertical-timeline-element-subtitle">Remote</p>
    <p>
    Research Internship </p>
    <p>Department- with Startup Company Sagar Defence Engineering Pvt Ltd. in Software Department of Computer Vision and Python Programming.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: "white", color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="July-2023"
    dateClassName="date-white"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<img src="/images/narllogo.png" borderRight="50%"></img>}
  >
    <img src="./images/gs.png" style={{width:"50%"}}></img>
    <h4 className="vertical-timeline-element-title">GoldMan Sachs</h4>
    <p className="vertical-timeline-element-subtitle">Remote</p>
    <p>
    iWE League Scholars Volunteering program
    </p>
  </VerticalTimelineElement>
  </VerticalTimeline>
  <Projects></Projects>
  </>
        )
}
export default Experinec;
