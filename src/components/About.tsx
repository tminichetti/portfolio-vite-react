import "../styles/style.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork, MdSchool } from "react-icons/md";

const About = () => {
  return (
    <section id="about" className="bg-slate-700 pb-10">
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
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(0 120 128)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(0 120 128)" }}
            date="2022 - Aujourd'hui"
            iconStyle={{ background: "rgb(0 120 128)", color: "#fff" }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title">
              Alternance Master - Développeur Web
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Trendex</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(0, 173, 181)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(0, 173, 181)" }}
            date="2022 - Aujourd'hui"
            iconStyle={{ background: "rgb(0, 173, 181)", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Master Manager en architecture et applications logicielles des SI
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Nice, France</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(0 120 128)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(0 120 128)" }}
            date="2021 - 2022"
            iconStyle={{ background: "rgb(0 120 128)", color: "#fff" }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title">
              Alternance Bachelor - Développeur Web
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Trendex</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education text-white"
            contentStyle={{ background: "rgb(0, 173, 181)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(0, 173, 181)" }}
            date="2021 - 2022"
            iconStyle={{ background: "rgb(0, 173, 181)", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor Responsable en ingénierie des logiciels
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Nice, France</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(0 120 128)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(0 120 128)" }}
            date="Février 2021 - Avril 2021"
            iconStyle={{ background: "rgb(0 120 128)", color: "#fff" }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title">
              Stage - Développeur Web
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Arcadium</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(0, 173, 181)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(0, 173, 181)" }}
            date="2019 - 2021"
            iconStyle={{ background: "rgb(0, 173, 181)", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              BTS Services informatiques aux organisations option B solutions
              logicielles et applications métiers
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Ajaccio, France
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default About;
