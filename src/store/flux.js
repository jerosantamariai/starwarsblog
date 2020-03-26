const getState = ({getStore, getActions, setStore}) => {
    return {
        store: {
            people: null,
            planets: null,
            vehicles: null,
        },
        actions: {
            getPeople: url => {
                fetch(url, {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            people: data
                        });
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            getPlanets: url => {
                fetch(url, {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            planets: data
                        });
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            getVehicles: url => {
                fetch(url, {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            vehicles: data
                        });
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        }
    }
}

export default getState;