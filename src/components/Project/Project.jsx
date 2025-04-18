const Project = () => {
  return (
    <div className="bg-white py-10 rounded-2xl w-full flex items-center justify-center">
      <div className="max-w-7xl  bg-blue-400 p-10 rounded-3xl mx-auto w-full flex flex-col items-center justify-center">
        <div className="flex items-center justify-between gap-10  ">
          <div>
          <div className="text-center">
            <h1 className="text-2xl font-bold">Do you want to start a project?</h1>
            <p className="text-gray-700 py-2
            "> <span className="text-nowrap">
              drop us a line for your project thoroug or for sharing the news </span> <br /> about your compnay . yes we check the mail frequently !</p>
            <hr className="my-4 border-gray-300 w-1/2 mx-auto" />
          </div>
          <div className="flex justify-center gap-3">
            <div className="bg-white shadow-lg rounded-lg p-4 text-center">
              <h2 className="text-xl font-bold">10+</h2>
              <p className="text-gray-600 mt-2"> Years of Experience</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4 text-center">
              <h2 className="text-xl font-bold">100+ </h2>
              <p className="text-gray-600 mt-2">in House employess</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4 text-center">
              <h2 className="text-xl font-bold">100+</h2>
              <p className="text-gray-600 mt-2">successfully deliver .</p>
            </div>
          </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mt-6">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your message"
                  rows="4"
                ></textarea>
              </div>
              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  id="agreement"
                  className="mr-2"
                />
                <label htmlFor="agreement" className="text-gray-700">I agree to the terms and conditions</label>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;