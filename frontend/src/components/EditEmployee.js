import React from 'react';

const EditEmployee = ({editFormData, handleEditFormChange, handleCancelClick}) => {
    return (
        <tr>
            <td>
                
            </td>
            <td>
                
            </td>
            <td>
                
            </td>
            <td>
            <input type="text" required="required" placeholder='Enter address...' name="address" value={editFormData.address} onChange={handleEditFormChange}/> 
            </td>

            <td>
             
            </td>

            <td>
                <input type="text" required="required" placeholder='Enter department...' name="department" value={editFormData.department} onChange={handleEditFormChange}/>
            </td>
    
            <td>
            
            </td>

            <td>
            
            </td>

            <td>
             
            </td>

            <td>
            <input type="var" required="required" placeholder='Enter emergencynumber...' name="emergencynumber" value={editFormData.emergencynumber} onChange={handleEditFormChange}/> 
            </td>

            <td>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </td>
        </tr>
    )
}

export default EditEmployee;