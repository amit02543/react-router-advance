import { json, redirect, useRouteLoaderData } from "react-router-dom";

import EventItem from '../components/EventItem';


const EventDetailPage = () => {

    const data = useRouteLoaderData('event-detail');


    return (
        <EventItem event={data.event} />
    );
};

export default EventDetailPage;


export async function loader({ request, params }) {

    const eventId = params.eventId;

    const response = await fetch('http://localhost:8080/events/' + eventId);   

    if(!response.ok) {
        throw json({ message: 'Could not fetch details for selected event.'}, { status: 500 });
    } 

    return response;
};


export async function action({ request, params }) {

    const id = params.eventId;

    const response = await fetch('http://localhost:8080/events/' + id, {
        method: request.method
    });



    if(!response.ok) {
        throw json({ message: 'Could not delet event.'}, { status: 500 });
    } 


    return redirect('/events');
}