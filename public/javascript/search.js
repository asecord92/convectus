
async function searchByName(e) {
    e.preventDefault();

    const name = document.querySelector("#search-input").value.trim();
    console.log(name);

    if (name) {
        const response = await fetch(`/api/eventname/${name}`, {
            method: 'post'
        });
        console.log(response);
        
    }





}

document.querySelector('#search-form').addEventListener('submit', searchByName);