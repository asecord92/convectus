// function to edit event details

async function editEvent(e) {
    e.preventDefault();

    const name
    const description
    const date
    const location
    const id

    const response = await fetch(`/api/events/${id}`, {
        method: 'put',
        body: JSON.stringify({
            name,
            description,
            date,
            location
        }),
        headers: {
            'Content-type': 'application/json'
        }
    });

    if(response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
}

// TODO: add selector for edit form add event listener to implemenent function