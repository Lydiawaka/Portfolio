import React from 'react';
import image1 from '../../assets/image/background.jpeg';
import image2 from '../../assets/image/comp.jpg';
import image3 from '../../assets/image/poem.jpg';
import image4 from '../../assets/image/furniture.jpg';
import image5 from '../../assets/image/ecmmrce.jpg';
import image6 from '../../assets/image/blog.jpg';
import image7 from '../../assets/image/johns.jpg';
import image8 from '../../assets/image/emily.jpg';
import image9 from '../../assets/image/Anna.jpg';
import { FaQuoteLeft } from "react-icons/fa";

const Navigation = () => {

  const skills = [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JS' },
    { name: 'REACT' },
    { name: 'QUERY' },
    { name: 'GIT' },
    { name: 'NPM' },
    { name: 'MERN'}
  ];

  const Projects =[
    {
      id: 1,
      name: "FURNITURE",
      img: image4,
      link: 'https://furniture-rust-nine.vercel.app/',
      code: 'https://github.com/Lydiawaka/Furniture'
    },
    {
      id: 2,
      name: "ECOMMERCE",
      img: image5,
      code: 'https://github.com/Lydiawaka/Shop',
     
    },
    {
      id: 3,
      name: "STORIES",
      img: image3,
      link: 'https://poems-alpha.vercel.app/',
      code: 'https://github.com/Lydiawaka/poems'
    },
    {
      id: 4,
      name: "BLOG",
      img: image6,
      link: 'https://essie-blogs.vercel.app/',
      code: 'https://github.com/Lydiawaka/Essie-Blogs'
    }
  ]

  const testimonials = [
    {
      quote: "Collaborating with this developer was truly a delight. Their technical expertise and meticulous attention to detail brought our vision to life.",
      author: "Johnson J",
      image: image7,
    },
    {
      quote: "The MERN stack application he built for us has significantly improved our business operations.",
      author: "Anna Johns",
      image: image8
    },
    {
      quote: "Partnering with Lydia exceeded all expectations. Her skill and precision turned our concept into a seamless reality.",
      author: "Emily Joaquin",
      image: image9
    }
  ];
  return (
    <div className="min-h-screen bg-gray-300">
      <nav className="w-full p-6 flex justify-between items-center bg-transparent z-10 bg-gray-200">
        <div className="text-gray-800 text-xl font-bold">Lydia Waka</div>
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
          <p className="text-xl">My name is Lydia Waka. I'm a full stack developer.</p>
          <button className="mt-8 px-6 py-2 border border-white hover:bg-white hover:text-gray-900 transition-colors"
          onClick={() => window.open('https://www.fiverr.com/users/lydiawaka/seller_dashboard#!')} >
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
            {Projects.map((data) => (
              <div key={data.id} className="space-y-4">
                <img
                  src={data.img}
                  alt={`Project ${Projects}`}
                  className="w-full h-64 object-cover rounded-xl"
                />
                <h3 className="text-xl font-light"> {data.name}</h3>
                <p className="text-gray-500 text-sm">Logo / Webdesign / CMS</p>
                <button className="text-gray-900 bg-rose-400 border-yellow-400 hover:bg-yellow-400 rounded-md" onClick={() => window.open(data.code)}>View Code</button>
                <button className="text-gray-600 hover:text-gray-900 flex items-center" onClick={() => window.open(data.link)}>
                  VIEW CITE
                  <span className="ml-2">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-medium text-center mb-12">
        What clients say about working with me
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="p-6 rounded-lg border border-gray-200 flex flex-col"
          >
            {/* Quote Icon */}
            <div className="text-4xl font-serif mb-4">
              <FaQuoteLeft />
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-600 italic flex-grow mb-6">
              {testimonial.quote}
            </p>

            {/* Author Info */}
            <div className="flex items-center">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="font-medium text-gray-900">
                  {testimonial.author}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
    </div>
  )
};

export default Navigation;
