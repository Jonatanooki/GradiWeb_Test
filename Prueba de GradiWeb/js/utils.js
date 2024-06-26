const consumeAPI = url => {
    return new Proxy({}, {
        get: (target, prop) => {
            return async(id) => {
                const res = await fetch(`${url}/${prop}/${id}`)
                if(res.ok) return res.json()
                return Promise.reject({error: 'Algo salio mal'})
            }
        }
    })
}