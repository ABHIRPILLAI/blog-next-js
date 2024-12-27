export default function Contact()
{
    return(
        <>
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Contact Us</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
             {` We'd love to hear from you!`}
            </p>
          </div>
          <form className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input id="name" name="name" type="text" required
                  className="appearance-none rounded-t-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#FF4F5A] focus:border-[#FF4F5A] focus:z-10 sm:text-sm"
                  placeholder="Full Name"/>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input id="email" name="email" type="email" required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#FF4F5A] focus:border-[#FF4F5A] focus:z-10 sm:text-sm"
                  placeholder="Email address"/>
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Phone Number</label>
                <input id="phone" name="phone" type="tel" required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#FF4F5A] focus:border-[#FF4F5A] focus:z-10 sm:text-sm"
                  placeholder="Phone Number" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
      id="message"
      name="message"
      rows={4} // Use a number instead of a string
      required
      className="appearance-none rounded-b-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#FF4F5A] focus:border-[#FF4F5A] focus:z-10 sm:text-sm"
      placeholder="Your message"
    ></textarea>
    
              </div>
            </div>
            <div>
              <button type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#FF4F5A] hover:bg-[#e6444e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF4F5A]">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div></>
      );
}