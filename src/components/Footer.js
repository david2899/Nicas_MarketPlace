import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/footer.css"

export const Footer = () => {
    return (
        <footer className="footer">
            <section className="contet-section">
                <h5 className="text-social">Follow Us !</h5>
                <a href='https://www.facebook.com' target="_blank" rel="noreferrer"><img alt="icon-Facebook" className="icons-social" src="https://img.icons8.com/color/48/000000/facebook.png"   /></a>
                <a href='https://www.instagram.com/' target="_blank" rel="noreferrer"><img alt="icon-Instagram" className="icons-social" src="https://img.icons8.com/color/48/000000/instagram-new--v2.png" /></a>
                <a href='https://discord.com/' target="_blank" rel="noreferrer"><img alt="icon-Discord" className="icons-social" src="https://img.icons8.com/color/48/000000/discord--v2.png" /></a>
            </section>
            <section className="contet-section  d-flex flex-column ">
                <span className="with-love-by">With Love by David & Osmany
                    <span className="ml-2">
                        <i className="fas fa-heart"></i>
                    </span></span>
                <img className="logo-flow" alt="logo-Flow" src="https://viv3.com/63692c5d3db449f5.png" />
            </section>
            <section className="contet-section d-flex flex-column">
                <h5 className="text-social">Activities !</h5>
                <Link to="/create" >Create</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/artists">Artists</Link>
            </section>
        </footer>
    )
}
