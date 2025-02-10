import React from 'react'
import { useParams } from 'react-router-dom'
import API from './../api';
import { useState, useEffect } from 'react';
const DetailPage = () => {
    let { id } = useParams()
    const [product, setProduct] = useState("")
    const [amount, setAmount] = useState(1);

    const dataLomba = async () => {
        try {
            console.log(id);
            const { data } = await API.get(`/product/detail/${id}`)
            setProduct(data)
            console.log('Data received:', data);
        } catch (error) {
            console.log('Error getting data', error);
        }
    }

    useEffect(() => {
        dataLomba()
    }, [])

    return (
        <div>DetailPage</div>
    )
}

export default DetailPage