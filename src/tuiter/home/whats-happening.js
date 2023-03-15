import React from "react";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuit} from "../reducers/tuit-feed-reducer";
const WhatsHappening = () => {
    const [whatsHappening, setWhatsHappening] = useState({tuit: ""});
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch(createTuit(whatsHappening));
        setWhatsHappening({tuit: ""});
    };

    const tuitChangeHandler = (event) => {
        const tuitValue = event.target.value;
        const newTuit = {tuit: tuitValue};
        setWhatsHappening(newTuit);
    };

    return (
        <div className={'row'}>
            <div className={'col-auto'}>
                <img
                    className={"rounded-circle"}
                    width={60}
                    height={60}
                    src={`/images/nasa.jpeg`}
                />
            </div>
            <div className={'col-auto flex-grow-1'}>
                <textarea placeholder={"What's Happening?"}
                          value={whatsHappening.tuit}
                          className={'form-control border-0'}
                          onChange={(event) => tuitChangeHandler(event)}
                ></textarea>
                <div>
                    <button className="rounded-pill btn btn-primary float-end m-2 px-3 fw-bold"
                            onClick={() => tuitClickHandler()}>
                        Tuit
                    </button>
                    <div className="text-primary fs-2">
                        <i className="bi bi-card-image me-3"></i>
                        <i className="bi bi-filetype-gif me-3"></i>
                        <i className="bi bi-bar-chart me-3"></i>
                        <i className="bi bi-emoji-smile me-3"></i>
                        <i className="bi bi-geo-alt"></i>
                    </div>
                </div>
            </div>
            <div className="col-12"><hr/></div>
        </div>
    );
};

export default WhatsHappening;