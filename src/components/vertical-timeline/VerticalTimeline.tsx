import { MdSchool, MdWork } from "react-icons/md";
import {
    VerticalTimeline as VTimeline,
    VerticalTimelineElement as VTimelineElement
} from "react-vertical-timeline-component";
import './style.scss';

const data = [
    {
        title: 'Alternance Master - Développeur Web',
        subtitle: 'Trendex',
        date: '2022 - Aujourd\'hui',
        icon: <MdWork />,
    },
    {
        title: 'Master Manager en architecture et applications logicielles des SI',
        subtitle: 'Nice, France',
        date: '2022 - Aujourd\'hui',
        icon: <MdSchool />,
    },
    {
        title: 'Alternance Bachelor - Développeur Web',
        subtitle: 'Trendex',
        date: '2021 - 2022',
        icon: <MdWork />,
    },
    {
        title: 'Bachelor Responsable en ingénierie des logiciels',
        subtitle: 'Nice, France',
        date: '2021 - 2022',
        icon: <MdSchool />,
    },
    {
        title: 'Stage - Développeur Web',
        subtitle: 'Arcadium',
        date: 'Février 2021 - Avril 2021',
        icon: <MdWork />,
    },
    {
        title: 'BTS Services informatiques aux organisations option B solutions logicielles et applications métiers',
        subtitle: 'Ajaccio, France',
        date: '2019 - 2021',
        icon: <MdSchool />,
    },
];

const VerticalTimeline = (): JSX.Element => {
    return (
        <VTimeline>
            {data.map((item) => {
                return (
                    <VTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ color: "#fff" }}
                        date={item.date}
                        iconStyle={{ color: "#fff" }}
                        icon={item.icon}
                    >
                        <h3 className="vertical-timeline-element-title">
                            {item.title}
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
                    </VTimelineElement>
                );
            })}
        </VTimeline >
    );
}

export default VerticalTimeline;