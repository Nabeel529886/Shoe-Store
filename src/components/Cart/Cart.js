import React, {useContext} from 'react'
import { GlobalContext } from '../../data/GlobalContext'
import { Table } from 'react-bootstrap'


const emptyCartStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
}


const EmptyCart = () => {
    const emptyCart = () => {
        cartItems = []
    }

    const { cartItems } = useContext(GlobalContext)
    if (cartItems.length === 0){
        return null
    } else{
        return (
            <div style={emptyCartStyle}>
                <a href="" onClick={emptyCart}>Empty Cart</a>
            </div>
        )
    }
}


function getSum(total, num) {
    return total + Math.round(num);
  }


function Cart() {
    const { cartItems } = useContext(GlobalContext)
    const itemPrice = cartItems.map(item => item["Sale Price"])
    const total = itemPrice.reduce(getSum, 0)


    const underline = {
        height: "3px",
        width: "40px",
        backgroundColor: "black",
    }

    const cartHeading = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", 
        alignItems: "center", 
        margin: "30px 0px",
    }



    return (
        <div className="container">
            <div style={cartHeading}>
                <h1>Cart</h1>
                <div style={underline}></div>
                
            </div>
            
            <EmptyCart />
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Product Image</th>
                    <th>Product Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartItems.map((item, key) => {
                            return (
                                <tr style={{ backgroundColor: "white", }} key={key}>
                                    <td>{item["Product ID"]}</td>
                                    <td>{item["Product Name"]}</td>
                                    <td style={{ display: "flex", justifyContent: "center"}}>
                                        <img src={item.Images[0]} width="150" height="150" alt={item.Images[0]}/>
                                    </td>
                                    <td>{item["Sale Price"]}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <p style={{ float: "right", marginRight: "20px",}}>Total Price: {total}</p>
        </div>
    )
}

export default Cart
