import React from 'react';
import Section from '../Section';

const AboutMeSection = () => {
  return (
    <Section id="about" title="About Me">
      <div className="about-content">
        <div className="about-text">
          <p>
           I'm a 1st year <strong>M.S. student</strong> of <a href="https://id.kaist.ac.kr">Industrial Design</a> at <a href="https://kaist.ac.kr/kr/">KAIST</a>. I'm currently advised by Prof. <a href="https://takyeonlee.com">Tak Yeon Lee</a> and conduct research in <a href="https://reflect9.github.io/ael/">AEL</a>. I explore the materiality of AI (especially LLMs), treating them as <strong>design materials</strong> (a hammer 🔨) to seek out real-world applications (nails).
           Lately, I'm particularly interested in leveraging the multimodality of MLLMs to build <strong>penetrative AI</strong> systems that can understand and interact with the physical world.
          </p>

        </div>
      </div>
    </Section>
  );
};

export default AboutMeSection;
