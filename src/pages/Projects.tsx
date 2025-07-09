const Projects = () => {
  return (
    <div className="px-10">
      <div className="md:flex justify-between items-center pt-20">
        <div className="text-2xl font-bold">Projects</div>
        <div className="text-sm text-gray-500">
          Here are some of my projects that I have worked on.
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div>
          <div className=" p-5 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">
              Event Management System
            </h3>
            <p className="text-gray-500 mb-4">
              A web application for managing events, including registration,
              scheduling, and attendee management.
            </p>
            <a href="#" className="text-[#B292FF] hover:underline">
              View Project
            </a>
          </div>
        </div>
        <div>
          <div className=" p-5 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">
              Corona Statistics Dashboard
            </h3>
            <p className="text-gray-500 mb-4">
              A dashboard that provides real-time statistics and information
              about the COVID-19 pandemic, including case numbers, recovery
              rates.
            </p>
            <a href="#" className="text-[#B292FF] hover:underline">
              View Project
            </a>
          </div>
        </div>
        <div>
          <div className=" p-5 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Igris bot</h3>
            <p className="text-gray-500 mb-4">
              A Discord bot that provides various functionalities such as
              moderation, music playback, and custom commands for server
              management.
            </p>
            <a href="#" className="text-[#B292FF] hover:underline">
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
