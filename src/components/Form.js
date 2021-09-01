import React from 'react';
import './Form.css';

function Form() {
    return (
        <div className="form-contenedor">
            <div className="form-text">
                <h2 className="form-tittle">Join our newsletter and get 20% off</h2>
                <p className="form-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?</p>
            </div>
            <div className="form-input">
                <input type="text" className="input" placeholder="Enter your email"/>
                <button className="form-btn">Subscribe</button>
            </div>
        </div>
    )
}

export default Form;
