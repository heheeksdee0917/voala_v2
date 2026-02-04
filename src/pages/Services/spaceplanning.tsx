import React from 'react';
import { Ruler, Users, Grid3x3, Sofa, Package, Hammer, CheckCircle, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import StandardButton from '../../components/ui/standard-button';
import SEO from '../../components/SEO';

const SpacePlanning: React.FC = () => {
  const planningProcess = [
    {
      icon: <Ruler className="w-6 h-6" />,
      title: 'Site Visit & Measurements',
      description: 'Accurate measurements—ceiling heights, beams, columns, doors, windows (1-3 hours)'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Lifestyle Discussion',
      description: 'How you cook, work, entertain, and live—shaping the layout around reality'
    },
    {
      icon: <Grid3x3 className="w-6 h-6" />,
      title: 'Floor Plan Redesign',
      description: '2-4 layout options showing different ways to optimize your space'
    },
    {
      icon: <Sofa className="w-6 h-6" />,
      title: 'Furniture Placement',
      description: 'To-scale furniture overlay—no more blocked doorways or cramped walkways'
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Storage Solutions',
      description: 'Built-ins, wardrobes, bulkheads, multi-functional joinery that disappears'
    },
    {
      icon: <Hammer className="w-6 h-6" />,
      title: 'Structural Changes',
      description: 'Wall removal, new openings, wet area relocation (where MC rules permit)'
    }
  ];

  const commonMistakes = [
    'Relying on developer plans without re-measuring → wrong cabinet sizes',
    'Not discussing lifestyle early → beautiful but impractical layout',
    'Ignoring MC/developer rules → costly redesign later',
    'Skipping furniture overlay → sofa blocks balcony access',
    'Underestimating storage needs → bedroom becomes dumping ground',
    'Choosing aesthetics over flow → long corridors waste space'
  ];

  const klChallenges = [
    'Tiny service balconies that block airflow',
    'Fixed structural columns and beams in condos',
    'Wet kitchens isolated from living areas',
    'Long corridors that eat usable space',
    'Master bedrooms with no wardrobe space',
    'Bathrooms without proper ventilation'
  ];

  const preparationChecklist = [
    'Take accurate measurements or request developer plan',
    'Photograph every room + problem areas',
    'List family members & daily routines',
    'Note must-haves (open kitchen? home office?)',
    'Collect 10-15 inspiration images',
    'Check MC/developer rules for structural changes',
    'Prepare questions about storage/ventilation'
  ];

  return (
    <>
      <SEO
        title="Space Planning Services"
        description="Optimize every square foot with professional space planning. Maximize functionality and flow for KL homes and commercial spaces."
        keywords="space planning Malaysia, room layout design, floor plan optimization"
        ogImage="/images/space-planning-og.jpg"
      />
      <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-lg">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block bg-[#59514e]/10 text-[#59514e] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            The Foundation of Great Design
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#59514e] mb-6">
            Space Planning & Layout Reconfiguration
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            The problem isn't the size of your home—it's how the space is used. Good space planning
            transforms cramped feelings into spaciousness, eliminates dead corners, creates hidden storage,
            and improves daily flow in competitive KL areas.
          </p>
        </div>

        {/* Why It Matters */}
        <div className="mb-10 p-6 bg-purple-50 rounded-xl border border-purple-200">
          <h2 className="text-2xl font-bold text-purple-900 mb-4">
            Why Space Planning Is the Foundation
          </h2>
          <p className="text-purple-800 mb-4">
            Beautiful tiles and custom cabinetry won't fix a bad layout. In KL, common pain points include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {klChallenges.map((challenge, index) => (
              <div key={index} className="flex items-start gap-2 text-purple-800">
                <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{challenge}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Planning Process */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#59514e] mb-6">
            What's Included in Professional Space Planning
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {planningProcess.map((step, index) => (
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

        {/* Key Value Proposition */}
        <div className="mb-10 p-6 bg-green-50 rounded-xl border border-green-200">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            What You Walk Away With
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              '2-4 revised floor plan options',
              'To-scale furniture placement overlay',
              'Built-in storage solutions designed',
              'Structural feasibility assessment',
              'Flow optimization recommendations',
              'MC compliance verification'
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="mb-10 p-6 bg-red-50 rounded-xl border border-red-200">
          <h2 className="text-2xl font-bold text-red-900 mb-4">
            Common Space Planning Mistakes in KL
          </h2>
          <ul className="space-y-2 text-gray-700">
            {commonMistakes.map((mistake, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✗</span>
                <span>{mistake}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Preparation Checklist */}
        <div className="mb-10 p-6 bg-gray-50 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-bold text-[#59514e] mb-4">
            How to Prepare for Your Space Planning Session
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {preparationChecklist.map((item, index) => (
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
              Ready to Reconfigure Your KL Home?
            </h2>
            <p className="text-gray-600 mb-6">
              A thoughtful space plan doesn't just make your home look better—it makes your life easier every single day.
              Let's fix it properly from the beginning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <StandardButton variant="primary" showArrow>
                  Book Space Planning Session
                </StandardButton>
              </Link>
              <a
                href="https://wa.me/60125053395?text=Hi! I'd like to discuss space planning for my KL property."
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

export default SpacePlanning;