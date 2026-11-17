import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../../data/faq';
import { SectionTitle } from '../../components/common/SectionTitle';
import { FadeIn } from '../../components/animations/FadeIn';
import './FAQ.css';

export const FAQ = () => {
  // Keep first FAQ open by default for immediate preview and indexing clarity
  const [openId, setOpenId] = useState(faqs[0]?.id || null);

  const toggleItem = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  // Helper to format answers with interactive links if present
  const renderFormattedAnswer = (text) => {
    const parts = text.split(/(akhileshp\.dev@gmail\.com|\+91 9526008613|https:\/\/akhileshp\.com\/#contact)/g);

    return parts.map((part, i) => {
      if (part === 'akhileshp.dev@gmail.com') {
        return (
          <a key={i} href="mailto:akhileshp.dev@gmail.com">
            {part}
          </a>
        );
      }
      if (part === '+91 9526008613') {
        return (
          <a key={i} href="tel:+919526008613">
            {part}
          </a>
        );
      }
      if (part === 'https://akhileshp.com/#contact') {
        return (
          <a key={i} href="#contact">
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <section id="faq" className="faq-section" aria-labelledby="faq-section-title">
      <div className="faq-container">
        <SectionTitle
          badge="FAQ"
          title="Frequently Asked"
          highlight="Questions"
          subtitle="Direct, factual answers to common questions about my background, technical stack, experience, and services."
        />

        <FadeIn direction="up" delay={0.2} distance={20} duration={0.5}>
          <div className="faq-list" role="region" aria-label="Frequently asked questions list">
            {faqs.map((faq, index) => {
              const isOpen = openId === faq.id;
              const number = String(index + 1).padStart(2, '0');
              const triggerId = `faq-trigger-${faq.id}`;
              const panelId = `faq-panel-${faq.id}`;

              return (
                <div key={faq.id} className="faq-item" data-open={isOpen ? 'true' : 'false'}>
                  <button
                    type="button"
                    id={triggerId}
                    className="faq-trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(faq.id)}
                  >
                    <div className="faq-question-wrap">
                      <span className="faq-number" aria-hidden="true">
                        {number}
                      </span>
                      <h3 className="faq-question-text" style={{ fontSize: 'inherit', fontWeight: 'inherit', margin: 0 }}>
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown size={18} className="faq-chevron" aria-hidden="true" />
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    className="faq-panel"
                  >
                    <div className="faq-panel-content">
                      <p className="faq-answer">{renderFormattedAnswer(faq.answer)}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
