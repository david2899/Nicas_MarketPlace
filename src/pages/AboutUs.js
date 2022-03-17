import React from 'react'
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';
import "../styles/aboutUs.css";
import { AboutApp } from '../views/AboutApp';
import { Creators } from '../views/Creators';

export const AboutUs = () => {
  return (
    <>
    <div className="backgroundPage">
      <Navigation />
      <div className="row content flex-column pl-4 pt-2 pr-4 pb-2">
       <Creators />
       <AboutApp />
      </div>
      <Footer />
      </div>
    </>
  )
}
