import React from 'react';
import Section from '../Section';
import hammerIcon from '../../assets/hammer.png';
import nailIcon from '../../assets/nail.png';

const AboutMeSection = () => {
  return (
    <Section id="about">
      <div className="about-content">
        <div className="about-text">
          <p>
           I'm a 2nd year <strong>Master's student</strong> of <a href="https://id.kaist.ac.kr" target="_blank" rel="noopener noreferrer">Industrial Design</a> at <a href="https://kaist.ac.kr/kr/" target="_blank" rel="noopener noreferrer">KAIST</a>. I'm currently advised by Prof. <a href="https://takyeonlee.com" target="_blank" rel="noopener noreferrer">Tak Yeon Lee</a> and conduct research in <a href="https://ai-experience-lab.github.io/" target="_blank" rel="noopener noreferrer">AI Experience Lab</a>. I explore the materiality of AI (especially LLMs), treating them as <strong>design materials</strong> (a hammer <img src={hammerIcon} alt="hammer" style={{ width: '1rem', height: '1rem', verticalAlign: 'middle', display: 'inline-block' }} />) to seek out real-world applications (nails <img src={nailIcon} alt="nail" style={{ width: '1rem', height: '1rem', verticalAlign: 'middle', display: 'inline-block' }} />).
           Lately, I'm particularly interested in leveraging MLLMs as the intelligence layer of Cyber-Physical Systems that can understand and interact with the physical world.
          </p>

        </div>
      </div>
    </Section>
  );
};

export default AboutMeSection;