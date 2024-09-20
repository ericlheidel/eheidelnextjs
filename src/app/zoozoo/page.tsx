export default function Portfolio() {
  return (
    <div className="flex flex-col items-center p-8 space-y-12">
      {/* Introduction Section */}
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Hello, I'm [Your Name]</h1>
        <p className="text-lg text-gray-600">
          A passionate web developer eager to kickstart my career in tech. I
          love building websites and learning new technologies.
        </p>
      </header>

      {/* Skills Section */}
      <section className="w-full max-w-3xl text-center">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <ul className="flex justify-center space-x-8">
          <li className="bg-blue-200 px-4 py-2 rounded-md">HTML</li>
          <li className="bg-green-200 px-4 py-2 rounded-md">CSS</li>
          <li className="bg-yellow-200 px-4 py-2 rounded-md">JavaScript</li>
          <li className="bg-red-200 px-4 py-2 rounded-md">React</li>
          <li className="bg-purple-200 px-4 py-2 rounded-md">Git</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="w-full max-w-3xl text-center">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="space-y-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">
              Project 1: Personal Portfolio
            </h3>
            <p className="text-gray-600 mt-2">
              A personal portfolio website showcasing my skills, projects, and
              experience using HTML, CSS, and JavaScript.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Project 2: Weather App</h3>
            <p className="text-gray-600 mt-2">
              A simple weather app built with React that fetches weather data
              from an API and displays it to the user.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Project 3: Task Manager</h3>
            <p className="text-gray-600 mt-2">
              A task manager app that allows users to add, edit, and remove
              tasks. Built using Next.js and React.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full max-w-3xl text-center">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="text-gray-600">
          Feel free to reach out to me via email or LinkedIn!
        </p>
        <div className="mt-4 space-x-6">
          <a
            href="mailto:youremail@example.com"
            className="text-blue-600 underline hover:text-blue-800"
          >
            youremail@example.com
          </a>
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  )
}
