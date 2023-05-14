import React,{useState} from "react"
import axios from "axios";
import EmployeeHeader from "./EmployeeHeader";


export default function AddEmployee(){

    
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [birthday, setBirthday] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [emergencyname,setEmergencyname]=useState("");
  const [emergencynumber,setEmergencynumber]=useState("");
  const [EmpSalary,setEmpSalary]=useState("");


  function sendData(e){
      e.preventDefault();

      const newEmployee={

          name,
          gender,
          address,
          birthday,
          department,
          email,
          phonenumber,
          emergencyname,
          emergencynumber,
          EmpSalary

}
axios.post("http://localhost:5000/employee/add/",newEmployee).then(()=>{
  alert("Employee Added")
  window.location.reload();
 
}).catch((err)=>{
  alert(err)
})
}


return(
      <>
          <EmployeeHeader/>
      <div className="container">
      <form onSubmit={sendData}>
           <legend>Add Employee Details</legend>
      <div className="mb-3">
        <label for="exampleInputName" className="form-label">Name</label>
        <input type="text" className="form-control" id="exampleInputName" aria-describedby="NameHelp" 
        onChange={(e)=>{

            setName(e.target.value);
        }} />

       </div>

       <div className="mb-3">
        <label for="exampleInputGender" className="form-label">Gender</label>
        <select name="category" className="form-select" id="categorySelect"
          onChange={(e)=>{

            setGender(e.target.value);
          }}                   >
                            <option>Choose...</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
       </div>

       <div className="mb-3">
        <label for="exampleInputAddress" className="form-label">Address</label>
        <input type="text" className="form-control" id="exampleInputAddress" aria-describedby="AddressHelp"
          onChange={(e)=>{

              setAddress(e.target.value);
          }} />
       </div>

       <div className="mb-3">
        <label for="exampleInputBirthday" className="form-label">Birthday</label>
        <input type="Date" className="form-control" id="exampleInputBirthday" aria-describedby="BirthdayHelp"
          onChange={(e)=>{

              setBirthday(e.target.value);
          }} />
       </div>

       <div className="mb-3">
        <label for="exampleInputDepartment" className="form-label">Department</label>
        <input type="text" className="form-control" id="exampleInputDepartment" aria-describedby="DepartmentHelp"
          onChange={(e)=>{

              setDepartment(e.target.value);
          }} />
       </div>

       <div className="mb-3">
        <label for="exampleInputEmail" className="form-label">Email</label>
        <input type="text" className="form-control" id="exampleInputEmail" aria-describedby="EmailHelp"
          onChange={(e)=>{

              setEmail(e.target.value);
          }} />
       </div>

       <div className="mb-3">
        <label for="exampleInputPhonenumber" className="form-label">Contact Number</label>
        <input type="var" className="form-control" id="exampleInputPhonenumber" aria-describedby="PhonenumberHelp" pattern="[0]{1}[0-9]{9}"
          onChange={(e)=>{

              setPhonenumber(e.target.value);
          }} />
       </div>

       <div className="mb-3">
        <label for="exampleInputEmergencyname" className="form-label">Emergency Name</label>
        <input type="text" className="form-control" id="exampleInputEmergencyname" aria-describedby="EmergencynameHelp"
          onChange={(e)=>{

              setEmergencyname(e.target.value);
          }} />
       </div>

       
       <div className="mb-3">
        <label for="exampleInputEmergencynumber" className="form-label">Emergency Number</label>
        <input type="var" className="form-control" id="exampleInputEmergencynumber" aria-describedby="EmergencynumberHelp"
          onChange={(e)=>{

              setEmergencynumber(e.target.value);
          }} />
       </div>

       <div className="mb-3">
        <label for="exampleInputEmpSalary" className="form-label">Employee Salary</label>
        <input type="text" className="form-control" id="exampleInputEmpsalary" aria-describedby="EmpSalaryHelp"
          onChange={(e)=>{

              setEmpSalary(e.target.value);
          }} />
       </div>

     
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
      </>


  )
}