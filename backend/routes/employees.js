//import router
const router = require("express").Router();

//import employees model
let employee =require("../models/employee");


router.route("/add").post(async(req,res)=>{

    

    
    const empID = req.body;
    const name = req.body.name;
    const birthday=Date(req.body.birthday);
    const gender=req.body.gender;
    const address=req.body.address;
    const phonenumber=Number(req.body.phonenumber);
    const email=req.body.email;
    const emergencyname=req.body.emergencyname;
    const emergencynumber=Number(req.body.emergencynumber);
    const department=req.body.department;
    const EmpSalary=req.body.EmpSalary;
   

    const newemployee= new employee({ 
        empID,
        name,
        birthday,
        gender,
        address,
        phonenumber,
        email,
        emergencyname,
        emergencynumber,
        department,
        EmpSalary
      


    })

    const totalNumberOfEmpInDb = await employee.countDocuments()
// convert number to string, so we can concatenate 0s easily...
    let numberToString = totalNumberOfEmpInDb.toString()

    // If length of number string is less than 5 then add leading 0s in nuberToString
    if(numberToString.length < 5){
        for (let i = numberToString.length; i < 5; i++){
            numberToString = '0' + numberToString
        }
    }
    newemployee.empID = `EMP${numberToString}`

    newemployee.save().then(()=>{
      res.json("employees added")
    }).catch((err)=>{
        console.log(err);
    }) 

})

router.route("/view").get((req,res)=>{

    employee.find().then((employees)=>{
        res.json(employees)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async(req,res)=>{
    let employeeid = req.body.id;
    const {address} = req.body;
    const {phonenumber} = req.body;
    const {department} = req.body;
    const {emergencynumber} = req.body;
   

    const Update = {
        address,
        phonenumber,
        department,
        emergencynumber,
   
    }

    const update = await employee.findByIdAndUpdate(employeeid, Update).then(()=>{
        res.status(200).send({status: "employees updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating employee", error: err.message});
    })
})


router.route("/delete/:id").delete(async(req,res)=>{
    var employeeid = req.params.id;

    await employee.findByIdAndRemove(employeeid).exec().then(()=>{
        res.status(200).send({status: "employee deleted"})
        
    }).catch((err)=>{
        res.status(500).send({status: "Error with deleting employee", error: err.message});
    })
})

module.exports = router;

