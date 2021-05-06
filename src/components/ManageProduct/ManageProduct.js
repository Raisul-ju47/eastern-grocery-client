import React, { useContext } from 'react';
import { UserContext } from '../../App';

const ManageProduct = () => {
    const { value, value2 } = useContext(UserContext);
    const [products, setProducts] = value;


    const deleteProduct = (event, id) => {
        console.log(event.target.parentNode.parentNode);
        console.log(id);
        fetch(`https://mighty-hollows-77897.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    event.target.parentNode.parentNode.style.display = 'none';
                }
            });
    };


    return (
        <div className="container">
            <h3 className="text-center mt-5 mb-5">Manage your products</h3>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Weight</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(pd => 
                                <tr>
                                    <th scope="row"></th>
                                    <td>{pd.name}</td>
                                    <td>{pd.price}</td>
                                    <td>{pd.weight}</td>
                                    <td><button onClick={(event) => deleteProduct(event, pd._id)} >Delete</button></td>
                                </tr>
                                )
                        }
                    </tbody>
                </table>
            </div>
            <div id="update"></div>
        </div>
    );
};

export default ManageProduct;