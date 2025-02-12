import Bio from "../content_components/Bio";
import Events from "../generic_components/events/Events";
import Footer from "../content_components/Footer";
import Students from "../content_components/Students";

const UpcomingEvents = () => {
    return (
        <>
            <Events />
            <Bio />
            <Students theme='light' />
            <Footer theme='dark' />
        </>
    );
}

export default UpcomingEvents;