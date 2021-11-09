//async function for sign up

//TODO add classes to html forms for signup and login to capture data below

async function signupHandler(e){
    e.preventDefault();

    const username 
    const email
    const password
    const first_name
    const last_name

    if(username && email && password && first_name && last_name) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password,
                first_name,
                last_name
            }),
            headers: {'Content-Type' : 'application/json'}
        });
        if(response.ok){
            console.log('success');

        }else {
            alert(response.statusText);
        }
    }
};

// TODO: add selector for signup form add event listener to implemenent function