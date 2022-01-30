import React from 'react';

import classes from "./Card.module.scss";

export default function Card(props) {
    const activeRef = React.useRef(null);
    
    const onToggleClick = (e) => {
        activeRef.current.classList.toggle("active");
    };

    let bg_img = `url(${props.image})`;
    let { title, subTitle, price} = props;
    return (
        <div className={classes.card} id='card'>
            <div className="card_image" style={{"backgroundImage" : bg_img }}></div>
            <div className='wishlist' ref={activeRef} onClick={onToggleClick}>
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.6596 2.67794C18.1408 3.22368 18.5034 3.8674 18.7237 4.56672C18.9614 5.29783 19.0472 6.07162 18.9754 6.83856C18.9037 7.60549 18.6761 8.34867 18.3072 9.02052C17.0193 11.3407 14.4307 13.9341 10.6108 16.7273C10.4364 16.8546 10.2274 16.9231 10.0131 16.9231C9.79879 16.9231 9.58982 16.8546 9.41543 16.7273C5.57748 13.9289 2.98886 11.3354 1.70354 9.01789C1.3307 8.34528 1.09988 7.60028 1.02593 6.83091C0.951994 6.06154 1.03658 5.28487 1.27425 4.55095C1.49563 3.85381 1.85883 3.21245 2.33998 2.669C2.82113 2.12556 3.40934 1.69235 4.06595 1.39782C5.57234 0.719901 7.13271 0.909089 8.57741 1.96013C9.10919 2.35023 9.58732 2.81155 9.99896 3.33174C10.4106 2.81155 10.8887 2.35023 11.4205 1.96013C12.8678 0.914344 14.4256 0.722528 15.932 1.40045C16.5896 1.69682 17.1784 2.1322 17.6596 2.67794Z" fill="#FBFCFE" stroke="#E5E5EC"/>
                </svg>
            </div>
            <div className="card_info">
                <h2>{title}</h2>
                <p className="card_subtext">{subTitle}</p>
                <h3 className="card_price">{price}</h3>
                <div className="card_footer">
                    <button type="button" className="btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
