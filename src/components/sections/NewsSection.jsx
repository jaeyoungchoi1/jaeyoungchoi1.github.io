import React from 'react';
import Section from '../Section';

const LatestNewsSection = () => {
  const newsItems = [
    {
      date: "Jun 2025",
      description: "Another poster paper <strong>Gaze2Prompt: Turning Eye-Tracking Data into Visual Prompts for Multimodal LLMs</strong> has been accepted at <strong>UbiComp 2025</strong>! Excited to share my novel idea in Espoo, Finland! 🇫🇮"
    },
    {
      date: "Jun 2025",
      description: "Our paper <strong>Grounded Generation of Embellished Bar Chart Ensuring Chart Integrity</strong> has been conditionally accepted at <strong>IEEE VIS 2025</strong>! See you in Vienna! 😆"
    },
    {
      date: "Apr 2025",
      description: "🎉 Our paper <strong>Chart-to-Experience</strong> got the <strong>🏆 Best Paper Award</strong> at <strong>PacificVis 2025</strong>! 🙌"
    },
    {
      date: "Apr 2025",
      description: "Will present our paper on <strong>Chart-to-Experience: Benchmarking Multimodal LLMs for Predicting Experiential Impact of Charts</strong> at <strong>PacificVis 2025</strong> in Taipei."
    },
    {
      date: "Feb 2025",
      description: "Attended HCI Korea conference."
    },
    {
      date: "Aug 2024",
      description: "Began my journey as a graduate student in Industrial Design at KAIST"
    },
  ];

  return (
    <Section id="news" title="Latest News">
      <div className="news-container">
        {newsItems.slice(0, 5).map((item, index) => (
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
