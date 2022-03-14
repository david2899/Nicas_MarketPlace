import React from 'react'
import { Link } from 'react-router-dom'

export const AboutApp = () => {
    return (
        <>
            <div className="creator-text mt-4">
                <h4 className="text-center">About App</h4>
                <div id="divider" />
            </div>
            <section className="content-details-about">
                <h5 id="subtitle-bothers" className="text-left ml-5 mt-2 mb-4 ">
                    <span className="mr-3 icon-blockChain">
                        <i className="fas fa-rocket"></i>
                    </span>
                    Nicas NFT.
                </h5>
                <p className="p-information">
                    Nicas NFT is a fully decentralized (beta) application for trading NFTs, we give the option to create, buy,
                    sell and resell, which is created with the principles of Flow Block Chain, therefore it follows all the standards
                    for an NFT and transactions. actual on the blockchain. It should be noted that the Nicas NFT contract points to the
                    test flow network (Testnet), so at no time would we be using real money, so interacting with our market is completely free.
                </p>
                <p className="p-information">
                    It is aimed at all people of good taste and creativity who want to spend a pleasant time with us through this beautiful experience.
                </p>
                <p className="p-information">
                    Even though we don't have a predetermined date yet, we think at some point we will release our contracts to the main network so that Nicas NFT can start trading with real money.
                </p>
                <p className="p-information">
                    I hope this short description of us and our Dapp has been helpful to you, to learn more details check our
                    <Link to="/terms-privacy">
                        terms and privacy.
                    </Link>
                </p>
                <h5 id="subtitle-bothers" className="text-left ml-5 mt-2 mb-4 ">
                    <span className="mr-3 icon-blockChain">

                        <i className="fas fa-screwdriver-wrench"></i>
                    </span>
                    Built With.
                </h5>
                <ul className="d-flex mt-0 justify-content-around flex-wrap">
                    <li className="m-4">
                        <p className="p-information">
                            React Js
                        </p></li>
                        <li className="m-4">
                        <p className="p-information">
                            Material-Ui
                        </p>
                    </li>
                    <li className="m-4">
                        <p className="p-information">
                            BootsTrap
                        </p>
                    </li>
                    <li className="m-4">
                        <p className="p-information">
                            Flow Block Chain
                        </p>
                    </li>
                    <li className="m-4">
                        <p className="p-information">
                            Node Js
                        </p>
                    </li>
                    <li className="m-4">
                        <p className="p-information">
                            Mongo DB
                        </p>
                    </li>
                    <li className="m-4">
                        <p className="p-information">
                            Express
                        </p>
                    </li>
                    <li className="m-4">
                        <p className="p-information">
                            Moongose
                        </p>
                    </li>
                    <li className="m-4">
                        <p className="p-information">
                            Css
                        </p>
                    </li>
                </ul>
            </section>
        </>
    )
}
