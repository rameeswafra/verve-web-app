import React,{useState} from "react"
import AddProductNavBar from './AddProductNavBar';
import '../App.css'
import './AddProductNavBar.css'


export default function AddProduct(){

    
    
    

    return(
       
        <div>
            <AddProductNavBar/>

            <div className="container Form">
                <form action="http://localhost:5000/product/add" method="post" class="form img " encType="multipart/form-data">

                    <br/>

                    <div className="col-md-7 element">
                        <label for="inserProduct" className="form-label1">Product Name</label>
                        <input type="text" name="productName" className="form-control input-field" id="inserProduct" placeholder="Enter product name" required
                            />
                    </div>

                    <br/>

                    <div className="col-md-7 element">
                        <label className="form-label1" for="categorySelect">Category</label>
                        <select name="category" className="form-select" id="categorySelect"
                            >
                            <option>Choose...</option>
                            <option>Coconut product</option>
                            <option>Handmade product</option>
                            <option>Apparel & Textile</option>
                            <option>Tea</option>
                            <option>Spices</option>
                            <option>Gems & jewelry</option>
                        </select>
                    </div>

                    <br />

                    <div className="col-md-3 element" style={{ display: 'block' }}>
                        <label for="datePicker" className="form-label1">Received Date</label>
                        <input id="date" name="date" label="Choose Received Date" type="Date" InputLabelProps={{ shrink: true, }} required
                            />
                    </div>
                    <br/>
                    <table className="element">
                        <tr>
                            <td>
                                <div className="col-md-10">
                                    <label for="inputQuant" className="form-label1">Quantity</label>
                                    <input name="quantity" type="number" className="form-control" id="inputQuant" placeholder="Enter the quantity"
                                        />
                                </div>
                            </td>

                            <td>
                                <div className="col-md-14">
                                    <label for="" className="form-label1">Unit</label>
                                    <select id="inputState" className="form-select" name="unit">
                                        <option selected>Choose...</option>
                                        <option value="pcs">pieces</option>
                                        <option value="kg">kg</option>
                                        <option value="ℓ">liter</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                    </table>

                    <br/>

                    <div className="col-md-5 element">
                        <label for="inputQuant" className="form-label1">Unit Price($)</label>
                        <input name="price" type="number" className="form-control" id="inputQuant" placeholder="Enter unit price"
                            />
                    </div>

                    <br /><br/>

                    <div className="element">
                        <label for="actual-btn" className="form-label1">Upload Product Image</label>
                        <input type="file" id="actual-btn" name="image" className="upload textcolor" required
                            />
                    </div>

                    <br/>

                    <button type="submit" className="btn Addbtn">Add Product</button>
                    <br/>

                </form>
            </div>
        </div>
           

        
    )
}