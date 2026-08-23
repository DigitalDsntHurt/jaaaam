import './EventItem.scss';

const EventItem = ({
    c2a,
    c2aLink,
    description,
    id,
    image,
    title,
}) => {
    const containerClassName = `event-item-container light-theme${!image ? ' event-item-no-image' : ''}`;

    return (
        <div className={containerClassName} id={id}>
            {
                image &&
                <div className="event-item-image-container">
                    <img
                        alt='sisyphy squat'
                        className="event-item-image"
                        src={image}
                    />
                </div>
            }
            <div className="event-item-text-container">
                <div className="event-item-title">{title}</div>
                <div className="event-item-description">{description}</div>
                {
                    c2a &&
                    <a href={c2aLink} target='_blank' rel='noreferrer'><div className="event-item-c2a">{c2a}</div></a>
                }
            </div>
        </div>
    );
}

export default EventItem;