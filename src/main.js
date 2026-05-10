import './style.css';

// --- Data ---
const products = [
  {
    id: 201,
    name: "Infant Girl Organic Cotton Black Romper",
    description: "A chic and comfortable organic cotton romper in classic black, featuring a matching headband. Perfect for special outings and easy everyday wear.",
    details: {
      "Gender": "Girls",
      "Product Type": "Romper",
      "Age Group": "Infant (0-12 Months)",
      "Primary Material": "100% Organic Cotton",
      "Sleeve Type": "Sleeveless",
      "Pattern": "Solid",
      "Primary Colour": "Black",
      "Product Fit": "Regular",
      "Occasion": "Casual",
      "Category": "Baby Girl"
    },
    price: 1499, originalPrice: 1499,
    discount: "",
    image: "https://images.pexels.com/photos/33076403/pexels-photo-33076403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "baby-girl",
    type: "Romper",
    rating: 4.9,
    reviews: []
  },
  {
    id: 202,
    name: "Baby Girl Pink Floral Summer Dress",
    description: "Brighten up her day with this beautiful pink floral dress. Made from ultra-soft cotton to keep her cool and comfortable during the summer months.",
    details: {
      "Gender": "Girls",
      "Product Type": "Dress",
      "Age Group": "Infant (6-12 Months)",
      "Primary Material": "Organic Cotton",
      "Sleeve Type": "Short Sleeves",
      "Pattern": "Floral",
      "Primary Colour": "Pink",
      "Product Fit": "Regular",
      "Occasion": "Daywear",
      "Category": "Baby Girl"
    },
    price: 1699, originalPrice: 1699,
    discount: "",
    image: "https://images.pexels.com/photos/13914396/pexels-photo-13914396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "baby-girl",
    type: "Dress",
    rating: 4.8,
    reviews: []
  },
  {
    id: 203,
    name: "Infant Girl Cream Lace Party Romper",
    description: "An elegant cream lace romper designed for tiny celebrations. Crafted with a soft lining to ensure no irritation on delicate skin.",
    details: {
      "Gender": "Girls",
      "Product Type": "Romper",
      "Age Group": "Infant (0-6 Months)",
      "Primary Material": "Lace & Cotton",
      "Sleeve Type": "Sleeveless",
      "Pattern": "Lace",
      "Primary Colour": "Cream",
      "Product Fit": "Comfort Fit",
      "Occasion": "Party",
      "Category": "Baby Girl"
    },
    price: 1999, originalPrice: 1999,
    discount: "",
    image: "https://images.pexels.com/photos/33016293/pexels-photo-33016293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "baby-girl",
    type: "Romper",
    rating: 5.0,
    reviews: []
  },
  {
    id: 204,
    name: "Baby Girl Denim Romper with Floral Bow",
    description: "A trendy blue denim romper accented with a charming floral bow. Durable yet soft, ideal for her little adventures.",
    details: {
      "Gender": "Girls",
      "Product Type": "Romper",
      "Age Group": "Infant (6-12 Months)",
      "Primary Material": "Cotton Denim",
      "Sleeve Type": "Sleeveless",
      "Pattern": "Denim",
      "Primary Colour": "Blue",
      "Product Fit": "Regular",
      "Occasion": "Casual",
      "Category": "Baby Girl"
    },
    price: 1799, originalPrice: 1799,
    discount: "",
    image: "https://images.pexels.com/photos/33016297/pexels-photo-33016297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "baby-girl",
    type: "Romper",
    rating: 4.7,
    reviews: []
  },
  {
    id: 101,
    name: "Infant Boy Organic Cotton White Romper",
    description: "Keep your little bean comfortable and breezy with this premium organic cotton white romper. Thoughtfully designed for soft skin and easy movement.",
    details: {
      "Gender": "Boys",
      "Product Type": "Romper",
      "Age Group": "Infant (0-12 Months)",
      "Primary Material": "100% Organic Cotton",
      "Sleeve Type": "Sleeveless",
      "Pattern": "Solid",
      "Primary Colour": "White",
      "Product Fit": "Regular",
      "Occasion": "Casual",
      "Category": "Baby Boy"
    },
    price: 1299, originalPrice: 1299,
    discount: "",
    image: "/images/indian_baby_boy_1.png",
    category: "baby-boy",
    type: "Romper",
    rating: 4.9,
    reviews: []
  },
  {
    id: 102,
    name: "Baby Boy Soft Blue Striped Onesie",
    description: "A classic striped onesie in soft blue, crafted from breathable cotton for all-day comfort. Perfect for everyday adventures.",
    details: {
      "Gender": "Boys",
      "Product Type": "Onesie",
      "Age Group": "Infant (0-12 Months)",
      "Primary Material": "Organic Cotton",
      "Sleeve Type": "Half Sleeves",
      "Pattern": "Striped",
      "Primary Colour": "Blue",
      "Product Fit": "Regular",
      "Occasion": "Casual",
      "Category": "Baby Boy"
    },
    price: 999, originalPrice: 999,
    discount: "",
    image: "/images/indian_baby_boy_2.png",
    category: "baby-boy",
    type: "Onesie",
    rating: 4.8,
    reviews: []
  },
  {
    id: 103,
    name: "Newborn Boy Knitted Cotton Beige Set",
    description: "Cozy and elegant, this knitted cotton set in neutral beige is perfect for cooler days. Includes a soft sweater and matching pants.",
    details: {
      "Gender": "Boys",
      "Product Type": "Clothing Set",
      "Age Group": "Newborn (0-6 Months)",
      "Primary Material": "Knitted Cotton",
      "Sleeve Type": "Full Sleeves",
      "Pattern": "Knitted",
      "Primary Colour": "Beige",
      "Product Fit": "Comfort Fit",
      "Occasion": "Casual",
      "Category": "Baby Boy"
    },
    price: 2499, originalPrice: 2499,
    discount: "",
    image: "/images/indian_baby_boy_3.png",
    category: "baby-boy",
    type: "Set",
    rating: 4.9,
    reviews: []
  },
  {
    id: 104,
    name: "Infant Boy Sage Green Footed Sleeper",
    description: "A peaceful night's sleep awaits in this sage green footed sleeper. Crafted from ultra-soft organic cotton with a focus on comfort.",
    details: {
      "Gender": "Boys",
      "Product Type": "Sleeper",
      "Age Group": "Infant (0-12 Months)",
      "Primary Material": "100% Organic Cotton",
      "Sleeve Type": "Full Sleeves",
      "Pattern": "Solid",
      "Primary Colour": "Sage Green",
      "Product Fit": "Regular",
      "Occasion": "Sleepwear",
      "Category": "Baby Boy"
    },
    price: 1599, originalPrice: 1599,
    discount: "",
    image: "/images/indian_baby_boy_4.png",
    category: "baby-boy",
    type: "Sleeper",
    rating: 5.0,
    reviews: []
  },
  {
    id: 1,
    name: "Boys Olive All-Over Print Cotton Shirt",
    description: "Designed for little explorers with curious imaginations, this olive printed cotton shirt brings a playful outdoor-inspired charm to everyday dressing. Crafted from breathable cotton fabric, the lightweight silhouette keeps movement easy through casual outings, creative afternoons, and weekend adventures. The nature-inspired all-over print adds a fresh relaxed feel to this everyday essential.",
    details: {
      "Gender": "Boys",
      "Product Type": "Half Sleeves Shirt",
      "Age Group": "Kids",
      "Primary Material": "Cotton",
      "Pattern": "All Over Printed",
      "Primary Colour": "Olive",
      "Product Fit": "Regular",
      "Occasion": "Casual",
      "Category": "Shirts"
    },
    price: 2599, originalPrice: 2599,
    discount: "",
    image: "/images/indian_boy_1.png",
    images: [
      "/images/boy1.png",
      "/images/product_boys_abstract_1.jpg",
      "/images/product_boys_abstract_2.jpg",
      "/images/product_boys_abstract_3.jpg"
    ],
    category: "boys",
    type: "Set",
    rating: 4.8,
    reviews: [
      { user: "Priya S.", rating: 5, date: "2024-03-15", comment: "The abstract print is so unique. Very high quality fabric." },
      { user: "Anand K.", rating: 5, date: "2024-03-18", comment: "Perfect fit for my 5-year-old. He loves the cargo pockets!" },
      { user: "Meera J.", rating: 4, date: "2024-03-22", comment: "Very stylish set. The colors haven't faded after multiple washes." },
      { user: "Rahul T.", rating: 5, date: "2024-03-25", comment: "Great value for money. Ed-a-Mamma never disappoints." },
      { user: "Sonal G.", rating: 5, date: "2024-03-28", comment: "Softest cotton I've ever felt. Highly recommend this brand." }
    ],
    pdpBanners: [
      "/images/products/pdp/1/34.png",
      "/images/products/pdp/1/35.png",
      "/images/products/pdp/1/36.png"
    ]
  },
  {
    id: 3,
    name: "Boys Red Woven Cotton Shorts",
    description: "Made for little beans always on the move, these red woven cotton shorts bring a playful burst of colour to everyday dressing. Crafted from breathable cotton fabric, the relaxed silhouette keeps movement easy through outdoor play, creative afternoons, and casual outings. The utility-inspired pockets and adjustable drawstring waist add both comfort and functionality to this everyday essential.",
    details: {
      "Gender": "Boys",
      "Product Type": "Woven Shorts",
      "Age Group": "Kids",
      "Primary Material": "Cotton",
      "Pattern": "Solid",
      "Primary Colour": "Red",
      "Product Fit": "Regular",
      "Occasion": "Casual",
      "Category": "Shorts"
    },
    price: 2399, originalPrice: 2399,
    discount: "",
    image: "/images/indian_boy_2.png",
    images: [
      "/images/boy2.png",
      "/images/product_boys_shorts_1.jpg",
      "/images/product_boys_shorts_2.jpg",
      "/images/product_boys_shorts_3.jpg"
    ],
    category: "boys",
    pdpBanners: [
      "/images/banner_boy_2_1.png",
      "/images/banner_boy_2_2.png",
      "/images/banner_boy_2_3.png"
    ],
    type: "Set",
    rating: 4.7,
    reviews: [
      { user: "Vikram T.", rating: 5, date: "2024-02-15", comment: "Perfect summer outfit. The colors are very vibrant." }
    ]
  },
  {
    id: 6,
    name: "Boys Graphic Printed Cotton T-Shirt Pack of 2",
    description: "Keep your little bean ready for every playful moment with this graphic printed cotton T-shirt pack of 2. Crafted from soft breathable cotton, these regular-fit crew neck tees are designed for easy everyday dressing, active playtime, weekend outings, and comfortable all-day wear.",
    details: {
      "Gender": "Boys",
      "Product Type": "Regular T-Shirts",
      "Age Group": "Kids",
      "Primary Material": "Cotton",
      "Neck Type": "Crew Neck",
      "Sleeve Type": "Half Sleeves",
      "Pattern": "Printed",
      "Primary Colour": "Multi",
      "Product Fit": "Regular",
      "Occasion": "Casual",
      "Category": "Boys T-Shirts"
    },
    price: 1599, originalPrice: 1599,
    discount: "",
    image: "/images/boy3.png",
    images: [
      "/images/boy3.png",
      "/images/product_boys_tees_1.jpg",
      "/images/product_boys_tees_2.jpg",
      "/images/product_boys_tees_3.jpg"
    ],
    category: "boys",
    pdpBanners: [
      "/images/banner_boy_3_1.png",
      "/images/banner_boy_3_2.png",
      "/images/banner_boy_3_3.png"
    ],
    type: "T-Shirt Pack",
    rating: 4.5,
    reviews: [
      { user: "Rahul M.", rating: 4, date: "2024-02-28", comment: "The 'Ready to Play' tee is my son's favorite. Soft cotton." }
    ]
  },
  {
    id: 7,
    name: "Boys Dark Blue Straight-Fit Cotton Jeans",
    description: "Made for little beans always on the move, these dark blue straight-fit jeans bring together everyday comfort with easy utility styling. The functional pockets add a playful utility touch for little everyday essentials. Designed with azo-free dyes, nickel-free trims, and planet-friendly plastic-free buttons, the fabric feels gentle on delicate skin.",
    details: {
      "Gender": "Boys",
      "Product Type": "Straight-Fit Jeans",
      "Age Group": "Kids",
      "Primary Material": "Cotton",
      "Pattern": "Washed",
      "Primary Colour": "Dark Blue",
      "Product Fit": "Regular",
      "Occasion": "Casual",
      "Category": "Jeans"
    },
    price: 2999, originalPrice: 2999,
    discount: "",
    image: "/images/indian_boy_4.png",
    images: [
      "/images/boy4.png",
      "/images/product_boys_beige_1.jpg",
      "/images/product_boys_beige_2.jpg",
      "/images/product_boys_beige_3.jpg"
    ],
    category: "boys",
    pdpBanners: [
      "/images/banner_boy_4_1.png",
      "/images/banner_boy_4_2.png",
      "/images/banner_boy_4_3.png"
    ],
    type: "Set",
    rating: 4.8,
    reviews: [
      { user: "Sameer H.", rating: 4, date: "2024-03-05", comment: "Elegant yet casual. The denim has a great fit." }
    ]
  },

  {
    id: 43,
    name: "Girls Tie-Dye Sleeveless smocked dress",
    description: "Add a splash of colour to your little bean’s wardrobe with this cheerful tie-dye sleeveless dress, thoughtfully designed for easy movement and lightweight everyday comfort. Crafted in soft breathable rayon fabric, the airy silhouette keeps dressing effortless through vacations, birthday celebrations, creative afternoons, and warm-weather outings.",
    details: {
      "Product Type": "Sleeveless Dress",
      "Category": "Girls Dresses",
      "Age Group": "Kids",
      "Primary Material": "Rayon",
      "Sleeve Type": "Sleeveless",
      "Neck Type": "Square Neck",
      "Colour": "Sunset Pink",
      "Fit": "Regular Fit",
      "Occasion": "Casual Wear"
    },
    price: 1799, originalPrice: 1799,
    discount: "",
    image: "/images/indian_girl_1.png",
    images: [
      "/images/girl1.jpg",
      "/images/product_girl_dress_1.jpg",
      "/images/product_girl_dress_2.jpg",
      "/images/product_girl_dress_3.jpg"
    ],
    category: "girls",
    pdpBanners: [
      "/images/banner_girl_1_1.png",
      "/images/banner_girl_1_2.png",
      "/images/banner_girl_1_3.png"
    ],
    type: "Dress",
    rating: 4.8,
    reviews: [
      { user: "Aditi R.", rating: 5, date: "2024-05-25", comment: "The tie-dye is so vibrant! Perfect for summer." }
    ]
  },

  {
    id: 44,
    name: "Girls Embroidered Off-White Co-Ord Set",
    description: "Delicate embroidery and soft neutral tones come together in this elegant off-white co-ord set designed for effortless everyday dressing. Crafted from breathable cotton fabric, the coordinated silhouette feels light, airy, and comfortable while adding a graceful charm to special outings and elevated casual moments.",
    details: {
      "Gender": "Girls",
      "Age Group": "Kids",
      "Primary Material": "Cotton",
      "Sleeve Type": "Half",
      "Neck Type": "Round Neck",
      "Pattern": "Embroidered",
      "Primary Colour": "Off-White",
      "Product Fit": "Regular",
      "Occasion": "Casual",
      "Category": "Clothing Sets"
    },
    price: 2999, originalPrice: 2999,
    discount: "",
    image: "/images/indian_girl_2.png",
    images: [
      "/images/girl2.jpg",
      "/images/product_girl_coord_1.jpg",
      "/images/product_girl_coord_2.jpg",
      "/images/product_girl_coord_3.jpg"
    ],
    category: "girls",
    pdpBanners: [
      "/images/banner_girl_2_1.png",
      "/images/banner_girl_2_2.png",
      "/images/banner_girl_2_3.png"
    ],
    type: "Set",
    rating: 4.9,
    reviews: [
      { user: "Neha G.", rating: 5, date: "2024-05-28", comment: "Absolutely elegant. The embroidery is very detailed." }
    ]
  },
  {
    id: 45,
    name: "Girls Heart Print Wide-Leg Jeans",
    description: "Easy, playful, and effortlessly cool, these wide-leg jeans bring a relaxed update to everyday dressing. Designed in soft cotton denim with subtle heart print detailing, the comfort-fit silhouette allows easy movement while adding a cheerful touch to casual wardrobes. Perfect for pairing with lightweight shirts, graphic tees, and everyday layers.",
    details: {
      "Gender": "Girls",
      "Product Type": "Jeans",
      "Category": "Girls Denim Jeans",
      "Age Group": "Kids",
      "Primary Material": "Cotton",
      "Pattern": "Solid",
      "Colour": "Mid Blue",
      "Fit": "Comfort Fit",
      "Occasion": "Casual Wear"
    },
    price: 2599, originalPrice: 2599,
    discount: "",
    image: "/images/indian_girl_3.png",
    images: [
      "/images/girl3.jpg",
      "/images/product_girl_jeans_1.jpg",
      "/images/product_girl_jeans_2.jpg",
      "/images/product_girl_jeans_3.jpg"
    ],
    category: "girls",
    pdpBanners: [
      "/images/banner_girl_3_1.png",
      "/images/banner_girl_3_2.png",
      "/images/banner_girl_3_3.png"
    ],
    type: "Set",
    rating: 4.7,
    reviews: [
      { user: "Sonal V.", rating: 5, date: "2024-05-30", comment: "Love the heart print on the jeans. Very cute set." }
    ]
  },
  {
    id: 46,
    name: "Girls Yellow Sunshine Layered Cotton Strappy Top",
    description: "Add a little sunshine to your little bean’s wardrobe with this cheerful layered cotton strappy top, thoughtfully designed for breezy comfort, easy movement, and playful everyday dressing.",
    details: {
      "Gender": "Girls",
      "Product Type": "Strappy Top",
      "Category": "Girls Cotton Tops",
      "Age Group": "Kids",
      "Primary Material": "100% Cotton",
      "Sleeve Type": "Sleeveless",
      "Pattern": "Solid",
      "Colour": "Sunshine Yellow",
      "Fit": "Regular Fit",
      "Occasion": "Casual Wear"
    },
    price: 2199, originalPrice: 2199,
    discount: "",
    image: "/images/girl4.jpg",
    images: [
      "/images/girl4.jpg",
      "/images/product_girl_yellow_1.jpg",
      "/images/product_girl_yellow_2.jpg",
      "/images/product_girl_yellow_3.jpg"
    ],
    category: "girls",
    pdpBanners: [
      "/images/banner_girl_4_1.png",
      "/images/banner_girl_4_2.png",
      "/images/banner_girl_4_3.png"
    ],
    type: "Set",
    rating: 4.8,
    reviews: [
      { user: "Kriti M.", rating: 4, date: "2024-06-01", comment: "The yellow top is very cheerful. Fits perfectly." }
    ]
  },
  {
    id: 9,
    name: "Maternity Lemon Print Cotton Dress - Light Blue",
    price: 1499, originalPrice: 1499,
    discount: "",
    image: "/images/maternity1.png",
    category: "maternity",
    type: "Dress",
    rating: 4.7,
    reviews: [
      { user: "Aditi S.", rating: 5, date: "2024-04-20", comment: "The lemon print is so refreshing! Very comfortable for all-day wear." },
      { user: "Pooja D.", rating: 4, date: "2024-04-01", comment: "Perfect for summer outings. The light blue color is very calming." }
    ]
  },
  {
    id: 10,
    name: "Maternity Comfortable Cotton Top - Sunny Yellow",
    price: 1999, originalPrice: 1999,
    discount: "",
    image: "/images/maternity2.png",
    category: "maternity",
    type: "Top",
    rating: 4.8,
    reviews: [
      { user: "Tanvi K.", rating: 5, date: "2024-04-22", comment: "Such a cheerful yellow! The fabric is breathable and soft on the skin." },
      { user: "Isha M.", rating: 5, date: "2024-04-05", comment: "Elegant and practical. I love the fit of this top." }
    ]
  },
  {
    id: 11,
    name: "Maternity Wide-Leg Denim with Floral Embroidery",
    price: 1599, originalPrice: 1599,
    discount: "",
    image: "/images/maternity3.png",
    category: "maternity",
    type: "Bottomwear",
    rating: 4.5,
    reviews: [
      { user: "Roshni Z.", rating: 4, date: "2024-04-25", comment: "Love the floral details on the sides. Very stylish for maternity jeans." },
      { user: "Bhavna F.", rating: 5, date: "2024-04-10", comment: "The wide-leg fit is so trendy and comfortable. Highly recommend!" }
    ]
  },
  {
    id: 24,
    name: "Maternity Button-Down Shirt - Blush Pink",
    price: 2499, originalPrice: 2499,
    discount: "",
    image: "/images/maternity4.png",
    category: "maternity",
    type: "Top",
    rating: 4.9,
    reviews: [
      { user: "Sneha V.", rating: 5, date: "2024-04-28", comment: "Gorgeous pink shirt. Great for layering or wearing as is." }
    ]
  },
  {
    id: 25,
    name: "Maternity Striped Knit Sweater & White Trousers Set",
    price: 1199, originalPrice: 1199,
    discount: "",
    image: "/images/maternity5.png",
    category: "maternity",
    type: "Set",
    rating: 4.6,
    reviews: [
      { user: "Ritu G.", rating: 4, date: "2024-04-30", comment: "The sweater is so cozy. Perfect for lounge days." }
    ]
  },
  {
    id: 26,
    name: "Maternity Blue Striped Button-Down Shirt",
    price: 1599, originalPrice: 1599,
    discount: "",
    image: "/images/maternity6.png",
    category: "maternity",
    type: "Top",
    rating: 4.7,
    reviews: [
      { user: "Ananya M.", rating: 5, date: "2024-05-02", comment: "Classic stripes, looks great with distressed jeans." }
    ]
  },
  {
    id: 27,
    name: "Baby's Breath Natural Body Wash",
    price: 799, originalPrice: 799,
    discount: "",
    image: "/images/1778352236446.jpg",
    category: "personal-care",
    type: "Bath & Body",
    rating: 4.9,
    reviews: [
      { user: "Anjali S.", rating: 5, date: "2024-08-01", comment: "So gentle on my baby's skin. Smells amazing!" }
    ]
  },
  {
    id: 28,
    name: "Pure & Simple Baby Face Cream",
    price: 599, originalPrice: 599,
    discount: "",
    image: "/images/1778352257302.jpg",
    category: "personal-care",
    type: "Bath & Body",
    rating: 4.8,
    reviews: [
      { user: "Vikram R.", rating: 5, date: "2024-08-03", comment: "Keeps the skin hydrated for hours. No irritation." }
    ]
  },
  {
    id: 29,
    name: "Calm & Cozy Lavender Massage Oil",
    price: 899, originalPrice: 899,
    discount: "",
    image: "/images/1778352267475.jpg",
    category: "personal-care",
    type: "Bath & Body",
    rating: 4.7,
    reviews: [
      { user: "Pooja K.", rating: 4, date: "2024-08-05", comment: "Perfect for bedtime routine. Very relaxing scent." }
    ]
  },
  {
    id: 30,
    name: "Soft Touch Talc-Free Baby Powder",
    price: 499, originalPrice: 499,
    discount: "",
    image: "/images/1778352279459.jpg",
    category: "personal-care",
    type: "Bath & Body",
    rating: 4.9,
    reviews: [
      { user: "Sameer H.", rating: 5, date: "2024-08-08", comment: "Best talc-free powder I've used. Very fine and absorbent." }
    ]
  },
  {
    id: 31,
    name: "Pure Water Baby Wipes - Pack of 3",
    price: 599, originalPrice: 599,
    discount: "",
    image: "/images/1778352141711.jpg",
    category: "personal-care",
    type: "wipes",
    rating: 4.9,
    reviews: [
      { user: "Sneha P.", rating: 5, date: "2024-08-12", comment: "The best wipes for sensitive skin. Very moist." }
    ]
  },
  {
    id: 32,
    name: "Biodegradable Bamboo Wipes - Travel Pack",
    price: 299, originalPrice: 299,
    discount: "",
    image: "/images/1778352155750.jpg",
    category: "personal-care",
    type: "wipes",
    rating: 4.8,
    reviews: [
      { user: "Amit S.", rating: 5, date: "2024-08-15", comment: "Compact and eco-friendly. Perfect for diaper bags." }
    ]
  },
  {
    id: 33,
    name: "Organic Cotton Footed Sleeper - Blue Stars",
    price: 1199, originalPrice: 1199,
    discount: "",
    image: "/images/baby1.png",
    category: "baby",
    type: "Sleeper",
    rating: 4.8,
    reviews: [
      { user: "Priyanka L.", rating: 5, date: "2024-05-20", comment: "The softest cotton for my newborn. Highly satisfied." }
    ]
  },
  {
    id: 34,
    name: "Newborn Essentials Gift Set - Pastel Grey",
    price: 1999, originalPrice: 1999,
    discount: "",
    image: "/images/baby2.png",
    category: "baby",
    type: "Set",
    rating: 4.9,
    reviews: [
      { user: "Vikram S.", rating: 5, date: "2024-05-22", comment: "Perfect gift for a baby shower. The quality is top-notch." }
    ]
  },
  {
    id: 12,
    name: "Sustainable Wooden Pull Toy - Elephant",
    price: 1299, originalPrice: 1299,
    discount: "",
    image: "/images/toys/1778351096297.jpg",
    category: "toys",
    type: "Wooden Toy",
    rating: 4.9,
    reviews: [
      { user: "Sneha M.", rating: 5, date: "2024-07-10", comment: "Beautifully crafted and safe for my toddler." }
    ]
  },
  {
    id: 13,
    name: "Organic Cotton Plush Bear - Caramel",
    price: 1599, originalPrice: 1599,
    discount: "",
    image: "/images/toys/1778351113456.jpg",
    category: "toys",
    type: "Plushie",
    rating: 4.8,
    reviews: [
      { user: "Arjun K.", rating: 5, date: "2024-07-12", comment: "So soft and huggable. My daughter loves it." }
    ]
  },
  {
    id: 14,
    name: "Eco-Friendly Rainbow Stacker",
    price: 999, originalPrice: 999,
    discount: "",
    image: "/images/toys/1778351131341.jpg",
    category: "toys",
    type: "Wooden Toy",
    rating: 5.0,
    reviews: [
      { user: "Priya S.", rating: 5, date: "2024-07-15", comment: "Vibrant colors and great for motor skills." }
    ]
  },
  {
    id: 15,
    name: "Natural Rubber Teething Toy - Leaf",
    price: 699, originalPrice: 699,
    discount: "",
    image: "/images/toys/1778351151405.jpg",
    category: "toys",
    type: "Teether",
    rating: 4.7,
    reviews: [
      { user: "Meera D.", rating: 4, date: "2024-07-18", comment: "Very soothing for my baby's gums." }
    ]
  },
  {
    id: 16,
    name: "Sustainable Soft Cloth Book - Jungle Safari",
    price: 849, originalPrice: 849,
    discount: "",
    image: "/images/toys/1778351174342.jpg",
    category: "toys",
    type: "Educational Toy",
    rating: 4.9,
    reviews: [
      { user: "Rahul B.", rating: 5, date: "2024-07-20", comment: "Great for sensory play. Very high quality." }
    ]
  },
  {
    id: 17,
    name: "Wooden Shape Sorter Box",
    price: 1399, originalPrice: 1399,
    discount: "",
    image: "/images/toys/1778351196887.jpg",
    category: "toys",
    type: "Wooden Toy",
    rating: 4.8,
    reviews: [
      { user: "Anjali P.", rating: 5, date: "2024-07-22", comment: "Classic toy, well made and durable." }
    ]
  },

  {
    id: 101,
    name: "Toy Story Jessie Printed Cotton T-Shirt",
    price: 1499, originalPrice: 1499,
    discount: "",
    image: "/images/toys/image (11).png",
    category: "toy-story-x-ed-a-mamma",
    type: "T-Shirt",
    rating: 4.9,
    reviews: [
      { user: "Priya K.", rating: 5, date: "2024-06-05", comment: "My daughter loves Jessie! The print is very high quality." }
    ]
  },
  {
    id: 102,
    name: "Toy Story Woody Printed Cotton T-Shirt",
    price: 1499, originalPrice: 1499,
    discount: "",
    image: "/images/toys/image (12).png",
    category: "toy-story-x-ed-a-mamma",
    type: "T-Shirt",
    rating: 4.8,
    reviews: [
      { user: "Amit R.", rating: 5, date: "2024-06-08", comment: "Great fit and the Woody print looks awesome." }
    ]
  },
  {
    id: 103,
    name: "Toy Story Aliens Printed Cotton T-Shirt",
    price: 1499, originalPrice: 1499,
    discount: "",
    image: "/images/toys/image (13).png",
    category: "toy-story-x-ed-a-mamma",
    type: "T-Shirt",
    rating: 5.0,
    reviews: [
      { user: "Sonia P.", rating: 5, date: "2024-06-10", comment: "The 'Ooooh' aliens are so cute. Soft fabric." }
    ]
  },
  {
    id: 104,
    name: "Toy Story Woody & Buzz Disney 100 Printed T-Shirt",
    price: 1499, originalPrice: 1499,
    discount: "",
    image: "/images/toys/image (14).png",
    category: "toy-story-x-ed-a-mamma",
    type: "T-Shirt",
    rating: 4.7,
    reviews: [
      { user: "Vikram L.", rating: 4, date: "2024-06-12", comment: "Lovely Disney 100 edition. My son wears it all the time." }
    ]
  },
  {
    id: 105,
    name: "Toy Story Buzz & Mr. Potato Head Printed T-Shirt",
    price: 1499, originalPrice: 1499,
    discount: "",
    image: "/images/toys/image (15).png",
    category: "toy-story-x-ed-a-mamma",
    type: "T-Shirt",
    rating: 4.9,
    reviews: [
      { user: "Rahul B.", rating: 5, date: "2024-06-15", comment: "Fun graphic with Mr. Potato Head. Very durable." }
    ]
  },
  {
    id: 106,
    name: "Toy Story Jessie Lasso Printed Cotton T-Shirt",
    price: 1499, originalPrice: 1499,
    discount: "",
    image: "/images/toys/image (16).png",
    category: "toy-story-x-ed-a-mamma",
    type: "T-Shirt",
    rating: 4.8,
    reviews: [
      { user: "Neha S.", rating: 5, date: "2024-06-18", comment: "The lasso detail is really cool. Bright blue color." }
    ]
  },
  {
    id: 107,
    name: "Toy Story Friends Graphic Printed Cotton T-Shirt",
    price: 1499, originalPrice: 1499,
    discount: "",
    image: "/images/toys/image (17).png",
    category: "toy-story-x-ed-a-mamma",
    type: "T-Shirt",
    rating: 4.9,
    reviews: [
      { user: "Sameer V.", rating: 5, date: "2024-06-20", comment: "'You've got a friend in me' - such a classic! Love this shirt." }
    ]
  },
  {
    id: 108,
    name: "Toy Story Slinky Dog Back Graphic Printed T-Shirt",
    price: 1499, originalPrice: 1499,
    discount: "",
    image: "/images/toys/image (18).png",
    category: "toy-story-x-ed-a-mamma",
    type: "T-Shirt",
    rating: 5.0,
    reviews: [
      { user: "Kriti J.", rating: 5, date: "2024-06-22", comment: "The slinky dog on the back is a great touch." }
    ]
  },
  {
    id: 109,
    name: "Toy Story Buzz Lightyear Checkered Printed T-Shirt",
    price: 1499, originalPrice: 1499,
    discount: "",
    image: "/images/toys/image (19).png",
    category: "toy-story-x-ed-a-mamma",
    type: "T-Shirt",
    rating: 4.8,
    reviews: [
      { user: "Anand M.", rating: 4, date: "2024-06-25", comment: "The green checkered print is very unique. Good quality." }
    ]
  },
  {
    id: 110,
    name: "Toy Story Woody 'Hey Howdy Hey' Printed T-Shirt",
    price: 1499, originalPrice: 1499,
    discount: "",
    image: "/images/toys/image (20).png",
    category: "toy-story-x-ed-a-mamma",
    type: "T-Shirt",
    rating: 4.7,
    reviews: [
      { user: "Sonal G.", rating: 5, date: "2024-06-28", comment: "Classic Woody! My nephew loves the yellow color." }
    ]
  },
  {
    id: 111,
    name: "Toy Story Buzz 'To Infinity & Beyond' Printed T-Shirt",
    price: 1499, originalPrice: 1499,
    discount: "",
    image: "/images/toys/image (21).png",
    category: "toy-story-x-ed-a-mamma",
    type: "T-Shirt",
    rating: 4.9,
    reviews: [
      { user: "Arjun K.", rating: 5, date: "2024-06-30", comment: "To infinity and beyond! A must-have for Buzz fans." }
    ]
  },
  {
    id: 112,
    name: "Toy Story 'Wildest Adventure Ever' Graphic Printed T-Shirt",
    price: 1499, originalPrice: 1499,
    discount: "",
    image: "/images/toys/image (22).png",
    category: "toy-story-x-ed-a-mamma",
    type: "T-Shirt",
    rating: 4.8,
    reviews: [
      { user: "Meera D.", rating: 5, date: "2024-07-02", comment: "Great back graphic. The fabric is very thick and soft." }
    ]
  },
];

