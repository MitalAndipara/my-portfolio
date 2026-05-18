export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#0F172A] font-sans overflow-hidden relative">
      {/* Dynamic Background Glows */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] glow-bg opacity-70 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] glow-bg opacity-50 blur-3xl pointer-events-none"></div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#F8F9FA]/80 backdrop-blur-md border-b border-gray-100/50">
        <div className="flex items-center justify-between p-6 max-w-6xl mx-auto">
          <div className="text-xl font-bold tracking-tighter hover:scale-105 transition-transform cursor-pointer">MITAL.</div>
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
            <a href="#about" className="hover:text-black transition-colors">About</a>
            <a href="#projects" className="hover:text-black transition-colors">Projects</a>
            <a href="#experience" className="hover:text-black transition-colors">Experience</a>
          </nav>
          <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all hover:scale-105 shadow-sm hover:shadow-md">
            Let's talk
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-24 md:py-32 flex flex-col items-start text-left relative">
        <div className="max-w-4xl relative z-10">
          <span className="bg-white border border-gray-200 text-gray-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 inline-block shadow-sm animate-fade-in">
            FULL-STACK DEVELOPER
          </span>

          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-6 leading-none animate-fade-in-up">
            Crafting digital <span style={{ color: 'color-mix(in oklab, #6f7178 50%, transparent)' }}>experiences</span> that scale.
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mb-8 leading-relaxed animate-fade-in-up delay-100">
            I'm a Full-Stack Developer with 2+ years of experience specializing in building robust web applications using MongoDB, Express, React, and Node.js.
          </p>

          <div className="flex space-x-4 animate-fade-in-up delay-200">
            <button className="bg-black text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-gray-800 transition-all hover:scale-105 font-medium shadow-md hover:shadow-lg group">
              <span>View my work</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
            <button className="bg-white border border-gray-300 text-black px-6 py-3 rounded-full hover:bg-gray-50 transition-all hover:scale-105 font-medium shadow-sm hover:shadow-md">
              Contact me
            </button>
          </div>
        </div>

        {/* Floating geometric shape */}
        <div className="absolute right-10 top-20 hidden lg:block animate-float opacity-70">
          <div className="w-20 h-20 bg-gradient-to-tr from-[#8A9FE7] to-[#D4DDF8] rounded-2xl blur-sm transform rotate-12"></div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-24 self-center text-gray-400 animate-bounce cursor-pointer">
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </main>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-4xl font-bold tracking-tight">About Me</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Passionate about creating efficient, scalable, and user-friendly web applications. I thrive on solving complex problems and turning ideas into reality.
          </p>
          <div className="flex justify-center space-x-4 text-sm font-medium text-gray-500">
            <span className="flex items-center space-x-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Available for freelance</span>
            </span>
            <span>•</span>
            <span>Based in Rajkot, India</span>
          </div>
        </div>
      </section>

      {/* Tech Stack / Languages Section */}
      <section id="languages" className="py-24 bg-[#F8F9FA] relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight mb-2">Languages & Technologies</h2>
            <p className="text-gray-600">The tools I use to bring ideas to life.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            <span className="bg-white border border-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer animate-fade-in-up hover:text-yellow-600 hover:border-yellow-200 flex items-center space-x-2">
              <span className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center text-xs font-bold text-yellow-600">JS</span>
              <span>JavaScript</span>
            </span>
            <span className="bg-white border border-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer animate-fade-in-up delay-100 hover:text-blue-600 hover:border-blue-200 flex items-center space-x-2">
              <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-bold text-blue-600">TS</span>
              <span>TypeScript</span>
            </span>
            <span className="bg-white border border-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer animate-fade-in-up delay-200 hover:text-green-600 hover:border-green-200 flex items-center space-x-2">
              <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-xs font-bold text-green-600">Node</span>
              <span>Node.js</span>
            </span>
            <span className="bg-white border border-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer animate-fade-in-up delay-300 hover:text-blue-500 hover:border-blue-200 flex items-center space-x-2">
              <span className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center text-xs font-bold text-blue-500">At</span>
              <span>React</span>
            </span>
            <span className="bg-white border border-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer animate-fade-in-up delay-400 hover:text-green-500 hover:border-green-200 flex items-center space-x-2">
              <span className="w-6 h-6 bg-green-50 rounded-full flex items-center justify-center text-xs font-bold text-green-500">DB</span>
              <span>MongoDB</span>
            </span>
            <span className="bg-white border border-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer animate-fade-in-up delay-500 hover:text-orange-600 hover:border-orange-200 flex items-center space-x-2">
              <span className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-xs font-bold text-orange-600">Git</span>
              <span>Git</span>
            </span>
            <span className="bg-white border border-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer animate-fade-in-up delay-100 hover:text-black hover:border-gray-400 flex items-center space-x-2">
              <span className="w-6 h-6 bg-black rounded-full flex items-center justify-center text-xs font-bold text-white">Nx</span>
              <span>Next.js</span>
            </span>
            <span className="bg-white border border-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer animate-fade-in-up delay-200 hover:text-red-600 hover:border-red-200 flex items-center space-x-2">
              <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-xs font-bold text-red-600">Nt</span>
              <span>NestJS</span>
            </span>
            <span className="bg-white border border-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer animate-fade-in-up delay-300 hover:text-gray-800 hover:border-gray-400 flex items-center space-x-2">
              <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-xs font-bold text-gray-800">Ex</span>
              <span>Express.js</span>
            </span>
            <span className="bg-white border border-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer animate-fade-in-up delay-400 hover:text-blue-700 hover:border-blue-200 flex items-center space-x-2">
              <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-bold text-blue-600">SQL</span>
              <span>MySQL</span>
            </span>
            <span className="bg-white border border-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer animate-fade-in-up delay-500 hover:text-sky-500 hover:border-sky-200 flex items-center space-x-2">
              <span className="w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center text-xs font-bold text-sky-600">TW</span>
              <span>Tailwind CSS</span>
            </span>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-2">Selected Work</h2>
              <p className="text-gray-600">A curation of my best full-stack projects.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Project 1: Digital Artist */}
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-white/20 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer">
              <div className="bg-gradient-to-br from-[#8A9FE7]/10 to-[#D4DDF8]/10 h-56 rounded-2xl mb-6 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500">
                <span className="font-medium text-gray-600">[ Digital Artist ]</span>
              </div>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">React.js</span>
                  <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">Next.js</span>
                  <span className="text-xs font-semibold text-green-600 bg-green-50 px-2.5 py-0.5 rounded-full">Node.js</span>
                  <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2.5 py-0.5 rounded-full">Blockchain</span>
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">Digital Artist</h3>
                  <span className="text-sm text-gray-500">12/2023</span>
                </div>
                <p className="text-sm text-gray-500 font-medium">Role: Frontend Developer</p>
                <p className="text-gray-600 leading-relaxed text-sm">Developed a platform allowing artists to log in, upload artwork for sale, and participate in blockchain-secured auctions. Implemented features enabling business users to create events, invite artists, and manage notifications for auctions and events.</p>
              </div>
            </div>

            {/* Project 2: Checkypin */}
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-white/20 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer">
              <div className="bg-gradient-to-br from-[#8A9FE7]/10 to-[#D4DDF8]/10 h-56 rounded-2xl mb-6 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500">
                <span className="font-medium text-gray-600">[ Checkypin ]</span>
              </div>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">ReactNative</span>
                  <span className="text-xs font-semibold text-green-600 bg-green-50 px-2.5 py-0.5 rounded-full">Sails js</span>
                </div>
                <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">Checkypin</h3>
                <p className="text-sm text-gray-500 font-medium">Role: Backend Developer</p>
                <p className="text-gray-600 leading-relaxed text-sm">Built a platform for businesses (restaurants, cafes) to manage branches, create posts, and engage customers. Users can check in to businesses, with automatic checkout if they move 20 meters away. Integrated real-time chat with branches, rewards for check-ins, and the ability for businesses to upload stories.</p>
              </div>
            </div>

            {/* Project 3: Exclusio */}
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-white/20 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer">
              <div className="bg-gradient-to-br from-[#8A9FE7]/10 to-[#D4DDF8]/10 h-56 rounded-2xl mb-6 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500">
                <span className="font-medium text-gray-600">[ Exclusio ]</span>
              </div>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">Next js</span>
                  <span className="text-xs font-semibold text-yellow-600 bg-yellow-50 px-2.5 py-0.5 rounded-full">Python</span>
                </div>
                <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">Exclusio</h3>
                <p className="text-sm text-gray-500 font-medium">Role: Frontend Developer</p>
                <p className="text-gray-600 leading-relaxed text-sm">Developed a content-sharing platform with post/story creation, chat, and pay-to-unlock media. Implemented subscription features for exclusive content access. Integrated an ads system for campaign creation and dynamic display across the platform.</p>
              </div>
            </div>

            {/* Project 4: Uphony */}
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-white/20 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer">
              <div className="bg-gradient-to-br from-[#8A9FE7]/10 to-[#D4DDF8]/10 h-56 rounded-2xl mb-6 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500">
                <span className="font-medium text-gray-600">[ Uphony ]</span>
              </div>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">Next js</span>
                  <span className="text-xs font-semibold text-green-600 bg-green-50 px-2.5 py-0.5 rounded-full">Sails js</span>
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">ReactNative</span>
                </div>
                <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">Uphony</h3>
                <p className="text-sm text-gray-500 font-medium">Role: Backend & Frontend Developer</p>
                <p className="text-gray-600 leading-relaxed text-sm">Built a full-stack music streaming platform (web & app) with features like music upload/download, playlists, purchases, real-time chat, and social features. Integrated secure payment gateway and implemented real-time messaging.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-[#F8F9FA] relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight mb-2">Work Experience</h2>
            <p className="text-gray-600">My professional journey.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {/* Job 1 */}
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-sm hover:shadow-md transition-all cursor-pointer">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">Full-Stack Developer</h3>
                  <a href="https://www.logisticinfotech.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Logistic Infotech Pvt Ltd</a>
                  <p className="text-gray-500 text-sm mt-0.5">Rajkot, India</p>
                </div>
                <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">Current</span>
              </div>
              <p className="text-gray-600 mt-3 text-sm">Working as a Full-Stack Developer on MERN stack projects. Started with a 6-month internship and continued as a full-time engineer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight mb-2">Education</h2>
            <p className="text-gray-600">My academic background.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {/* Degree 1: MCA */}
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-sm hover:shadow-md transition-all cursor-pointer">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">Master of Computer Applications (MCA)</h3>
                  <p className="text-gray-600">Department of Computer Science, Saurashtra University, Rajkot</p>
                </div>
                <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">2021 - 2023</span>
              </div>
              <p className="text-gray-500 mt-2 text-sm">Focused on advanced computer science subjects and software development.</p>
              <p className="text-yellow-600 font-semibold text-sm mt-1 flex items-center space-x-1">
                <span>🏆</span>
                <span>Gold Medalist - University First Rank</span>
              </p>
            </div>

            {/* Degree 2: BCA */}
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-sm hover:shadow-md transition-all cursor-pointer">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">Bachelor of Computer Applications (BCA)</h3>
                  <p className="text-gray-600">Kanasagara College, Saurashtra University</p>
                </div>
                <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">2018 - 2021</span>
              </div>
              <p className="text-gray-500 mt-2 text-sm">Laid the foundation for software development and web technologies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F172A] text-white py-16 relative">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div>
            <div className="text-2xl font-bold tracking-tighter mb-2">MITAL.</div>
            <p className="text-gray-400 text-sm">© 2026 Mital Andipara. All rights reserved.</p>
          </div>
          <div className="flex space-x-8 text-sm text-gray-400">
            <a href="https://www.linkedin.com/in/mital-andipara-07877a236" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
          <button className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition-all hover:scale-105 shadow-md">
            Get in touch
          </button>
        </div>
      </footer>
    </div>
  );
}
