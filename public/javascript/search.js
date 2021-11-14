
async function searchByName(e) {
    e.preventDefault();

    const name = document.querySelector("#search-input").value.trim();
    console.log(name);

    if (name) {
        const response = await fetch(`/api/eventname/${name}`, {
            method: 'post'
        });
        if(response.ok) {
            console.log('success');
            document.location.replace(`/dashboard/${name}`)
        }else {
            alert(response.statusText);
        }
        
    }





}

document.querySelector('#search-form').addEventListener('submit', searchByName);