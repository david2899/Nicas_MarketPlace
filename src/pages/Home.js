import React from 'react';
import { Navigation } from '../components/Navigation';
import "../styles/home.css";
import { darkCountry } from "../assets/videos";
import { Footer } from "../components/Footer";
import { buildNFTImg, collectImg } from '../assets/img';;

export const Home = () => {



    return (
        <>
            <Navigation />
            <div className="content-video">
                <h2 className="title-img">Wellcome To Nicas NFT</h2>
                <video className="video-darkCountry" loop autoPlay={true} playsInline preload="auto">
                    <source src={darkCountry} type="video/mp4" />
                </video>
            </div>
            <h3 className="title-activities">Activities</h3>
            <div className="row justify-content-center pl-4 pt-2 pr-4 pb-2 mb-4">
                <div className="box">
                    <img alt="img" src={collectImg} />
                    <h5>Build Collections</h5>
                </div>
                <div className="box">
                    <img alt="img" src={buildNFTImg} />
                    <h5>Create NFTs</h5>
                </div>
                <div className="box">
                    <img alt="img" src="https://images.hdqwalls.com/download/bitcoin-cryptocurrency5k-ne-1920x1080.jpg" />
                    <h5>Sell NFTs</h5>
                </div>
                <div className="box">
                    <img alt="img" src="https://miro.medium.com/max/1400/0*na6DaZ-l9qEzxGTf" />
                    <h5>Shop NFTs</h5>
                </div>
                <div className="box">
                    <img alt="img" src="https://www.beingcrypto.com/wp-content/uploads/2021/12/Top-5-Metaverse-Projects-In-Crypto-Market.png" />
                    <h5>Resell Your NFTs</h5>
                </div>
                <div className="box">
                    <img alt="img" src="https://image.coinpedia.org/wp-content/uploads/2021/12/14121216/crypto-Metaverse.webp" />
                    <h5>Browse on a secure BlockChain</h5>
                </div>
            </div>
            <Footer />
        </>
    )
}
