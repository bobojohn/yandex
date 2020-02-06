import React from 'react'
import '../../Style.css'

export default function Blok(props) {

    return (
        <a className='href' href="https://market.yandex.ru/">
            <div className="product">
                <img src={props.imgUrl} alt={props.title} />
                <h3>{props.price} ₽</h3>
                <p className="name">{props.name}</p>
            </div>
        </a>
    )
}
