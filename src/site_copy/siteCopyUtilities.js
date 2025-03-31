import EventItem from "../generic_components/events/EventItem";

const buildEventItemsList = (eventsList) => {
    let listOfEventItems = []
    eventsList.forEach((pastEvent) => {
        listOfEventItems.push(
            <EventItem
                c2a={pastEvent.c2a}
                c2aLink={pastEvent.c2aLink}
                description={pastEvent.description}
                image={pastEvent.image}
                title={pastEvent.title}
            />
        )
    });

    return listOfEventItems;
}

export {
    buildEventItemsList,
}