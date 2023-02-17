import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

export default function Ngodetails() {
    const [data, setData] = useState([]);
    useEffect(() => {
        let url = "https://giveitaway-backend.onrender.com/api/v1/user/getngolist?page=0&pageSize=10";
        fetch(url).then((response) => {
            response.json().then((result) => {
                console.warn("result", result.Result);
                setData(result.Result)
            })
        })
    }, [])
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>

                        <th>NGO Name</th>
                        <th>Contact Number</th>
                        <th>Address</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {
    data.map((item) => {
        return (
                            <tr className="DecoNone">
                                <td>{item.ngoName}</td>
                                <td>{item.contactNumber}</td>
                                <td>{item.address}</td>
                                <td><span className="DecoNone"> <a href={`https://wa.me/${item.whatsappNumber.replace('0','')}?text=`}>Whatsapp</a></span></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>
        </div>
    )
}