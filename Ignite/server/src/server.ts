import express from 'express'

const app = express()

app.get('/ads', (resquest, response) => {
    return response.json([
        {id: 1, name: 'Anuncio 1' },
        {id: 2, name: 'Anuncio 2' },
        {id: 3, name: 'Anuncio 3' },
    ])
})

app.listen(3333)