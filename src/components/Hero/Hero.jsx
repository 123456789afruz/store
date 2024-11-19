import React, { useEffect, useState } from 'react'
import './Hero.scss'

const Hero = () => {

    const [data, setData] = useState([])
    const [load, setLoad] = useState(true)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => {
                setData(data)
                setLoad(!load)
            })
    }, [])

    console.log(data);


    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="hero__wrapper">

                        {load ? (
                            <h2 className="load">Загрузка данных...</h2>
                        ) : (
                            <>
                                {data.map(product => (
                                    <div key={product.id} className="hero__card">
                                        <h2>{product.title}</h2>
                                        <h4>{product.price}</h4>
                                        <p>{product.description}</p>
                                        <h3>{product.category}</h3>
                                        <img src={product.image} alt="" />
                                        <div className="hero__card-rating">
                                            <p>{product.rating.rate}</p>
                                            <p>{product.rating.count}</p>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}





                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
