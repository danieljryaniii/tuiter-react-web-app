import React from "react";
import './index.css';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Profile = () => {
    const info = useSelector(state => state.profile);
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    return (
        <div className={'border border-top-0 border-bottom-0'}>

            <div className={'mx-3 mb-2'}>
                <div className={'row align-items-center'}>
                    <div className={'col-auto pe-2'}>
                        <Link to={'/tuiter/home'} className={'btn border float-left px-3 py-1'}>
                            <i className="fa-solid fa-arrow-left"></i>
                        </Link>
                    </div>
                    <div className={'col-auto ps-0'}>
                        <div className={'header-primary my-0 py-0'}>{info.firstName} {info.lastName}</div>
                        <div className={'header-secondary my-0 text-secondary py-0'}>5000 Tuits</div>
                    </div>
                </div>
            </div>

            <div className={'position-relative'}>
                <img src={`/images/${info.bannerPicture}`}
                     className={'rounded-2'}
                     height={200}/>

                <img
                    className={"position-absolute rounded-circle profile-img"}
                    src={`/images/${info.profilePicture}`}
                />

            </div>

            <div className={'mx-3 profile-info-margin'}>
                <div className={'row align-items-center mb-3'}>
                    <div className={'col-auto flex-grow-1'}>
                        <div className={'user-name my-0 py-0'}>{info.firstName} {info.lastName}</div>
                        <div className={'user-handle my-0 text-secondary py-0'}>{info.handle}</div>
                    </div>
                    <div className={'col-auto'}>
                        <Link to={'/tuiter/profile/edit-profile'} className={'btn border rounded-pill fw-bold'}>Edit Profile</Link>
                    </div>
                </div>

                <p>
                    {info.bio}
                </p>
                <div className={'text-secondary'}>
                    <span className={'me-3'}>
                        <i className="fa-sharp fa-solid fa-location-dot me-2"></i>
                        {info.location}
                    </span>
                    <span className={'me-3'}>
                        <i className="fa-solid fa-cake-candles me-2"></i>
                        Born {monthNames[parseInt(info.dateOfBirth.slice(5,7)) - 1]} {info.dateOfBirth.slice(0,4)}
                    </span>
                    <span className={'me-3'}>
                        <i className="fa-solid fa-calendar me-2"></i>
                        Joined {monthNames[parseInt(info.dateJoined.slice(5,7)) - 1]} {info.dateJoined.slice(0,4)}
                    </span>
                </div>
                <div className={'my-3'}>
                    <span className={'me-3'}>
                        <b>{info.followingCount}</b> <span className={'ms-1 text-secondary'}>Following</span>
                    </span>
                    <span>
                        <b>{info.followersCount}</b> <span className={'ms-1 text-secondary'}>Following</span>
                    </span>
                </div>

            </div>
        </div>
    );
};

export default Profile;