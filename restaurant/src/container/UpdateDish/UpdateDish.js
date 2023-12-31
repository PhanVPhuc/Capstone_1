import {NavLink} from 'react-router-dom'
import { useState, useEffect } from 'react';

function UpdateDish() {
    const rid = "res51312ab1b4";
    const [form, setForm] = useState({
        title: "",
        image: null,
        description: "",
        price: 0,
        old_price: 0,
        product_status: "draft",
        specifications: "",
        featured: false,
        digital: false,
        cid: ""
    });

    function handelChange(e){
        setForm({...form, [e.target.name]: e.target.value});
    }

    function handelChoice(e){
        let file = e.target;
        if(file.files &&file.files[0]){
            setForm({...form, ['image']: file.files[0]});
        }
    }

    function handelCheck(e){
        setForm({...form, [e.target.name]: e.target.checked});
    }

    function handelsubmit(e){
        e.preventDefault();
        console.log(form);
    }
    return ( 
        <div class="content">
            <nav className='nav-header'>
                <i class="fas fa-list"></i>
                <i class="fa-solid fa-user"></i>
            </nav>
            <nav className='nav-middle'>
                <div className="view-link">
                    <p className='top'>The Dishes</p>
                    <p><a href="/restaurant">Home</a></p>
                    <i class="fas fa-chevron-right"></i>
                    <p><NavLink to="/restaurant/dish">The Dishes</NavLink></p>
                    <i class="fas fa-chevron-right"></i>
                    <p>Update Dish</p>
                </div>
                <div className="add-dish">
                    
                </div>
            </nav>
            <div class="container-fluid">
                <section class="content">
                    <div class="row">
                        <div id="content-main">
                                <input type="hidden"/>
                                <div class="row">
                                    <div class="col-12 col-lg-9">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="form-group field-did">
                                                    <div class="row">
                                                        <label class="col-sm-3 text-left" for="id_did">
                                                            Did
                                                            <span class="text-red">* </span> 
                                                        </label>
                                                        <div class=" col-sm-7 field-did ">
                                                            <input className="input" type="text" name="did" value="324aga54a3" maxlength="20" disabled/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group field-title">
                                                    <div class="row">
                                                        <label class="col-sm-3 text-left">
                                                            Title
                                                            <span class="text-red">* </span>  
                                                        </label>
                                                        <div class=" col-sm-7 field-title">
                                                            <input onChange={handelChange} className="input" type="text" name="title"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group field-image">
                                                    <div class="row">
                                                        <label class="col-sm-3 text-left">
                                                            Image
                                                            <span class="text-red">* </span>
                                                        </label>
                                                        <div class=" col-sm-7 field-image">
                                                            <input onChange={handelChoice} type="file" name="image"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group field-description">
                                                    <div class="row">
                                                        <label class="col-sm-3 text-left">
                                                            Description
                                                        </label>
                                                        <div class=" col-sm-7 field-description">
                                                            <textarea onChange={handelChange} type="number" name="description" rows="5"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group field-price">
                                                    <div class="row">
                                                        <label class="col-sm-3 text-left">
                                                            Price
                                                            <span class="text-red">* </span>
                                                        </label>
                                                        <div class=" col-sm-7 field-price">
                                                            <input onChange={handelChange} className="input" type="number" name="price"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group field-old_price">
                                                    <div class="row">
                                                            <label class="col-sm-3 text-left">
                                                                Old price
                                                                <span class="text-red">* </span>
                                                            </label>
                                                            <div class="col-sm-7 field-old_price">
                                                                <input onChange={handelChange} className="input" type="number" name="old_price"/>
                                                            </div>
                                                    </div>
                                                </div>
                                                <div class="form-group field-product_status">
                                                    <div class="row">
                                                        <label class="col-sm-3 text-left">
                                                            Product status
                                                            <span class="text-red">* </span>
                                                        </label>
                                                        <div class="col-sm-7 field-product_status">
                                                            <select onChange={handelChange} className="input" name="product_status">
                                                                <option value="draft" data-select2-id="select2-data-2-4k8x">Draft</option>
                                                                <option value="disabled">Disabled</option>
                                                                <option value="rejected">Rejected</option>
                                                                <option value="in_review">In review</option>
                                                                <option value="published">Published</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group field-featured">
                                                    <div class="row">
                                                        <label class="col-sm-3 text-left">
                                                            Featured
                                                        </label>
                                                        <div class="col-sm-7 field-featured">
                                                            <input onChange={handelCheck} type="checkbox" name="featured"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group field-digital">
                                                    <div class="row">   
                                                        <label class="col-sm-3 text-left">
                                                            Digital
                                                        </label>
                                                        <div class="col-sm-7 field-digital">
                                                            <input onChange={handelCheck} type="checkbox" name="digital"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group field-category">
                                                    <div class="row">
                                                        <label class="col-sm-3 text-left" for="id_category">
                                                            Category
                                                            <span class="text-red">* </span>
                                                        </label>
                                                        <div class="col-sm-7 field-category">
                                                            <div class="related-widget-wrapper" >
                                                                <select className="input" name="category">
                                                                    <option value="" selected="">---------</option>
                                                                    <option value="1">Món Chính</option>
                                                                    <option value="2">Món phụ</option>
                                                                    <option value="3">Nước uống</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-3">
                                        <div class="form-group">
                                            <input onClick={handelsubmit} type="submit" value="Save" class="btn btn-success form-control"/>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
     );
}

export default UpdateDish;