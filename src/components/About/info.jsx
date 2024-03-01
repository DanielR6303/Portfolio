import React from 'react'

const Info = () => {
  return (
    <div className="about-info grid">
        <div className="about-box">
        <i class="uil uil-book-open about-icon"></i>
            <h3 className="about-title"> Education</h3>
                <spam className="about-subtitle">BSc.Computer science, 2020-2023</spam>
           
        </div>

        <div className="about-box">
        <i class="uil uil-briefcase-alt about-icon"></i>
            <h3 className="about-title">Completed </h3>
                <spam className="about-subtitle">3 projects</spam>
           
        </div>

        <div className="about-box">
        <i class="bx bx-support about-icon"></i>
            <h3 className="about-title">Support </h3>
                <spam className="about-subtitle">Online 24/7</spam>
           
        </div>
    </div>
  )
}

export default Info