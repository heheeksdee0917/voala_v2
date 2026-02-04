// pages/services/LivingRoom.tsx
import React from 'react';
import { Sofa, Tv, Paintbrush, Lightbulb, Package, CheckCircle, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import StandardButton from '../../components/ui/standard-button';
import SEO from '../../components/SEO';

const LivingRoom: React.FC = () => {
  const coreElements = [
    {
      icon: <Sofa className="w-6 h-6" />,
      title: 'Seating Layout',
      description: 'L-shaped sectionals, modular pieces, floating sofas—comfortable & conversation-friendly'
    },
    {
      icon: <Tv className="w-6 h-6" />,
      title: 'Entertainment Integration',
      description: 'Recessed TV niches, hidden cables, wireless speakers—functional without clutter'
    },
    {
      icon: <Paintbrush className="w-6 h-6" />,
      title: 'Feature Walls',
      description: 'Fluted wood, textured wallpaper, LED-backlit panels—statement without overwhelm'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Lighting Layers',
      description: 'Dimmable ceiling, cove lighting, floor lamps, LED strips—from bright to cozy'
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Multi-Functional Furniture',
      description: 'Storage coffee tables, sofa beds, extendable dining—works harder in open-concept homes'
    }
  ];

  const whyItMatters = [
    'Family gathering zone for multi-generational households',
    'Entertainment hub with big TVs and sound systems',
    'Spillover space from open kitchens',
    'Play area for young children',
    'Quiet corner for WFH parents'
  ];

  const commonMistakes = [
    'Pushing sofa against wall → blocks flow and makes room feel smaller',
    'Oversized TV cabinet → dominates space and collects dust',
    'Single overhead light → flat, unflattering illumination',
    'No cable management → messy wires ruin the look',
    'Feature wall overload → small room feels chaotic',
    'Ignoring open-kitchen smells → poor ventilation affects living area'
  ];

  const preparationChecklist = [
    'Measure room accurately (ceiling, beams, windows)',
    'Photograph current setup + problem areas',
    'List family activities (TV, entertaining, kids playing)',
    'Note must-haves (big TV? sofa bed? hidden storage?)',
    'Collect 10–15 inspiration images',
    'Check MC rules for structural changes',
    'Prepare questions about lighting/ventilation'
  ];

  return (
    <><SEO
      title="Living Room Design Services"
      description="Create family spaces that balance comfort, style, and entertainment. Expert living room design for Malaysian homes."
      keywords="living room design Malaysia, family room interior, lounge design KL"
      ogImage="/images/living-room-og.jpg"
    />
      <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-lg">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block bg-[#59514e]/10 text-[#59514e] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Where Life Happens
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#59514e] mb-6">
            Living Room & Family Area Design
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Your living room is where you collapse after a long day, watch Netflix with the kids, and host weekend gatherings.
            A thoughtful design creates a space that feels bigger than it is, balances relaxation with entertainment,
            and works seamlessly with Malaysia's multi-generational lifestyle.
          </p>
        </div>

        {/* Why It's The Heart */}
        <div className="mb-10 p-6 bg-rose-50 rounded-xl border border-rose-200">
          <div className="flex items-start gap-4">
            <Heart className="w-8 h-8 text-rose-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-rose-900 mb-3">
                The Heart of Every KL Home
              </h2>
              <p className="text-rose-800 mb-4">
                In Kuala Lumpur, the living room isn't just a "sitting area" anymore. It's:
              </p>
              <div className="space-y-2">
                {whyItMatters.map((point, index) => (
                  <div key={index} className="flex items-start gap-2 text-rose-800">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Core Elements */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#59514e] mb-6">
            5 Essential Elements for Great Living Rooms
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

        {/* Seating Layout Details */}
        <div className="mb-10 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <h2 className="text-2xl font-bold text-blue-900 mb-3">
            Smart Seating Layouts We Use
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              'L-shaped sectional sofa (maximises seating)',
              'Modular sofa with movable pieces (flexible)',
              'Two sofas facing each other + accent chairs',
              'Floating sofa away from walls (better flow)'
            ].map((layout, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-blue-800">{layout}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-blue-700 mt-4 italic">
            Pro tip: In condos &lt;1,000 sq ft, we often design sofas to double as guest beds with pull-out mechanisms
          </p>
        </div>

        {/* Entertainment Integration */}
        <div className="mb-10 p-6 bg-purple-50 rounded-xl border border-purple-200">
          <h2 className="text-2xl font-bold text-purple-900 mb-3">
            Modern Entertainment Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              'Recessed TV niche in feature wall (flush-mounted)',
              'Hidden cable channels behind panelling',
              'Soundbar integrated into bulkhead or console',
              'Projector + retractable screen for cinema feel',
              'Wireless speakers mounted discreetly',
              'Viewing angles planned to avoid window glare'
            ].map((solution, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span className="text-purple-800 text-sm">{solution}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Wall Options */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#59514e] mb-4">
            Popular Feature Wall Choices in KL
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              'Fluted wood panelling (warm, hides cables)',
              'Textured wallpaper or 3D panels (subtle depth)',
              'Black glass or mirror with LED backlighting',
              'Built-in display niches for collectibles/art',
              'Marble-look porcelain slabs (durable in humidity)'
            ].map((option, index) => (
              <div key={index} className="flex items-start gap-2">
                <Paintbrush className="w-5 h-5 text-[#59514e] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{option}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-4">
            <strong>Tip:</strong> We limit feature walls to one per room in condos—more feels cluttered.
          </p>
        </div>

        {/* Common Mistakes */}
        <div className="mb-10 p-6 bg-red-50 rounded-xl border border-red-200">
          <h2 className="text-2xl font-bold text-red-900 mb-4">
            Common Living Room Mistakes in KL
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

        {/* Lighting Layers */}
        <div className="mb-10 p-6 bg-amber-50 rounded-xl border border-amber-200">
          <h2 className="text-2xl font-bold text-amber-900 mb-3">
            Lighting Layers We Design
          </h2>
          <p className="text-amber-800 mb-4">
            Most KL living rooms rely on one ceiling light—harsh and unflattering. Layered lighting changes everything:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {[
              'Main ceiling LED downlights (dimmable)',
              'Cove lighting in bulkheads (ambient glow)',
              'Floor lamps or table lamps beside sofa',
              'Wall sconces for reading corners',
              'LED strips under TV console or skirting',
              'Smart controls (Tuya, Philips Hue) for mood switching'
            ].map((layer, index) => (
              <div key={index} className="flex items-start gap-2 text-amber-800">
                <Lightbulb className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{layer}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Preparation Checklist */}
        <div className="mb-10 p-6 bg-gray-50 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-bold text-[#59514e] mb-4">
            Prepare for Your Living Room Consultation
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

        {/* Quick FAQ */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#59514e] mb-6">
            Common Questions
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-[#59514e] pl-4">
              <h3 className="font-bold text-gray-900 mb-1">How do you make small KL condos feel bigger?</h3>
              <p className="text-gray-600">
                Floating furniture, light colours, mirrors, multi-functional pieces, and open sight lines.
              </p>
            </div>
            <div className="border-l-4 border-[#59514e] pl-4">
              <h3 className="font-bold text-gray-900 mb-1">What lighting is best for KL living rooms?</h3>
              <p className="text-gray-600">
                Layered: dimmable ceiling + wall sconces + floor lamps + LED strips for different moods.
              </p>
            </div>
            <div className="border-l-4 border-[#59514e] pl-4">
              <h3 className="font-bold text-gray-900 mb-1">How do you handle open-concept kitchen smells in living area?</h3>
              <p className="text-gray-600">
                Powerful range hoods, air purifiers, and strategic ventilation planning.
              </p>
            </div>
            <div className="border-l-4 border-[#59514e] pl-4">
              <h3 className="font-bold text-gray-900 mb-1">Can I keep my existing sofa?</h3>
              <p className="text-gray-600">
                Yes – we design around it if it fits your style and dimensions.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-8 border-t border-gray-200">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-[#59514e] mb-4">
              Ready to Redesign Your Living Room?
            </h2>
            <p className="text-gray-600 mb-6">
              Your living room should be the warm, welcoming heart of your home—not a cramped,
              poorly lit space. Let's create a layout that actually works for your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/contact">
                <StandardButton variant="primary" showArrow>
                  Book Living Room Consultation
                </StandardButton>
              </Link>
              <a
                href="https://wa.me/60125053395?text=Hi! I'd like to discuss living room design for my KL home."
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

export default LivingRoom;