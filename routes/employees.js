const express = require('express');
const router = express.Router();
let employeeModel = require('../model/employeeModel')

router.post('/save', (req, res, next) => {
  let newEmployee = new employeeModel({
    name: req.body.name,
    employeeId: req.body.employeeId,
    dob: req.body.dob,
    createdTimestamp: Date.now(),
    updatedTimestamp: Date.now()
  })
  newEmployee.save().then(empData => {
    res.status(200).json(empData)
  })
})

/* GET all employees listed. */
router.get('/all', (req, res, next) => {
  employeeModel.find().then((empsData) => {
     let emp = empsData.map((empData, index)=>{
      if(index > 0 && index < 3){
        empData['reportingEmployee'] = empsData[index - 1].name;
      } else if(index >= 3){
        empData['reportingEmployee'] = empsData[2].name;
      }
      return empData;
    })
    console.log(emp)
    res.status(200).json(emp)
  })
});


router.delete('/delete/:id', (req, res, next) => {
  employeeModel.findOneAndRemove({employeeId:req.params.id}).then((empData) => {
    res.status(200).json(empData)
  })
})

module.exports = router;
