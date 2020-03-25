const getState = ({getStore, getActions, setStore}) => {
    return {
        store: {
            films: null
        },
        actions: {
            setName: e => {
                setStore({
                    name: e.target.value
                })
            },
            getFilms: url => {
                fetch(url, {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json'
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
            }
        }
    }
}

export default getState;