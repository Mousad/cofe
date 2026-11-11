
'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { products, type Product } from '@/lib/products'

const PRODUCTS_PER_PAGE = 20
const PAGE_DURATION = 25_000

const SPOTLIGHT_START = 10_000
const SPOTLIGHT_DURATION = 5_000

function formatPrice(price: number) {
  return `${price} ر.س`
}

// Product Card
function ProductCard({
  product,
  index,
}: {
  product: Product
  index: number
}) {
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0

  return (
    <motion.article
      initial={{ opacity: 0, y: 15, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.025,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex h-full min-h-[100px] min-w-0 items-center gap-3 overflow-hidden rounded-2xl border border-[#5E1D1B]/10 bg-[#E8D7BD] p-3 shadow-[0_3px_12px_rgba(94,29,27,0.045)] transition-all duration-500 hover:-translate-y-1 hover:border-[#5E1D1B]/25 hover:shadow-lg"
    >
      {/* Product Image */}
      <div className="relative h-[76px] w-[76px] shrink-0 overflow-hidden rounded-xl bg-[#E8D7BD]">
        <img
          src={product.image}
          alt={product.name}
          loading="eager"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {product.badge && (
          <span className="absolute bottom-0 right-0 max-w-full truncate rounded-tl-lg bg-[#5E1D1B] px-2 py-1 text-[9px] font-bold text-[#E8D7BD]">
            {product.badge}
          </span>
        )}
      </div>

      {/* Product Information */}
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-1.5">
        <span className="truncate text-[10px] font-semibold tracking-wide text-[#A17B69]">
          {product.category}
        </span>

        <h2 className="truncate text-[15px] font-extrabold leading-tight text-[#5E1D1B]">
          {product.name}
        </h2>

        <p className="line-clamp-2 text-[10px] leading-relaxed text-[#79504A]">
          {product.description}
        </p>
      </div>

      {/* Product Price */}
      <div className="flex shrink-0 flex-col items-center justify-center border-r border-[#5E1D1B]/15 pr-3">
        {discount > 0 && (
          <span className="text-[9px] text-[#A17B69] line-through">
            {formatPrice(product.originalPrice!)}
          </span>
        )}

        <span className="whitespace-nowrap text-[14px] font-black text-[#5E1D1B]">
          {formatPrice(product.price)}
        </span>

        {discount > 0 && (
          <span className="mt-1 rounded-md bg-[#5E1D1B] px-1.5 py-0.5 text-[9px] font-bold text-[#E8D7BD]">
            {discount}% خصم
          </span>
        )}
      </div>
    </motion.article>
  )
}

// Spotlight Product Advertisement
function SpotlightDisplay({
  product,
}: {
  product: Product
}) {
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex h-dvh w-screen items-center justify-center overflow-hidden bg-[#5E1D1B]/35 p-5 backdrop-blur-md md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.article
        initial={{ opacity: 0, y: 35, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.94 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="w-full max-w-[760px] overflow-hidden rounded-[28px] border border-white/50 bg-[#F5EBDD] shadow-[0_30px_100px_rgba(40,15,10,0.3)]"
      >
        {/* Advertisement Image */}
        <div className="relative h-[220px] overflow-hidden bg-[#E8D7BD] sm:h-[300px] md:h-[380px]">
          <motion.img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 5,
              ease: 'linear',
            }}
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2B100E]/35 via-transparent to-transparent" />

          {product.badge && (
            <span className="absolute right-5 top-5 rounded-full bg-[#5E1D1B] px-4 py-2 text-sm font-bold text-[#E8D7BD] shadow-lg">
              {product.badge}
            </span>
          )}

          {/* Featured Label */}
          <span className="absolute bottom-5 right-6 rounded-full border border-white/40 bg-black/25 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
            SHAHEEN SPECIAL
          </span>
        </div>

        {/* Product Details */}
        <div className="flex items-center justify-between gap-5 p-5 sm:p-6 md:p-8">
          <div className="min-w-0 flex-1">
            <span className="mb-2 block text-xs font-semibold text-[#A17B69]">
              {product.category}
            </span>

            <h2 className="mb-3 text-2xl font-black text-[#5E1D1B] sm:text-3xl">
              {product.name}
            </h2>

            <p className="text-sm leading-7 text-[#79504A] sm:text-base">
              {product.description}
            </p>

            {product.ingredients && (
              <p className="mt-2 text-xs leading-6 text-[#A17B69]">
                {product.ingredients}
              </p>
            )}
          </div>

          {/* Price */}
          <div className="shrink-0 border-r border-[#5E1D1B]/15 pr-4 text-center sm:pr-6">
            {discount > 0 && (
              <span className="mb-1 block text-sm text-[#A17B69] line-through">
                {formatPrice(product.originalPrice!)}
              </span>
            )}

            <span className="whitespace-nowrap text-xl font-black text-[#5E1D1B] sm:text-2xl">
              {formatPrice(product.price)}
            </span>

            {discount > 0 && (
              <span className="mt-2 block rounded-md bg-[#5E1D1B] px-2 py-1 text-xs font-bold text-[#E8D7BD]">
                خصم {discount}%
              </span>
            )}
          </div>
        </div>
      </motion.article>
    </motion.div>
  )
}

// Main Digital Menu
export function DigitalMenuDisplay() {
  const [currentPage, setCurrentPage] = useState(0)
  const [spotlightIndex, setSpotlightIndex] = useState(-1)

  const totalPages = Math.ceil(
    products.length / PRODUCTS_PER_PAGE
  )

  const visibleProducts = products.slice(
    currentPage * PRODUCTS_PER_PAGE,
    (currentPage + 1) * PRODUCTS_PER_PAGE
  )

  // Select featured products for each page
  const featuredProducts = visibleProducts.filter(
    (product) => product.featured
  )

  const spotlightProducts = [
    ...featuredProducts,
    ...visibleProducts.filter(
      (product) =>
        !featuredProducts.some(
          (featured) => featured.id === product.id
        )
    ),
  ].slice(0, 2)

  const activeSpotlight =
    spotlightIndex >= 0
      ? spotlightProducts[spotlightIndex] ?? null
      : null

  // Page and Spotlight Automation
  useEffect(() => {
    if (totalPages === 0) return

    setSpotlightIndex(-1)

    const firstSpotlight = setTimeout(() => {
      setSpotlightIndex(0)
    }, SPOTLIGHT_START)

    const secondSpotlight = setTimeout(() => {
      setSpotlightIndex(1)
    }, SPOTLIGHT_START + SPOTLIGHT_DURATION)

    const hideSpotlight = setTimeout(() => {
      setSpotlightIndex(-1)
    }, SPOTLIGHT_START + SPOTLIGHT_DURATION * 2)

    const nextPage = setTimeout(() => {
      setSpotlightIndex(-1)

      setCurrentPage((previous) => (
        totalPages > 1
          ? (previous + 1) % totalPages
          : 0
      ))
    }, PAGE_DURATION)

    return () => {
      clearTimeout(firstSpotlight)
      clearTimeout(secondSpotlight)
      clearTimeout(hideSpotlight)
      clearTimeout(nextPage)
    }
  }, [currentPage, totalPages])

  return (
    <main
      dir="rtl"
      className="relative flex min-h-dvh w-full flex-col overflow-hidden bg-[#E8D7BD] px-5 py-4 text-[#5E1D1B] lg:h-dvh"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#5E1D1B]/[0.035] blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#5E1D1B]/[0.035] blur-3xl" />

      {/* Header */}
      <header className="relative z-10 mb-4 flex shrink-0 items-center justify-center border-b border-[#5E1D1B]/15 pb-3">
        <h1
          className="text-4xl font-black tracking-wide text-[#5E1D1B]"
          style={{
            fontFamily: "'Amiri', serif",
            letterSpacing: '0.04em',
          }}
        >
          شاهين
        </h1>
      </header>

      {/* Products Pages */}
      <div className="relative z-10 flex min-h-0 flex-1 flex-col">
        <AnimatePresence mode="wait" initial={false}>
          <motion.section
            key={currentPage}
            aria-label={`صفحة ${currentPage + 1} من قائمة منتجات شاهين`}
            initial={{
              opacity: 0,
              x: 40,
              scale: 0.985,
              filter: 'blur(4px)',
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
              filter: 'blur(0px)',
            }}
            exit={{
              opacity: 0,
              x: -40,
              scale: 0.985,
              filter: 'blur(4px)',
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid flex-1 grid-cols-2 content-start gap-3 sm:grid-cols-3 lg:min-h-0 lg:grid-cols-4 lg:grid-rows-[repeat(5,minmax(0,1fr))] lg:gap-4"
          >
            {visibleProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </motion.section>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-4 flex shrink-0 items-center justify-between border-t border-[#5E1D1B]/15 pt-3">
       

        {/* Page Indicator */}
       

       
      </footer>

      {/* Spotlight Advertisement Layer */}
      <AnimatePresence mode="wait">
        {activeSpotlight && (
          <SpotlightDisplay
            key={activeSpotlight.id}
            product={activeSpotlight}
          />
        )}
      </AnimatePresence>
    </main>
  )
}
