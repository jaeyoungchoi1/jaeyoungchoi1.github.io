import React from 'react';
import Section from '../Section';

const PublicationsSection = () => {
  const publications = [
    {
      title: "Evaluating Visual Prompts with Eye-Tracking Data for MLLM–Based Human Activity Recognition",
      authors: "<strong>Jae Young Choi</strong>, Seon Gyeom Kim, Hyungjun Yoon, Taeckyung Lee, Donggun Lee, Jaeryung Chung, Jihyung Kil, Ryan Rossi, Sung-Ju Lee, and Tak Yeon Lee",
      conference: "IEEE PacificVis",
      year: "2026",
      status: "(to appear)",
      teaser: "/pacificvis26-thumb.png",
      confImage: "/pacificvis2026.png",
      links: [
        { label: "PDF", url: "/PacificVis_26-11-2.pdf"},
        { label: "Project Page", url: "https://eyetrackingvisualprompts.github.io" },
      ]
    },
    {
      title: "\"Oops! ChatGPT is Temporarily Unavailable!'': A Diary Study on Knowledge Workers’ Experiences of LLM Withdrawal",
      authors: "Eunseo Oh*, Suyoun Lee*, <strong>Jae Young Choi*</strong>, Soobin Park, Youn-kyung Lim",
      conference: "ACM CHI EA",
      year: "2026",
      status: "(to appear)",
      teaser: "/nollm.png",
      confImage: "/chi2026.png",
      links: [
        { label: "DOI", url: "https://doi.org/10.1145/3772363.3798382" },
        { label: "PDF", url: "/chiea26-212 (3).pdf"},
      ]
    },
    {
      title: "Toward Flexible Psychiatric History-Taking and Visualization: Exploring Clinician Perspectives with Large Language Models",
      authors: "Yugyeong Jung, Thu Hoang Anh Vo, Hyun Seung Moon*, <strong>Jae Young Choi*</strong>, Hyangkyeong Oh, Ujin Lee, Eunjoo Kim, Tak Yeon Lee, and Uichin Lee",
      conference: "ACM CHI",
      year: "2026",
      status: "(to appear)",
      teaser: "/clinic.png",
      confImage: "/chi2026.png",
      links: [
      ]
    },
    {
      title: "Gaze2Prompt: Turning Eye-Tracking Data into Visual Prompts for Multimodal LLMs",
      authors: "<strong>Jae Young Choi</strong>, Seon Gyeom Kim, Jaywoong Jeong, Ryan Rossi, Jihyung Kil, and Tak Yeon Lee",
      conference: "ACM UbiComp Companion",
      year: "2025",
      award: "🏆 Best Poster",
      teaser: "/G2P-thumb.png",
      confImage: "/ubicomp2025.jpg",
      links: [
        { label: "DOI", url: "https://doi.org/10.1145/3714394.3754401" },
        { label: "PDF", url: "/Gaze2Prompt__Turning_Eye_Tracking_Data_into_Visual_Prompts_for_Multimodal_LLMs.pdf"},
        { label: "Poster", url: "/Gaze2Prompt_Poster.pdf"},
      ]
    },
    {
      title: "Grounded Generation of Embellished Bar Chart Ensuring Chart Integrity",
      authors: "Seon Gyeom Kim*, <strong>Jae Young Choi*</strong>, Phillip Y. Lee, Jaeryung Chung, Ryan Rossi, Jihyung Kil, Eunyee Koh, and Tak Yeon Lee",
      conference: "IEEE VIS",
      year: "2025",
      teaser: "/GCG-thumb.png",
      confImage: "/vis2025.png",
      links: [
        { label: "DOI", url: "https://doi.org/10.1109/VIS60296.2025.00026" },
        { label: "PDF", url: "/vis25b-sub1326-cam.pdf"},
        { label: "Project Page", url: "https://groundedchartgeneration.github.io" },
      ]
    },
    {
      title: "Chart-to-Experience: Benchmarking Multimodal LLMs for Predicting Experiential Impact of Charts",
      authors: "Seon Gyeom Kim, <strong>Jae Young Choi</strong>, Ryan Rossi, Eunyee Koh, and Tak Yeon Lee",
      conference: "IEEE PacificVis",
      year: "2025",
      award: "🏆 Best Paper",
      teaser: "/C2E-thumb.png",
      confImage: "/pacificvis2025.png",
      links: [
        { label: "DOI", url: "https://doi.org/10.1109/PacificVis64226.2025.00040" },
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
              <div className="publication-labels">
                {pub.award && (
                  <span className="label award-label">
                    {pub.award}
                  </span>
                )}
              </div>
              <img src={pub.teaser} alt={`Teaser for ${pub.title}`} />
              {pub.confImage && (
                <div className="publication-overlay">
                  <div className="overlay-backdrop" />
                  <img
                    src={pub.confImage}
                    alt={`${pub.conference} logo`}
                    className="conf-image"
                  />
                </div>
              )}
            </div>
            <div className="publication-details">
              <h3 className="publication-title">
                {pub.title}
                {pub.status && <span className="publication-status"> {pub.status}</span>}
              </h3>
              <p
                className="publication-authors"
                dangerouslySetInnerHTML={{ __html: pub.authors }}
              />
              <p className="publication-venue">
                {pub.conference} {pub.year}
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
