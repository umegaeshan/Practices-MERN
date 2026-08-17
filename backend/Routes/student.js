const router = require('express').Router();
const StudentModel = require('../Models/student.js');



router.route('/add').post((req,res)=>{
    const {name,age,gender,address} = req.body;
    
    const newStudent = new StudentModel({
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
    StudentModel.find().then(StudentsData=>{
        res.json(StudentsData)
    }).
    catch((err)=>{
        res.status(400).json({error: err.message})
    })
})

router.route('/update/:id').put(async(req,res)=>{

    let userId = req.params.id;

    const {name, age, gender, address} = req.body;

    const updateStudent = {
        name,
        age,
        gender,
        address
    }

    const update = await StudentModel.findByIdAndUpdate(userId , updateStudent) 
        .then(()=>{
            res.status(200).send({status: "User updated"})
        }).catch((err)=>{
            console.log(err);
            res.status(500).send({status: "Error with updating data", error: err.message})
        })
})

router.route('/delete/:id').delete(async(req,res)=>{

    let userId = req.params.id;

    await StudentModel.findByIdAndDelete(userId)
    .then(()=>{
        res.status(200).send({status: "User deleted"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message})
    })
})

router.route('/get/:id').get(async(req,res)=>{
    let userId = req.params.id;

    const user = await StudentModel.findById(userId)
    .then(student=>{
        res.status(200).send({status: "User fetched", student})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message})
    })
})



module.exports = router;

