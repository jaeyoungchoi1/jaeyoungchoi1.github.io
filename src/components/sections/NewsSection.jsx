import React, { useState } from 'react';
import Section from '../Section';

const LatestNewsSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const newsItems = [
    {
      date: "Feb 2026",
      description: "One short paper accepted to <strong>PacificVis 2026</strong>! Planning to present my work about visual prompting for MLLM in Sydney 🦘🇦🇺"
    },
    {
      date: "Oct 2025",
      description: "🥳 <strong>Gaze2Prompt</strong> received the 🏆 <strong>Best Poster Award</strong> at UbiComp 2025, selected among 68 posters!"
    },
    {
      date: "Sep 2025",
      description: `Our project <a href="https://www.jamesdysonaward.org/2025/project/o2stick" target="_blank" rel="noopener noreferrer"><strong>O2Stick</strong></a> was selected as a <strong>National Runner-up🏅</strong> at the <strong>James Dyson Award</strong>! Looking forward to the next steps!`
    },
    {
      date: "Jun 2025",
      description: "Another poster paper <strong>👀Gaze2Prompt</strong> has been accepted at <strong>UbiComp 2025</strong>! Excited to share my novel idea in Espoo, Finland! 🇫🇮"
    },
    {
      date: "Jun 2025",
      description: "Our paper <strong>Grounded Generation of Embellished Bar Chart Ensuring Chart Integrity</strong> has been conditionally accepted at <strong>IEEE VIS 2025</strong>! See you in Vienna! 😆"
    },
    {
      date: "Apr 2025",
      description: "🎉 Our paper <strong>Chart-to-Experience</strong> received the <strong>🏆 Best Paper Award</strong> at <strong>PacificVis 2025</strong>!"
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

  const displayedNews = isExpanded ? newsItems : newsItems.slice(0, 4);
  
  return (
    <Section id="news" title="Latest News">
      <div className="news-container">
        {displayedNews.map((item, index) => (
          <div key={index} className="news-item">
            <div className="news-date">{item.date}</div>
            <div className="news-content">
              <p dangerouslySetInnerHTML={{ __html: item.description }} />
            </div>
          </div>
        ))}
        {newsItems.length > 4 && (
          <button 
            className="news-toggle-button" 
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
                <path d="M15 13L10 8L5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
                <path d="M5 7L10 12L15 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        )}
      </div>
    </Section>
  );
};

export default LatestNewsSection;
