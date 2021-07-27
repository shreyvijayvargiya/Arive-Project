import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { addUserDetailInStore } from '../../redux/action/action';
import { useRouter } from 'next/router';

const Address = () => {

    const [ values, setValues ] = useState({
        name: "",
        streetname: "",
        housenumber: "",
        postalcode: "",
        city: "",
        phonenumber: ""
    });
    const router = useRouter();
    const dispatch = useDispatch();

    const handleChange = e => {
        const val =  e.target.value;
        const name = e.target.name;
        setValues(prevState => ({ ...prevState, [name]: val }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addUserDetailInStore(values));
        router.push("/customiseorder")
    };

    return (
        <div className="p-10">
            <form className="p-10 bg-gray-50 w-2/5 shadow-md mx-auto" onSubmit={handleSubmit}>
                <p className="text-xl ">Fill adress to place order</p>
                <br />
                <label>Name</label>
                <br />
                <TextField  
                    color="primary"
                    variant="outlined"
                    size="small"
                    fullWidth
                    name="name"
                    onChange={handleChange}
                    placeholder="Name"
                /> 
                <br />
                <br />
                <label>Street name</label>
                <br />
                <TextField  
                    color="primary"
                    variant="outlined"
                    size="small"
                    onChange={handleChange}
                    name="streetname"
                    fullWidth
                    placeholder="Street Name"
                /> 
                <br />
                <br />
                <label>House number</label>
                <br />
                <TextField  
                    color="primary"
                    variant="outlined"
                    size="small"
                    onChange={handleChange}
                    name="housenumber"
                    fullWidth
                    placeholder="House Number"
                /> 
                <br />
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
                    fullWidth
                    name="postalcode"
                    placeholder="Postcal code "
                /> 
                <br />
                <br />
                <label>City</label>
                <br />
                <TextField  
                    color="primary"
                    variant="outlined"
                    size="small" 
                    fullWidth
                    onChange={handleChange}
                    name="city"
                    placeholder="City"
                /> 
                <br />
                <br />
                <label>Phone number</label>
                <br />
                <TextField  
                    color="primary"
                    variant="outlined"
                    size="small"
                    fullWidth
                    onChange={handleChange}
                    name="phonenumber"
                    placeholder="Phone number"
                /> 
                <br />
                <br />
                <Button 
                    onChange={handleSubmit} 
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
export default Address;
