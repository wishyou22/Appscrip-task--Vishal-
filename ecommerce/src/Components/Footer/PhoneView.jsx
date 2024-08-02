import React, { useState } from 'react';
import './PhoneView.css'; 
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import gpay from "../../Assets/apple pay.png"
import gpay1 from "../../Assets/google pay.png"
import gpay2 from "../../Assets/mastercard.png"
import gpay3 from "../../Assets/pay pal.jpg"
import flag from "../../Assets/americaflag2.jpg"


const PhoneView = () => {
  const [isMettamuseOpen, setIsMettamuseOpen] = useState(false);
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
  const [isFollow, setIsFollow] = useState(false);

  const toggleMettamuse = () => {
    setIsMettamuseOpen(!isMettamuseOpen);
  };

  const toggleQuickLinks = () => {
    setIsQuickLinksOpen(!isQuickLinksOpen);
  };
  const toggleQuickLinks1 = () => {
    setIsFollow(!isFollow);
  };

  return (
    <div className="phone-view">
      <div className="newsletter">
        <h3>BE THE FIRST TO KNOW</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and.</p>
      </div>
      <div className='subscribe-form '>
      <input type="email" placeholder="Enter your e-mail..." />
      <button>SUBSCRIBE</button>
      </div>
      
      <div className="contact1">
        <p>CALL US</p>
        <p>+44 221 133 5360 • customercare@mettamuse.com</p>
      </div>
      
      <div className="currency">
        <p>CURRENCY</p>
        <div><img src={flag}/><p> • USD</p></div>
      </div>
      
      <div className="dropdown1">
        <div onClick={toggleMettamuse} className="dropdown1-header">
          <p>mettä muse</p>
          <span>{isMettamuseOpen ? <MdKeyboardArrowUp/> : <MdKeyboardArrowDown/> }</span>
        </div>
        {isMettamuseOpen && (
          <div className="dropdown1-content">
            {/* Add mettä muse sublinks here */}
            <p>Sublink 1</p>
            <p>Sublink 2</p>
          </div>
        )}
      </div>
      
      <div className="dropdown1">
        <div onClick={toggleQuickLinks} className="dropdown1-header">
          <p>QUICK LINKS</p>
          <span>{isQuickLinksOpen ?  <MdKeyboardArrowUp/> : <MdKeyboardArrowDown/>}</span>
        </div>
        {isQuickLinksOpen && (
          <div className="dropdow1-content">
            {/* Add quick links sublinks here */}
            <p>Sublink 1</p>
            <p>Sublink 2</p>
          </div>
        )}
      </div>
      
      <div className="dropdown1">
        <div onClick={toggleQuickLinks1} className="dropdown1-header">
          <p>FOLLOW US</p>
          <span>{isFollow ?  <MdKeyboardArrowUp/> : <MdKeyboardArrowDown/>}</span>
        </div>
        {isFollow && (
          <div className="dropdow1-content">
            {/* Add quick links sublinks here */}
            <div>
            <p> <i className="fab fa-instagram"></i></p>
            <p> <i className="fab fa-linkedin"></i></p>
            </div>
          </div>
        )}
      </div>
      
      <div className="payments">
        <p>mettä muse ACCEPTS</p>
        <div className="payment-icons">
          <img src={gpay} alt="Google Pay" />
          <img src={gpay1} alt="MasterCard" />
          <img src={gpay2}alt="American Express" />
          <img src={gpay3} alt="Apple Pay" />
          
        </div>
      </div>
      
      <div className="footer">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </div>
  );
};

export default PhoneView;
