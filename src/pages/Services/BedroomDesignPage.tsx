import React from 'react';
import { Droplets, ShowerHead, Lightbulb, Package, Wind, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import StandardButton from '../../components/ui/standard-button';
import SEO from '../../components/SEO';

const Bedroom: React.FC = () => {
  const coreElements = [
    {
      icon: <Droplets className="w-6 h-6" />,
      title: 'Waterproofing',
      description: 'Liquid-applied membrane, water-stop bands, proper slopes—preventing mould forever'
    },
    {
      icon: <ShowerHead className="w-6 h-6" />,
      title: 'Sanitaryware',
      description: 'Wall-hung toilets, matte finishes, anti-bacterial materials that resist limescale'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Lighting Layers',
      description: 'Main ceiling, bedside sconces, ambient LED strips, motion-sensor night lights'
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Smart Storage',
      description: 'Full-height wardrobes, under-bed drawers, hidden TV cabinets, wrap-around designs'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Anti-Slip Flooring',
      description: 'R10-R11 rated porcelain, engineered wood, vinyl planks—safe when wet'
    },
    {
      icon: <Wind className="w-6 h-6" />,
      title: 'Ventilation',
      description: 'Exhaust fans, trickle vents, dehumidifier zones—keeping air fresh & dry'
    }
  ];

  const commonMistakes = [
    'Skipping waterproofing behind tiles → mould appears in 6-12 months',
    'Choosing glossy sanitaryware → constant limescale cleaning',
    'Installing only ceiling lights → room feels flat and dark',
    'No storage planning → bedroom becomes dumping ground',
    'Ignoring ventilation → wardrobes smell musty',
    'Polished floor tiles → dangerous when wet'
  ];

  return (
    <>
      <SEO
        title="Master Bedroom Design Services in KL"
        description="Expert master bedroom design for KL homes. We solve humidity, mould, storage, and lighting issues with proper waterproofing, ventilation, and smart storage solutions."
        keywords="bedroom design KL, master bedroom renovation Malaysia, bedroom interior design, waterproofing bedroom, mould-resistant bedroom"
        ogImage="/Voala/ProjectSource/Award-Winning-Projects/Aria/10.avif"
      />
      <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-lg">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block bg-[#59514e]/10 text-[#59514e] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Your Personal Sanctuary
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#59514e] mb-6">
            Master Bedroom Design
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            A well-designed KL master bedroom solves real daily problems: humidity, lack of storage,
            poor lighting, slippery tiles, and mould. It's not just about looking pretty—it's about
            creating a sanctuary that stays dry, organised, and truly yours.
          </p>
        </div>

        {/* Why It Matters */}
        <div className="mb-10 p-6 bg-amber-50 rounded-xl border border-amber-200">
          <h2 className="text-2xl font-bold text-amber-900 mb-3">
            Why Bedroom Design Matters More in KL
          </h2>
          <p className="text-amber-800 leading-relaxed">
            Unlike drier climates, KL homes fight constant humidity (70-90% most days), sudden downpours,
            and termite risk. Good design stops mould before it damages walls and mattresses, maximises
            storage without shrinking the room, and keeps floors safe when wet.
          </p>
        </div>

        {/* Core Elements */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#59514e] mb-6">
            6 Essential Elements for KL Bedrooms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreElements.map((element, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-[#59514e]/10 rounded-lg flex items-center justify-center text-[#59514e]">
                  {element.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{element.title}</h3>
                  <p className="text-gray-600">{element.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Waterproofing Details */}
        <div className="mb-10 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <div className="flex items-start gap-4">
            <Droplets className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-3">
                Waterproofing Is Non-Negotiable in KL
              </h2>
              <p className="text-blue-800 mb-3">
                Especially if your master includes an attached bathroom. Here's what we always do:
              </p>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Apply liquid-applied waterproof membrane (2-3 layers) on bathroom floor and up walls 300mm</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Install water-stop bands at wall-floor junctions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Slope bathroom floor 1-2% toward floor trap</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Use mould-resistant paint (Nippon Vinilex or Dulux Weathershield)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="mb-10 p-6 bg-red-50 rounded-xl border border-red-200">
          <h2 className="text-2xl font-bold text-red-900 mb-4">
            Common Bedroom Renovation Mistakes in KL
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

        {/* Storage Solutions Highlight */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#59514e] mb-4">
            Smart Storage Ideas We Use Frequently
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              'Full-height built-in wardrobes with sliding doors',
              'Under-bed hydraulic storage drawers',
              'Floating bedside tables with drawers',
              'Ottoman bed with lift-up storage',
              'Hidden TV cabinet that doubles as dresser',
              'Wrap-around wardrobes (gains 20-30% more space)'
            ].map((solution, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{solution}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="pt-8 border-t border-gray-200">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-[#59514e] mb-3">
              Ready to Design Your Dream Master Bedroom?
            </h2>
            <p className="text-gray-600 mb-6">
              Let's fix mould, cramped storage, and poor lighting properly from the start.
              Book a consultation and get a clear plan you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <StandardButton variant="primary" showArrow>
                  Book Bedroom Consultation
                </StandardButton>
              </Link>
              <a
                href="https://wa.me/60125053395?text=Hi! I'd like to discuss master bedroom design for my KL home."
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

export default Bedroom;