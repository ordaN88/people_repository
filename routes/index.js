var express = require('express');
var router = express.Router();
let people = require('../people-data');
/* GET home page. */
router
.get 
  ('/people', (req, res) => {
  
  res.send({
    message: 'people se pepel',
    items: people,
     //   message1: "so ima kao si mi",
    
     //  boolian: true,
     //  marka: "bembara",
    //  stan: "centar"
  })
})


.get('/people/:area', (req, res) => {
   let message = ` ima vakav area #${req.params.area}`
    const person = people.find(person => {
      return person.area == req.params.area
    })
    if(!person){
       message= `nema vakava area #${req.params.area}`
     }
    res.send({
      message: `Ima vakava area #${req.params.area}`,
      item: person
  })
  
})
.post('/people', (req, res )=>{
    const person = {
      mark:people.length + 2,
      address: req.body.address,
      area:req.body.area,
      owner:req.body.owner
    }
    people.push(person)
    res.send({
      message: "noviot covek dodaden popladnevo",
      items: people
    })
  })
.delete('/people/:area',(req, res)=>{

  const filterPerson = people.filter(person =>{
    return person.area != req.params.area
  })
  people = filterPerson
  res.send({
    message:`Gospodinot e izbrishan #${req.params.area}`,
    items: filterPerson
  })
})
module.exports = router;
