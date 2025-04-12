import React from 'react';
import Section from '../Section';

const LatestNewsSection = () => {
  const newsItems = [
    {
      date: "Apr 2025",
      description: "Will present our paper on <strong>Chart-to-Experience: Benchmarking Multimodal LLMs for Predicting Experiential Impact of Charts</strong> at <strong>PacificVis 2025</strong> in Taipei."
    },
    {
      date: "Feb 2025",
      description: "Attended the HCI Korea conference"
    },
    {
      date: "Aug 2024",
      description: "Began my journey as a graduate student in Industrial Design at KAIST"
    },
  ];

  return (
    <Section id="news" title="Latest News">
      <div className="news-container">
        {newsItems.map((item, index) => (
          <div key={index} className="news-item">
            <div className="news-date">{item.date}</div>
            <div className="news-content">
              <p dangerouslySetInnerHTML={{ __html: item.description }} />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default LatestNewsSection;
