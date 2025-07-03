import IndividualProduct from "./individual-product"

export default function ExpandedProducts() {
  const allProducts = [
    {
      name: "Complete Chemistry Laboratory Set",
      image: "/images/complete-chemistry-set.jpg",
      description:
        "Comprehensive laboratory equipment set with microscopes, glassware, chemicals, and portable case for educational institutions",
      category: "Laboratory Equipment",
      features: [
        "Professional microscopes with multiple magnifications",
        "Complete glassware collection (beakers, flasks, test tubes)",
        "Chemical reagents and indicators",
        "Portable carrying case for easy transport",
        "Instruction manual and experiment guides",
        "Safety equipment included",
      ],
      price: "Contact for Quote",
    },
    {
      name: "Advanced Laboratory Instruments",
      image: "/images/advanced-lab-equipment.jpg",
      description:
        "Professional heating equipment, digital scales, pH meters, and precision measuring instruments for research facilities",
      category: "Laboratory Equipment",
      features: [
        "Digital precision scales (0.1g accuracy)",
        "Hot plates with magnetic stirrers",
        "pH meters with calibration solutions",
        "Pressure gauges and vacuum equipment",
        "Temperature controllers",
        "Professional clamps and stands",
      ],
      price: "Contact for Quote",
    },
    {
      name: "Professional Safety Equipment Kit",
      image: "/images/safety-equipment-new.jpg",
      description:
        "Complete PPE package including respirators, safety goggles, protective clothing, and emergency equipment",
      category: "Safety Equipment",
      features: [
        "N95 and P100 respirator masks",
        "Chemical-resistant safety goggles",
        "Heat-resistant gloves and clothing",
        "Hard hats and safety helmets",
        "Emergency eyewash stations",
        "First aid and safety supplies",
      ],
      price: "Contact for Quote",
    },
    {
      name: "Laboratory Glassware Collection",
      image: "/images/lab-glassware-new.jpg",
      description:
        "High-quality borosilicate glassware including beakers, flasks, test tubes, and precision measuring equipment",
      category: "Laboratory Equipment",
      features: [
        "Borosilicate glass construction",
        "Various sizes: 50ml to 2000ml",
        "Graduated cylinders and pipettes",
        "Conical flasks and round-bottom flasks",
        "Test tube racks and holders",
        "Measuring cups and funnels",
      ],
      price: "Contact for Quote",
    },
    {
      name: "Laboratory Heating Equipment",
      image: "/images/lab-heating-equipment.jpg",
      description: "Professional hot plates, magnetic stirrers, heating mantles, and temperature control equipment",
      category: "Laboratory Equipment",
      features: [
        "Digital temperature control",
        "Magnetic stirring capability",
        "Ceramic heating surfaces",
        "Safety shut-off features",
        "Variable speed control",
        "Corrosion-resistant materials",
      ],
      price: "Contact for Quote",
    },
    {
      name: "Teyne Acne Treatment Mask - Premium",
      image: "/images/teyne-mask-new-1.jpg",
      description: "Premium acne treatment mask with natural ingredients for clear, healthy skin and blemish control",
      category: "Cosmetics",
      features: [
        "Natural clay and mineral formula",
        "Deep pore cleansing action",
        "Reduces acne and blemishes",
        "Suitable for all skin types",
        "Dermatologically tested",
        "100ml professional size",
      ],
      price: "$15.99",
    },
    {
      name: "Teyne Acne Treatment Mask - Classic",
      image: "/images/teyne-mask-new-2.jpg",
      description: "Classic formula acne treatment mask for effective blemish control and skin purification",
      category: "Cosmetics",
      features: [
        "Proven acne-fighting formula",
        "Oil control and pore minimizing",
        "Anti-inflammatory properties",
        "Easy application and removal",
        "Pleasant natural fragrance",
        "75ml convenient size",
      ],
      price: "$12.99",
    },
    {
      name: "Teyne Acne Treatment Mask - Sensitive",
      image: "/images/teyne-mask-new-3.jpg",
      description: "Gentle formula designed for sensitive skin while maintaining effective acne treatment properties",
      category: "Cosmetics",
      features: [
        "Gentle formula for sensitive skin",
        "Hypoallergenic ingredients",
        "Soothing and calming effect",
        "Reduces redness and irritation",
        "Fragrance-free formulation",
        "50ml travel-friendly size",
      ],
      price: "$13.99",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Complete Product Range</h2>
          <p className="text-gray-600 text-lg">
            Explore our comprehensive collection of laboratory equipment, safety gear, and cosmetic products
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allProducts.map((product, index) => (
            <IndividualProduct
              key={index}
              name={product.name}
              image={product.image}
              description={product.description}
              category={product.category}
              features={product.features}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
