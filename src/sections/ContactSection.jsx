const ContactSection = () => {
  return (
    <section id="contact" className=" py-20 bg-gray-50">
      <div className=" px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have questions about our
            menu or want to make a reservation, our team is here to help.
          </p>
        </div>

        <div className=" mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-amber-600 text-white p-12">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <i className="fas fa-map-marker-alt mt-1 mr-4"></i>
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-amber-100">
                      123 Daniel Street, Culinary District
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-phone-alt mt-1 mr-4"></i>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-amber-100">(+234) 9131276935</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-envelope mt-1 mr-4"></i>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-amber-100">emmydan68@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-clock mt-1 mr-4"></i>
                  <div>
                    <h4 className="font-semibold">Hours</h4>
                    <p className="text-amber-100">
                      Monday - Friday: 11am - 10pm
                      <br />
                      Saturday - Sunday: 10am - 11pm
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-amber-700 hover:bg-amber-800 flex items-center justify-center"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-amber-700 hover:bg-amber-800 flex items-center justify-center"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-amber-700 hover:bg-amber-800 flex items-center justify-center"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
            <div className="md:w-1/2 p-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Send a Message
              </h3>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-4 rounded-full transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
