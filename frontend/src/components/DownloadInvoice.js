import {useState,useEffect,useRef} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useReactToPrint } from "react-to-print";
import './DownloadInvoice.css';
import {Link} from 'react-router-dom';
import {FaHome} from "react-icons/fa";
import {AiOutlineDingding} from 'react-icons/ai';
import {FiPrinter} from 'react-icons/fi';

function DownloadInvoice() {

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const {id} = useParams();

    const [payment,setPayment] = useState([]);

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    useEffect(() =>{

        function getPayment() {
            axios.get(`http://localhost:5000/payment/view/${id}`).then((res) => {
                setPayment(res.data);
                console.log(res.data)
            }).catch((err) => {
    
                alert(err.message);
            })
        }
    
        getPayment();
    
    }, [])

    return(
        <>
                <Link to="/customer-home" className="btn"><FaHome/><span style={{position:"relative", top:"1.5px",marginLeft:"2px"}}>Back To Home</span></Link>
                
                <div className='container'>
                <div class="print__section bgrnd">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                             
                            <div ref={componentRef} className="card">
                                <div>
                                    <h1 className='h1'>VERVE<AiOutlineDingding/></h1>
                                </div>
                                <div class="float__start">
                                <h3 className="card-title mb-0 h3">Purchase Details</h3>
                                </div>
                                <hr className='hr'></hr>
                                <div class="float__infoss">
                                <table className='tbody'>
                                    <thead>
                                        
                                    </thead>
                                    <tbody>
                                    
                                        <tr>
                                            <td>
                                            <tr>
                                            <td className='li'>PaymentID: </td>
                                            <td className='ul'>{payment.payID}</td>
                                            
                                        </tr>
                                        <tr>
                                            <td className='li'>Name: </td>
                                            <td className='ul'>{payment.cardName}</td>
                                            
                                        </tr>
                                        <tr>
                                            <td className='li'>Order: </td>
                                            <td className='ul'>{payment.IDOrder}</td>
                                        
                                        </tr>
                                        <tr>
                                            <td className='li'>Amount: </td>
                                            <td className='ul'>${payment.amount}.00</td>
                                        </tr>
                                        <tr>
                                            <td className='li'>Date: </td>
                                            <td className='ul'>{date}</td>
                                            
                                        </tr>
                                            </td>
                                            <td>
                                                <img className='photo'/>
                                            </td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                                <br/>
                                <p className='p'>Have A Nice Day....!</p>
                                </div>
                            </div>
                            <button onClick={handlePrint} className="print__button btn btn1"><FiPrinter/> Print </button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </>
    );
}

export default DownloadInvoice;
