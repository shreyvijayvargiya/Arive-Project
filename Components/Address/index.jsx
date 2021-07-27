import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';

const Address = () => {


    const [ values, setValues ] = useState({
        name: "",
        streetname: "",
        housenumber: "",
        postalcode: "",
        city: "",
        phonenumber: ""
    })
    const dispatch = useDispatch();
    const handleChange = e => {
        const val =  e.target.value;
        const name = e.target.name;
        setValues(prevState => ({ ...prevState, [name]: val }));
    };

    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <div>
            <p>Enter information to order</p>
            <form className="p-10 bg-gray-50 shadow-md mx-auto" onSubmit={handleSubmit}>
                <label>Name</label>
                <br />
                <TextField  
                    color="primary"
                    variant="outlined"
                    size="small"
                    name="name"
                    onChange={handleChange}
                    placeholder="Enter name"
                /> 
                <br />
                <label>Street name</label>
                <br />
                <TextField  
                    color="primary"
                    variant="outlined"
                    size="small"
                    onChange={handleChange}
                    name="streetname"
                    placeholder="Enter street name"
                /> 
                <br />
                <label>House number</label>
                <br />
                <TextField  
                    color="primary"
                    variant="outlined"
                    size="small"
                    onChange={handleChange}
                    name="housenumber"
                    placeholder="Enter house number"
                /> 
                <br />
                <label>Postal Code</label>
                <br />
                <TextField  
                    color="primary"
                    variant="outlined"
                    size="small"
                    onChange={handleChange}
                    type="number"
                    maxRows={1}
                    name="postalcode"
                    placeholder="Enter postcal code "
                /> 
                <br />
                <label>City</label>
                <br />
                <TextField  
                    color="primary"
                    variant="outlined"
                    size="small"
                    onChange={handleChange}
                    name="city"
                    placeholder="Enter city"
                /> 
                <br />
                <label>Phone number</label>
                <br />
                <TextField  
                    color="primary"
                    variant="outlined"
                    size="small"
                    onChange={handleChange}
                    name="phonenumber"
                    placeholder="Enter phone number"
                /> 
                <Button 
                    onChange={handleSubmit} type="submit" className="outline-none focus:outline-none"
                    variant="contained"
                    color="primary"
                    size="small"
                >
                    Submit
                </Button>
            </form>
        </div>
    );
};
export default Address;
