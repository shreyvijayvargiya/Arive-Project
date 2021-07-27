import React, { useState } from 'react';
import { Button, makeStyles, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import valid from "card-validator";
import { addCardDetails } from '../../redux/action/action';
import InputMask from 'react-input-mask';
import router from 'next/router';


const Payment = () => {

    const [cardDetails, setCardDetails ] = useState({
        cardNumber: Number,
        expiryDate: "",
        securityCode: ""
    });
    const styles = useStyles();
    
    const [ error, setError ] = useState({
        error: false,
        message: ""
    })

    const dispatch = useDispatch();

    function handleChange(e){
        const val =  e.target.value;
        const name = e.target.name;
        setCardDetails(prevState => ({ ...prevState, [name]: val }));
    };

    function checkCardValidity(){
        const isCardValid = valid.number(cardDetails.cardNumber).isPotentiallyValid;
        if(isCardValid){
            setError({ error: false, message: " "});
        }else {
            setError({ error: true, message: "Invalid card number"})
        }
    };

    function submitCardDetails(e){
        e.preventDefault();
        if(error.error){
            alert("Please fill the card details")
        }else {
            dispatch(addCardDetails(cardDetails));
            router.push("/orders")
        }
    }

    return (
        <div className="p-10">
            <form className="p-10 bg-gray-50 w-2/5 shadow-md mx-auto" onSubmit={submitCardDetails}>
                <p className="text-xl my-2">Add card details</p>
                <label>Card Number</label>
                <br />
                <InputMask
                    mask="9999 9999 9999 9999"

                    onChange={handleChange}
                    onBlur={checkCardValidity}
                    value={cardDetails.cardNumber}
                >
                    {(inputProps) => (
                        <TextField  
                            {...inputProps}
                            color="primary"
                            variant="outlined"
                            size="small"
                            fullWidth
                            name="cardNumber"
                            className={styles.input}
                            placeholder="Card number"
                        /> 
                    )}
                </InputMask>
                {error.error && <p className="p-4 text-red-600">{error.message}</p>}
                <br />
                <label>Expiry Date </label>
                <br />
                <TextField  
                    color="primary"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={cardDetails.expiryDate}
                    type="date"
                    name="expiryDate"
                    onChange={handleChange}
                    placeholder="Expiry Date"
                /> 
                <br />
                <br />
                <label>Secutiry Code</label>
                <br />
                <InputMask
                    value={cardDetails.securityCode}
                    onChange={handleChange}
                    mask="999"

                >
                    {(inputProps) => (
                        <TextField  
                            color="primary"
                            variant="outlined"
                            size="small"
                            name="securityCode"
                            fullWidth
                            {...inputProps}
                            className={styles.input}
                            placeholder="Code"
                        /> 
                    )}
                </InputMask>
                <br />
                <br />
                <Button 
                    onClick={submitCardDetails} 
                    type="submit" 
                    className="outline-none focus:outline-none"
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Submit
                </Button>
            </form>
        </div>
    );
};


const useStyles = makeStyles((theme => ({
    input :{
        '& input[type=number]': {
            '-moz-appearance': 'textfield'
        },
        '& input[type=number]::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0
        },
        '& input[type=number]::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0
        }
    }
})))
export default Payment;
