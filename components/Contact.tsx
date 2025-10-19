import React from 'react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // A real app would handle form submission here (e.g., send to an API endpoint)
    alert('Thank you for your message!');
  };

  return (
    <section id="contact" className="py-16 sm:py-24">
      <h2
        className="text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 animate-fade-in-up"
        style={{ animationDelay: '1.0s', opacity: 0 }}
      >
        Get In Touch
      </h2>

      <div 
        className="max-w-xl mx-auto animate-fade-in-up"
        style={{ animationDelay: '1.2s', opacity: 0 }}
      >
        <form 
          onSubmit={handleSubmit} 
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-gray-400 text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-slate-800/60 border border-white/10 rounded-lg py-3 px-4 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-400 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-slate-800/60 border border-white/10 rounded-lg py-3 px-4 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-400 text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full bg-slate-800/60 border border-white/10 rounded-lg py-3 px-4 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              placeholder="Let's build something amazing together!"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="py-3 px-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-pink-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
