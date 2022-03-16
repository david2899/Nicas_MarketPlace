import { useEffect, useState } from "react";
import { Navigation } from "../components/Navigation";
import "../styles/home.css";
import { darkCountry } from "../assets/videos";
import { Footer } from "../components/Footer";
import { buildNFTImg, collectImg } from "../assets/img";
import axios from "axios";
import TableCoins from "../components/TableCoins";

export const Home = () => {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");
  
    const getData = async () => {
      try {
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        );
        setCoins(res.data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      getData();
    }, []);

  return (
    <>
      <Navigation />
      <div className="content-video">
        <h2 className="title-img">Wellcome To Nicas NFT</h2>
        {/* <video className="video-darkCountry" loop autoPlay={true} playsInline preload="auto">
                    <source src={darkCountry} type="video/mp4" />
                </video>  */}
      </div>
      <div className="Container-criptos">
      <div className="container">
      <div className="row">
        <input
          type="text"
          placeholder="Search a Coin"
          className="form-control bg-dark text-light border-0 mt-4 text-center"
          autoFocus
          onChange={(e) => setSearch(e.target.value)}
        />

        <TableCoins coins={coins} search={search} />
      </div>
    </div>
        
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
          <img
            alt="img"
            src="https://images.hdqwalls.com/download/bitcoin-cryptocurrency5k-ne-1920x1080.jpg"
          />
          <h5>Sell NFTs</h5>
        </div>
        <div className="box">
          <img
            alt="img"
            src="https://miro.medium.com/max/1400/0*na6DaZ-l9qEzxGTf"
          />
          <h5>Shop NFTs</h5>
        </div>
        <div className="box">
          <img
            alt="img"
            src="https://www.beingcrypto.com/wp-content/uploads/2021/12/Top-5-Metaverse-Projects-In-Crypto-Market.png"
          />
          <h5>Resell Your NFTs</h5>
        </div>
        <div className="box">
          <img
            alt="img"
            src="https://image.coinpedia.org/wp-content/uploads/2021/12/14121216/crypto-Metaverse.webp"
          />
          <h5>Browse on a secure BlockChain</h5>
        </div>
      </div>
      <Footer />
    </>
  );
};
