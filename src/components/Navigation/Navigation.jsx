import React from 'react';
import image1 from '../../assets/image/background.jpeg';
import image2 from '../../assets/image/comp.jpg';


const Navigation = () => {

  const skills = [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JS' },
    { name: 'REACT' },
    { name: 'QUERY' },
    { name: 'GIT' },
    { name: 'NPM' }
  ];

  return (
    <div className="min-h-screen bg-gray-300">
      <nav className="w-full p-6 flex justify-between items-center bg-transparent z-10 bg-gray-200">
        <div className="text-gray-800 text-xl font-bold">Ms.Nduati</div>
        <div className="flex space-x-6 font-serif">
          <a href="#" className="text-gray-800 hover:text-gray-600">HOME</a>
          <a href="#about" className="text-gray-800 hover:text-gray-600">ABOUT</a>
          <a href="#work" className="text-gray-800 hover:text-gray-600">WORK</a>
          <a href="#contact" className="text-gray-800 hover:text-gray-600">CONTACT</a>
        </div>
        <div>
          {/* socials     */}
        </div>
      </nav>

      {/* Hero Section */}

      <section className="relative h-96 flex items-center justify-center bg-gray-100 ">
        <div className="absolute inset-0">
          <img 
            src={image1}
            alt=""
            className="w-full h-full object-cover filter grayscale"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative text-center text-white z-0">
          <h1 className="text-6xl font-light mb-4">
            Hello, I'm a web Developer.
          </h1>
          <p className="text-xl">My name is Ms.Nduati. I'm a full stack developer.</p>
          <button className="mt-8 px-6 py-2 border border-white hover:bg-white hover:text-gray-900 transition-colors">
            Hire Me
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-10 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-light mb-8 flex items-center">
            <span className="w-8 h-px bg-gray-400 mr-4"></span>
            ABOUT ME
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
              Skilled web developer with 2 years of experience in React, HTML, and JavaScript. Proven track record of delivering high-quality results on time and within budget. Collaborative approach ensures projects meet client requirements and exceed expectations. Let's work together to create stunning websites and web applications that drive your business forward.
              </p>
              <button className="text-gray-600 hover:text-gray-900 flex items-center">
                READ MORE
                <span className="ml-2">→</span>
              </button>
            </div>
            <div>
              <img
                src={image2}
                alt=""
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* skills section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-2xl font-light mb-8">Skills</h3>
          <div className="flex justify-center mb-12">
          <div className="w-8 h-px bg-gray-300 my-auto mx-2"></div>
          <span className="text-rose-400">♥</span>
          <div className="w-8 h-px bg-gray-300 my-auto mx-2"></div>
        </div>
        {/* Skills grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="w-20 h-20 rounded-full bg-rose-400 flex items-center justify-center transition-transform hover:scale-110"
            >
              <span className="text-white font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
        </div>
      </section>


      {/* Quote Section */}
      <section className="py-20 bg-gray-200">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-2xl font-light mb-8">QUOTE OF THE DAY</h3>
          <blockquote className="text-gray-600 italic">
            "Being good in business is the most fascinating kind of art. Making money is
            art and working is art and good business is the best art."
          </blockquote>
          <p className="mt-4 text-gray-500">- Andy Warhol</p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-20 px-10 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-light mb-12 flex items-center">
            <span className="w-8 h-px bg-gray-400 mr-4"></span>
            MY RECENT PROJECTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="space-y-4">
                <img
                  src={`/api/placeholder/600/400`}
                  alt={`Project ${project}`}
                  className="w-full h-64 object-cover"
                />
                <h3 className="text-xl font-light">NAME OF THE PROJECT {project}</h3>
                <p className="text-gray-500 text-sm">Logo / Webdesign / CMS</p>
                <button className="text-gray-600 hover:text-gray-900 flex items-center">
                  VIEW MORE
                  <span className="ml-2">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
};

export default Navigation;
