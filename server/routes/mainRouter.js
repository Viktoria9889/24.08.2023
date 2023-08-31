const express = require('express')
const router = express.Router()

let namesData = [
    { id: 1, name: 'Андрій', img: '/img/img.jpg' },
    { id: 2, name: 'Михайло', img: '/img/img.jpg' },
    { id: 3, name: 'Олександр', img: '/img/img.jpg' },
    { id: 4, name: 'Вікторія', img: '/img/img.jpg' },
    { id: 5, name: 'Віталік', img: '/img/img.jpg' },
    { id: 6, name: 'Жук Алекс', img: '/img/img.jpg' },
    { id: 7, name: 'Володимир', img: '/img/img.jpg' },
    { id: 8, name: 'Володимир', img: '/img/img.jpg' },
  ]

router.get('/students', (req,res) =>{
    res.json(namesData)
})

module.exports = router;