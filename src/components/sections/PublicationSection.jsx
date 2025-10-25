import React from 'react';
import Section from '../Section';

const PublicationsSection = () => {
  const publications = [
    {
      title: "Gaze2Prompt: Turning Eye-Tracking Data into Visual Prompts for Multimodal LLMs",
      authors: "<strong>Jae Young Choi</strong>, Seon Gyeom Kim, Jaywoong Jeong, Ryan Rossi, Jihyung Kil, and Tak Yeon Lee",
      conference: "UbiComp Companion",
      year: "2025",
      status: "🏆 Best Poster Award",
      teaser: "/G2P.png",
      links: [
        { label: "Paper", url: "/Gaze2Prompt__Turning_Eye_Tracking_Data_into_Visual_Prompts_for_Multimodal_LLMs.pdf"},
        { label: "Poster", url: "/Gaze2Prompt_Poster.pdf"},

      ]
    },
    {
      title: "Grounded Generation of Embellished Bar Chart Ensuring Chart Integrity",
      authors: "Seon Gyeom Kim*, <strong>Jae Young Choi*</strong>, Phillip Y. Lee, Jaeryung Chung, Ryan Rossi, Jihyung Kil, Eunyee Koh, and Tak Yeon Lee (* equal contribution)",
      conference: "IEEE VIS",
      year: "2025",
      status: "(To Appear)",
      teaser: "/GCG.png",
      links: [
        { label: "Paper", url: "/vis25b-sub1326-cam.pdf"},
        { label: "Project Page", url: "https://groundedchartgeneration.github.io" },
      ]
    },
    {
      title: "Chart-to-Experience: Benchmarking Multimodal LLMs for Predicting Experiential Impact of Charts",
      authors: "Seon Gyeom Kim, <strong>Jae Young Choi</strong>, Ryan Rossi, Eunyee Koh, and Tak Yeon Lee",
      conference: "IEEE PacificVis",
      year: "2025",
      status: "🏆 Best Paper Award",
      teaser: "/C2E.png",
      links: [
        { label: "Paper", url: "https://ieeexplore.ieee.org/abstract/document/11021044/" },
        { label: "Project Page", url: "https://chart2experience.github.io" },
      ]
    },
  ];

  return (
    <Section id="publications" title="Publications">
      <div className="publications-container">
        {publications.map((pub, index) => (
          <div key={index} className="publication-item">
            <div className="publication-teaser">
              <img src={pub.teaser} alt={`Teaser for ${pub.title}`} />
            </div>
            <div className="publication-details">
              <h3 className="publication-title">
                {pub.title}
                {pub.status && <span className="publication-status"> {pub.status}</span>}
              </h3>
              <p className="publication-authors">
              <p dangerouslySetInnerHTML={{ __html: pub.authors }} />
              </p>
              <p className="publication-venue">
                {pub.conference}, {pub.year}
              </p>
              <div className="publication-links">
                {pub.links.map((link, i) => (
                  <a key={i} href={link.url} className="pub-link" target="_blank" rel="noopener noreferrer">{link.label}</a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default PublicationsSection;
