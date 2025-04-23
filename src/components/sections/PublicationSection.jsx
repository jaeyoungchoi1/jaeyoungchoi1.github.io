import React from 'react';
import Section from '../Section';

const PublicationsSection = () => {
  const publications = [
    {
      title: "Chart-to-Experience: Benchmarking Multimodal LLMs for Predicting Experiential Impact of Charts",
      authors: "Seon Gyeom Kim, <strong>JaeYoung Choi</strong>, Ryan Rossi, Eunyee Koh, Tak Yeon Lee",
      conference: "IEEE PacificVis",
      year: "2025",
      status: "Accepted",
      teaser: "/C2E.png",
      links: [
        { label: "Demo", url: "https://chart2experience.github.io" },
        //{ label: "Code", url: "https://github.com/username/repo" }
      ]
    },
  ];

  return (
    <Section id="publications" title="Publication">
      <div className="publications-container">
        {publications.map((pub, index) => (
          <div key={index} className="publication-item">
            <div className="publication-teaser">
              <img src={pub.teaser} alt={`Teaser for ${pub.title}`} />
            </div>
            <div className="publication-details">
              <h3 className="publication-title">
                {pub.title}
                {pub.status && <span className="publication-status"> ({pub.status})</span>}
              </h3>
              <p className="publication-authors">
              <p dangerouslySetInnerHTML={{ __html: pub.authors }} />
              </p>
              <p className="publication-venue">
                {pub.conference}, {pub.year}
              </p>
              <div className="publication-links">
                {pub.links.map((link, i) => (
                  <a key={i} href={link.url} className="pub-link">{link.label}</a>
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
