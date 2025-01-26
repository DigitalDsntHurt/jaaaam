const EventsList = ({ events }) => {
    return (
        <div className='event-items-container'>
            {events.map(event => event)}
        </div>
    );
}

export default EventsList;