import React from 'react';

const EditProduct = ({editFormData, handleEditFormChange, handleCancelClick}) => {
    return (
        <tr>
            <td>
                
            </td>
            <td>
                <input type="text" required="required" placeholder='Enter product name...' name="productName" value={editFormData.productName} onChange={handleEditFormChange}/>
            </td>
            <td>
                <select required="required" name="category">
                            <option>Choose...</option>
                            <option>Coconut product</option>
                            <option>Rubber product</option>
                            <option>Apparel & Textile</option>
                            <option>Tea</option>
                            <option>Spices</option>
                            <option>Gems & jewelry</option>
                </select>
            </td>
            <td>
                
            </td>
            <td>
                <input type="text" required="required" placeholder='Enter unit price...' name="price" value={editFormData.price} onChange={handleEditFormChange}/>
            </td>
            <td>
                <input type="text" required="required" placeholder='Update quantity...' name="quantity" value={editFormData.quantity} onChange={handleEditFormChange}/>
            </td>
            <td>
                
            </td>
            <td>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </td>
        </tr>
    )
}

export default EditProduct;