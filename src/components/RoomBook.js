
import React, { useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom';
import { roomData } from '../constant'
import Navbar from './Navbar';


function RoomBook() {

    const navigate = useNavigate()
    let { id } = useParams();
    // Convert id to an integer
    id = parseInt(id);

    // Find the room data with the matching id
    const room = roomData.find((room) => room.id === id);

    // set initial value to value state
    const [values, setValues] = useState({
        mobile: '',
        checkin_date: '',
        checkout_date: '',
        hotel: room.hotel,
        capacity: room.capacity,
    });

    const [insertionStatus, setInsertionStatus] = useState({
        isSuccess: false,
        message: '',
    });



    const submitForm = (event) => {
        event.preventDefault();

        // Send data to the database if there are no validation errors
        if (values.nam !== "") {
            axios.post("https://hotelbookingbackend-bg0y.onrender.com/roombook", values)
                .then((res) => {
                    console.log("Data sent");
                    setInsertionStatus({
                        isSuccess: true,
                        message: "Please Process to Payment for Confirm Booking",
                    });
                })
                .catch((err) => {
                    console.log(err);
                    setInsertionStatus({
                        isSuccess: false,
                        message: "Room booking failed. Please try again.",
                    });
                });
        }
    }

    const handleInput = (event) => {
        setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    }

    function payment_page(id) {
        console.log("Price: " + room.price);
    
        const timeDifference = new Date(values.checkout_date) - new Date(values.checkin_date); // Difference in milliseconds
        const daysDifference = timeDifference / (1000 * 60 * 60 * 24); // Convert milliseconds to days
    
        console.log(`Number of days: ${daysDifference}`);

        let bill = null
        
        // Check if room.price is a valid number before calculating the bill
        if (!isNaN(parseFloat(room.price))) {
           bill = parseFloat(room.price) * daysDifference;
            console.log("Bill: " + bill);
        } else {
            console.log("Invalid room price");
        }
    
        navigate(`/payment/${bill}`);
    }
    

    return (
        <>
            <div id="admission" className='d-flex justify-content-center align-items-center vh-100'>
                <div className='bg-white p-3 rounded w-50'>
                    <form onSubmit={submitForm}>

                        <div className="mb-3">
                            <label htmlFor="exampleInputMobile" className="form-label">Mobile</label>
                            <input
                                type="text"
                                name="mobile"
                                className="form-control"
                                id="exampleInputMobile"
                                onChange={handleInput}
                            />
                        </div>


                        <div className="mb-3">
                            <label htmlFor="checkinDate" className="form-label">Check-in Date</label>
                            <input
                                type="date"
                                name="checkin_date"
                                className="form-control"
                                id="checkinDate"
                                onChange={handleInput}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="checkoutDate" className="form-label">Check-out Date</label>
                            <input
                                type="date"
                                name="checkout_date"
                                className="form-control"
                                id="checkoutDate"
                                onChange={handleInput}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>

                    </form>
                    {insertionStatus.isSuccess && (
                        <div>
                            <button className="btn btn-primary" onClick={() => payment_page(id)}>Proceed to Payment</button>
                            <h3>{insertionStatus.message}</h3>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
export default RoomBook