"use client"
import { motion, AnimatePresence } from "framer-motion"
import { links } from "@/lib/data"
import Link from "next/link"
import clsx from "clsx"
import { useActiveSectionContext } from "@/context/active-section-context"
import { useDialog } from "@/context/dialog-context"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
  const { isDialogOpen } = useDialog()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className={clsx("z-[999] relative transition-opacity duration-300", {
        "opacity-0 pointer-events-none": isDialogOpen,
        "opacity-100": !isDialogOpen,
      })}
    >
      {/* ---- Desktop & Tablet Header ---- */}
      <motion.div
        className="hidden sm:block fixed top-0 left-1/2 h-[3.25rem] w-[90%] rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:w-[32rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="hidden sm:flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] items-center justify-center gap-5 text-[0.9rem] font-medium text-gray-500">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  { "text-gray-950 dark:text-gray-200": activeSection === link.name }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name)
                  setTimeOfLastClick(Date.now())
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* ---- Mobile Header ---- */}
      <div className="sm:hidden fixed top-4 right-4">
        <button
          className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 shadow-md"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              className="absolute top-12 right-0 w-48 rounded-lg bg-white dark:bg-gray-900 shadow-lg p-4 flex flex-col gap-3 text-gray-700 dark:text-gray-200"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {links.map((link) => (
                <li key={link.hash}>
                  <Link
                    className={clsx(
                      "block w-full px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition",
                      { "font-bold": activeSection === link.name }
                    )}
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name)
                      setTimeOfLastClick(Date.now())
                      setMenuOpen(false)
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
