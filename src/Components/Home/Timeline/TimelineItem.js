import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const TimelineItem = ({ active, title, date, content }) => {
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element-work"
            contentStyle={active ? { background: '#08315b', color: '#FFFF' } : { background: '#DFE3E9', color: '#717274' }}
            contentArrowStyle={active ? { borderRight: '7px solid  #08315b' } : { borderRight: '7px solid #DFE3E9' }}
            date={date}
            iconStyle={{ background: '#08315b', color: '#fff' }}
        // icon={<WorkIcon />}
        >
            <h3 className="vertical-timeline-element-title">{title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{date}</h4>
            <p>{content}</p>
        </VerticalTimelineElement>
    );
}

export default TimelineItem;