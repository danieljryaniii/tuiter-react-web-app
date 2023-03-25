import React from "react";
import './index.css';

const Profile = () => {
    return (
        <div className={'border border-top-0 border-bottom-0'}>

            <div className={'mx-3 mb-2'}>
                <div className={'row align-items-center'}>
                    <div className={'col-auto pe-2'}>
                        <button className={'btn border float-left px-3 py-1'}>
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>
                    </div>
                    <div className={'col-auto ps-0'}>
                        <div className={'header-primary my-0 py-0'}>Dan Ryan</div>
                        <div className={'header-secondary my-0 text-secondary py-0'}>5000 Tuits</div>
                    </div>
                </div>
            </div>

            <div className={'position-relative'}>
                <img src="images/profile_banner.webp"
                     className={'rounded-2'}/>

                <img
                    className={"position-absolute rounded-circle profile-img"}
                    src={"/images/profile_picture.jpeg"}
                />

            </div>

            <div className={'mx-3 profile-info-margin'}>
                <div className={'mb-3'}>
                    <div className={'user-name my-0 py-0'}>Dan Ryan</div>
                    <div className={'user-handle my-0 text-secondary py-0'}>@dryan</div>
                </div>

                <p>
                    CPA turned Computer Scientist. Currently pursuing an MSCS at Northeastern.
                    Passionate about software development.
                    Recently "hired" to develop a new social networking application named <i>Tuiter</i>.
                </p>
                <div className={'text-secondary'}>
                    <span className={'me-3'}>
                        <i className="fa-sharp fa-solid fa-location-dot me-2"></i>
                        Boston, MA
                    </span>
                    <span className={'me-3'}>
                        <i className="fa-solid fa-cake-candles me-2"></i>
                        Born July 1, 2020
                    </span>
                    <span className={'me-3'}>
                        <i className="fa-solid fa-calendar me-2"></i>
                        Joined January 1, 2023
                    </span>
                </div>
                <div className={'my-3'}>
                    <span className={'me-3'}>
                        <b>123</b> <span className={'ms-1 text-secondary'}>Following</span>
                    </span>
                    <span>
                        <b>234</b> <span className={'ms-1 text-secondary'}>Following</span>
                    </span>
                </div>

            </div>
        </div>
    );
};

export default Profile;