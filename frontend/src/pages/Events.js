import { Link } from "react-router-dom";


const DUMMY_EVENTS = [
    { id: 'e1', title: 'Event 1' },
    { id: 'e2', title: 'Event 2' },
    { id: 'e3', title: 'Event 3' }
]


const EventsPage = () => {
    return (
        <>
            <h1>Events Page</h1>
            <ul>
                { DUMMY_EVENTS.map(evt => <li key={evt.id}><Link to={evt.id}>{evt.title}</Link></li>)}
            </ul>
        </>
    );
};

export default EventsPage;