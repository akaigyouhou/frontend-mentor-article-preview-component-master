import { useState } from 'react';
import "./profile.css";
import Avatar from '../image/avatar-michelle.jpg';
import FacebookIcon from '../image/icon-facebook.svg';
import TwitterIcon from '../image/icon-twitter.svg';
import PinterestIcon from '../image/icon-pinterest.svg';

function Profile() {
    const [open, setOpen] = useState(false);
    const change = () => {
        setOpen((value) => !value);
    }
    return (
        <div className="profile">
            <div className={"share" + (open ? " open" : "")}>
                <p>S H A R E</p>
                <div className="brand">
                    <img src={FacebookIcon} alt="facebook"></img>
                    <img src={TwitterIcon} alt="twitter"></img>
                    <img src={PinterestIcon} alt="pinterest"></img>
                </div>
                <div className="share-icon" onClick={change}></div>
            </div>
            <img className="avatar" src={Avatar} alt="avatar"></img>
            <div className="info">
                <div className="name">
                    Michelle Appleton
                </div>
                <div className="data">
                    28 Jun 2020
                </div>
            </div>
            {/* <img className="share" src={ShareIcon} alt="share"></img> */}
            <div className="share-icon" onClick={change}></div>
        </div>
    );
}

export default Profile;
