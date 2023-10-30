
import React from 'react'
import './payment.css';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';

function Payment() {
    const { bill } = useParams();
    return (
        <>
            <div className="container-fluid ">
                <div class="card">
                    <div class="row">
                        <div id="left-div" className="col-sm-4">
                            <div class="card" id="first">
                                <h5 style={{ color: 'white', textAlign: 'center' }}>Your Total Bill</h5>
                                <h3 style={{ color: 'white', textAlign: 'center' }}>Rs: {bill}</h3>
                            </div>
                        </div>
                        <div class="col-sm-2"></div>
                        <div class="col-sm-3">

                            <div id="second">
                                <img src={require("../img/PayemntQR.png")} width="230px; hieght:230px" alt="" />
                                <div class="d-grid gap-2">
                                    <button className="btn rounded-pill" style={{ backgroundColor: '#071952', color: '#fff' }} type="button">
                                        Pay Rs:{bill}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-2"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Payment