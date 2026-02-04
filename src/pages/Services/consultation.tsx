import React from 'react';
import { CheckCircle, Clock, FileText, Users, Home, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import StandardButton from '../../components/ui/standard-button';
import SEO from '../../components/SEO';

const Consultation: React.FC = () => {
  const consultationSteps = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Pre-Meeting Prep',
      description: 'Share floor plans, photos, and your must-haves before we arrive'
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: 'On-Site Visit',
      description: 'Accurate measurements and structural assessment (1-2 hours)'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Lifestyle Discussion',
      description: 'Understanding how you actually live and what you need'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Feasibility Assessment',
      description: 'Honest evaluation of what’s achievable for your space and timeline'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Feasibility Report',
      description: '2-3 layout options + written report delivered within 5-10 days'
    }
  ];

  const commonMistakes = [
    'Not preparing photos or measurements beforehand',
    'Being vague about your actual needs and priorities',
    'Expecting full design during an initial consultation',
    'Skipping the written feasibility report',
    'Ignoring structural or MC rules early on'
  ];

  const preparationTips = [
    'Take recent photos of every room and problem areas',
    'Gather your floor plan (developer plan is fine)',
    'List your must-haves and must-nots',
    'Note your family size and daily routines',
    'Collect 10-15 inspiration images (Pinterest/Instagram)',
    'Check MC/developer rules if structural changes are possible',
    'Prepare questions about layout, storage, and ventilation'
  ];

  return (
    <><SEO
      title="Interior Design Consultation"
      description="Professional interior design consultation to kickstart your dream space transformation. Expert guidance tailored to your needs and budget in KL."
      keywords="design consultation KL, interior design advice, home consultation Malaysia"
      ogImage="/Voala/1.avif"
    />
      <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-lg">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block bg-[#59514e]/10 text-[#59514e] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Foundation of Great Design
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#59514e] mb-6">
            Interior Design Consultation
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            A proper consultation isn't just a meeting—it's the foundation that saves you time, stress,
            and potentially major renovation mistakes.
          </p>
        </div>

        {/* Why It Matters */}
        <div className="mb-10 p-6 bg-gray-50 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-bold text-[#59514e] mb-4">
            Why Start with a Consultation?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            KL homes come with unique challenges: high-density condos with fixed structural beams,
            humidity issues, and complex layouts. A professional consultation gives you an honest,
            no-BS report on what's actually possible for your space and timeline.
          </p>
        </div>

        {/* What's Included */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#59514e] mb-6">
            What's Included in Your Consultation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {consultationSteps.map((step, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-[#59514e]/10 rounded-lg flex items-center justify-center text-[#59514e]">
                  {step.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#59514e] mb-6">
            What You Walk Away With
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              'Clear understanding of what’s achievable',
              '2-3 layout options with sketches',
              'Identification of structural limitations',
              'Timeline projection (design + build phases)',
              'Honest assessment of your vision'
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="mb-10 p-6 bg-red-50 rounded-xl border border-red-200">
          <h2 className="text-2xl font-bold text-red-900 mb-4">
            Common Mistakes to Avoid
          </h2>
          <ul className="space-y-2 text-gray-700">
            {commonMistakes.map((mistake, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>{mistake}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Timeline */}
        <div className="mb-10 flex items-center gap-4 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <Clock className="w-8 h-8 text-blue-600 flex-shrink-0" />
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-2">
              Typical Timeline
            </h2>
            <p className="text-blue-800">
              2-4 hours on-site + 1-2 follow-up meetings. Full report delivered within 5-10 working days.
            </p>
          </div>
        </div>

        {/* Preparation Checklist */}
        <div className="mb-10 p-6 bg-gray-50 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-bold text-[#59514e] mb-4">
            Prepare for Your Consultation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {preparationTips.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="pt-8 border-t border-gray-200">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-[#59514e] mb-4">
              Ready to Start Your Project Right?
            </h2>
            <p className="text-gray-600 mb-6">
              Book your consultation today and get an honest assessment of what's possible for your KL home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <StandardButton variant="primary" showArrow>
                  Book Consultation
                </StandardButton>
              </Link>
              <a
                href="https://wa.me/60125053395?text=Hi! I'd like to book an interior design consultation."
                target="_blank"
                rel="noopener noreferrer"
              >
                <StandardButton variant="secondary">
                  WhatsApp Us
                </StandardButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Consultation;