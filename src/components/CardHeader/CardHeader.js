import './CardHeader.scss';
import { useState } from 'react';

function CardHeader({ step }) {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    window.onresize = getWindowSize;

    function getWindowSize() {
        let width = window.innerWidth;
        setWindowWidth(width);
    }

    console.log(step)

    return (
        <div className="header">
            {windowWidth < 768 &&
                <div className="header__div--mobile">
                    <div className={step === 1 ? "header__outline--selected header__outline" : "header__outline"}>
                        <div className="header__number">1</div>
                    </div>
                    <div className={step === 2 ? "header__outline--selected header__outline" : "header__outline"}>
                        <div className="header__number">2</div>
                    </div>
                    <div className={step === 3 ? "header__outline--selected header__outline" : "header__outline"}>
                        <div className="header__number">3</div>
                    </div>
                    <div className={step === 4 ? "header__outline--selected header__outline" : "header__outline"}>
                        <div className="header__number">4</div>
                    </div>
                </div>}
            {
                windowWidth >= 768 &&
                <div className="header__div--tablet">
                    <div className="header__row">
                        <div className={step === 1 ? "header__outline--selected header__outline" : "header__outline"}>
                            <span className="header__number">1</span>
                        </div>
                        <div className="header__text">
                            <span>Step 1</span>
                            <span className="header__text--about">Your info</span>
                        </div>
                    </div>
                    <div className="header__row">
                        <div className={step === 2 ? "header__outline--selected header__outline" : "header__outline"}>
                            <span className="header__number">2</span>
                        </div>
                        <div className="header__text">
                            <span>Step 2</span>
                            <span className="header__text--about">Select plan</span>
                        </div>
                    </div>
                    <div className="header__row">
                        <div className={step === 3 ? "header__outline--selected header__outline" : "header__outline"}>
                            <span className="header__number">3</span>
                        </div>
                        <div className="header__text">
                            <span>Step 3</span>
                            <span className="header__text--about">Add-ons</span>
                        </div>
                    </div>
                    <div className="header__row">
                        <div className={step === 4 ? "header__outline--selected header__outline" : "header__outline"}>
                            <div className="header__number">4</div>
                        </div>
                        <div className="header__text">
                            <div>Step 4</div>
                            <div className="header__text--about">Summary</div>
                        </div>
                    </div>

                </div>
            }
        </div >
    )
}

export default CardHeader;