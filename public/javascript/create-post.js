// function for new event

async function createNewPost(e) {
    e.preventDefault();

    const name
    const description
    const date
    const location

    const response = await fetch('/api/events', {
        method: 'post',
        body: JSON.stringify({
            name,
            description,
            date,
            location
        }),
        headers: {
            'Content-Type' : 'application/json'
        }
    });

    if(response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}
// TODO: add selector for create event form add event listener to implemenent function