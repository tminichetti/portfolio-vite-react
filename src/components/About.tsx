import "react-vertical-timeline-component/style.min.css";
import "../styles/style.scss";
import VerticalTimeline from "./vertical-timeline/VerticalTimeline";

const About = () => {
  return (
    <section className="bg-slate-700 pb-10">
      <span id="about" className="anchor"></span>
      <div className="outer dark mx-auto ">
        <div className="dot red" />
        <div className="dot amber" />
        <div className="dot green" />
        <div className="mt-4 rounded bg-gray-600 p-5 text-white">
          <h1 className="mb-8 text-6xl font-bold">A propos</h1>
          <p className="mt-3 text-2xl">
            Je suis un étudiant en informatique, passionné par le développement
            web.
            <br />
            L'informatique a toujours été ma passion, me permettant de résoudre
            des problèmes complexes et de travailler en équipe. Le développement
            web me permet de créer des sites web et des applications qui
            améliorent la vie des gens. J'apprécie également la nature évolutive
            de l'informatique, où il y a toujours de nouvelles technologies à
            apprendre. En somme, l'informatique est au cœur de ma vie
            personnelle et professionnelle.
          </p>
        </div>
      </div>

      <div className="mt-10 text-black">
        <VerticalTimeline />
      </div>
    </section>
  );
};

export default About;
