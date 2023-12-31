import {NavLink} from 'react-router-dom'
import { useState, useEffect } from 'react';


function UpdateTable() {

    const rid = "res51312ab1b4";
    const [title, setTitle] = useState("");

    function handelChange(e){
        setTitle(e.target.value);
    }

    function handelSubmit(e){
        e.preventDefault();
        console.log(title);
    }

    return ( 
        <div class="content">
            <nav className='nav-header'>
                <i class="fas fa-list"></i>
                <i class="fa-solid fa-user"></i>
            </nav>
            <nav className='nav-middle'>
                <div className="view-link">
                    <p className='top'>The Tables</p>
                    <p><a href="/restaurant">Home</a></p>
                    <i class="fas fa-chevron-right"></i>
                    <p><NavLink to="/restaurant/dish">The Tables</NavLink></p>
                    <i class="fas fa-chevron-right"></i>
                    <p>Update Table</p>
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
                                                            Tid
                                                            <span class="text-red">* </span> 
                                                        </label>
                                                        <div class=" col-sm-7 field-did ">
                                                            <input className="input" type="text" name="did" value="324aga54a3" maxlength="20" disabled/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group field-title">
                                                    <div class="row">
                                                        <label class="col-sm-3 text-left" for="id_title">
                                                            Title
                                                            <span class="text-red">* </span>  
                                                        </label>
                                                        <div class=" col-sm-7 field-title">
                                                            <input onClick={handelChange} className="input" type="text" name="title"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-3">
                                        <div class="form-group">
                                            <input onClick={handelSubmit} type="submit" value="Save" class="btn btn-success form-control"/>
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

export default UpdateTable;