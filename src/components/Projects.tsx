const Projects = () => {
  return (
    <section id="projects" className="relative bg-slate-700">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Projects</span>
            <span className="block text-slate-300">I've worked on</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-slate-300">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12 rounded-full"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium leading-6 text-white">
                <span className="block">Workflow</span>
              </h3>
              <p className="mt-1 text-base text-slate-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12 rounded-full"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium leading-6 text-white">
                <span className="block">Workflow</span>
              </h3>
              <p className="mt-1 text-base text-slate-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12 rounded-full"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium leading-6 text-white">
                <span className="block">Workflow</span>
              </h3>
              <p className="mt-1 text-base text-slate-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
