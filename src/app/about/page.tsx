export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            About Progressus Praesens
          </h1>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Progressus Praesens is dedicated to helping individuals track and celebrate their personal growth.
              We believe that progress is not just about achieving goals, but also about appreciating the journey
              and the present moment.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Our platform provides tools and insights to help you:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
              <li>Monitor daily achievements and long-term objectives</li>
              <li>Reflect on experiences and learn from them</li>
              <li>Stay motivated through personalized reminders and insights</li>
              <li>Visualize your growth over time</li>
            </ul>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Join us in embracing progress, one step at a time.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}