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
            I'm a <a href="https://cs.tamu.edu/" target="_blank" rel="noopener noreferrer">Computer Science</a> Ph.D. student at <a href="https://tamu.edu/" target="_blank" rel="noopener noreferrer">Texas A&M University</a>, where I work with Prof. <a href="https://jeeeunkim.com" target="_blank" rel="noopener noreferrer">Jeeeun Kim</a> in <a href="https://hcied.info/" target="_blank" rel="noopener noreferrer">HCI Engineering & Design Lab</a>.
            Before joining TAMU, I completed my master's in <a href="https://id.kaist.ac.kr" target="_blank" rel="noopener noreferrer">Industrial Design</a> at <a href="https://kaist.ac.kr/kr/" target="_blank" rel="noopener noreferrer">KAIST</a>, advised by Prof. <a href="https://takyeonlee.com" target="_blank" rel="noopener noreferrer">Tak Yeon Lee</a> in <a href="https://ai-experience-lab.github.io/" target="_blank" rel="noopener noreferrer">AI Experience Lab</a>, and also worked with Prof. <a href="https://sites.google.com/site/wewantsj/" target="_blank" rel="noopener noreferrer">Sung-Ju Lee</a>.
            </p>
            <p> 
            I am interested in designing cyber-physical systems that turn commodity devices, everyday objects, and technologies (e.g., LLMs, mobile computing, digital fabrication, and chemical sensors) into computational building blocks for real-world applications.
            With a deep understanding of their materiality, I treat them as design materials (<em>hammers</em>{' '} <img src={hammerIcon} alt="hammer" style={{ width: '1.2rem', height: '1.2rem', verticalAlign: 'middle', display: 'inline-block' }} />) to seek out real-world problems (<em>nails</em> <img src={nailIcon} alt="nail" style={{ width: '1.2rem', height: '1.2rem', verticalAlign: 'middle', display: 'inline-block' }} />) to tackle.
            My research keywords span UbiComp, HCI, and LLMs, with broader interests in Data Visualization and Accessibility.
            </p>
            {/* 
            I explore the materiality of AI (especially LLMs), treating them as design materials (a hammer <img src={hammerIcon} alt="hammer" style={{ width: '1.2rem', height: '1.2rem', verticalAlign: 'middle', display: 'inline-block' }} />) to seek out real-world applications (nails <img src={nailIcon} alt="nail" style={{ width: '1.2rem', height: '1.2rem', verticalAlign: 'middle', display: 'inline-block' }} />).Lately, I'm particularly interested in leveraging MLLMs as the intelligence layer of Cyber-Physical Systems that can understand and interact with the physical world. */}

          {/* <p>
           I'm a 2nd year <strong>Master's student</strong> of <a href="https://id.kaist.ac.kr" target="_blank" rel="noopener noreferrer">Industrial Design</a> at <a href="https://kaist.ac.kr/kr/" target="_blank" rel="noopener noreferrer">KAIST</a>. I'm currently advised by Prof. <a href="https://takyeonlee.com" target="_blank" rel="noopener noreferrer">Tak Yeon Lee</a> and conduct research in <a href="https://ai-experience-lab.github.io/" target="_blank" rel="noopener noreferrer">AI Experience Lab</a>. I explore the materiality of AI (especially LLMs), treating them as design materials (a hammer <img src={hammerIcon} alt="hammer" style={{ width: '1.2rem', height: '1.2rem', verticalAlign: 'middle', display: 'inline-block' }} />) to seek out real-world applications (nails <img src={nailIcon} alt="nail" style={{ width: '1.2rem', height: '1.2rem', verticalAlign: 'middle', display: 'inline-block' }} />).
           Lately, I'm particularly interested in leveraging MLLMs as the intelligence layer of Cyber-Physical Systems that can understand and interact with the physical world.
          </p> */}


        </div>
      </div>
    </Section>
  );
};

export default AboutMeSection;