// Ensure all products have at least 5 reviews for a professional look
const dummyReviews = [
  { user: "Aravind M.", rating: 5, date: "2024-04-05", comment: "Exceptional quality. The organic cotton is very breathable." },
  { user: "Sneha V.", rating: 4, date: "2024-04-08", comment: "Very cute design. My kid loves wearing it every day." },
  { user: "Vikram S.", rating: 5, date: "2024-04-12", comment: "True to size and colors are exactly as shown in the pictures." },
  { user: "Nandini R.", rating: 5, date: "2024-04-15", comment: "Great brand! Love their commitment to sustainability." },
  { user: "Ishaan P.", rating: 4, date: "2024-04-20", comment: "Good fit and fast delivery. Very satisfied with the purchase." }
];

products.forEach(product => {
  if (product.reviews.length < 5) {
    const existingCount = product.reviews.length;
    for (let i = 0; i < 5 - existingCount; i++) {
      product.reviews.push(dummyReviews[i % dummyReviews.length]);
    }
  }
});


const newArrivals = products.slice().reverse();

// --- State ---
let cart = [];
let wishlist = [];

try {
  const savedCart = localStorage.getItem('edamamma_cart');
  if (savedCart) cart = JSON.parse(savedCart);

  const savedWishlist = localStorage.getItem('edamamma_wishlist');
  if (savedWishlist) wishlist = JSON.parse(savedWishlist);
} catch (e) {
  console.error("Failed to load local storage data:", e);
  cart = [];
  wishlist = [];
}

