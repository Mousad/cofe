
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Product = {
  id: number;
  name: string;
  description: string;
  price?: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "فول سوداني",
    description: "فول بالطريقة السودانية الأصيلة",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500",
  },
  {
    id: 2,
    name: "كسرة وملاح",
    description: "كسرة طازجة مع الملاح السوداني",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500",
  },
  {
    id: 3,
    name: "شية لحم",
    description: "لحم مشوي بتتبيلة مميزة",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500",
  },
  {
    id: 4,
    name: "عصيدة بالتقلية",
    description: "عصيدة سودانية بالتقلية الغنية",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500",
  },
  {
    id: 5,
    name: "كبدة سودانية",
    description: "كبدة طازجة بالبهارات الخاصة",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500",
  },
  {
    id: 6,
    name: "دجاج مشوي",
    description: "دجاج متبل ومشوي بطريقة مميزة",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=500",
  },
  {
    id: 7,
    name: "طعمية سودانية",
    description: "طعمية مقرمشة وطازجة",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500",
  },
  {
    id: 8,
    name: "ملوخية سودانية",
    description: "ملوخية بطعم سوداني أصيل",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500",
  },
  {
    id: 9,
    name: "ملاح روب",
    description: "روب سوداني بطعم مميز",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500",
  },
  {
    id: 10,
    name: "قراصة بالدمعة",
    description: "قراصة طازجة مع الدمعة السودانية",
    image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=500",
  },
  {
    id: 11,
    name: "سلطة سودانية",
    description: "خضروات طازجة بتتبيلة خاصة",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500",
  },
  {
    id: 12,
    name: "بليلة",
    description: "بليلة طازجة ولذيذة",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500",
  },
  {
    id: 13,
    name: "عصير مانجو",
    description: "مانجو طبيعي ومنعش",
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=500",
  },
  {
    id: 14,
    name: "ليمون بالنعناع",
    description: "ليمون طازج مع النعناع",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765edfd4?w=500",
  },
  {
    id: 15,
    name: "كركديه",
    description: "مشروب الكركديه السوداني",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500",
  },
];

const PAGE_SIZE = 15;
const INTRO_DURATION = 5000;
const PAGE_DURATION = 20000;

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(products.length / PAGE_SIZE);

  const currentProducts = products.slice(
    currentPage * PAGE_SIZE,
    (currentPage + 1) * PAGE_SIZE
  );

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowIntro(false);
    }, INTRO_DURATION);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showIntro || totalPages <= 1) return;

    const timer = window.setInterval(() => {
      setCurrentPage((page) => (page + 1) % totalPages);
    }, PAGE_DURATION);

    return () => window.clearInterval(timer);
  }, [showIntro, totalPages]);

  return (
    <main className="h-dvh w-screen overflow-hidden bg-[#F7F8F5] font-sans text-[#202820]" dir="rtl">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <motion.section
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="flex h-full w-full flex-col items-center justify-center gap-6 bg-[#174A32] text-white"
          >
            <motion.div
              initial={{ scale: 0.75, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="flex h-40 w-40 items-center justify-center rounded-[35px] bg-white text-8xl font-black text-[#174A32] shadow-2xl"
            >
              S
            </motion.div>

            <h1 className="text-5xl font-black tracking-[0.2em]">
              SHAHEEN
            </h1>

            <p className="text-xl font-medium text-white/75">
              شاهين
            </p>
          </motion.section>
        ) : (
          <motion.section
            key={`page-${currentPage}`}
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.985 }}
            transition={{ duration: 0.6 }}
            className="flex h-full w-full flex-col p-5 lg:p-7"
          >
            <div className="grid min-h-0 flex-1 grid-cols-3 grid-rows-5 gap-3 xl:gap-4">
              {currentProducts.map((product, index) => (
                <motion.article
                  key={product.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.025,
                  }}
                  className="flex min-h-0 min-w-0 flex-row items-center gap-3 overflow-hidden rounded-2xl border border-[#E9EDE6] bg-white p-3 shadow-sm xl:gap-4 xl:p-4"
                >
                  <div className="h-full max-h-32 w-[34%] shrink-0 overflow-hidden rounded-xl bg-[#E9EEE7] xl:max-h-36">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 text-right">
                    <h2 className="text-base font-extrabold leading-snug text-[#174A32] lg:text-xl xl:text-2xl">
                      {product.name}
                    </h2>

                    <p className="line-clamp-3 text-xs leading-relaxed text-[#777F76] lg:text-sm xl:text-base">
                      {product.description}
                    </p>

                    {product.price && (
                      <p className="text-sm font-extrabold text-[#E99A42] lg:text-lg">
                        {product.price}
                      </p>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}
