import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const EditProfile = () => {
    const info = useSelector(state => state.profile);

    return (
        <div className={'border border-top-0 border-bottom-0'}>
            <div className={'mx-3 mb-2'}>
                <div className={'row align-items-center'}>
                    <div className={'col-auto pe-2'}>
                        <Link to={'/tuiter/profile'} className={'btn border float-left px-3 py-1'}>
                            <i className="fa-solid fa-x"></i>
                        </Link>
                    </div>
                    <div className={'col-auto flex-grow-1 ps-0'}>
                        <div className={'header-primary my-0 py-0'}>Edit Profile</div>
                    </div>
                    <div className={'col-auto justify-content-end'}>
                        <Link to={'/tuiter/profile'} className={'btn rounded-pill bg-black text-white'}>Save</Link>
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

                <div className={'text-secondary profile-info-margin'}>
                    <form className={'form-floating my-3'}>
                        <input
                            className="form-control"
                            id="name"
                            value={info.firstName + ' ' + info.lastName}/>
                        <label htmlFor="name">Name</label>
                    </form>

                    <form className={'form-floating my-3'}>
                        <textarea
                                  className="form-control"
                                  id="bio">{info.bio}</textarea>
                        <label htmlFor="bio">Bio</label>
                    </form>


                    <form className={'form-floating'}>
                        <input type="text" className="form-control form-floating" id="location"
                               value={info.location}/>
                        <label htmlFor="location">Location</label>
                    </form>

                    <form className={'form-floating my-3'}>
                        <input
                            className="form-control"
                            id="website"
                            value={info.website}/>
                        <label htmlFor="website">Website</label>
                    </form>

                    <form className={'form-floating my-3'}>
                        <input
                            type={'date'}
                            className="form-control"
                            id="born"/>
                        <label htmlFor="born">Born</label>
                    </form>

            </div>
        </div>
    );
};

export default EditProfile;