// --- Utilities ---
const formatCurrency = (amount) => `₹${amount.toLocaleString('en-IN')}`;

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let starsHtml = '';
  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      starsHtml += '<svg class="star full" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>';
    } else if (i === fullStars && hasHalfStar) {
      starsHtml += '<svg class="star half" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27V2.18l-2.81 6.45L2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24z"/></svg>';
    } else {
      starsHtml += '<svg class="star empty" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>';
    }
  }
  return starsHtml;
};

// --- DOM Elements & Logic ---
const init = () => {
  if (window.__edamamma_initialized) return;
  window.__edamamma_initialized = true;

  // 1. Announcement Bar
  const announcementBar = document.getElementById('announcement-bar');
  const announcementClose = document.getElementById('announcement-close');
  if (announcementClose && announcementBar) announcementClose.addEventListener('click', () => announcementBar.style.display = 'none');

  // 2. Search Logic
  const searchToggle = document.getElementById('search-toggle');
  const searchOverlay = document.getElementById('search-overlay');
  const searchClose = document.getElementById('search-close');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  if (searchToggle && searchOverlay && searchClose && searchInput && searchResults) {
    searchToggle.addEventListener('click', () => {
      searchOverlay.classList.add('active');
      setTimeout(() => searchInput.focus(), 100);
    });
    searchClose.addEventListener('click', () => {
      searchOverlay.classList.remove('active');
      searchInput.value = '';
      searchResults.classList.remove('active');
    });

    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      if (term.length < 2) {
        searchResults.classList.remove('active');
        return;
      }
      const matches = products.filter(p => p.name.toLowerCase().includes(term) || p.category.toLowerCase().includes(term));
      if (matches.length > 0) {
        searchResults.innerHTML = matches.map(m => `
          <div class="search-result-item" onclick="openQuickView(${m.id})">
            <img src="${m.image}" class="search-result-img" alt="${m.name}">
            <div class="search-result-info">
              <strong>${m.name}</strong>
              <div style="color: #ff9800; font-size: 0.75rem; display: flex; align-items: center; gap: 0.25rem; margin: 2px 0;">
                ${renderStars(m.rating)}
                <span style="color: #999;">(${m.reviews.length})</span>
              </div>
              <span>${formatCurrency(m.price)}</span>
            </div>
          </div>
        `).join('');
        searchResults.classList.add('active');
      } else {
        searchResults.innerHTML = `<div class="search-result-item">No products found for "${term}"</div>`;
        searchResults.classList.add('active');
      }
    });
  }

  // 3. Mobile Drawer
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileOverlay = document.getElementById('mobile-drawer-overlay');
  const mobileClose = document.getElementById('drawer-close');

  const closeMobile = () => {
    mobileDrawer.classList.remove('active');
    mobileOverlay.classList.remove('active');
  };

  if (mobileToggle && mobileDrawer && mobileOverlay && mobileClose) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.add('active');
      mobileOverlay.classList.add('active');
    });
    mobileClose.addEventListener('click', closeMobile);
    mobileOverlay.addEventListener('click', closeMobile);
  }

  // 4. Cart Drawer & Logic
  const cartToggle = document.getElementById('cart-toggle');
  const cartDrawer = document.getElementById('cart-drawer');
  const cartOverlay = document.getElementById('cart-drawer-overlay');
  const cartClose = document.getElementById('cart-close');
  const cartItemsContainer = document.getElementById('cart-items');
  const cartSubtotal = document.getElementById('cart-subtotal');
  const cartCountBadges = document.querySelectorAll('#cart-count');
  const checkoutBtn = document.getElementById('checkout-btn');

  const closeCart = () => {
    cartDrawer.classList.remove('active');
    cartOverlay.classList.remove('active');
  };

  const openCart = () => {
    cartDrawer.classList.add('active');
    cartOverlay.classList.add('active');
  };

  if (cartToggle && cartDrawer && cartOverlay && cartClose) {
    cartToggle.addEventListener('click', openCart);
    cartClose.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);
  }

  // 4b. Wishlist Drawer
  const wishlistToggle = document.getElementById('wishlist-toggle');
  const wishlistDrawer = document.getElementById('wishlist-drawer');
  const wishlistDrawerOverlay = document.getElementById('wishlist-drawer-overlay');
  const wishlistClose = document.getElementById('wishlist-close');

  const closeWishlist = () => {
    if (wishlistDrawer) wishlistDrawer.classList.remove('active');
    if (wishlistDrawerOverlay) wishlistDrawerOverlay.classList.remove('active');
  };
  const openWishlist = () => {
    if (wishlistDrawer) wishlistDrawer.classList.add('active');
    if (wishlistDrawerOverlay) wishlistDrawerOverlay.classList.add('active');
  };

  if (wishlistToggle) wishlistToggle.addEventListener('click', openWishlist);
  if (wishlistClose) wishlistClose.addEventListener('click', closeWishlist);
  if (wishlistDrawerOverlay) wishlistDrawerOverlay.addEventListener('click', closeWishlist);

  window.updateCartUI = () => {
    localStorage.setItem('edamamma_cart', JSON.stringify(cart));

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    cartCountBadges.forEach(badge => badge.textContent = totalItems);
    if (cartSubtotal) cartSubtotal.textContent = formatCurrency(totalPrice);

    if (cart.length === 0) {
      if (cartItemsContainer) cartItemsContainer.innerHTML = '<div class="empty-cart-message">Your cart is currently empty.</div>';
      if (checkoutBtn) checkoutBtn.disabled = true;
    } else {
      if (checkoutBtn) checkoutBtn.disabled = false;
      if (cartItemsContainer) {
        cartItemsContainer.innerHTML = cart.map((item, index) => `
          <div class="cart-item">
            <img src="${item.image}" class="cart-item-img" alt="${item.name}">
            <div class="cart-item-info">
              <div class="cart-item-title">${item.name}${item.selectedSize && item.selectedSize !== 'N/A' ? ` <span style="font-size:0.75rem; color:#666;">(${item.selectedSize})</span>` : ''}</div>
              <div class="cart-item-price">${formatCurrency(item.price)}</div>
              <div class="cart-item-controls">
                <button class="cart-qty-btn" onclick="updateQty(${index}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="cart-qty-btn" onclick="updateQty(${index}, 1)">+</button>
                <button class="cart-remove-btn" onclick="removeFromCart(${index})">Remove</button>
              </div>
            </div>
          </div>
        `).join('');
      }
    }
  };

  window.updateWishlistUI = () => {
    localStorage.setItem('edamamma_wishlist', JSON.stringify(wishlist));
    const wishlistCount = document.getElementById('wishlist-count');
    if (wishlistCount) wishlistCount.textContent = wishlist.length;
    const wishlistItemsContainer = document.getElementById('wishlist-items');
    if (wishlistItemsContainer) {
      if (wishlist.length === 0) {
        wishlistItemsContainer.innerHTML = '<div class="empty-cart-message">Your wishlist is empty. Start adding products you love!</div>';
      } else {
        wishlistItemsContainer.innerHTML = wishlist.map((item, index) => `
          <div class="cart-item">
            <img src="${item.image}" class="cart-item-img" alt="${item.name}">
            <div class="cart-item-info">
              <div class="cart-item-title">${item.name}</div>
              <div class="cart-item-price">${formatCurrency(item.price)}</div>
              <div class="cart-item-controls">
                <button class="action-btn add-to-cart" style="width:auto;padding:0.3rem 1rem;border-radius:999px;font-size:0.8rem;" onclick="addToCart(${item.id}); removeFromWishlist(${index});">Move to Cart</button>
                <button class="cart-remove-btn" onclick="removeFromWishlist(${index})">Remove</button>
              </div>
            </div>
          </div>
        `).join('');
      }
    }
  };

  window.addToWishlist = (productId) => {
    const product = products.find(p => p.id === productId);
    if (product && !wishlist.find(item => item.id === productId)) {
      wishlist.push(product);
    }
    updateWishlistUI();
    showToast("Added to wishlist! ❤️");
  };

  window.removeFromWishlist = (index) => {
    wishlist.splice(index, 1);
    updateWishlistUI();
  };

  window.addToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    showToast();

    // Close quickview if open
    const qModal = document.getElementById('quickview-modal');
    const qOverlay = document.getElementById('quickview-overlay');
    if (qModal) qModal.classList.remove('active');
    if (qOverlay) qOverlay.classList.remove('active');
  };

  window.updateQty = (index, change) => {
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) cart.splice(index, 1);
    updateCartUI();
  };

  window.removeFromCart = (index) => {
    cart.splice(index, 1);
    updateCartUI();
  };

  // Toast Notification
  const showToast = (message = "Added to cart successfully!") => {
    const toast = document.getElementById('toast-notification');
    const msgEl = document.getElementById('toast-message');
    if (msgEl) msgEl.textContent = message;
    if (toast) {
      toast.classList.add('active');
      setTimeout(() => toast.classList.remove('active'), 3000);
    }
  };

  // 5. Checkout Modal Logic
  const checkoutOverlay = document.getElementById('checkout-overlay');
  const checkoutModal = document.getElementById('checkout-modal');
  const checkoutClose = document.getElementById('checkout-close');
  const shippingForm = document.getElementById('shipping-form');
  const completeOrderBtn = document.getElementById('complete-order-btn');
  const backToShipping = document.getElementById('back-to-shipping');
  const step1 = document.getElementById('checkout-step-1');
  const step2 = document.getElementById('checkout-step-2');
  const dot1 = document.getElementById('step-dot-1');
  const dot2 = document.getElementById('step-dot-2');

  const openCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    closeCart();
    if (checkoutOverlay) checkoutOverlay.classList.add('active');
    if (checkoutModal) checkoutModal.classList.add('active');
    const checkoutTotal = document.getElementById('checkout-total-val');
    if (checkoutTotal) checkoutTotal.textContent = formatCurrency(calculateTotal());
  };

  const closeCheckout = () => {
    if (checkoutOverlay) checkoutOverlay.classList.remove('active');
    if (checkoutModal) checkoutModal.classList.remove('active');
  };

  if (checkoutBtn) {
    checkoutBtn.removeAttribute('onclick'); // Remove the inline alert
    checkoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openCheckout();
    });
  }

  if (checkoutClose) checkoutClose.addEventListener('click', closeCheckout);
  if (checkoutOverlay) checkoutOverlay.addEventListener('click', closeCheckout);

  if (shippingForm) {
    shippingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      step1.classList.remove('active');
      step2.classList.add('active');
      dot2.classList.add('active');
    });
  }

  if (backToShipping) {
    backToShipping.addEventListener('click', () => {
      step2.classList.remove('active');
      step1.classList.add('active');
      dot2.classList.remove('active');
    });
  }

  if (completeOrderBtn) {
    completeOrderBtn.addEventListener('click', () => {
      completeOrderBtn.disabled = true;
      completeOrderBtn.textContent = 'Processing Secure Payment...';
      
      setTimeout(() => {
        alert('Order placed successfully! Order ID: #EDAM' + Math.floor(Math.random() * 1000000));
        cart = [];
        saveCart();
        updateCartUI();
        closeCheckout();
        completeOrderBtn.disabled = false;
        completeOrderBtn.textContent = 'Complete Purchase';
        // Reset steps for next time
        step2.classList.remove('active');
        step1.classList.add('active');
        dot2.classList.remove('active');
      }, 2500);
    });
  }

  // 6. Account Modal Logic
  const accountBtn = document.getElementById('account-btn');
  const accountOverlay = document.getElementById('account-overlay');
  const accountModal = document.getElementById('account-modal');
  const accountClose = document.getElementById('account-close');
  const demoAccountBtn = document.getElementById('demo-account-btn');
  const loginForm = document.getElementById('login-form');
  const logoutBtn = document.getElementById('logout-btn');
  const loginView = document.getElementById('account-login-view');
  const profileView = document.getElementById('account-profile-view');

  const updateAccountUI = () => {
    const sessionUser = sessionStorage.getItem('edamamma_user');
    if (sessionUser) {
      const user = JSON.parse(sessionUser);
      if (loginView) loginView.style.display = 'none';
      if (profileView) profileView.style.display = 'block';
      if (document.getElementById('user-display-name')) document.getElementById('user-display-name').textContent = user.name;
      if (document.getElementById('user-display-email')) document.getElementById('user-display-email').textContent = user.email;
      if (accountBtn) accountBtn.style.color = 'var(--primary)';
    } else {
      if (loginView) loginView.style.display = 'block';
      if (profileView) profileView.style.display = 'none';
      if (accountBtn) accountBtn.style.color = 'inherit';
    }
  };

  const openAccountModal = () => {
    updateAccountUI();
    if (accountOverlay) accountOverlay.classList.add('active');
    if (accountModal) accountModal.classList.add('active');
  };

  const closeAccountModal = () => {
    if (accountOverlay) accountOverlay.classList.remove('active');
    if (accountModal) accountModal.classList.remove('active');
  };

  if (accountBtn) accountBtn.addEventListener('click', (e) => { e.preventDefault(); openAccountModal(); });
  if (accountClose) accountClose.addEventListener('click', closeAccountModal);
  if (accountOverlay) accountOverlay.addEventListener('click', closeAccountModal);

  if (demoAccountBtn) {
    demoAccountBtn.addEventListener('click', () => {
      const demoUser = { name: "Demo User", email: "demo@edmamma.com", type: "session" };
      sessionStorage.setItem('edamamma_user', JSON.stringify(demoUser));
      updateAccountUI();
      showToast("Demo Session Account Created! 👤");
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = e.target.querySelector('input[type="email"]').value;
      const user = { name: email.split('@')[0], email: email, type: "demo" };
      sessionStorage.setItem('edamamma_user', JSON.stringify(user));
      updateAccountUI();
      showToast("Logged in successfully! Welcome back.");
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      sessionStorage.removeItem('edamamma_user');
      updateAccountUI();
      showToast("Logged out successfully.");
    });
  }

  updateAccountUI();

  // 7. Quick View Logic
  const qvModal = document.getElementById('quickview-modal');
  const qvOverlay = document.getElementById('quickview-overlay');
  const qvClose = document.getElementById('quickview-close');
  const qvContent = document.getElementById('quickview-content');

  const closeQuickView = () => {
    qvModal.classList.remove('active');
    qvOverlay.classList.remove('active');
  };

  if (qvClose && qvOverlay && qvModal) {
    qvClose.addEventListener('click', closeQuickView);
    qvOverlay.addEventListener('click', closeQuickView);
  }

  window.openQuickView = (productId) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    qvContent.innerHTML = `
      <div class="qv-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="qv-details">
        <div class="product-category" style="color: var(--accent); font-weight: bold; margin-bottom: 10px;">${product.type}</div>
        <h2 class="qv-title">${product.name}</h2>
        <div class="qv-rating" style="margin: 0.5rem 0; display: flex; align-items: center; gap: 0.5rem; color: #ff9800;">
          ${renderStars(product.rating)}
          <span style="color: #666; font-size: 0.9rem;">(${product.reviews.length} reviews)</span>
        </div>
        <div class="qv-price">
          ${formatCurrency(product.price)} 
          ${product.originalPrice > product.price ? `<span style="font-size:1rem; color:#999; text-decoration:line-through; margin-left:8px;">${formatCurrency(product.originalPrice)}</span>` : ''}
          ${product.discount ? `<span style="font-size:1rem; color:var(--primary); margin-left:8px;">(${product.discount})</span>` : ''}
        </div>
        <p class="qv-desc">Premium 100% organic cotton apparel designed with ultimate comfort and sustainability in mind. Gentle on your little one's skin and gentle on the planet.</p>
        <div class="qv-reviews-peek" style="margin: 1rem 0; padding: 1rem; background: #f9f9f9; border-radius: 8px;">
          <strong style="display:block; margin-bottom: 0.5rem; font-size: 0.9rem;">Latest Review:</strong>
          <p style="font-size: 0.85rem; font-style: italic; color: #555;">"${product.reviews[0].comment}"</p>
          <span style="font-size: 0.8rem; color: #888;">- ${product.reviews[0].user}</span>
        </div>
        <ul class="qv-meta">
          <li>✓ In Stock, Ready to Ship</li>
          <li>✓ 30-Day Easy Returns</li>
          <li>✓ GOTS Certified Organic</li>
        </ul>
        <div style="display: flex; gap: 1rem; margin-top: 1.5rem;">
          <button class="btn btn-primary" onclick="addToCart(${product.id})" style="flex: 1; height: 52px;">
            Add to Cart - ${formatCurrency(product.price)}
          </button>
          <button class="wishlist-btn" onclick="addToWishlist(${product.id})" 
            style="width: 52px; height: 52px; border-radius: 50%; background: #fde8e8; border: none; display: flex; align-items: center; justify-content: center; color: #ff5a5f; cursor: pointer; transition: transform 0.2s;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>
        </div>
      </div>
    `;

    // Close search if open
    const sOverlay = document.getElementById('search-overlay');
    const sResults = document.getElementById('search-results');
    if (sOverlay) sOverlay.classList.remove('active');
    if (sResults) sResults.classList.remove('active');

    if (qvModal) qvModal.classList.add('active');
    if (qvOverlay) qvOverlay.classList.add('active');
  };

  // Global function for card slider
  window.moveCardSlider = (productId, direction) => {
    const slider = document.getElementById(`card-slider-${productId}`);
    if (!slider) return;

    const items = slider.querySelectorAll('a');
    const total = items.length;
    let current = parseInt(slider.getAttribute('data-current') || '0');

    current = (current + direction + total) % total;
    slider.style.transform = `translateX(-${current * 100}%)`;
    slider.setAttribute('data-current', current);
  };

  // 6. Render Products
  const renderProductGrid = (items, containerId) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = items.map(product => {
      try {
        const displayImages = product.images || [product.image];
        return `
          <div class="product-card" data-category="${product.category || ''}">
            <div class="product-image-wrap">
              <div class="card-slider" id="card-slider-${product.id}" data-current="0">
                ${displayImages.map(img => `
                  <a href="/product.html?id=${product.id}"><img src="${img}" alt="${product.name}" loading="lazy" /></a>
                `).join('')}
              </div>
              
              ${displayImages.length > 1 ? `
                <div class="card-slider-nav">
                  <button class="card-nav-prev" onclick="moveCardSlider(${product.id}, -1)">❮</button>
                  <button class="card-nav-next" onclick="moveCardSlider(${product.id}, 1)">❯</button>
                </div>
              ` : ''}

              <span class="product-badge">${product.discount || ''}</span>
              <div class="product-actions">
                <button class="action-btn" aria-label="Add to wishlist" onclick="addToWishlist(${product.id})">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21.3l7.8-7.8 1-1.1a5.5 5.5 0 0 0 0-7.8z"/></svg>
                </button>
                <button class="action-btn add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                <button class="action-btn" aria-label="Quick view" onclick="openQuickView(${product.id})">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/></svg>
                </button>
              </div>
            </div>
            <div class="product-info">
              <div class="product-category">${product.type || ''}</div>
              <div class="product-rating" style="margin: 0.25rem 0; color: #ff9800; display: flex; align-items: center; gap: 0.25rem; font-size: 0.8rem;">
                ${renderStars(product.rating || 0)}
                <span style="color: #999;">(${product.reviews ? product.reviews.length : 0})</span>
              </div>
              <a href="/product.html?id=${product.id}" style="text-decoration:none; color:inherit;"><h3 class="product-name" style="cursor:pointer;">${product.name || 'Unknown Product'}</h3></a>
              <div class="product-price-wrap">
                <span class="price">${formatCurrency(product.price || 0)}</span>
                ${(product.originalPrice || 0) > (product.price || 0) ? `<span class="original-price">${formatCurrency(product.originalPrice)}</span>` : ''}
              </div>
            </div>
          </div>
        `;
      } catch (e) {
        console.error('Error rendering product:', product, e);
        return '';
      }
    }).join('');
  };

  renderProductGrid(products, 'product-grid');

  // Product Filtering
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      tabBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const filter = e.target.getAttribute('data-filter');
      const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
      const grid = document.getElementById('product-grid');
      grid.style.opacity = '0';
      setTimeout(() => {
        renderProductGrid(filtered, 'product-grid');
        grid.style.opacity = '1';
      }, 300);
    });
  });

  // 7. Hero Slider Logic
  const slides = document.querySelectorAll('.hero-slide');
  const indicators = document.querySelectorAll('.indicator');
  const prevBtn = document.getElementById('hero-prev');
  const nextBtn = document.getElementById('hero-next');
  let currentSlide = 0;
  let slideInterval;

  const goToSlide = (index) => {
    slides.forEach(s => s.classList.remove('active'));
    indicators.forEach(i => i.classList.remove('active'));
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
  };

  const nextSlide = () => goToSlide(currentSlide + 1);
  const prevSlide = () => goToSlide(currentSlide - 1);

  if (slides.length > 0 && nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => { nextSlide(); resetInterval(); });
    prevBtn.addEventListener('click', () => { prevSlide(); resetInterval(); });
    indicators.forEach((ind, i) => {
      ind.addEventListener('click', () => { goToSlide(i); resetInterval(); });
    });

    const startInterval = () => { slideInterval = setInterval(nextSlide, 4000); };
    const resetInterval = () => { clearInterval(slideInterval); startInterval(); };
    startInterval();
  }

  // 8. New Arrivals Carousel
  const renderCarousel = () => {
    const container = document.getElementById('arrivals-carousel');
    if (!container) return;
    container.innerHTML = newArrivals.map(product => {
      const displayImages = product.images || [product.image];
      return `
      <div class="carousel-item">
        <div class="product-card">
          <div class="product-image-wrap">
            <div class="card-slider" id="card-slider-new-${product.id}" data-current="0">
              ${displayImages.map(img => `
                <a href="/product.html?id=${product.id}"><img src="${img}" alt="${product.name}" loading="lazy" /></a>
              `).join('')}
            </div>
            
            ${displayImages.length > 1 ? `
              <div class="card-slider-nav">
                <button class="card-nav-prev" onclick="moveCardSlider('new-${product.id}', -1)">❮</button>
                <button class="card-nav-next" onclick="moveCardSlider('new-${product.id}', 1)">❯</button>
              </div>
            ` : ''}

            <span class="product-badge">NEW</span>
            <div class="product-actions" style="bottom: 0; padding: 0.5rem; background:rgba(255,255,255,0.9);">
               <button class="action-btn add-to-cart" style="width:100%" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
          </div>
          <div class="product-info">
            <div class="product-rating" style="margin-bottom: 0.25rem; color: #ff9800; display: flex; align-items: center; gap: 0.25rem; font-size: 0.8rem;">
              ${renderStars(product.rating)}
              <span style="color: #999;">(${product.reviews.length})</span>
            </div>
            <a href="/product.html?id=${product.id}" style="text-decoration:none; color:inherit;"><h3 class="product-name" style="cursor:pointer;">${product.name}</h3></a>
            <div class="product-price-wrap">
              <span class="price">${formatCurrency(product.price)}</span>
            </div>
          </div>
        </div>
      </div>
    `; }).join('');
  };
  renderCarousel();

  const carousel = document.getElementById('arrivals-carousel');
  const arrPrev = document.getElementById('arrivals-prev');
  const arrNext = document.getElementById('arrivals-next');
  if (carousel && arrPrev && arrNext) {
    arrNext.addEventListener('click', () => carousel.scrollBy({ left: 300, behavior: 'smooth' }));
    arrPrev.addEventListener('click', () => carousel.scrollBy({ left: -300, behavior: 'smooth' }));
  }

  // 9. Stats Counter Animation
  const animateValue = (obj, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.stat-number').forEach(stat => {
          animateValue(stat, 0, parseInt(stat.getAttribute('data-target')), 2000);
        });
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const sustainSection = document.getElementById('sustainability');
  if (sustainSection) observer.observe(sustainSection);

  // 10. Newsletter Form
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = document.getElementById('newsletter-submit');
      btn.textContent = "Subscribed!";
      btn.style.backgroundColor = "var(--accent)";
      setTimeout(() => {
        btn.textContent = "Subscribe";
        btn.style.backgroundColor = "";
        document.getElementById('newsletter-email').value = "";
      }, 3000);
    });
  }

  // 11. Cross-section Filtering from Navigation
  const filterLinks = document.querySelectorAll('.filter-link');
  filterLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const filter = link.getAttribute('data-filter');
      if (filter) {
        // Find and click the corresponding tab in the bestsellers section
        const targetTab = Array.from(tabBtns).find(btn => btn.getAttribute('data-filter') === filter);
        if (targetTab) {
          targetTab.click();
        }
      }
      // Close mobile drawer if open
      if (mobileDrawer && mobileDrawer.classList.contains('active')) {
        closeMobile();
      }
    });
  });

  // 12. Collection Page Routing Logic
  if (window.location.pathname.includes('collection')) {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category') || 'all';
    const type = urlParams.get('type');

    let filteredProducts = products;
    let title = "All Products";

    console.log('Collection Page: Category =', category, 'Total Products =', products.length);
    console.log('Sample Product Categories:', products.slice(0, 15).map(p => p.category));

    const categoryDescriptions = {
      all: "Explore our full sustainable range.",
      kids: "Breathable, flexible and durable outfits for every adventure.",
      boys: "Stylish and sustainable clothing for boys.",
      girls: "Beautiful, organic cotton clothing for girls.",
      baby: "Soft, gentle clothing for babies aged 0–3 years.",
      maternity: "Thoughtfully designed wear that embraces every stage of motherhood.",
      toys: "Nature-inspired wooden toys and soft plushies for curious minds.",
      "toy-story-x-ed-a-mamma": "Exclusive Toy Story × Ed‑a‑Mamma collection – playful, premium, and eco‑friendly.",
      new: "Just landed — the latest in sustainable kids fashion.",
      sale: "Our biggest discounts on premium organic clothing.",
      offers: "Our biggest discounts on premium organic clothing.",
      nursery: "Cozy, organic essentials for your nursery space.",
      "baby-boy": "Soft and sustainable essentials for your little prince."
    };

    const toyBannerTop = document.getElementById('collection-banner-top');
    const toyBannerImg = document.getElementById('collection-banner-img');
    const titleEl = document.getElementById('collection-title');

    if (category === 'all' || category === 'toys' || category === 'kids' || category === 'toy-story-x-ed-a-mamma' || category === 'boys' || category === 'girls' || category === 'baby-boy' || category === 'baby-girl' || category === 'maternity' || category === 'personal-care' || category === 'baby') {
      if (toyBannerTop && toyBannerImg) {
        // Reset defaults
        toyBannerTop.style.background = 'none';
        toyBannerTop.style.padding = '0';
        toyBannerTop.style.borderRadius = '0';
        toyBannerTop.style.boxShadow = 'none';

        if (category === 'kids') {
          toyBannerImg.src = "/images/kids_banner.png";
          toyBannerImg.style.width = '100%';
          // Make background white and increase prominence
          toyBannerTop.style.background = '#ffffff';
          toyBannerTop.style.padding = '1.5rem';
          toyBannerTop.style.borderRadius = '20px';
          toyBannerTop.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
          toyBannerTop.style.marginBottom = '3rem';
        } else if (category === 'toy-story-x-ed-a-mamma') {
          toyBannerImg.src = "/images/toy_story.png";
          toyBannerImg.style.width = '90%';
          toyBannerTop.style.background = '#ffffff';
          toyBannerTop.style.padding = '1.5rem';
          toyBannerTop.style.borderRadius = '20px';
          toyBannerTop.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
          toyBannerTop.style.marginBottom = '3rem';
        } else if (category === 'all' || category === 'boys' || category === 'girls' || category === 'baby-boy' || category === 'baby-girl' || category === 'maternity' || category === 'personal-care' || category === 'toys' || category === 'baby') {
          toyBannerImg.src = (category === 'boys') ? "/images/boys1.png" :
            ((category === 'girls') ? "/images/girls1.png" :
              ((category === 'baby-boy' || category === 'baby') ? "/images/baby_boy_banner.png" :
                ((category === 'baby-girl') ? "/images/baby_girl_banner.png" :
                  ((category === 'maternity') ? "/images/maternity.png" :
                    ((category === 'personal-care') ? "/images/personal.png" :
                      ((category === 'all') ? "/images/All_cat.png" : "/images/toys.png"))))));
          toyBannerImg.style.width = '100%';
          if (category === 'baby-girl') {
            toyBannerTop.style.background = 'none';
            toyBannerTop.style.padding = '0';
            toyBannerTop.style.borderRadius = '0';
            toyBannerTop.style.boxShadow = 'none';
          } else {
            toyBannerTop.style.background = '#ffffff';
            toyBannerTop.style.padding = '1.5rem';
            toyBannerTop.style.borderRadius = '20px';
            toyBannerTop.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
          }
          toyBannerTop.style.marginBottom = '3rem';

          // Second Banner for Specific Categories
          const secondBannerImg2 = document.getElementById('collection-banner-img-2');
          const secondBannerImages = {
            'personal-care': '/images/personal_banner_1.png',
            'toys': '/images/toy_banner_1.png'
          };

          if (secondBannerImg2) {
            if (secondBannerImages[category]) {
              secondBannerImg2.src = secondBannerImages[category];
              secondBannerImg2.style.display = 'block';
            } else {
              secondBannerImg2.style.display = 'none';
            }
          }
        } else {
          toyBannerImg.src = category === 'nursery' ? "/images/nursery_banner.png" : "/images/kids_banner.png";
          toyBannerImg.style.width = '100%';
        }
        toyBannerTop.style.display = 'flex';
        toyBannerTop.style.flexDirection = 'column';
        toyBannerTop.style.alignItems = 'center';
        toyBannerTop.style.justifyContent = 'center';
        toyBannerImg.style.margin = '0 auto';
      }
      if (titleEl) titleEl.style.display = 'none';
    } else {
      if (toyBannerTop) {
        toyBannerTop.style.display = 'none';
        const secondBannerImg2 = document.getElementById('collection-banner-img-2');
        if (secondBannerImg2) secondBannerImg2.style.display = 'none';
      }
      if (titleEl) titleEl.style.display = 'block';
    }

    if (category === 'toys') {
      filteredProducts = products.filter(p => p.category === 'toys');
      title = "Toys Collection";
    } else if (category === 'toy-story-x-ed-a-mamma') {
      filteredProducts = products.filter(p => p.category === 'toy-story-x-ed-a-mamma');
      title = "Collection";
    } else if (category === 'kids') {
      filteredProducts = products.filter(p => p.category === 'boys' || p.category === 'girls');
      title = "Kids Collection";
    } else if (category === 'baby-boy') {
      filteredProducts = products.filter(p => p.category === 'baby-boy');
      title = "Baby Boy Collection";
    } else if (category === 'baby-girl') {
      filteredProducts = products.filter(p => p.category === 'baby-girl');
      title = "Baby Girl Collection";
    } else if (category === 'nursery') {
      filteredProducts = products.filter(p => p.category === 'nursery');
      title = "Nursery Collection";
    } else if (category === 'new') {
      filteredProducts = newArrivals;
      title = "New Arrivals";
    } else if (category === 'sale' || category === 'offers') {
      filteredProducts = products.filter(p => p.discount);
      title = "Offers & Sale";
    } else if (category !== 'all') {
      const targetCat = category.trim().toLowerCase();
      filteredProducts = products.filter(p => p.category.trim().toLowerCase() === targetCat);
      title = targetCat.charAt(0).toUpperCase() + targetCat.slice(1) + " Collection";
    }
    if (type) {
      filteredProducts = filteredProducts.filter(p => p.type.toLowerCase() === type.toLowerCase());
    }
    console.log('Filtered Products Count:', filteredProducts.length);

    const descEl = document.getElementById('collection-desc');
    if (descEl) {
      if (category === 'all' || category === 'toys' || category === 'kids' || category === 'toy-story-x-ed-a-mamma' || category === 'boys' || category === 'girls' || category === 'baby-boy' || category === 'baby-girl' || category === 'maternity' || category === 'personal-care' || category === 'baby') {
        descEl.style.display = 'none';
      } else {
        descEl.style.display = 'block';
        descEl.textContent = categoryDescriptions[category] || `Explore our ${title.toLowerCase()}.`;
      }
    }

    try {
      const countEl = document.getElementById('product-count');
      const breadcrumbEl = document.getElementById('breadcrumb-current');
      const sortSelect = document.getElementById('collection-sort');

      console.log('Final UI Update: Setting count to', filteredProducts.length);
      if (titleEl) {
        if (category === 'all' || category === 'toys' || category === 'kids' || category === 'toy-story-x-ed-a-mamma' || category === 'boys' || category === 'girls' || category === 'baby-boy' || category === 'baby-girl' || category === 'maternity' || category === 'personal-care' || category === 'baby') {
          titleEl.style.display = 'none';
        } else {
          titleEl.style.display = 'block';
          titleEl.textContent = title;
        }
      }
      if (breadcrumbEl) breadcrumbEl.textContent = title;
      if (countEl) countEl.textContent = `${filteredProducts.length} products`;

      const renderSorted = (sortType) => {
        let sorted = [...filteredProducts];
        if (sortType === 'price-low') sorted.sort((a, b) => a.price - b.price);
        if (sortType === 'price-high') sorted.sort((a, b) => b.price - a.price);
        if (sortType === 'newest') sorted.sort((a, b) => b.id - a.id);

        console.log('Rendering Grid with', sorted.length, 'items');
        renderProductGrid(sorted, 'collection-grid');
      };

      if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
          renderSorted(e.target.value);
        });
      }

      setTimeout(() => {
        renderSorted('featured');
      }, 100);
    } catch (err) {
      console.error('Error in Collection Logic:', err);
    }
  }

  // 13. Single Product Page Routing Logic
  if (window.location.pathname.includes('product')) {
    const urlParams = new URLSearchParams(window.location.search);
    let productId = parseInt(urlParams.get('id'));
    let selectedSize = null;

    // Fallback to first product if accessed directly without an ID
    if (isNaN(productId)) {
      productId = 1;
    }

    const product = products.find(p => p.id === productId);

    if (product) {
      const thumbContainer = document.getElementById('gallery-thumbnails');
      const mainSlider = document.getElementById('pd-main-slider');

      if (mainSlider) {
        const displayImages = product.images || [product.image];
        mainSlider.innerHTML = displayImages.map(imgSrc => `
          <img src="${imgSrc}" alt="${product.name}" style="flex: 0 0 100%; width: 100%; object-fit: cover;" />
        `).join('');

        let currentSlide = 0;
        const totalSlides = displayImages.length;

        const goToSlide = (index) => {
          currentSlide = (index + totalSlides) % totalSlides;
          mainSlider.style.transform = `translateX(-${currentSlide * 100}%)`;

          // Update thumbnails
          const allThumbs = document.querySelectorAll('.thumbnail');
          allThumbs.forEach((t, i) => {
            if (i === currentSlide) t.classList.add('active');
            else t.classList.remove('active');
          });
        };

        const nextBtn = document.getElementById('pd-slider-next');
        const prevBtn = document.getElementById('pd-slider-prev');

        if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
        if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));

        if (thumbContainer) {
          thumbContainer.innerHTML = displayImages.map((imgSrc, idx) => `
            <div class="thumbnail ${idx === 0 ? 'active' : ''}" data-index="${idx}">
              <img src="${imgSrc}" alt="${product.name} - View ${idx + 1}">
            </div>
          `).join('');

          const allThumbs = thumbContainer.querySelectorAll('.thumbnail');
          allThumbs.forEach(t => {
            t.addEventListener('click', () => {
              const idx = parseInt(t.getAttribute('data-index'));
              goToSlide(idx);
            });
          });
        }
      }

      document.getElementById('pd-title').textContent = product.name;
      const priceEl = document.getElementById('pd-price');
      const originalPriceEl = document.getElementById('pd-original-price');
      const discountBadgeEl = document.getElementById('pd-discount-badge');

      if (originalPriceEl) originalPriceEl.textContent = formatCurrency(product.originalPrice);
      if (discountBadgeEl) {
        if (product.discount) {
          discountBadgeEl.textContent = product.discount;
          discountBadgeEl.style.display = 'block';
        } else {
          discountBadgeEl.style.display = 'none';
        }
      }

      if (priceEl) {
        priceEl.innerHTML = `
          ${formatCurrency(product.price)}
          ${product.originalPrice > product.price ? `<span style="text-decoration:line-through; color:#999; font-size:1.2rem; margin-left:1rem;">${formatCurrency(product.originalPrice)}</span>` : ''}
        `;
      }

      const breadcrumbCat = document.getElementById('pd-breadcrumb-cat');
      if (breadcrumbCat) {
        breadcrumbCat.textContent = product.category.charAt(0).toUpperCase() + product.category.slice(1);
        breadcrumbCat.href = `/collection.html?category=${product.category}`;
      }

      const breadcrumbTitle = document.getElementById('pd-breadcrumb-title');
      if (breadcrumbTitle) breadcrumbTitle.textContent = product.name;

      // Handle Sizes
      const sizesContainer = document.getElementById('pd-sizes-container');
      const sizesGrid = document.getElementById('pd-size-options');
      const apparelCategories = ['boys', 'girls', 'baby', 'maternity', 'kids', 'baby-boy', 'baby-girl'];

      if (sizesContainer && sizesGrid) {
        if (apparelCategories.includes(product.category)) {
          sizesContainer.style.display = 'block';
          const defaultSizes = product.category === 'baby' ? ['0-3M', '3-6M', '6-9M', '9-12M', '12-18M', '18-24M'] : ['4-5Y', '5-6Y', '6-7Y', '7-8Y', '8-9Y', '9-10Y', '10-12Y', '13-14Y'];
          sizesGrid.innerHTML = defaultSizes.map(size => `
            <button class="size-btn" style="border: 1px solid #e5e7eb; background: #fff; padding: 0.6rem; border-radius: 12px; font-size: 0.85rem; color: #4b5563; transition: all 0.2s; cursor: pointer;">${size}</button>
          `).join('');

          // Size Selection Logic
          const sizeBtns = sizesGrid.querySelectorAll('.size-btn');
          sizeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
              sizeBtns.forEach(b => {
                b.style.borderColor = '#e5e7eb';
                b.style.background = '#fff';
                b.style.color = '#4b5563';
                b.style.boxShadow = 'none';
              });
              btn.style.borderColor = '#ff5a5f';
              btn.style.background = '#fde8e8';
              btn.style.color = '#ff5a5f';
              btn.style.boxShadow = '0 0 0 2px rgba(255, 90, 95, 0.1)';
              selectedSize = btn.textContent;
              
              // Reset error state if any
              const sizeHeader = sizesContainer.querySelector('.size-header strong');
              if (sizeHeader) sizeHeader.style.color = '#333';
              sizesGrid.style.animation = 'none';
            });
          });
        } else {
          sizesContainer.style.display = 'none';
          selectedSize = 'N/A'; // For non-apparel
        }
      }

      // Handle Description & Info Content
      const descContent = document.getElementById('pd-description-content');
      if (descContent) {
        const isApparel = apparelCategories.includes(product.category);
        descContent.innerHTML = `
          <div style="margin-bottom: 1.5rem;">
            <h4 style="font-size: 0.95rem; margin-bottom: 0.5rem; color: #1a1a1a;">Product Description</h4>
            <p style="font-size: 0.85rem; color: #4b5563; line-height: 1.5;">${product.description || `Experience the ultimate blend of style and sustainability with this ${product.name}. Crafted with care for the planet and your comfort.`}</p>
          </div>
          <div style="margin-bottom: 1.5rem;">
            <h4 style="font-size: 0.95rem; margin-bottom: 0.5rem; color: #1a1a1a;">${product.details ? 'Product Details' : (isApparel ? 'Fabric & Fit' : 'Materials & Quality')}</h4>
            <ul style="font-size: 0.85rem; color: #4b5563; line-height: 1.6; list-style: disc; padding-left: 1.25rem;">
              ${product.details ? Object.entries(product.details).map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`).join('') : `
                <li><strong>${isApparel ? 'Material' : 'Build'}:</strong> ${isApparel ? '100% GOTS Organic Cotton' : 'Eco-friendly, Child-safe materials'}</li>
                <li><strong>${isApparel ? 'Fit' : 'Safety'}:</strong> ${isApparel ? 'Breathable comfort fit' : 'Lead-free, Non-toxic finishes'}</li>
                <li><strong>Care:</strong> ${isApparel ? 'Gentle machine wash cold' : 'Wipe clean with a damp cloth'}</li>
              `}
            </ul>
          </div>
          <div style="margin-bottom: 0;">
            <h4 style="font-size: 0.95rem; margin-bottom: 0.5rem; color: #1a1a1a;">Sustainability Promise</h4>
            <p style="font-size: 0.85rem; color: #4b5563; line-height: 1.5;">Every Ed-a-Mamma ${isApparel ? 'garment' : 'product'} is a promise to the earth. We use sustainable practices to protect our planet's future.</p>
          </div>
        `;
      }

      // Render Rating & Reviews
      const pdStarsTop = document.getElementById('pd-stars-top');
      const pdCountTop = document.getElementById('pd-count-top');

      if (pdStarsTop) pdStarsTop.innerHTML = renderStars(product.rating);
      if (pdCountTop) pdCountTop.textContent = `${product.rating} (${product.reviews.length} Reviews)`;

      const overallNum = document.getElementById('pd-overall-rating');
      const overallStars = document.getElementById('pd-overall-stars');
      const overallCount = document.getElementById('pd-overall-count');
      const reviewsList = document.getElementById('pd-reviews-list');

      if (overallNum) overallNum.textContent = product.rating;
      if (overallStars) overallStars.innerHTML = renderStars(product.rating);
      if (overallCount) overallCount.textContent = `Based on ${product.reviews.length} reviews`;

      if (reviewsList) {
        reviewsList.innerHTML = product.reviews.map(review => `
          <div class="review-item" style="padding-bottom: 2rem; border-bottom: 1px solid #eee;">
            <div class="review-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
              <div class="review-user">
                <strong style="display: block;">${review.user}</strong>
                <div style="color: #ff9800;">${renderStars(review.rating)}</div>
              </div>
              <span style="color: #999; font-size: 0.85rem;">${review.date}</span>
            </div>
            <p style="color: #555; line-height: 1.6; font-style: italic;">"${review.comment}"</p>
          </div>
        `).join('');
      }

      // Render PDP Banners if present
      const bannersContainer = document.getElementById('pdp-banners-container');
      if (bannersContainer && product.pdpBanners) {
        bannersContainer.innerHTML = product.pdpBanners.map(banner => `
          <img src="${banner}" alt="Product Story" style="width: 100%; height: auto; border-radius: 12px; margin-bottom: 2rem; display: block;" />
        `).join('');
      } else if (bannersContainer) {
        bannersContainer.innerHTML = '';
      }

      // Thumbnail Interaction
      const thumbnails = document.querySelectorAll('.thumbnail');
      thumbnails.forEach(thumbWrapper => {
        thumbWrapper.addEventListener('click', () => {
          thumbnails.forEach(t => t.classList.remove('active'));
          thumbWrapper.classList.add('active');
          const img = thumbWrapper.querySelector('img');
          if (img) document.getElementById('pd-main-image').src = img.src;
        });
      });

      // Handle More Information Accordion
      const infoTrigger = document.getElementById('pd-info-trigger');
      const infoContent = document.getElementById('pd-info-content');
      const infoIcon = document.getElementById('pd-info-icon');

      if (infoTrigger && infoContent) {
        infoTrigger.addEventListener('click', () => {
          const isOpen = infoContent.style.maxHeight !== '0px' && infoContent.style.maxHeight !== '';
          if (isOpen) {
            infoContent.style.maxHeight = '0px';
            if (infoIcon) infoIcon.style.transform = 'rotate(0deg)';
          } else {
            infoContent.style.maxHeight = infoContent.scrollHeight + 'px';
            if (infoIcon) infoIcon.style.transform = 'rotate(180deg)';
          }
        });
      }

      // Handle Add to Cart from Product Page
      const addToCartBtn = document.getElementById('pd-add-to-cart');
      const qtyInput = document.getElementById('pd-qty-input');
      const qtyMinus = document.getElementById('pd-qty-minus');
      const qtyPlus = document.getElementById('pd-qty-plus');

      if (qtyMinus && qtyPlus && qtyInput) {
        qtyMinus.addEventListener('click', () => {
          let current = parseInt(qtyInput.value);
          if (current > 1) qtyInput.value = current - 1;
        });
        qtyPlus.addEventListener('click', () => {
          qtyInput.value = parseInt(qtyInput.value) + 1;
        });
      }

      if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
          const apparelCategories = ['boys', 'girls', 'baby', 'maternity', 'kids', 'baby-boy', 'baby-girl'];
          const isApparel = apparelCategories.includes(product.category);
          
          if (isApparel && !selectedSize) {
            // Highlight size section
            const sizesContainer = document.getElementById('pd-sizes-container');
            const sizesGrid = document.getElementById('pd-size-options');
            if (sizesContainer) {
              const sizeHeader = sizesContainer.querySelector('.size-header strong');
              if (sizeHeader) {
                sizeHeader.style.color = '#ff5a5f';
                sizeHeader.style.transition = 'color 0.3s';
              }
              if (sizesGrid) {
                sizesGrid.style.animation = 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both';
                setTimeout(() => { sizesGrid.style.animation = ''; }, 500);
              }
            }
            showToast("Please select an age / size first!", "error");
            return;
          }

          const qty = qtyInput ? parseInt(qtyInput.value) : 1;
          const existing = cart.find(item => item.id === product.id && item.selectedSize === selectedSize);
          if (existing) {
            existing.quantity += qty;
          } else {
            cart.push({ ...product, quantity: qty, selectedSize: selectedSize });
          }
          updateCartUI();
          showToast();
          if (window.openCart) window.openCart();
        });
      }

      // Pincode Check Logic
      const pincodeInput = document.getElementById('pd-pincode-input');
      const pincodeBtn = document.getElementById('pd-pincode-btn');
      const pincodeResult = document.getElementById('pd-pincode-result');

      if (pincodeBtn && pincodeInput && pincodeResult) {
        pincodeBtn.addEventListener('click', () => {
          const pincode = pincodeInput.value.trim();
          if (pincode.length === 6 && /^\d+$/.test(pincode)) {
            pincodeResult.innerHTML = '<span style="color: #2e7d32;">✓ Delivery available in 5-6 days</span>';
          } else {
            pincodeResult.innerHTML = '<span style="color: #d32f2f;">✕ Please enter a valid 6-digit pincode</span>';
          }
        });

        // Also handle 'Enter' key
        pincodeInput.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') pincodeBtn.click();
        });
      }

      // Handle Wishlist from Product Page
      const pdWishlistBtn = document.querySelector('.product-info-panel .wishlist-btn');
      if (pdWishlistBtn) {
        pdWishlistBtn.addEventListener('click', () => {
          if (window.addToWishlist) {
            window.addToWishlist(product.id);
            pdWishlistBtn.style.color = '#f93549';
            pdWishlistBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
          }
        });
      }

      // Size Guide Modal Logic
      const sizeGuideLink = document.querySelector('.size-chart-link');
      const sizeGuideModal = document.getElementById('size-guide-modal');
      const sizeGuideOverlay = document.getElementById('size-guide-overlay');
      const sizeGuideClose = document.getElementById('size-guide-close');

      const openSizeGuide = (e) => {
        if (e) e.preventDefault();
        if (sizeGuideModal) sizeGuideModal.classList.add('active');
        if (sizeGuideOverlay) sizeGuideOverlay.classList.add('active');
      };

      const closeSizeGuide = () => {
        if (sizeGuideModal) sizeGuideModal.classList.remove('active');
        if (sizeGuideOverlay) sizeGuideOverlay.classList.remove('active');
      };

      if (sizeGuideLink) sizeGuideLink.addEventListener('click', openSizeGuide);
      if (sizeGuideClose) sizeGuideClose.addEventListener('click', closeSizeGuide);
      if (sizeGuideOverlay) sizeGuideOverlay.addEventListener('click', closeSizeGuide);

      // Render Related Products
      const relatedGrid = document.getElementById('related-grid');
      if (relatedGrid) {
        const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
        // If not enough related in same category, just show new arrivals
        const itemsToShow = related.length >= 4 ? related : newArrivals.slice(0, 4);
        renderProductGrid(itemsToShow, 'related-grid');
      }

    } else {
      document.getElementById('pd-title').textContent = "Product Not Found";
      document.getElementById('pd-main-image').style.display = 'none';
      document.getElementById('pd-discount-badge').style.display = 'none';
      document.querySelector('.pd-actions').style.display = 'none';
    }
  }

  // Update UI on load
  updateCartUI();
  updateWishlistUI();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
