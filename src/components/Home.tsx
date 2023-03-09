import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="relative flex min-h-screen -top-10 flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center text-white">
        <h1 className="text-6xl font-bold">Bienvenue sur mon portfolio</h1>
        <p className="mt-3 text-2xl">
          Coder par{" "}
          <code className="rounded-md bg-gray-500 p-3 font-mono text-lg inline-flex">
            <Typewriter
              options={{
                strings: ["Thomas Minichetti", "un web développeur", "un étudiant"],
                autoStart: true,
                loop: true,
              }}
            />
          </code>
        </p>
      </main>
    </div>
  );
};
export default Home;
