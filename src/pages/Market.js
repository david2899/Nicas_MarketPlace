import React from 'react'
import { Navigation } from "../components/Navigation";
import { NFTs } from "../components/ArrayNFTs"
import "../styles/market.css"
import { Footer } from '../components/Footer';
import { Skeleton } from '@mui/material';
import { FilterNFT } from '../views/FilterNFT';

export const Market = () => {

  return (
    <>
    <div className="backgroundPage">
      <Navigation />
      <div className="content-market ">
        
        {/* <div className="col-md-3"> */}
       <FilterNFT />
       {/* </div> */}
       {/* <div className="col-md-9 cardss"> */}
        <section className="section-NFTs">
          {
            NFTs ?
              NFTs.map((item) => {
                return (
                  <div key={item.id} className="text-white card-nft bg-dark mb-3">
                    <img id="img-card-nft" alt="" src={item.uri} className="card-header" />
                    <div className="card-body-nft">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <div className="d-flex justify-content-between">
                        <h5 className="card-title">{item.price} FUSD</h5>
                        <button >
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                )
              }) :
              (
                NFTs.map((i) => {
                  return (
                    <div key={i} className="text-white card-nft  mb-3">
                      <Skeleton variant="rectangular" width={300} height={250} />
                    </div>
                  )
                })
              )
          }
        </section>
        </div>
        {/* <section className="section-filter">
        <h1>Holla</h1>
        </section>
        <div className="col-12 content-nfts d-flex flex-wrap">

        

        </div> */}
      </div>
      <Footer />
      {/* </div> */}
    </>
  )
}
