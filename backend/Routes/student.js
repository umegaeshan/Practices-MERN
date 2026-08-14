const router = require('express').Router();
const Student = require('../Models/student.js');



router.route('/add').post((req,res)=>{
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const address = req.body.address;

    const newStudent = new Student({
        name,
        age,
        gender,
        address
    })

    newStudent.save().then(()=>
        {
            res.json('Student added!')
        }
    ).catch((err)=>
        {
            res.status(400).json({error: err.message})
        }
    )
})

router.route('/').get((req,res)=>{
    Students.find().then(Students=>{
        res.json(Students)
    }).
    catch((err)=>{
        res.status(400).json({error: err.message})
    })
})




module.exports = router;

