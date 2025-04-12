import React from 'react';
import Section from '../Section';

const EducationSection = () => {
    return (
        <Section id="edu" title="Education">
        <div className="about-content">
            <div className="education-item">
                <p><strong>M.S. student, KAIST</strong>, Industrial Design</p>
                <p>Aug 2024 - Current</p>
            </div>
            <div className="education-item">
            <p><strong>B.S., POSTECH</strong>, Chemical Engineering (major) & Computer Science and Engineering (minor)</p>
            <p>Feb 2018 - Aug 2024</p>
            </div>
        </div>
        </Section>
    );
};

export default EducationSection;