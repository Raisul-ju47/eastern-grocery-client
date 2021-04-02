import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const { value, value2 } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = value2;

    useEffect(() => {
        fetch('http://localhost:5000/orders?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
    return (
        <div className="container mt-5">
            <h1 className="text-center">Thank you for choosing our service</h1>
            <h1 className="text-center">You have ordered: {orders.length} product</h1>
            <table className="table mt-5">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Weight</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(pd => 
                                <tr>
                                    <th scope="row"></th>
                                    <td>{pd.name}</td>
                                    <td>{pd.price}</td>
                                    <td>{pd.weight}</td>
                                </tr>
                                )
                        }
                    </tbody>
                </table>
        </div>
    );
};

export default Orders;