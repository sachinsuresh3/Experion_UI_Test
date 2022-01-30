import React, { useState, useEffect } from "react";
import Card from "../customCard/Card";
import Modal from "../utils/Modal";

import classes from "./Layout.module.scss";

import product1 from "../../assets/images/products/image_1.png";
import product2 from "../../assets/images/products/image_2.png";
import product3 from "../../assets/images/products/image_3.png";
import product4 from "../../assets/images/products/image_4.png";
import product5 from "../../assets/images/products/image_5.png";
import product6 from "../../assets/images/products/image_6.png";
import product7 from "../../assets/images/products/image_7.png";
import product8 from "../../assets/images/products/image_8.png";

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="container">
                <div className={classes.main_content_wrap}>
                    <div className={classes.main_content}>
                        <div className={classes.filter_wrap}>
                            <div className={classes.filter}>
                                <p>Filters based on your profile</p>
                                <div className={classes.filter_items}>
                                    <span>
                                        Size 
                                        <a href="#">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g opacity="0.5">
                                                    <path d="M12 4L4 12" stroke="#041131" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M4 4L12 12" stroke="#041131" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </g>
                                            </svg>
                                        </a>
                                    </span>
                                    <span>
                                        Color 
                                        <a href="#">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g opacity="0.5">
                                                    <path d="M12 4L4 12" stroke="#041131" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M4 4L12 12" stroke="#041131" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </g>
                                            </svg>
                                        </a>
                                    </span>
                                    <span>
                                        Nike 
                                        <a href="#">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g opacity="0.5">
                                                    <path d="M12 4L4 12" stroke="#041131" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M4 4L12 12" stroke="#041131" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </g>
                                            </svg>
                                        </a>
                                    </span>
                                    <span>
                                        Casual 
                                        <a href="#">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g opacity="0.5">
                                                    <path d="M12 4L4 12" stroke="#041131" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M4 4L12 12" stroke="#041131" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </g>
                                            </svg>
                                        </a>
                                    </span>
                                    <span>
                                        Footwear 
                                        <a href="#">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g opacity="0.5">
                                                    <path d="M12 4L4 12" stroke="#041131" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M4 4L12 12" stroke="#041131" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </g>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>
                            <div className="filter_btn_wrap">
                                <a href="#" className="clearall-link">Clear all</a>
                                <button type="button" onClick={() => setIsOpen(true)} className="btn-outline-primary">Filters</button>
                            </div>
                        </div>
                        <div className="showing_results">
                            <h5>Showing 26 Product</h5>
                            <div className="sortby">
                                <p>Sort by: </p> 
                                <input className="dropdown" list="sortbylist" name="browser" id="sortby" />
                                <datalist className="dropdown_menu" id="sortbylist">
                                    <option value="newest to oldest" />
                                    <option value="oldest to newest" />
                                    <option value="newest only" />
                                    <option value="oldest only" />
                                    <option value="default" />
                                </datalist>
                            </div>
                        </div>
                        <div className={classes.main_content_products}>
                            <Card 
                                image= {product1}
                                title= "Bond Street By Red Tape Remixa Sneakers"
                                subTitle= "Men Crater Remixa Sneakers"
                                price="Rs.5467"
                                alt="Product1"
                            />
                            <Card 
                                image= {product2}
                                title= "Puma"
                                subTitle= "Men Crater Remixa Sneakers"
                                price="Rs.6499"
                                alt="Product2"
                            />
                            <Card 
                                image= {product3}
                                title= "Vero Moda"
                                subTitle= "Women Crater Remixa Sneakers"
                                price="Rs.2767"
                                alt="Product3"
                            />
                            <Card 
                                image= {product4}
                                title= "Carnatia W Running Shoes For Women"
                                subTitle= "Men Crater Remixa Sneakers"
                                price="Rs.3734"
                                alt="Product4"
                            />
                            <Card 
                                image= {product5}
                                title= "Vero Moda"
                                subTitle= "Women Black Solid One Dri-Fit Tights"
                                price="Rs.5467"
                                alt="Product5"
                            />
                            <Card 
                                image= {product6}
                                title= "WROGN"
                                subTitle= "Men Crater Remixa Sneakers"
                                price="Rs.5667"
                                alt="Product6"
                            />
                            <Card 
                                image= {product7}
                                title= "ADIDAS"
                                subTitle= "Men Crater Remixa Sneakers"
                                price="Rs.3734"
                                alt="Product7"
                            />
                            <Card 
                                image= {product8}
                                title= "Mast &Harbour"
                                subTitle= "Men Crater Remixa Sneakers"
                                price="Rs.4567"
                                alt="Product8"
                            />
                        </div>
                    </div>
                </div>
            </div>
            
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <div className="modal-header">
                    <h3>Filter</h3>
                </div>
                <div className="modal-body">
                    <div className="grid">
                        <label class="checkbox-container">
                            Men
                            <input type="checkbox" checked="checked" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="checkbox-container">
                            Women
                            <input type="checkbox" checked="checked" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="checkbox-container">
                            Boys
                            <input type="checkbox"  />
                            <span class="checkmark"></span>
                        </label>
                        <label class="checkbox-container">
                            Girls
                            <input type="checkbox"  />
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <h5 className="option-head">Price</h5>
                    <div className="grid">
                        <label class="checkbox-container">
                            Rs. 1997 to Rs. 6172 (106)
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="checkbox-container">
                            Rs. 10347 to Rs. 14522 (14)
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="checkbox-container">
                            Rs. 6172 to Rs. 10347 (16)
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="checkbox-container">
                            Rs. 14522 to Rs. 18697 (5)
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="checkbox-container">
                            Rs. 10347 to Rs. 14522 (14)
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="checkbox-container">
                            Rs. 14522 to Rs. 18697 (5)
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <h5 className="option-head">Categories</h5>
                    <div className="grid">
                        <label class="checkbox-container">
                            Tshirts (106)
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="checkbox-container">
                            Track Pants (106)
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="checkbox-container">
                            Sports Shoes (156)
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="checkbox-container">
                            Tights (156)
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="checkbox-container">
                            Casual Shoes (174)
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="checkbox-container">
                            Sweatshirts (174)
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="checkbox-container">
                            Shorts  (5)
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="checkbox-container">
                            Tops (5)
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <h5 className="option-head">Color</h5>
                    <div className="grid single">
                        <label class="checkbox-container">
                            Black (106)
                            <input type="checkbox" checked="" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="checkbox-container">
                            White (156)
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="checkbox-container">
                            Blue (176)
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="checkbox-container">
                            Pink (5)
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn-outline-primary">Clear all</button>
                    <button type="button" className="btn-primary">Apply</button>
                </div>
            </Modal>
        </>
    );
}

export default Layout;