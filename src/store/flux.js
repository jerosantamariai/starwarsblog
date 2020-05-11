const getState = ({getStore, getActions, setStore}) => {
    return {
        store: {
            people: null,
            planets: null,
            vehicles: null,
            films: null,
        },
        actions: {
            getPeople: url => {
                fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
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
            // getPeople: async url => {
            //     console.log(url)
            //     try {
            //         const all = await fetch(url, {
            //             method: "GET",
            //             headers: { "Content-Type": "application/json" }
            //         })
            //         console.log(all)
            //         const data = await all.json()
            //         console.log(all)
            //         setStore({
            //             people:data
            //         })
            //     }
            //     catch (error) {
            //         console.log(error)
            //     }
            // },
            getPlanets: url => {
                fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
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
                        'Content-Type': 'application/json'
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
            },
            getFilms: url => {
                fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            films: data
                        });
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            getSpecies: url => {
                fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            species: data
                        });
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
        }
    }
}

export default getState;