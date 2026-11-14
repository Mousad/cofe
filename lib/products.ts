
export type Product = {
  id: number
  name: string
  nameEn: string
  description: string
  ingredients: string
  price: number
  originalPrice?: number
  image: string
  category: string
  featured: boolean
  badge?: string
  page: number
}

type ProductInput = {
  name: string
  nameEn: string
  description: string
  ingredients: string
  folder: string
  imageNumber: number
  featured?: boolean
  badge?: string
}

const productData: ProductInput[] = [

  // =====================================
  // 01 - المخبوزات | a1 | 10 Products
  // =====================================

  {
    name: "كرواسون بالزبدة",
    nameEn: "Butter Croissant",
    description: "كرواسون طازج بطبقات ذهبية وهشة",
    ingredients: "دقيق، زبدة، حليب",
    folder: "a1",
    imageNumber: 1,
    featured: true,
    badge: "الأكثر طلباً",
  },
  {
    name: "كرواسون بالشوكولاتة",
    nameEn: "Chocolate Croissant",
    description: "كرواسون محشو بالشوكولاتة",
    ingredients: "دقيق، زبدة، شوكولاتة",
    folder: "a1",
    imageNumber: 2,
  },
  {
    name: "خلية النحل",
    nameEn: "Honeycomb Bread",
    description: "عجينة هشة محشوة بالجبن والعسل",
    ingredients: "دقيق، جبن، عسل",
    folder: "a1",
    imageNumber: 3,
  },
  {
    name: "فطيرة الجبن",
    nameEn: "Cheese Pie",
    description: "فطيرة طازجة بحشوة الجبن",
    ingredients: "عجين، جبن",
    folder: "a1",
    imageNumber: 4,
  },
 
 
  {
    name: " خلية نحل سجنتشر صغير",
    nameEn: "Blueberry Muffin",
    description: "مافن طري بالتوت",
    ingredients: "دقيق، توت، حليب",
    folder: "a1",
    imageNumber: 7,
  },
  {
    name: "خلية نحل سجنتشر وسط",
    nameEn: "Zaatar Pie",
    description: "فطيرة مخبوزة بالزعتر",
    ingredients: "عجين، زعتر، زيت زيتون",
    folder: "a1",
    imageNumber: 8,
  },
  {
    name: "خلية نحل بيكان وسط",
    nameEn: "Cheese Sandwich",
    description: "خبز محمص بحشوة الجبن",
    ingredients: "خبز، جبن، زبدة",
    folder: "a1",
    imageNumber: 9,
  },
  

  // =====================================
  // 02 - القهوة | a2 | 10 Products
  // =====================================

  {
    name: "لاتيه ساخن",
    nameEn: "Hot Latte",
    description: "إسبريسو مع الحليب المبخر",
    ingredients: "إسبريسو، حليب",
    folder: "a2",
    imageNumber: 1,
    featured: true,
    badge: "الأكثر طلباً",
  },
  {
    name: "سبانيش لاتيه",
    nameEn: "Spanish Latte",
    description: "مزيج غني من القهوة والحليب المكثف",
    ingredients: "إسبريسو، حليب، حليب مكثف",
    folder: "a2",
    imageNumber: 2,
    featured: true,
  },
  {
    name: "كابتشينو",
    nameEn: "Cappuccino",
    description: "قهوة إسبريسو مع رغوة الحليب",
    ingredients: "إسبريسو، حليب، رغوة",
    folder: "a2",
    imageNumber: 3,
  },
  {
    name: "فلات وايت",
    nameEn: "Flat White",
    description: "قهوة ناعمة مع حليب مخملي",
    ingredients: "إسبريسو، حليب",
    folder: "a2",
    imageNumber: 4,
  },
  {
    name: "أمريكانو",
    nameEn: "Americano",
    description: "إسبريسو مع الماء الساخن",
    ingredients: "إسبريسو، ماء",
    folder: "a2",
    imageNumber: 5,
  },
  {
    name: "موكا",
    nameEn: "Mocha",
    description: "قهوة ممزوجة بالشوكولاتة",
    ingredients: "إسبريسو، شوكولاتة، حليب",
    folder: "a2",
    imageNumber: 6,
  },
  {
    name: "إسبريسو",
    nameEn: "Espresso",
    description: "قهوة مركزة من حبوب مختارة",
    ingredients: "قهوة إسبريسو",
    folder: "a2",
    imageNumber: 7,
  },
  {
    name: "لاتيه كراميل",
    nameEn: "Caramel Latte",
    description: "لاتيه غني بصوص الكراميل",
    ingredients: "إسبريسو، حليب، كراميل",
    folder: "a2",
    imageNumber: 8,
  },
  {
    name: "لاتيه بندق",
    nameEn: "Hazelnut Latte",
    description: "قهوة بالحليب ونكهة البندق",
    ingredients: "إسبريسو، حليب، بندق",
    folder: "a2",
    imageNumber: 9,
  },
  {
    name: "قهوة مقطرة",
    nameEn: "Pour Over",
    description: "قهوة مقطرة بنكهة متوازنة",
    ingredients: "قهوة، ماء ساخن",
    folder: "a2",
    imageNumber: 10,
  },

  // =====================================
  // 03 - الحلا والكيك | a3 | 8 Products
  // =====================================

  {
    name: "مانجو ترفل",
    nameEn: "Cheesecake",
    description: "تشيز كيك كريمي بطعم غني",
    ingredients: "جبن كريمي، بسكويت، كريمة",
    folder: "a3",
    imageNumber: 1,
    featured: true,
  },
  {
    name: "كيكة الشوكولاتة",
    nameEn: "Chocolate Cake",
    description: "كيكة بطبقات الشوكولاتة",
    ingredients: "كاكاو، دقيق، كريمة",
    folder: "a3",
    imageNumber: 2,
  },
  {
    name: "براوني",
    nameEn: "Brownie",
    description: "براوني غني بالشوكولاتة",
    ingredients: "شوكولاتة، زبدة، كاكاو",
    folder: "a3",
    imageNumber: 3,
  },
  {
    name: "بسبوسة سادة",
    nameEn: "Plain Basbousa",
    description: "بسبوسة شرقية بالقطر",
    ingredients: "سميد، سكر، سمن، قطر",
    folder: "a3",
    imageNumber: 4,
  },
  {
    name: "بسبوسة بالقشطة",
    nameEn: "Cream Basbousa",
    description: "بسبوسة محشوة بالقشطة",
    ingredients: "سميد، قشطة، قطر",
    folder: "a3",
    imageNumber: 5,
  },
  {
    name: "تارت الفستق",
    nameEn: "Pistachio Tart",
    description: "تارت كريمي بالفستق",
    ingredients: "فستق، كريمة، عجين",
    folder: "a3",
    imageNumber: 6,
  },
  {
    name: "كيكة الفانيلا",
    nameEn: "Vanilla Cake",
    description: "كيكة إسفنجية بكريمة الفانيلا",
    ingredients: "دقيق، فانيلا، كريمة",
    folder: "a3",
    imageNumber: 7,
  },
  {
    name: "كوكيز الشوكولاتة",
    nameEn: "Chocolate Cookies",
    description: "كوكيز طرية بقطع الشوكولاتة",
    ingredients: "دقيق، زبدة، شوكولاتة",
    folder: "a3",
    imageNumber: 8,
  },

  // =====================================
  // 04 - المكسرات | a4 | 3 Products
  // =====================================

  {
    name: "مكسرات كاجو و لوز",
    nameEn: "Mixed Nuts",
    description: "تشكيلة من المكسرات المختارة",
    ingredients: "مكسرات مشكلة",
    folder: "a4",
    imageNumber: 1,
    featured: true,
  },
  {
    name: "مكسرات مشكل",
    nameEn: "Pistachios",
    description: "فستق مختار بعناية",
    ingredients: "فستق",
    folder: "a4",
    imageNumber: 2,
  },
  {
    name: "فصفص",
    nameEn: "Cashews",
    description: "حبات كاجو مميزة",
    ingredients: "كاجو",
    folder: "a4",
    imageNumber: 3,
  },

  // =====================================
  // 05 - الشاهي | a5 | 8 Products
  // =====================================

  {
    name: "شاي أحمر",
    nameEn: "Black Tea",
    description: "شاي أحمر بطعم أصيل",
    ingredients: "شاي أسود، ماء",
    folder: "a5",
    imageNumber: 1,
    featured: true,
  },
  {
    name: "شاي أخضر",
    nameEn: "Green Tea",
    description: "شاي أخضر خفيف ومنعش",
    ingredients: "شاي أخضر، ماء",
    folder: "a5",
    imageNumber: 2,
  },
  {
    name: "شاي بالنعناع",
    nameEn: "Mint Tea",
    description: "شاي عطري بالنعناع الطازج",
    ingredients: "شاي، نعناع",
    folder: "a5",
    imageNumber: 3,
  },
  {
    name: "شاي كرك",
    nameEn: "Karak Tea",
    description: "شاي بالحليب والهيل",
    ingredients: "شاي، حليب، هيل",
    folder: "a5",
    imageNumber: 4,
    badge: "الأكثر طلباً",
  },
  {
    name: "شاي بالحبق",
    nameEn: "Basil Tea",
    description: "شاي بنكهة الحبق العطرية",
    ingredients: "شاي، حبق",
    folder: "a5",
    imageNumber: 5,
  },
  {
    name: "شاي إيرل غراي",
    nameEn: "Earl Grey",
    description: "شاي أسود بنكهة البرغموت",
    ingredients: "شاي أسود، برغموت",
    folder: "a5",
    imageNumber: 6,
  },
  {
    name: "شاي خوخ",
    nameEn: "Peach Tea",
    description: "شاي بنكهة الخوخ",
    ingredients: "شاي، خوخ",
    folder: "a5",
    imageNumber: 7,
  },
  {
    name: "شاي قرفة",
    nameEn: "Cinnamon Tea",
    description: "شاي دافئ بنكهة القرفة",
    ingredients: "شاي، قرفة",
    folder: "a5",
    imageNumber: 8,
  },

  // =====================================
  // 06 - المشروبات الباردة | a6 | 8 Products
  // =====================================

  {
    name: "آيس لاتيه",
    nameEn: "Iced Latte",
    description: "إسبريسو مع الحليب والثلج",
    ingredients: "إسبريسو، حليب، ثلج",
    folder: "a6",
    imageNumber: 1,
    featured: true,
  },
  {
    name: "آيس سبانيش",
    nameEn: "Iced Spanish Latte",
    description: "سبانيش لاتيه بارد ومنعش",
    ingredients: "إسبريسو، حليب، ثلج",
    folder: "a6",
    imageNumber: 2,
  },
  {
    name: "آيس أمريكانو",
    nameEn: "Iced Americano",
    description: "قهوة إسبريسو مع الماء البارد",
    ingredients: "إسبريسو، ماء، ثلج",
    folder: "a6",
    imageNumber: 3,
  },
  {
    name: "آيس موكا",
    nameEn: "Iced Mocha",
    description: "قهوة باردة بالشوكولاتة",
    ingredients: "إسبريسو، شوكولاتة، حليب",
    folder: "a6",
    imageNumber: 4,
  },
  {
    name: "عصير برتقال",
    nameEn: "Orange Juice",
    description: "عصير برتقال طازج",
    ingredients: "برتقال طازج",
    folder: "a6",
    imageNumber: 5,
  },
  {
    name: "ليمون بالنعناع",
    nameEn: "Lemon Mint",
    description: "مشروب الليمون والنعناع المنعش",
    ingredients: "ليمون، نعناع، ثلج",
    folder: "a6",
    imageNumber: 6,
  },
  {
    name: "عصير مانجو",
    nameEn: "Mango Juice",
    description: "عصير مانجو بطعم غني",
    ingredients: "مانجو طازجة",
    folder: "a6",
    imageNumber: 7,
  },
 
]

