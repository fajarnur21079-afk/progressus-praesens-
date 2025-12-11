export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Progressus Praesens
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Track your personal growth and achievements. Embrace the present moment while building towards your future goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/about"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Learn More
            </a>
            <a
              href="/contact"
              className="bg-white hover:bg-gray-50 text-gray-900 font-semibold py-3 px-6 rounded-lg border border-gray-300 transition duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Track Progress</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Monitor your daily achievements and long-term goals with intuitive tools.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Stay Motivated</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Get reminders and insights to keep pushing forward on your journey.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Reflect & Grow</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Review your progress and learn from experiences to improve continuously.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
