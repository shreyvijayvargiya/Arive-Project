import React, { useState } from 'react';
import { FormControl, RadioGroup, FormControlLabel, Radio, Checkbox, Button } from '@material-ui/core';
import { addPizaDetails } from '../../redux/action/action';
import { useDispatch } from 'react-redux';
import router from 'next/router';



const PizzaSelection = () => {

    const [ size, setSize ] = useState("");
    const [ toppings, setToppings ] = useState({
        Olives: false,
        Peperoni: false,
        Mushrooms: false,
        Pepper: false
    });
    const dispatch = useDispatch()

    const selectSize = (e) => {
        const val = e.target.value;
        setSize(val)
    };

    function handleToppingChange(e){
        const name = e.target.name;
        const val = e.target.checked;
        setToppings(prevState => ({ ...prevState, [name]: val }))
    };

    function savePizzaDetails(e){
        e.preventDefault();
        if(!size){
            alert("Please select a size");
            return
        }
        const details = { size, ... toppings };
        dispatch(addPizaDetails(details));
        router.push('/payment')
    };

    return (
        <div className="p-10">
            <form className="p-10 text-xl bg-gray-50 w-2/5 shadow-md mx-auto" onSubmit={savePizzaDetails}>
                <p className="text-xl">Customise your order</p>
                <FormControl component="fieldset">
                    <p className="font-bold">Select size</p>
                    <RadioGroup 
                        aria-label="uilibrary" 
                        name="size" 
                        value={size} 
                        onChange={selectSize}
                    >
                        {(formData.sizes).map(item => (
                            <FormControlLabel key={item.id} value={item.name} control={<Radio color="primary" />} label={item.name} />
                        ))}
                    </RadioGroup>
                    <br />
                    <p className="font-bold">Select Topping</p>
                    {(formData.topppings).map(item => {
                        return (
                            <FormControlLabel key={item.id} name={item.name}
                                control={
                                    <Checkbox 
                                        color="primary" 
                                        name={item.name}
                                        checked={toppings[item.name]}
                                        onChange={handleToppingChange} 
                                    />
                                } 
                                label={item.name} 
                            />
                        )
                    })}
                </FormControl>
                <Button 
                    variant="contained"
                    type="submit"
                    onClick={savePizzaDetails}
                    color="primary"
                    className="outline-none focus:outline-none"
                    fullWidth
                >
                    Submit
                </Button>
            </form>
        </div>
    )
};
export default PizzaSelection;


const formData=  {
    sizes: [
        {
            id: 1,
            name: "Small",
            price: "$15"
        },
        {
            id: 2,
            name: "Medium",
            price: "$20"
        },
        {
            id: 3,
            name: "Large",
            price: "$25"
        }   
    ],
    topppings: [
        {
            id: 1,
            name: "Olives",
            price: "$3"
        },
        {
            id: 2,
            name: "Peperoni",
            price: "$4"
        },
        {
            id: 3,
            name: "Mushrooms",
            price: "$2"
        },
        {
            id: 4,
            name: "Pepper",
            price: "$2"
        },
    ]
}