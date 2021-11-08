//async function for login in

//TODO add classes to html forms for signup and login to capture data below

async function loginHandler(e){
    e.preventDefault();

    const email
    const password
    

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {'Content-Type' : 'application/json'}
        });
        if(response.ok){
            // /dashboard is a place holder until template is build out
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

// TODO: add selector for login form add event listener to implemenent function