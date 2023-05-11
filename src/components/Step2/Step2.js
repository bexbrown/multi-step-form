import "./Step2.scss";
import { useEffect } from 'react';
import ArcadeIcon from "../../assets/icons/icon-arcade.svg";
import AdvancedIcon from "../../assets/icons/icon-advanced.svg";
import ProIcon from "../../assets/icons/icon-pro.svg";

function Step2({ paymentSchedule, setPaymentSchedule, plan, setPlan, setPrice }) {

    useEffect(() => {
        if (paymentSchedule === "Monthly") {
            if (plan === "Arcade") {
                setPrice(9)
            }
            if (plan === "Advanced") {
                setPrice(12)
            }
            if (plan === "Pro") {
                setPrice(15)
            }
        }

        if (paymentSchedule === "Yearly") {
            if (plan === "Arcade") {
                setPrice(90)
            }
            if (plan === "Advanced") {
                setPrice(120)
            }
            if (plan === "Pro") {
                setPrice(150)
            }
        }
    })

    function handleArcadeClick() {
        setPlan("Arcade");
    }

    function handleAdvancedClick() {
        setPlan("Advanced");
    }

    function handleProClick() {
        setPlan("Pro");
    }

    function handleMonthlyClick() {
        setPaymentSchedule("Monthly");
    }

    function handleYearlyClick() {
        setPaymentSchedule("Yearly");
    }

    useEffect(() => {
    }, [setPaymentSchedule, paymentSchedule])

    useEffect(() => {
    }, [setPlan, plan])

    return (
        <section className="step2">
            <h1 className="step2__title">Select your plan</h1>
            <span className="step2__text">You have the option of monthly or yearly billing.</span>
            <div className="step2__div">
                <div onClick={handleArcadeClick} className={plan === "Arcade" ? "step2__selected step2__option" : "step2__option"}  >
                    <img alt="icon" src={ArcadeIcon} className="step2__icon" />
                    <div className="step2__option--text">
                        <h2 className="step2__subtitle">Arcade</h2>
                        {paymentSchedule === "Monthly" && <span className="step2__price">$9/month</span>}
                        {paymentSchedule === "Yearly" && <span className="step2__price">$90/year</span>}
                        {paymentSchedule === "Yearly" && <span className="step2__price step2__price--free">2 months free</span>}

                    </div>
                </div>
                <div onClick={handleAdvancedClick} className={plan === "Advanced" ? "step2__selected step2__option" : "step2__option"}>
                    <img alt="icon" src={AdvancedIcon} className="step2__icon" />
                    <div className="step2__option--text">
                        <h2 className="step2__subtitle">Advanced</h2>
                        {paymentSchedule === "Monthly" && <span className="step2__price">$12/month</span>}
                        {paymentSchedule === "Yearly" && <span className="step2__price">$120/year</span>}
                        {paymentSchedule === "Yearly" && <span className="step2__price step2__price--free">2 months free</span>}
                    </div>
                </div>
                <div onClick={handleProClick} className={plan === "Pro" ? "step2__selected step2__option" : "step2__option"}>
                    <img alt="icon" src={ProIcon} className="step2__icon" />
                    <div className="step2__option--text">
                        <h2 className="step2__subtitle">Pro</h2>
                        {paymentSchedule === "Monthly" && <span className="step2__price">$15/month</span>}
                        {paymentSchedule === "Yearly" && <span className="step2__price">$150/month</span>}
                        {paymentSchedule === "Yearly" && <span className="step2__price step2__price--free">2 months free</span>}
                    </div>
                </div>
            </div>
            <div className="step2__switch">
                <span onClick={handleMonthlyClick} className="step2__toggle--text">Monthly</span>
                <span onClick={handleYearlyClick} className="step2__toggle-text--text">Yearly</span>
            </div>
        </section >
    )
}

export default Step2;