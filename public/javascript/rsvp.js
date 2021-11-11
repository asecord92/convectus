async function rsvp(e) {
    e.preventDefault();

    const response = await fetch(`api/rsvps/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
}
    );

    if (response.ok) {
        window.location.href = `/events/${id}`;
    } else {
        alert('RSVP failed');
    }
}

async function deleteRsvp(e) {
    e.preventDefault();

    const response = await fetch(`api/rsvps/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    if (response.ok) {
        window.location.href = `/events/${id}`;
    } else {
        alert('RSVP cancel failed');
    }
}

document.querySelector('#rsvp-button').addEventListener('click', rsvp);
document.querySelector('#cancel-rsvp-button').addEventListener('click', deleteRsvp);