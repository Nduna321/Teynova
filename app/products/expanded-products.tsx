import IndividualProduct from "./individual-product"

interface ExpandedProductsProps {
  selectedCategory: string
}

export default function ExpandedProducts({ selectedCategory }: ExpandedProductsProps) {
  const allProducts = [

    // Lab Equipment & Accessories
    {
      name: "Complete Chemistry Laboratory Set",
      image: "/images/complete-chemistry-set.jpg",
      description:
          "Comprehensive laboratory equipment set with microscopes, glassware, chemicals, and portable case for educational institutions",
      category: "Lab Equipment & Accessories",
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
      image: "/images/lab-heating-equipment.jpg",
      description:
          "Professional heating equipment, digital scales, pH meters, and precision measuring instruments for research facilities",
      category: "Lab Equipment & Accessories",
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
      name: "Laboratory Glassware Collection - Professional",
      image: "/images/lab-glassware-new.jpg",
      description:
          "High-quality borosilicate glassware including beakers, flasks, test tubes, and precision measuring equipment",
      category: "Lab Equipment & Accessories",
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
      name: "Laboratory Glassware Set - Educational",
      image: "/images/Laboratory Glassware Set - Educational.jpg",
      description:
          "Educational laboratory glassware set perfect for schools and training institutions with safety equipment",
      category: "Lab Equipment & Accessories",
      features: [
        "Educational grade glassware",
        "Safety goggles and protective equipment",
        "Test tubes with racks and holders",
        "Measuring cylinders and beakers",
        "Stirring rods and spatulas",
        "Storage and organization solutions",
      ],
      price: "Contact for Quote",
    },
    {
      name: "Laboratory Heating Equipment - Advanced",
      image: "/images/advanced-lab-equipment.jpg",
      description:
          "Professional hot plates, magnetic stirrers, heating mantles, and temperature control equipment for precise laboratory work",
      category: "Lab Equipment & Accessories",
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
      name: "Precision Laboratory Scales",
      image: "/images/advanced-lab-equipment.jpg",
      description:
          "High-precision digital scales and balances for accurate measurements in laboratory and research applications",
      category: "Lab Equipment & Accessories",
      features: [
        "0.1mg to 0.1g precision options",
        "Digital display with backlight",
        "Calibration weights included",
        "Draft shield for accurate readings",
        "Data logging capabilities",
        "Multiple weighing units",
      ],
      price: "Contact for Quote",
    },

    // Industrial Safety Wear
    {
      name: "Professional Safety Equipment Kit",
      image: "/images/safety-equipment-new.jpg",
      description:
          "Complete PPE package including respirators, safety goggles, protective clothing, and emergency equipment",
      category: "Industrial Safety Wear",
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
      name: "High-Visibility Safety Clothing Set",
      image: "/images/safety-equipment-2.jpg",
      description:
          "Complete high-visibility clothing set for construction and industrial workers with reflective strips",
      category: "Industrial Safety Wear",
      features: [
        "ANSI Class 3 high-visibility standards",
        "Reflective tape for maximum visibility",
        "Breathable, moisture-wicking fabric",
        "Reinforced stress points",
        "Multiple pocket configurations",
        "Available in various sizes",
      ],
      price: "Contact for Quote",
    },
    {
      name: "Chemical Resistant Safety Suits",
      image: "/images/safety-equipment-new.jpg",
      description: "Professional chemical resistant suits for hazardous material handling and industrial applications",
      category: "Industrial Safety Wear",
      features: [
        "Chemical resistant materials",
        "Full body protection coverage",
        "Sealed seams and zippers",
        "Integrated hood and boot covers",
        "Disposable and reusable options",
        "Various protection levels available",
      ],
      price: "Contact for Quote",
    },

    // Cosmetics - Hair Care
    {
      name: "Teynoc Dreadloc Cleanser - Premium",
      image: "/images/skin.jpg",
      description: "Professional dreadlock cleanser with natural ingredients for healthy, clean locs without residue",
      category: "Cosmetics - Hair Care",
      features: [
        "Natural aloe vera and tea tree oil formula",
        "Deep cleansing without residue buildup",
        "Maintains natural oils and moisture",
        "Suitable for all hair types and textures",
        "Eco-friendly and biodegradable",
        "500ml professional size bottle",
      ],
      price: "$2.99",
    },
    {
      name: "Teynoc Hair Growth Treatment",
      image: "/images/mask care.jpg",
      description:
          "Advanced hair growth treatment with natural botanicals to promote healthy hair growth and scalp health",
      category: "Cosmetics - Hair Care",
      features: [
        "Stimulates hair follicles naturally",
        "Rich in vitamins and minerals",
        "Reduces hair breakage and thinning",
        "Improves scalp circulation",
        "Suitable for chemically treated hair",
        "200ml treatment bottle",
      ],
      price: "$2.99",
    },
    {
      name: "Natural Hair Strengthening Oil",
      image: "/images/skin.jpg",
      description: "Nourishing hair oil blend with essential oils to strengthen and protect hair from damage",
      category: "Cosmetics - Hair Care",
      features: [
        "Blend of argan, jojoba, and coconut oils",
        "Strengthens hair shaft and reduces breakage",
        "Adds natural shine and softness",
        "Heat protection properties",
        "Non-greasy formula",
        "100ml glass bottle with dropper",
      ],
      price: "$1.99",
    },

    // Cosmetics - Facial Care
    {
      name: "Teyne Acne Treatment Mask - Premium",
      image: "/images/face.jpg",
      description: "Premium acne treatment mask with natural ingredients for clear, healthy skin and blemish control",
      category: "Cosmetics - Facial Care",
      features: [
        "Natural clay and mineral formula",
        "Deep pore cleansing action",
        "Reduces acne and blemishes",
        "Suitable for all skin types",
        "Dermatologically tested",
        "100ml professional size",
      ],
      price: "$2.99",
    },
    {
      name: "Teyne Acne Treatment Mask - Classic",
      image: "/images/teyne-mask-new-2.jpg",
      description: "Classic formula acne treatment mask for effective blemish control and skin purification",
      category: "Cosmetics - Facial Care",
      features: [
        "Proven acne-fighting formula",
        "Oil control and pore minimizing",
        "Anti-inflammatory properties",
        "Easy application and removal",
        "Pleasant natural fragrance",
        "75ml convenient size",
      ],
      price: "$2.99",
    },
    {
      name: "Teyne Anti-Aging Serum",
      image: "/images/face.jpg",
      description: "Advanced anti-aging serum with natural peptides and antioxidants for youthful, radiant skin",
      category: "Cosmetics - Facial Care",
      features: [
        "Natural peptides and antioxidants",
        "Reduces fine lines and wrinkles",
        "Improves skin elasticity and firmness",
        "Hydrates and nourishes skin",
        "Fast-absorbing, non-greasy formula",
        "30ml concentrated serum",
      ],
      price: "$1.99",
    },



  ]

  const filteredProducts = allProducts.filter((product) => {
    if (selectedCategory === "all") return true
    if (selectedCategory === "lab-equipment") return product.category.includes("Lab Equipment & Accessories")
    if (selectedCategory === "industrial-safety") return product.category.includes("Industrial Safety Wear")
    if (selectedCategory === "cosmetics") return product.category.includes("Cosmetics")
    return true
  })

  return (
      <section id="filtered-products" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {selectedCategory === "all"
                  ? "Our Complete Product Range"

                      : selectedCategory === "lab-equipment"
                          ? "Lab Equipment & Accessories"

                      : selectedCategory === "industrial-safety"
                          ? "Industrial Safety Wear"

                          : selectedCategory === "cosmetics"
                              ? "Cosmetics Products"
                              : "Our Complete Product Range"}
            </h2>
            <p className="text-gray-600 text-lg">
              {selectedCategory === "all"
                  ? "Explore our comprehensive collection of laboratory equipment, safety gear, and cosmetic products"
                  : selectedCategory === "lab-equipment"
                      ? "Professional laboratory equipment and accessories for research and education"

                      : selectedCategory === "industrial-safety"
                          ? "Professional safety equipment and protective gear for industrial applications"

                          : selectedCategory === "cosmetics"
                              ? "Premium hair care and facial care products for all your beauty needs"
                              : "Explore our comprehensive collection of laboratory equipment, safety gear, and cosmetic products"}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
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
