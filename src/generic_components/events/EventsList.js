const EventsList = ({ eventItems }) => {
    return (
        <div className='event-items-container'>
            {eventItems.map(event => event)}
        </div>
    );
}

export default EventsList;