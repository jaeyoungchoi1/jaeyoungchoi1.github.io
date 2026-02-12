import React from 'react';
import Section from '../Section';

const EducationSection = () => {
    return (
        <Section id="edu" title="Education">
        <div className="about-content">
            <div className="education-item">
                <div className='duration'>Sep 2024 - Current</div>
                <div className='degree'><strong>M.S. student, KAIST</strong>, Industrial Design</div>
            </div>
            <div className="education-item">
                <div className='duration'>Mar 2018 - Aug 2024</div>
                <div className='degree'><strong>B.S., POSTECH</strong>, Chemical Engineering (major) & Computer Science and Engineering (minor)</div>
            </div>
            <div className="education-item">
                <div className='duration'>Mar 2015 ‑ Feb 2018</div>
                <div className='degree'><strong>Gyeonggi Science High School for the Gifted </strong></div>
            </div>
        </div>
        </Section>
    );
};

export default EducationSection;