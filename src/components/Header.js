import React from 'react'
import  VerifiedUserIcon  from '@material-ui/icons/VerifiedUser';
import  WhatshotIcon  from '@material-ui/icons/Whatshot';
import "./Header.css";
function Header() {
  return (
    <div className="Header-main">
        <h1 className="first-para">Live Spaces</h1>
        <p className="icon-para"><VerifiedUserIcon/>
        <p className="para">All NFTs on Cyber either belong to or were minted by their space creator.</p>
        </p>
        <div className="icons-text-main">
            <p className="trending-box">
                <p className="icon-trending"> <img className="pic-style" src="https://i.pinimg.com/originals/7e/40/87/7e408760537897c1ab1d26b99074c241.png"/>
                <p className="margin-text">24h Trending</p>
                </p>
                </p>

                <p className="trending-box">
                <p className="icon-trendingtwo">Latest Show</p>
                </p>

                <p className="trending-box-popular">
                <p className="icon-trendingthree">Most Popular</p>
                </p>

                <p className="trending-box">
                <p className="icon-trending"> <img className="pic-style1" src="https://cdn.pixabay.com/photo/2016/11/25/07/00/diamond-1857733_1280.png"/>
                <p className="margin-text-1">In Genesis</p>
                </p>
                </p>

                <p className="trending-box">
                <p className="icon-trending"> <img className="pic-style1" src="https://icon-library.com/images/fort-icon/fort-icon-7.jpg"/>
                <p className="margin-text-1">In Temple</p>
                </p>
                </p>

                <p className="trending-box">
                <p className="icon-trending"> <img className="pic-style1" src="https://cdn.staticcrate.com/stock-hd/effects/footagecrate-sandstorm-at-camera-3-prev-full.png"/>
                <p className="margin-text-1">In Void</p>
                </p>
                </p>

                <p className="trending-box">
                <p className="icon-trending"> <img className="pic-style1" src="https://pngimg.com/uploads/wolf/wolf_PNG23185.png"/>
                <p className="margin-text-2">#BAYC</p>
                </p>
                </p>

        </div>
    </div>
  )
}

export default Header