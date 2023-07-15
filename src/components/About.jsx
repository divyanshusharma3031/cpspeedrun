import React from 'react'
import "./About.css"
import gauravt from '../images/US_soft.jpg'
import divyanshuk from '../images/Katyan.jpeg'
import gauravu from '../images/Upreti.jpeg'

function About() {
    return (
      <>
      <section id="about-info" className="bg-light">
        <div className="fragment1">
          <div className="container1 upper">
            <div className="info-left1 paratext">
              <h1 className="l-heading1">
                <span className="text-primary1">About</span> CF-Speedrun
              </h1>
              <p>
              CF Speedrun is an app to help YOU increase your rating on Codeforces! It lists the 15 most solved questions for a particular rating - do these and you will surely advance to the next level. Simply enter your profile name, pick a rating 100-200 points above your current rating, and start solving the questions.
              </p>
              {/* <p> */}
                {/* A simple and effective way to improve your coding skills! */}
              {/* </p> */}
            </div>
  
            {/* <div className="info-right1">
              <i className="fa-solid fa-note-sticky fa-10x"></i>
            </div> */}
          </div>
        </div>
      </section>

      <section id="team" className="team">
        <header className="section-header1">
          <h2>Founding Team</h2>
        </header>
        <div className="flex-items">
          <div>
            <img src={divyanshuk} alt="" />
            <h4>Divyanshu Katyan</h4>
            <p className = "xyz">Back-end Dev</p>
          </div>
          <div>
            <img src={gauravt} alt="" />
            <h4>Gaurav Thakur</h4>
            <p className = "xyz">Front-end Dev</p>
          </div>
          <div>
            <img src={gauravu} alt="" />
            <h4>Gaurav Upreti</h4>
            <p className = "xyz">Content Designer</p>
          </div>
        </div>
      </section>
    </>
    )
  }
  
  export default About;