// Generate final products automatically

// Generate final products automatically
export const products: Product[] = productData.map((product, index) => ({
  id: index + 1,
  name: product.name,
  nameEn: product.nameEn,
  description: product.description,
  ingredients: product.ingredients,

  // أسعار مبدئية قابلة للتعديل
  price: (
    [
      12, 14, 18, 10, 11, 12, 10, 9, 13, 12,
      16, 18, 15, 15, 13, 17, 10, 18, 18, 15,
      18, 20, 14, 12, 15, 19, 17, 10,
      25, 28, 22,
      8, 10, 12, 14, 12, 15, 14, 13,
      16, 18, 14, 15, 10, 12, 18, 17
    ][index] ?? 0
  ),

  // المسار الصحيح للصور
  image: `/img/${product.folder}/${product.imageNumber}.${
  (product.folder === 'a3' && product.imageNumber >= 2 && product.imageNumber <= 8) ||
  (product.folder === 'a6' && product.imageNumber >= 8 && product.imageNumber <= 9) ||
  (product.folder === 'a6' && product.imageNumber >= 10 && product.imageNumber <= 9) ||
  (product.folder === 'a2' && (product.imageNumber === 9 || product.imageNumber === 10))
    ? 'png'
    : 'jpeg'
}`,

  category: product.folder,
  featured: product.featured ?? false,

  ...(product.badge ? { badge: product.badge } : {}),

  page: Math.floor(index / 15) + 1,
}))

// Main menu categories
export const categories = [
  { id: "a1", name: "المخبوزات", nameEn: "Bakery", count: 10 },
  { id: "a2", name: "القهوة", nameEn: "Coffee", count: 10 },
  { id: "a3", name: "الحلا والكيك", nameEn: "Desserts & Cakes", count: 8 },
  { id: "a4", name: "المكسرات", nameEn: "Nuts", count: 3 },
  { id: "a5", name: "الشاهي", nameEn: "Tea", count: 8 },
  { id: "a6", name: "المشروبات الباردة", nameEn: "Cold Drinks", count: 8 },
]

// Get products by category
export const getProductsByCategory = (categoryId: string) =>
  products.filter((product) => product.category === categoryId)

// Get products by display page
export const getProductsByPage = (pageNumber: number) =>
  products.filter((product) => product.page === pageNumber)

// Featured products
export const featuredProducts = products.filter(
  (product) => product.featured
)

