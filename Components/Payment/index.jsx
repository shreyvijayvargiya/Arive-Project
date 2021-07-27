import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import router from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import valid from "card-validator";

const Payment = () => {

    const [cardDetails, setCardDetails ] = useState({
        cardNumber: "",
        expiryDate: "",
        securityCode: ""
    });

    const dispatch = useDispatch();

    return (
        <div>
            <p>Payment</p>
        </div>
    );
};
export default Payment;
