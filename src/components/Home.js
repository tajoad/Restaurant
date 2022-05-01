import React from 'react';
import NavBar from './NavBar';
import './CSS/Home.css';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="dir">
                    <h1>Tee's Restaurant</h1>
                    <p className="address">7, Marvelous Avenue, <br />
                    Orikuta, Ikorodu. </p>
                    <Link href="" className="lnk"> Reserve</Link>
                    <Link href="" className="lnk"> Menu</Link>
                    <Link href="" className="lnk"> Giftcards</Link>
                    <Link href="" className="lnk"> Our Story</Link>
                    <Link href="" className="lnk"> Hours & Location</Link>
                    <Link href="" className="lnk"> Thanksgiving</Link>
                    <Link href="" className="lnk"> Community</Link>
                    <Link href="" className="lnk"> Contact</Link>
                </div>

                <div className="card-container">
                    <div className="card">
                        <img src="https://source.unsplash.com/1600x1600/?cookies" alt="" className="img" />
                        <p className="info">Click to Order in 2 minutes</p>
                        <h1>Cookies</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, maxime.</p>
                    </div>
                    <div className="card">
                        <img src="https://source.unsplash.com/1600x1600/?food" alt="" className="img" />
                        <p className="info">Click to Order in 2 minutes</p>
                        <h1>Food</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, maxime.</p>
                    </div>
                    <div className="card">
                        <img src="https://source.unsplash.com/1600x1600/?drinks" alt="" className="img" />
                        <p className="info">Click to Order in 2 minutes</p>
                        <h1>Drink</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, maxime.</p>
                    </div>
                    <div className="card">
                        <img src="https://source.unsplash.com/1600x1600/?cocktail" alt="" className="img" />
                        <p className="info">Click to Order in 2 minutes</p>
                        <h1>Cocktail</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, maxime.</p>
                    </div>
                    <div className="card">
                        <img src="https://source.unsplash.com/1600x1600/?beverage" alt="" className="img" />
                        <p className="info">Click to Order in 2 minutes</p>
                        <h1>Bevarage</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, maxime.</p>
                    </div>
                    <div className="card">
                        <img src="https://source.unsplash.com/1600x1600/?cakes" alt="" className="img" />
                        <p className="info">Click to Order in 2 minutes</p>
                        <h1>Cakes</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, maxime.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;