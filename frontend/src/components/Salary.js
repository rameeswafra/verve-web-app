import React from "react"
import EmployeeHeader from "./EmployeeHeader";

const Salary = ({employee , handleEditClick, handleDeleteClick}) => {

return(
  <>
      <EmployeeHeader/>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Basic Salary</th>
      <th scope="col">Allownces</th>
      <th scope="col">Totall</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>15000</td>
      <td>10000</td>
      <td>25000</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>30000</td>
      <td>25000</td>
      <td>55000</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>50000</td>
      <td>45000</td>
      <td>95000</td>
    </tr>
   
  </tbody>
</table>
  </>
)

}

export default Salary;
