"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "./ThemeProvider"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="fixed w-full z-50 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <motion.a
              href="#"
              className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              TechStart
            </motion.a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
            </motion.button>
            <div className="md:hidden ml-2">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 block px-3 py-2 rounded-md text-base font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar

