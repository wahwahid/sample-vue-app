import { HTTP } from './http'

const Contact = {
    list () {
        return HTTP.get('/')
    },

    detail (id) {
        return HTTP.get(`/${id}`)
    },

    create (contact) {
        return HTTP.post('/', contact)
    },

    update (contact, id) {
        return HTTP.put(`/${id}`, contact)
    },

    delete (id) {
        return HTTP.delete(`/${id}`)
    }
}

export { Contact }
