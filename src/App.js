import React from 'react';

const data = {
  "Interior Designers": [
    {
      title: "Lead Generation",
      description: "Build credibility through trade shows and online platforms."
    },
    {
      title: "Consultation",
      description: "Focus on customization, versatility, and ease of installation of Foxygen ceilings to fit various design styles."
    },
    {
      title: "Quotation & Negotiation",
      description: "Provide clear, transparent quotations with flexible pricing and design support tools like 3D modeling."
    },
    {
      title: "Contract Signing",
      description: "Ensure the contract includes design preferences and clear terms for timelines and materials."
    },
    {
      title: "After-Sales Care",
      description: "Offer ongoing support and opportunities for showcasing completed projects."
    }
  ],
  "Investors": [
    {
      title: "Lead Generation",
      description: "Build connections in real estate and property development sectors through industry events and online networks."
    },
    {
      title: "Consultation",
      description: "Highlight cost-effectiveness, energy efficiency, and long-term durability, emphasizing installation speed and quality assurance."
    },
    {
      title: "Quotation & Negotiation",
      description: "Provide a detailed breakdown of material costs, labor, and services with flexible payment terms and volume discounts for large-scale projects."
    },
    {
      title: "Contract Signing",
      description: "Contract should include flexibility for multiple projects, clear payment terms, and project milestones."
    },
    {
      title: "After-Sales Care",
      description: "Provide maintenance checks, follow-ups, and loyalty incentives to build long-term relationships."
    }
  ],
  "Mid-tier Contractors": [
    {
      title: "Lead Generation",
      description: "Target mid-tier contractors via direct outreach, industry events, and co-branding with partners."
    },
    {
      title: "Consultation",
      description: "Conduct thorough site assessments to offer tailored solutions that align with larger project scopes and provide professional guidance on aesthetics and functionality."
    },
    {
      title: "Quotation & Negotiation",
      description: "Offer detailed quotations with itemized costs, volume discounts, and flexible payment terms based on project scale."
    },
    {
      title: "Contract Signing",
      description: "Provide a comprehensive contract outlining costs, timelines, and post-installation support."
    },
    {
      title: "After-Sales Care",
      description: "Schedule post-installation quality checks, offer loyalty incentives, and provide support for future projects."
    }
  ],
  "Small Contractors": [
    {
      title: "Lead Generation",
      description: "Focus on local connections, trade networks, and contractor meetups."
    },
    {
      title: "Consultation",
      description: "Emphasize cost-effective solutions and flexible package options, with hands-on consultations for small projects."
    },
    {
      title: "Quotation & Negotiation",
      description: "Provide tiered pricing options with flexible terms and value-driven solutions, emphasizing reduced maintenance and ease of installation."
    },
    {
      title: "Contract Signing",
      description: "Offer staged payment options, clear documentation, and post-installation quality control."
    },
    {
      title: "After-Sales Care",
      description: "Conduct post-installation checks, offer hands-on training for maintenance, and incentivize referrals through loyalty programs."
    }
  ]
};

const ProcessCard = ({ index, step }) => (
  <div className="bg-orange-50 rounded-lg p-5 shadow-md w-64 h-full flex flex-col">
    <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded w-max">
      Step {index + 1}
    </span>
    <h3 className="mt-3 text-base font-semibold text-orange-600">
      {step.title}
    </h3>
    <p className="mt-2 text-sm text-gray-700 leading-relaxed">
      {step.description}
    </p>
  </div>
);

const AudienceJourney = ({ title, steps }) => (
  <div className="mb-20 w-full">
    <h2 className="text-3xl font-bold text-center text-orange-700 mb-7">
      {title}
    </h2>
    <div className="overflow-x-auto pb-4">
      <div className="flex gap-4 min-w-max">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex-shrink-0">
              <ProcessCard index={index} step={step} />
            </div>
            {index < steps.length - 1 && (
              <div className="flex items-center flex-shrink-0">
                <svg
                  className="w-6 h-6 md:w-8 md:h-8 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
);

export default function CustomerJourneyTimeline() {
  return (
    <div className="p-6 bg-gradient-to-br from-orange-50 via-white to-orange-100 min-h-screen">
      <h1 className="text-4xl font-black text-center text-orange-700 mb-16">
        Customer Journey Process by Audience Type
      </h1>
      <div className="space-y-20">
        {Object.entries(data).map(([audience, steps]) => (
          <AudienceJourney key={audience} title={audience} steps={steps} />
        ))}
      </div>
    </div>
  );
}