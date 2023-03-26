import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateProfileInfo} from "../reducers/profile-reducer";
import {Link} from "react-router-dom";

const EditProfile = () => {
    const info = useSelector(state => state.profile);
    const [profileInfo, setProfileInfo] = useState(info);
    const dispatch = useDispatch();

    const handleSave = () => {
        dispatch(updateProfileInfo(profileInfo));
    };

    const handleCancel = () => {
        setProfileInfo(info);
    };

    const handleFirstNameChange = (event) => {
        const newProfile = {...profileInfo, firstName: event.target.value};
        setProfileInfo(newProfile);
    };

    const handleLastNameChange = (event) => {
        const newProfile = {...profileInfo, lastName: event.target.value};
        setProfileInfo(newProfile);
    };

    const handleBioChange = (event) => {
        const newProfile = {...profileInfo, bio: event.target.value};
        setProfileInfo(newProfile);
    };

    const handleLocationChange = (event) => {
        const newProfile = {...profileInfo, location: event.target.value};
        setProfileInfo(newProfile);
    };

    const handleWebsiteChange = (event) => {
        const newProfile = {...profileInfo, website: event.target.value};
        setProfileInfo(newProfile);
    };
    const handleBornChange = (event) => {
        const newProfile = {...profileInfo, dateOfBirth: event.target.value};
        setProfileInfo(newProfile);
    };

    return (
        <div className={'border border-top-0 border-bottom-0'}>
            <div className={'mx-3 mb-2'}>
                <div className={'row align-items-center'}>
                    <div className={'col-auto pe-2'}>
                        <Link to={'/tuiter/profile'} onClick={() => handleCancel()} className={'btn border float-left px-3 py-1'}>
                            <i className="fa-solid fa-x"></i>
                        </Link>
                    </div>
                    <div className={'col-auto flex-grow-1 ps-0'}>
                        <div className={'header-primary my-0 py-0'}>Edit Profile</div>
                    </div>
                    <div className={'col-auto justify-content-end'}>
                        <Link to={'/tuiter/profile'} onClick={() => handleSave()} className={'btn rounded-pill bg-black text-white'}>Save</Link>
                    </div>
                </div>
            </div>

            <div className={'position-relative'}>
                <img src={`/images/${profileInfo.bannerPicture}`}
                     className={'rounded-2'}
                     height={200}/>

                <img
                    className={"position-absolute rounded-circle profile-img"}
                    src={`/images/${profileInfo.profilePicture}`}
                />

            </div>

                <div className={'text-secondary profile-info-margin mx-3'}>
                    <form className={'form-floating my-3'}>
                        <input
                            className="form-control"
                            id="firstName"
                            value={profileInfo.firstName}
                            onChange={(event) => handleFirstNameChange(event)}/>
                        <label htmlFor="firstName">First Name</label>
                    </form>

                    <form className={'form-floating my-3'}>
                        <input
                            className="form-control"
                            id="lastName"
                            value={profileInfo.lastName}
                            onChange={(event) => handleLastNameChange(event)}/>
                        <label htmlFor="lastName">Last Name</label>
                    </form>

                    <form className={'form-floating my-3'}>
                        <textarea
                                  className="form-control"
                                  id="bio"
                                  onChange={(event) => handleBioChange(event)}>{profileInfo.bio}</textarea>
                        <label htmlFor="bio">Bio</label>
                    </form>


                    <form className={'form-floating'}>
                        <input type="text" className="form-control form-floating" id="location"
                               value={profileInfo.location}
                               onChange={(event) => handleLocationChange(event)}/>
                        <label htmlFor="location">Location</label>
                    </form>

                    <form className={'form-floating my-3'}>
                        <input
                            className="form-control"
                            id="website"
                            value={profileInfo.website}
                            onChange={(event) => handleWebsiteChange(event)}/>
                        <label htmlFor="website">Website</label>
                    </form>

                    <form className={'form-floating my-3'}>
                        <input
                            type={'date'}
                            className="form-control"
                            id="born"
                            onChange={(event) => handleBornChange(event)}/>
                        <label htmlFor="born">Born</label>
                    </form>

            </div>
        </div>
    );
};

export default EditProfile;