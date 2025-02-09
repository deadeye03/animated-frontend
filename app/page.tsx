import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import { ThemeProvider } from "../components/ThemeProvider"

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">Our Services</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {["Web Development", "Mobile Apps", "Cloud Solutions", "AI & Machine Learning", "IoT", "Cybersecurity"].map(
              (service) => (
                <div key={service} className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">{service}</h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

