import React from 'react';
import { CheckCircle, Droplets, Shield, TrendingUp, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import StandardButton from '../../components/ui/standard-button';
import SEO from '../../components/SEO';

const MaterialSelection: React.FC = () => {
  const keyConsiderations = [
    {
      icon: <Droplets className="w-6 h-6" />,
      title: 'Humidity & Mould Resistance',
      description: 'Low water absorption and anti-fungal properties for 80-90% humidity'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Durability vs Maintenance',
      description: 'Balance between premium look and practical long-term care'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Resale Value Impact',
      description: 'Neutral, durable choices that appeal to future buyers'
    }
  ];

  const materialCategories = [
    {
      category: 'Flooring',
      recommended: [
        'Porcelain tiles (R10-R11 anti-slip) – White Horse, Niro Granite',
        'Engineered wood – resists warping better than solid hardwood',
        'Vinyl planks (LVT/SPC) – waterproof, easy to clean'
      ],
      avoid: 'Solid hardwood (warps), cheap laminates (peels), glossy tiles (slippery)'
    },
    {
      category: 'Wall Coverings & Paint',
      recommended: [
        'Mould-resistant paint – Nippon Vinilex, Dulux Weathershield',
        'Textured wallpaper – vinyl-coated or non-woven',
        'Fluted wood (treated), PVC panels, cement board'
      ],
      avoid: 'Raw timber veneer without sealant, fabric wall coverings'
    },
    {
      category: 'Countertops',
      recommended: [
        'Quartz – non-porous, stain-resistant (Caesarstone, Silestone)',
        'Sintered stone/porcelain slabs – ultra-durable, heat-resistant',
        'Solid surface (Corian) – seamless, repairable'
      ],
      avoid: 'Natural marble (stains easily), cheap laminates (bubbles)'
    },
    {
      category: 'Tiles',
      recommended: [
        'Porcelain large-format (1200×600mm) for seamless look',
        'Mosaic accents with epoxy grout',
        'Anti-slip floor tiles (R10+ rating) for bathrooms'
      ],
      avoid: 'Glossy ceramic in wet areas'
    },
    {
      category: 'Fabrics & Upholstery',
      recommended: [
        'Performance fabrics – Crypton, Sunbrella, treated polyester',
        'PU leather with anti-bacterial coating',
        'Breathable, stain-resistant finishes'
      ],
      avoid: 'Pure cotton velvet, delicate silks'
    }
  ];

  const commonMistakes = [
    'Choosing glossy marble countertops → stains yellow within months',
    'Using untreated wood veneer panels → warps/swells in humidity',
    'Installing cheap laminates → bubbles/peels in wet areas',
    'Picking pure white sanitaryware → constant limescale cleaning',
    'Ignoring anti-slip rating → dangerous bathroom floors',
    'Going for trendy dark colours → shows dust/hairline cracks'
  ];

  return (
    <><SEO
      title="Material Selection & Sourcing"
      description="Humidity-proof finishes that look beautiful and last. Expert material selection for KL's tropical climate with guaranteed durability."
      keywords="material selection Malaysia, humidity-resistant materials, interior finishes KL"
      ogImage="/images/materials-og.jpg"
    />
      <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-lg">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block bg-[#59514e]/10 text-[#59514e] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Choices That Last
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#59514e] mb-6">
            Material & Finishes Selection
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            The right materials don't just look beautiful—they resist mould, warping and staining for years,
            handle daily family life, and stay stunning under KL's humid conditions. Wrong choices? Expensive regret.
          </p>
        </div>

        {/* Why It's Critical */}
        <div className="mb-10 p-6 bg-orange-50 rounded-xl border border-orange-200">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-orange-900 mb-4">
                Why Material Selection Is Make-or-Break in KL
              </h2>
              <p className="text-orange-800 mb-4">
                KL isn't Europe or Japan. Our weather creates unique demands:
              </p>
              <ul className="space-y-2 text-orange-800 text-sm">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>High humidity causes wood to swell, paint to bubble, fabrics to smell musty</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Mineral-rich water stains marble and glass quickly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Termites love untreated timber in landed homes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Heavy wok cooking → oil splatter and grease buildup</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Considerations */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#59514e] mb-6">
            3 Key Considerations for Malaysia's Climate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keyConsiderations.map((consideration, index) => (
              <div key={index} className="p-6 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-[#59514e]/10 rounded-lg flex items-center justify-center text-[#59514e] mb-4">
                  {consideration.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{consideration.title}</h3>
                <p className="text-gray-600">{consideration.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Material Categories */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#59514e] mb-6">
            Our Curated Shortlist by Category
          </h2>
          <div className="space-y-8">
            {materialCategories.map((cat, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-[#59514e] mb-4">{cat.category}</h3>

                {/* Recommended */}
                <div className="mb-6">
                  <p className="text-base font-semibold text-green-700 mb-3">✓ Recommended:</p>
                  <ul className="space-y-2">
                    {cat.recommended.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Avoid */}
                <div className="p-4 bg-red-50 rounded-lg">
                  <p className="text-base font-semibold text-red-700 mb-2">✗ Avoid:</p>
                  <p className="text-gray-700">{cat.avoid}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hardware & Accessories Callout */}
        <div className="mb-10 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <h2 className="text-2xl font-bold text-blue-900 mb-3">
            Hardware & Accessories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Brushed brass/black – hides fingerprints better than chrome',
              'Soft-close hinges (Blum, Hettich) – quiet and long-lasting',
              'Anti-bacterial coatings for high-touch surfaces',
              'Avoid: Cheap chrome that pits in humidity'
            ].map((tip, index) => (
              <div key={index} className="flex items-start gap-2 text-blue-800">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{tip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="mb-10 p-6 bg-red-50 rounded-xl border border-red-200">
          <h2 className="text-2xl font-bold text-red-900 mb-4">
            Material Mistakes KL Homeowners Regret
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

        {/* Testing Samples */}
        <div className="mb-10 p-6 bg-green-50 rounded-xl border border-green-200">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            How We Test Materials Before Final Choice
          </h2>
          <p className="text-green-800">
            We bring physical samples to your home to see how they look under your specific lighting and humidity conditions.
            What looks perfect in a showroom can appear completely different in your actual space.
          </p>
        </div>

        {/* Preparation Checklist */}
        <div className="mb-10 p-6 bg-gray-50 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-bold text-[#59514e] mb-4">
            Before Choosing Your Finishes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              'Know your priorities (low maintenance vs luxury look)',
              'Collect 10-15 reference images',
              'List rooms & high-use areas',
              'Note family needs (kids/pets/allergies)',
              'Ask about warranties & after-sales',
              'Request physical samples in your lighting',
              'Confirm humidity/termite treatment'
            ].map((item, index) => (
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
            <h2 className="text-2xl font-bold text-[#59514e] mb-3">
              Ready to Choose Materials That Last?
            </h2>
            <p className="text-gray-600 mb-6">
              The right finishes keep your home beautiful for years, save maintenance headaches,
              and protect your investment. Let's curate a shortlist that actually performs in KL.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <StandardButton variant="primary" showArrow>
                  Book Material Consultation
                </StandardButton>
              </Link>
              <a
                href="https://wa.me/60125053395?text=Hi! I'd like to discuss material selection for my KL home renovation."
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

export default MaterialSelection;