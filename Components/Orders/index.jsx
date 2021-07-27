import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import router from 'next/router';

const Orders = () => {

    const {  userDetails, pizzaDetails, cardDetails } = useSelector(state => state);

    return (
        <div className="p-10">
            <div className="w-2/5 mx-auto">
                <p className="text-center my-3 text-xl">User order details JSON payload </p>
                <pre className="bg-gray-700 p-4 text-white mx-auto">
                    <code>
                        <p>Address details</p>
                        {JSON.stringify(userDetails, null, 2)}
                    </code>
                    <code>
                        <p>Pizza details</p>
                        {JSON.stringify(pizzaDetails, null, 2)}
                    </code>
                    <code>
                        <p> Card details</p>
                        {JSON.stringify(cardDetails, null, 2)}
                    </code>
                </pre>
                <br />
                <br />
                <Button
                    onClick={() => router.push('/customiseorder')}
                    style={{ textTransform: "none" }}
                    variant="contained"
                    color="primary"
                    className="focus:outline-none outline-none mx-auto text-center"
                >
                    Place New Order
                </Button>
            </div>
        </div>
    );
};
export default Orders;
