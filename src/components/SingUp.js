import React, { } from 'react'
import { imgBackSingUp, imgSingUp } from '../assets/img'
import { useNavigate } from 'react-router-dom';
import "../styles/singUp.css"


export const SingUp = () => {

    const navigate = useNavigate();


    return (
        <section className="Container-singUp">
            <img src={imgBackSingUp} alt="omg" className="font-img" />
            <div className="card-singUp float-center">
                <div className="card-body-content pt-2 rounded">
                    <h2 className="mb-3">Wellcome To Nicas NFTs</h2>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            < img alt="img" src={imgSingUp} />
                        </div>
                        <div className="col-12 col-md-6">
                            <h4 className="card-title text-center">Register</h4>
                            <div className="form-group mb-1">
                                <div className="d-flex align-items-center">
                                    <i class="fa-solid fa-user fa-lg text-primary"></i>
                                    <h6 className="ml-2 mt-1">First Name</h6>
                                </div>
                                <input type="text" className="form-control" placeholder="First Name" />
                            </div>
                            <div className="form-group mb-1">
                                <div className="d-flex align-items-center">
                                    <i class="fa-solid fa-user fa-lg text-primary"></i>
                                    <h6 className="ml-2 mt-1">Last Name</h6>
                                </div>
                                <input type="text" className="form-control" placeholder="Last Name" />
                            </div>
                            <div className="form-group mb-1">
                                <div className="d-flex align-items-center">
                                    <i class="fa-solid fa-user fa-lg text-primary"></i>
                                    <h6 className="ml-2 mt-1">User Name</h6>
                                </div>
                                <input type="text" className="form-control" placeholder="User Name" />
                            </div>
                            <div className="form-group mb-1">
                                <div className="d-flex align-items-center">
                                    <i class="fa-solid fa-user fa-lg text-primary"></i>
                                    <h6 className="ml-2 mt-1">Age</h6>
                                </div>
                                <input type="number" className="form-control" placeholder="Age" />
                            </div>
                            <div className="form-group mb-1">
                                <div className="d-flex align-items-center">
                                    <i className="fa-solid fa-envelope fa-lg text-primary"></i>
                                    <h6 className="ml-2 mt-1 "> Email</h6>
                                </div>
                                <input type="email" className="form-control" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <div className="d-flex align-items-center">
                                    <i className="fa-solid fa-key text-primary"></i>
                                    <h6 className="ml-2 mt-1" > Pasword</h6>
                                </div>
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <div className="d-flex align-items-center">
                                    <i className="fa-solid fa-key text-primary"></i>
                                    <h6 className="ml-2 " > Confirm Pasword</h6>
                                </div>
                                <input type="password" className="form-control" placeholder="Confirm Pasword" />
                            </div>
                            <div>
                                <h6 className="card-text btn text-white ml-4 float-left">Sing In</h6>
                                <h6 className="card-text btn text-white ml-4 float-left">Termins And Privacy</h6>
                            </div>
                            <button type="button" onClick={() => navigate('/home')} className="btn mt-2 btn-primary float-right">Submit</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
