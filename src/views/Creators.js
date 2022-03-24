import React from 'react'
import "../styles/aboutUs.css";
import davidIMG from "../assets/img/david.jpeg"
import osmanyIMG from "../assets/img/Osmany.png"
import hershiser from "../assets/img/hershiser.jpg"

export const Creators = () => {
    return (
        <> <div className="creator-text">
            <h4 className="text-center">Creators</h4>
            <div id="divider" />
        </div>
            <section className="content-details-about">
                <h5 id="subtitle-bothers" className="text-left ml-5 mt-2 mb-4 ">
                    <span className="mr-3 icon-blockChain">
                        <i className="fas fa-coins"></i>
                    </span>
                    The blockchain brothers.</h5>
                <p className="p-information">
                    The brothers, David Exequiel Jiron Ulloa and Osmany Jiron ulloa from Central America, Nicaragua exactly from city of Rivas.
                </p>
                <p className="p-information">
                    We are a pair of proudly Nicaraguan Brothers passionate about technology since we were a couple of children,
                    with at least 5 professional projects designed and developed from scratch with a great margin of knowledge in both Frond End, Back End and Block Chain.
                </p>
                <div id="row-content" className="row ">

                    <div className="col-sm-12 col-md-4">
                        <div className="d-flex wrap-content">
                            <div className="d-flex flex-column">
                                <img className="img-david" alt="David Img" src={davidIMG} />
                                <span className="text-left ml-2 mt-1 font-weight-bold colorWhite spacee">
                                    <span className="mr-3">
                                        <i className="fas fa-user-graduate"></i>
                                    </span>
                                    David Exequiel Jiron</span>
                            </div>
                            {/* <div className="mt-2 colorWhite">
                                <h6 className="text-center skills colorWhite">Experience</h6>
                                <ul>
                                    <li>
                                        <h5 >
                                            Front End
                                        </h5>
                                        <p className="p-front-end">
                                            2 year of experience developing UI interfaces, Fully responsive with React Js And Next Js.
                                        </p>
                                    </li>
                                    <li className="mt-1">
                                        <h5>
                                            Back End
                                        </h5>
                                        <p className="p-front-end">
                                            1 year and a half of experience developing RESTFul Api, with Node Js, Express and Mongo DB as database.
                                        </p>
                                    </li>
                                    <li className="mt-1">
                                        <h5>
                                            Block Chain
                                        </h5>
                                        <p className="p-front-end">
                                            1 year developing decentralized Dapps with the <Link rel="noopener noreferrer" target="_blank" to="https://es.onflow.org/">Flow</Link> Blockchain.
                                        </p>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-4">
                        <div className="d-flex wrap-content">
                            <div className="d-flex flex-column">
                                <img className="img-david" alt="David Img" src={osmanyIMG} />
                                <span className="text-left ml-2 mt-1 font-weight-bold colorWhite spacee">
                                    <span className="mr-3">
                                        <i className="fas fa-user-graduate"></i>
                                    </span>
                                    Osmany Jiron</span>
                            </div>
                            {/* <div className="mt-2 colorWhite">
                                <h6 className="text-center skills">Experience</h6>
                                <ul>
                                    <li>
                                        <h5>
                                            Front End
                                        </h5>
                                        <p className="p-front-end">
                                            2 year of experience developing UI interfaces, Fully responsive with React Js And Next Js.
                                        </p>
                                    </li>
                                    <li className="mt-1">
                                        <h5>
                                            Back End
                                        </h5>
                                        <p className="p-front-end">
                                            1 year and a half of experience developing RESTFul Api, with Node Js, Express and Mongo DB as database.
                                        </p>
                                    </li>
                                    <li className="mt-1">
                                        <h5>
                                            Block Chain
                                        </h5>
                                        <p className="p-front-end">
                                            1 year developing decentralized Dapps with the <Link rel="noopener noreferrer" target="_blank" to="https://es.onflow.org/">Flow</Link> Blockchain.
                                        </p>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-4">
                        <div className="d-flex wrap-content">
                            <div className="d-flex flex-column">
                                <img className="img-david" alt="David Img" src={hershiser} />
                                <span className="text-left ml-2 mt-1 font-weight-bold colorWhite spacee">
                                    <span className="mr-3">
                                        <i className="fas fa-user-graduate"></i>
                                    </span>
                                    Hershiser Ponce</span>
                            </div>
                            {/* <div className="mt-2 colorWhite">
                                <h6 className="text-center skills">Experience</h6>
                                <ul>
                                    <li>
                                        <h5>
                                            Front End
                                        </h5>
                                        <p className="p-front-end">
                                            2 year of experience developing UI interfaces, Fully responsive with React Js And Next Js.
                                        </p>
                                    </li>
                                    <li className="mt-1">
                                        <h5>
                                            Back End
                                        </h5>
                                        <p className="p-front-end">
                                            1 year and a half of experience developing RESTFul Api, with Node Js, Express and Mongo DB as database.
                                        </p>
                                    </li>
                                    <li className="mt-1">
                                        <h5>
                                            Block Chain
                                        </h5>
                                        <p className="p-front-end">
                                            1 year developing decentralized Dapps with the <Link rel="noopener noreferrer" target="_blank" to="https://es.onflow.org/">Flow</Link> Blockchain.
                                        </p>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
</div>
            </section>
        </>
    )
}
