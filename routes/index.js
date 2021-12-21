const router = require('express').Router();

router.get('/', (req, res) => {
    res.sendFile('index.html', {root: '.'})
})

router.get('/sobre', (req, res) => {
    res.sendFile('pages/sobre.html', {root: '.'})
})

router.get('/contato', (req, res) => {
    res.sendFile('pages/contact.html', {root: '.'})
})

router.get('/planos', (req, res) => {
    res.sendFile('pages/planos.html', {root: '.'})
})

router.get('/professora', (req, res) => {
    res.sendFile('pages/teacher.html', {root: '.'})
})



module.exports = router;