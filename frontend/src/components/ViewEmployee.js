import React, {useState,useEffect,Fragment,useRef} from 'react';
import axios from 'axios';
import EmployeeHeader from './EmployeeHeader';
import ViewEmployeeTable from './ViewEmployeeTable';
import EditEmployee from './EditEmployee';
import { useReactToPrint } from "react-to-print";
import {FiPrinter} from 'react-icons/fi';

export default function ViewEmployees(){

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const [employees,setEmployees] = useState([]);
    const [q, setQ] = useState("");

    useEffect(() =>{

        function getEmployees() {
            axios.get("http://localhost:5000/employee/view").then((res) => {

                setEmployees(res.data);
            }).catch((err) => {

                alert(err.message);
            })
        }

        getEmployees();

    }, [])

    const [editFormData, setEditFormData] = useState({
          name:"",
          gender:"",
          address:"",
          birthday:"",
          department:"",
          email:"",
          phonenumber:"",
          emergencyname:"",
          emergencynumber:"",
    })


    const handleEditFormChange = (e) => {
        e.preventDefault();

        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;

        const newFormData = {...editFormData};
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    }


    function updateData(e){
        e.preventDefault();
        
        const updateEmployee ={
            id: editEmployee,
            address: editFormData.address,
            department: editFormData.department,
            phonenumber: editFormData.phonenumber,
            emergencynumber: editFormData.emergencynumber,
            
        }

        axios.put("http://localhost:5000/employee/update/:id",updateEmployee).then(() =>{
            alert("Employee updated");
            window.location.reload();
        }).catch((err) =>{
            alert(err)
        })


    }


    const [editEmployee,setEditEmployee] = useState(null);

    const handleEditClick = (e, employee)=> {
        e.preventDefault();
        setEditEmployee(employee._id)

        const formValues = {
          name:employee.name,
          gender:employee.gender,
          address:employee.address,
          birthday:employee.birthday,
          department:employee.department,
          email:employee.email,
          phonenumber:employee.phonenumber,
          emergencyname:employee.emergencyname,
          emergencynumber:employee.emergencynumber,
        }

        setEditFormData(formValues);
    }

    const handleCancelClick = () => {
        setEditEmployee(null);
    }


   const handleDeleteClick = (id) => {
       
    axios.delete('http://localhost:5000/employee/delete/'+id).then(() =>{
        window.location.reload();
    }).catch((err) =>{
        alert(err)
    })
  
}

       
//crerate contribution and add the values in that 
    return(
        <>
            <EmployeeHeader/>
            <div className="container">
           
        
           <input type="text" placeholder="Search..." value={q} onChange={(e)=> setQ(e.target.value)}/>

           <div ref={componentRef}>
           <form onSubmit={updateData}>
               <table className='table'>
                   <thead>
                       <tr>
                             <th>ID</th>
                             <th>Name</th>
                             <th>Gender</th>
                             <th>Address</th>
                             <th>Birthday</th>
                             <th>Department</th>
                             <th>Email</th>
                             <th>Contact Number</th>
                             <th>Emergency Name</th>
                             <th>Emergency Number</th>
                             <th>Salary</th>
                             <th>Allowance</th>
                             <th>Actions</th>
                       </tr>
                   </thead>

                   <tbody>
                       {employees.filter((employee)=> {
                           if(q == ""){
                               return employee
                           }else if(employee.name.toLowerCase().includes(q.toLowerCase())) {
                               return employee
                           }
                       }).map((employee)=> (
                           <Fragment>

                               {editEmployee === employee._id ? (
                                   <EditEmployee 
                                       editFormData={editFormData} 
                                       handleEditFormChange={handleEditFormChange}
                                       handleCancelClick={handleCancelClick}
                                   />
                                ) : (
                                   <ViewEmployeeTable 
                                       employee={employee}
                                       handleEditClick={handleEditClick}
                                       handleDeleteClick={handleDeleteClick}
                                   />
                                )}
                                
                           </Fragment>
                           
                       ))}
                   </tbody>

               </table>
           </form>
           </div>
           
           <button onClick={handlePrint} className="print__button btn btn2"><FiPrinter/> Print </button>
       </div>
        </>
    );
}