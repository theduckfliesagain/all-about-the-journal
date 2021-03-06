
const hostURL = "https://all-about-the-journal.herokuapp.com/" 

async function get(route) {
    let response = await fetch(hostURL + route)
    response = await response.json();
    return response;
}

async function create(data) {
    const body = {
        "date": data.date,
        "message": data.message,
        "gif": data.gif,
    };

    const postRoute = "entries/";

    const options = {
        method: "POST",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }

    let response = await fetch(hostURL + postRoute, options)
    response = await response.json();
    return response;
}

async function add(id, data, route) {

    const patchRoute = `entries/${id}/${route}`;
    const options = {
        method: "PATCH",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    let response = await fetch(hostURL + patchRoute, options)
    response = await response.json();
    return response;
}

module.exports = {get, add, create};

