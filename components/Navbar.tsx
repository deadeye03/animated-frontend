'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react'
import { useTheme } from './ThemeProvider'

const menuItems = [
  { 
    name: 'Products', 
    submenu: ['Product 1', 'Product 2', 'Product 3'] 
  },
  { 
    name: 'Services', 
    submenu: ['Service 1', 'Service 2', 'Service 3'] 
  },
  { 
    name: 'About', 
    submenu: ['Our Story', 'Team', 'Careers'] 
  }
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const { theme, toggleTheme } = useTheme()

  const handleMouseEnter = (itemName: string) => {
    setActiveSubmenu(itemName)
  }

  const handleMouseLeave = () => {
    setActiveSubmenu(null)
  }

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
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <motion.a
                    href="#"
                    className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                    {item.submenu && <ChevronDown className="ml-1" size={14} />}
                  </motion.a>
                  <AnimatePresence>
                    {activeSubmenu === item.name && item.submenu && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5"
                      >
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                          {item.submenu.map((subItem) => (
                            <motion.a
                              key={subItem}
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                              role="menuitem"
                              whileHover={{ backgroundColor: theme === 'light' ? '#f3f4f6' : '#374151' }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {subItem}
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none"
              whileHover={{ scale: 1.05, rotate: 15 }}
              whileTap={{ scale: 0.95, rotate: -15 }}
            >
              {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <motion.a
                  key={item.name}
                  href="#"
                  className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 block px-3 py-2 rounded-md text-base font-medium"
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
