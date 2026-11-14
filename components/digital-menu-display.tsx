
'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { products, categories, type Product } from '@/lib/products'

const PRODUCTS_PER_PAGE = 16

function formatPrice(price: number) {
  return `${price} ريال`
}

// Product Card
function ProductCard({
  product,
  index,
}: {
  product: Product
  index: number
}) {
  const discount =
    product.originalPrice && product.price > 0
      ? Math.round(
          (1 - product.price / product.originalPrice) * 100
        )
      : 0

  const categoryName =
    categories.find((category) => category.id === product.category)?.name
    ?? product.category

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.025,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex h-full min-h-[100px] min-w-0 items-center gap-3 overflow-hidden rounded-[10px] border border-[#5E1D1B]/10 bg-[#EAD0AB] p-3 shadow-[0_3px_12px_rgba(94,29,27,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-[#5E1D1B]/25 hover:shadow-lg"
    >
      {/* Product Image */}
    
{/* Product Image */}
<div className="relative h-[90px] w-[90px] shrink-0 overflow-hidden rounded-2xl bg-[#E8D8C5]">
  <img
    src={product.image}
    alt={product.name}
    loading="eager"
    draggable={false}
    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
  />
</div>

{/* Product Information */}
<div className="flex min-w-0 flex-1 flex-col justify-center">

  {/* Name & Category */}
  <div className="flex items-center gap-2">
    <h2 className="truncate text-[16px] font-black text-[#5E1D1B]">
      {product.name}
    </h2>
  </div>

  <span className="mt-1 text-[9px] font-bold tracking-wider text-[#B18A70]">
    {categoryName}
  </span>

  {/* Description */}
  

  {/* Bottom Price Area */}
  <div className="mt-2 flex items-center justify-between border-t border-[#5E1D1B]/10 pt-2">

   
<div className="mt-2 flex items-center gap-2">

  <span className="text-[16px] font-black leading-none text-[#5E1D1B]">
    {product.price > 0
      ? product.price
      : 'السعر قريباً'}
  </span>

  {product.price > 0 && (
    <img
      src="https://menu.ezsoft-sa.com/assets/img/riyal.png"
      alt="ريال سعودي"
      className="h-[15px] w-[15px] object-contain opacity-80"
    />
  )}

  {discount > 0 && (
    <span className="text-[10px] text-[#A17B69] line-through">
      {formatPrice(product.originalPrice!)}
    </span>
  )}

</div>


    <span className="text-[9px] font-semibold text-[#A17B69]">
      طازج ولذيذ
    </span>

  </div>
</div>


      
    </motion.article>
  )
}

// Main Digital Menu
export function DigitalMenuDisplay() {
  const [currentPage, setCurrentPage] = useState(0)

  const startX = useRef<number | null>(null)

  const totalPages = Math.ceil(
    products.length / PRODUCTS_PER_PAGE
  )

  const visibleProducts = products.slice(
    currentPage * PRODUCTS_PER_PAGE,
    (currentPage + 1) * PRODUCTS_PER_PAGE
  )

  // Navigation
  const goToPage = (page: number) => {
    setCurrentPage(
      Math.max(0, Math.min(page, totalPages - 1))
    )
  }

  const nextPage = () => {
    goToPage(currentPage + 1)
  }

  const previousPage = () => {
    goToPage(currentPage - 1)
  }

  // Swipe Navigation
  const handlePointerDown = (
    event: React.PointerEvent<HTMLElement>
  ) => {
    startX.current = event.clientX
  }

  const handlePointerUp = (
    event: React.PointerEvent<HTMLElement>
  ) => {
    if (startX.current === null) return

    const difference = event.clientX - startX.current

    if (Math.abs(difference) > 65) {
      // Drag right = Next page
      if (difference > 0) {
        nextPage()
      } else {
        previousPage()
      }
    }

    startX.current = null
  }

  const handlePointerCancel = () => {
    startX.current = null
  }

  // Keyboard Navigation
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLElement>
  ) => {
    if (event.key === 'ArrowRight') {
      nextPage()
    }

    if (event.key === 'ArrowLeft') {
      previousPage()
    }
  }

  return (
    <main
      dir="rtl"
      className="relative flex min-h-dvh w-full flex-col overflow-hidden bg-[#E8D7BD] px-5 py-4 text-[#5E1D1B] lg:h-dvh lg:min-h-0"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#5E1D1B]/[0.035] blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#5E1D1B]/[0.035] blur-3xl" />

      {/* Header */}
      <header className="relative z-10 mb-4 flex shrink-0 items-center justify-between border-b border-[#5E1D1B]/15 pb-3">
        <div className="w-16" />

        <div className="text-center">
          <h1
            className="text-4xl font-black tracking-wide text-[#5E1D1B]"
            style={{
              fontFamily: "'Amiri', serif",
              letterSpacing: '0.04em',
            }}
          >
            شاهين
          </h1>

          <p className="mt-1 text-[10px] font-semibold tracking-[0.2em] text-[#A17B69]">
            SHAHEEN CAFE
          </p>
        </div>

        <div className="w-16 text-left">
          <span className="text-xs font-bold text-[#A17B69]">
            {String(currentPage + 1).padStart(2, '0')}
            {' / '}
            {String(totalPages).padStart(2, '0')}
          </span>
        </div>
      </header>

      {/* Products Display */}
      <div className="relative z-10 flex min-h-0 flex-1 flex-col">
        <AnimatePresence mode="wait" initial={false}>
          <motion.section
            key={currentPage}
            aria-label={`صفحة ${currentPage + 1} من قائمة شاهين`}
            tabIndex={0}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
            onKeyDown={handleKeyDown}
            style={{ touchAction: 'pan-y' }}
            initial={{
              opacity: 0,
              x: 35,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -35,
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid flex-1 grid-cols-2 content-start gap-3 outline-none sm:grid-cols-3 lg:min-h-0 lg:grid-cols-4 lg:grid-rows-4 lg:gap-4"
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

      {/* Footer Navigation */}
      <footer className="relative z-10 mt-4 flex shrink-0 items-center justify-between border-t border-[#5E1D1B]/15 pt-3">

        {/* Previous Page */}
        <button
          type="button"
          onClick={previousPage}
          disabled={currentPage === 0}
          className="flex items-center gap-2 rounded-xl border border-[#5E1D1B]/15 px-4 py-2 text-xs font-bold text-[#5E1D1B] transition-all hover:bg-[#5E1D1B] hover:text-[#E8D7BD] disabled:cursor-not-allowed disabled:opacity-25"
        >
          <span>→</span>
          <span>السابق</span>
        </button>

        {/* Page Indicator */}
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToPage(index)}
              aria-label={`الانتقال إلى الصفحة ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentPage === index
                  ? 'w-7 bg-[#5E1D1B]'
                  : 'w-2 bg-[#5E1D1B]/25 hover:bg-[#5E1D1B]/50'
              }`}
            />
          ))}
        </div>

        {/* Next Page */}
        <button
          type="button"
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          className="flex items-center gap-2 rounded-xl border border-[#5E1D1B]/15 px-4 py-2 text-xs font-bold text-[#5E1D1B] transition-all hover:bg-[#5E1D1B] hover:text-[#E8D7BD] disabled:cursor-not-allowed disabled:opacity-25"
        >
          <span>التالي</span>
          <span>←</span>
        </button>

      </footer>

    </main>
  )
}
