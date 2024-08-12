import { Carousel } from "react-responsive-carousel";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
class Projects extends Component {
  render() {
    return (
      <>

    <div>
    <p class="fs-1">Projects</p>
    </div>
        <Carousel>
          <div className="ms-5 me-5 ">

            <div class="card text-center ">
              <div class="card-header bs-danger-bg-subtle">NARL,ISRO</div>
              <div class="card-body">
                <h5 class="card-title">COINS PORTAL </h5>
                <p class="card-text ms-5 me-5">
                The project Web-based Application Dashboard Development for the Enterprise Resource Planning is web application dashboard
                designed to provide real-time insights into user activity and engagement .
                This dashboard aims to enhance the administrative efficiency units by monitoring and tracking user login and registration patterns
                on a daily basis.
                The system enables administrators to visualize user activity trends, identify areas of improvement, 
                and make data-driven decisions to optimize ERP’s performance and maintenance.
                </p>
                <a href="https://github.com/gitaditee/cowaa_project" class="btn btn-primary">
                  GitHub
                </a>
              </div>
              
            </div>

          </div>
          <div className="ms-5 me-5 ">
            <div class="card text-center ">
              <div class="card-header">TATA Steel Ltd</div>
              <div class="card-body" >
                <h5 class="card-title">E-Gate Pass System</h5>
                <p class="card-text ms-5 me-5">
                The project Web-based Application for the e-gate pass generator for the vistors showing the user's login and sign up page.
                This system enables vistors to generate their e-gate pass online and submit their details to the system.
                </p>
                <a href="#" class="btn btn-primary">
                  GitHub
                </a>
              </div>
              
            </div>
          </div>

          <div className="ms-5 me-5 ">
            <div class="card text-center">
              <div class="card-header">GTT Foundation Top'50</div>
              <div class="card-body">
                <h5 class="card-title">Online Voting System</h5>
                <p class="card-text ms-5 me-5">
                The project console-based voting management made by using

concepts of object oriented concepts with well optimized code.


Project was also selected in National Top 50 at GTT foundation (NESIA-TOP-50)"
                </p>
                <a href="https://github.com/gitaditee/online_voting_sysytem" class="btn btn-primary">
                  GitHub
                </a>
              </div>
              
            </div>
          </div>
        </Carousel>
      </>
    );
  }
}
export default Projects;
