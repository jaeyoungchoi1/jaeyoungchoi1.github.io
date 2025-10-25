import React from 'react';
import Section from '../Section';

const EducationSection = () => {
    return (
        <Section id="edu" title="Education">
        <div className="about-content">
            <div className="education-item">
                <p className='degree'><strong>M.S. student, KAIST</strong>, Industrial Design</p>
                <p className='duration'>Aug 2024 - Current</p>
            </div>
            <div className="education-item">
            <p className='degree'><strong>B.S., POSTECH</strong>, Chemical Engineering (major) & Computer Science and Engineering (minor)</p>
            <p className='duration'>Feb 2018 - Aug 2024</p>
            </div>
        </div>
        </Section>
    );
};

export default EducationSection;