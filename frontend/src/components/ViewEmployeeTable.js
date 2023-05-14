import React from 'react';
import './DownloadInvoice.css'

const ViewEmployeeTable = ({employee , handleEditClick, handleDeleteClick}) => {
    return(
        <tr>
            <td className='td'>{employee.empID}</td>
            <td className='td'>{employee.name}</td>
            <td className='td'>{employee.gender}</td>
             <td className='td'>{employee.address}</td>
             <td className='td'>{employee.birthday}</td>
             <td className='td'>{employee.department}</td>
             <td className='td'>{employee.email}</td>
             <td className='td'>{employee.phonenumber}</td>
             <td className='td'>{employee.emergencyname}</td>
             <td className='td'>{employee.emergencynumber}</td>
             <td className='td'>{employee.EmpSalary}</td>
             <td className='td'>{(() => {



if (employee.EmpSalary <= 25000) {



return (



    <div style={{textAlign:'center'}}>Rs.5000.00</div>



)



} else if(employee.EmpSalary>25000 && employee.EmpSalary<=50000) {



return (



  <div style={{textAlign:'center'}}>Rs.10000.00</div>



)



}else {



    return (
    
    
    
      <div style={{textAlign:'center'}}>Rs.15000.00</div>
    
    
    
    )
    
    
    
    }



})()}</td>
             <td>
                <button type="button" onClick={(e) => handleEditClick(e,employee)}>Edit</button>
                <button type="button" onClick={() => handleDeleteClick(employee._id)}>Delete</button>
            </td>
        </tr>                        
    )
}

export default ViewEmployeeTable;