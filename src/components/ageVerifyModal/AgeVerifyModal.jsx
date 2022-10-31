import React, { useState, useEffect } from 'react'
import './ageVerifyModal.css'

const AgeVerifyModal = () => {

    const [showVerify, setShowVerify] = useState('verify-modal-hidden');

    const oldEnough = (e) => {
        e.preventDefault();
        setCookie('age-verified', 'yes', 3);
        setShowVerify('verify-modal-hidden');
        window.location.reload();
    }
    const notOldEnough = (e) =>  {
        e.preventDefault();
        alert('You must be 21 or older to visit this site.');
    }

    const getCookie = (cname) => {
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            if (c.includes('age-verified=yes')) {
                return 'yes';
            }
        }
        return "";
    }
    const setCookie = (cname, cvalue, exdays) => {
        const domain = process.env.REACT_APP_BASE_URL.includes('http:') ? "" : "domain=.vapetasia.com;";
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;" + domain;
    }
    
    useEffect(() => {
        if (getCookie('age-verified') === 'yes') {
            setShowVerify('verify-modal-hidden')
        } else {
            setShowVerify('verify-modal-shown');
        }
    }, [showVerify])

    return (
        <>
            <div id="age-verify-modal" className={`${showVerify} verify-modal`}>
                <div className="verify-modal-box">
                    <div className="verify-modal-logo"></div>
                    <div className="verify-modal-title">
                        Are you of legal smoking age?
                    </div>
                    <div className="verify-modal-desc">
                        The products and services on this website are intended for adult use only. By entering this website, you certify that you are over the age of 21.
                    </div>
                    <div className="verify-modal-buttons">
                        <a className="age-verify-button" id="age-verify-yes" onClick={oldEnough} href="#verified">
                            I am over the age of 21
                        </a>
                        <a className="age-verify-button" id="age-verify-no" onClick={notOldEnough} href="#not-verified">
                            I am not over the age of 21
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AgeVerifyModal