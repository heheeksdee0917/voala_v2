// pages/services/ThreeDVisualizationPage.tsx
import React from 'react';
import { Box, Eye, Rotate3D, Palette, Sun, RefreshCw, CheckCircle, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import StandardButton from '../../components/ui/standard-button';
import SEO from '../../components/SEO';

const ThreeDVisualizationPage: React.FC = () => {
  const visualServices = [
    {
      icon: <Box className="w-6 h-6" />,
      title: 'Accurate 3D Modelling',
      description: 'Built from on-site measurements—ceiling heights, beams, columns, windows'
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Photorealistic Renders',
      description: 'Real lighting, shadows, textures, reflections matching KL conditions'
    },
    {
      icon: <Rotate3D className="w-6 h-6" />,
      title: '360° Walkthroughs',
      description: 'Interactive views on phone/tablet—turn around, look up, step through spaces'
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Material Mapping',
      description: 'Exact tiles, laminates, fabrics from local suppliers (White Horse, Hevea)'
    },
    {
      icon: <Sun className="w-6 h-6" />,
      title: 'Day/Night Views',
      description: 'Multiple renders per room showing different lighting scenarios'
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: 'Revision Rounds',
      description: 'Multiple revision cycles—mark up changes, we update quickly'
    }
  ];

  const klChallenges = [
    'Fixed structural beams/columns in condos',
    'Limited natural light in high-rise units',
    'Humidity that changes how materials look',
    'Small footprints (600–1,200 sq ft) requiring clever tricks',
    'Multi-functional zones for helpers, kids, elderly parents'
  ];

  const commonMistakes = [
    'Approving cartoon-style renders → final space looks completely different',
    'Not requesting day/night views → evening lighting surprises',
    'Skipping walkthroughs → missing awkward circulation paths',
    'Approving without real material mapping → marble looks plastic',
    'Rushing revisions → small changes become big issues later',
    'Choosing lowest-effort 3D provider → low-res, unrealistic results'
  ];

  const preparationChecklist = [
    'Provide accurate floor plan + recent photos',
    'List must-have furniture/appliances (sizes)',
    'Collect 10–20 reference images',
    'Decide day vs night priority',
    'Be ready to mark up revisions clearly',
    'Ask for material mapping from real suppliers',
    'Confirm walkthrough compatibility (phone/tablet)'
  ];

  return (
    <>
      <SEO
        title="3D Visualization & Rendering"
        description="See your future home in stunning photorealistic 3D before construction begins. Professional 3D rendering services for interior design projects in Malaysia."
        keywords="3D rendering Malaysia, interior visualization, photorealistic rendering, 3D home design"
        ogImage="/images/3d-viz-og.jpg"
      />
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-lg">
            {/* Header */}
            <div className="mb-8">
              <div className="inline-block bg-[#59514e]/10 text-[#59514e] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                See Before You Build
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#59514e] mb-6">
                3D Visualisation & Photorealistic Renderings
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                Before a single wall is demolished or tile laid, see exactly how your finished space will look,
                feel, and function. Professional 3D visualisation removes guesswork and reduces surprises after handover.
              </p>
            </div>

            {/* Why It's Essential */}
            <div className="mb-12 p-6 bg-indigo-50 rounded-xl border border-indigo-200">
              <div className="flex items-start gap-4">
                <Sparkles className="w-8 h-8 text-indigo-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-indigo-900 mb-4">
                    Why 3D Is a Game-Changer for KL Homeowners
                  </h2>
                  <p className="text-indigo-800 mb-4">
                    Imagine waiting months for renovation completion only to discover the layout feels off,
                    lighting is harsh, or materials look completely different in real life. KL homes have unique constraints:
                  </p>
                  <div className="space-y-2">
                    {klChallenges.map((challenge, index) => (
                      <div key={index} className="flex items-start gap-2 text-indigo-800">
                        <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{challenge}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#59514e] mb-6">
                What Professional 3D Services Include
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {visualServices.map((service, index) => (
                  <div key={index} className="flex gap-4 p-6 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#59514e]/10 rounded-lg flex items-center justify-center text-[#59514e]">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Benefits */}
            <div className="mb-12 p-6 bg-green-50 rounded-xl border border-green-200">
              <h2 className="text-2xl font-bold text-green-900 mb-4">
                What You Can See Before Building Starts
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'Whether the island blocks walkways',
                  'How marble reflects KL’s warm afternoon light',
                  'If the accent wall overpowers the room',
                  'How storage fits without shrinking living space',
                  'Door swing conflicts and circulation issues',
                  'Evening lighting vs morning natural light'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Typical Timeline */}
            <div className="mb-12 p-6 bg-blue-50 rounded-xl border border-blue-200">
              <div className="flex items-start gap-4">
                <RefreshCw className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-blue-900 mb-3">
                    Typical Timeline
                  </h2>
                  <p className="text-blue-800">
                    4–10 weeks depending on scope. Most medium-sized units take 5–7 weeks from initial measurements
                    to final approved renders with revision cycles included.
                  </p>
                </div>
              </div>
            </div>

            {/* Accuracy Guarantee */}
            <div className="mb-12 p-6 bg-purple-50 rounded-xl border border-purple-200">
              <div className="flex items-start gap-4">
                <Eye className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-purple-900 mb-3">
                    95%+ Accuracy to Final Space
                  </h2>
                  <p className="text-purple-800">
                    With precise modelling and material mapping from real local suppliers, our renders are
                    exceptionally accurate. We use tropical HDRI maps and KL daylight settings so marble,
                    wood, and paint look true-to-life.
                  </p>
                </div>
              </div>
            </div>

            {/* Common Mistakes */}
            <div className="mb-12 p-6 bg-red-50 rounded-xl border border-red-200">
              <h2 className="text-2xl font-bold text-red-900 mb-4">
                Common 3D Visualisation Mistakes in KL
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
            <div className="mb-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <h2 className="text-2xl font-bold text-[#59514e] mb-4">
                How to Prepare for Your 3D Session
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {preparationChecklist.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick FAQ */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#59514e] mb-6">
                Common Questions
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-[#59514e] pl-4">
                  <h3 className="font-bold text-gray-900 mb-1">Are the renders 100% accurate?</h3>
                  <p className="text-gray-600">
                    With proper modelling and material mapping—yes, very close (95%+). Lighting and minor finishes may vary slightly.
                  </p>
                </div>
                <div className="border-l-4 border-[#59514e] pl-4">
                  <h3 className="font-bold text-gray-900 mb-1">Can I see the space in VR?</h3>
                  <p className="text-gray-600">
                    Yes—we offer VR files for Oculus/Meta Quest or phone-based VR mode.
                  </p>
                </div>
                <div className="border-l-4 border-[#59514e] pl-4">
                  <h3 className="font-bold text-gray-900 mb-1">How realistic is KL humidity lighting in renders?</h3>
                  <p className="text-gray-600">
                    We use tropical HDRI maps and real KL daylight settings so marble, wood, and paint look true-to-life.
                  </p>
                </div>
                <div className="border-l-4 border-[#59514e] pl-4">
                  <h3 className="font-bold text-gray-900 mb-1">What software do you use?</h3>
                  <p className="text-gray-600">
                    3ds Max + V-Ray, Lumion, Twinmotion, Enscape – depending on project needs.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8 border-t border-gray-200">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-[#59514e] mb-4">
                  Ready to See Your KL Home Before It's Built?
                </h2>
                <p className="text-gray-600 mb-6">
                  3D visualisation removes guesswork and helps you avoid surprises after handover.
                  Stop imagining—start seeing your future home clearly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Link to="/contact">
                    <StandardButton variant="primary" showArrow>
                      Book 3D Visualisation
                    </StandardButton>
                  </Link>
                  <a
                    href="https://wa.me/60125053395?text=Hi! I'd like to discuss 3D visualisation for my project."
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
        </div>
      </div>
    </>
  );
};

export default ThreeDVisualizationPage;