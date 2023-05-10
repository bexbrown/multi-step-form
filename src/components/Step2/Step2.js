import "./Step2.scss";
import { useEffect } from 'react';
import ArcadeIcon from "../../assets/icons/icon-arcade.svg";
import AdvancedIcon from "../../assets/icons/icon-advanced.svg";
import ProIcon from "../../assets/icons/icon-pro.svg";

function Step2({ paymentSchedule, setPaymentSchedule, plan, setPlan }) {

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
        <section>

            <h1>Select your plan</h1>
            <span>You have the option of monthly or yearly billing.</span>
            <div>
                <div onClick={handleArcadeClick}>
                    <img alt="icon" src={ArcadeIcon} />
                    <div>
                        <h2>Arcade</h2>
                        {paymentSchedule === "Monthly" && <span>$9/month</span>}
                        {paymentSchedule === "Yearly" && <span>$90/year</span>}
                        {paymentSchedule === "Yearly" && <span>2 months free</span>}

                    </div>
                </div>
                <div onClick={handleAdvancedClick}>
                    <img alt="icon" src={AdvancedIcon} />
                    <div>
                        <h2>Advanced</h2>
                        {paymentSchedule === "Monthly" && <span>$12/month</span>}
                        {paymentSchedule === "Yearly" && <span>$120/year</span>}
                        {paymentSchedule === "Yearly" && <span>2 months free</span>}
                    </div>
                </div>
                <div onClick={handleProClick}>
                    <img alt="icon" src={ProIcon} />
                    <div>
                        <h2>Pro</h2>
                        {paymentSchedule === "Monthly" && <span>$15/month</span>}
                        {paymentSchedule === "Yearly" && <span>$150/month</span>}
                        {paymentSchedule === "Yearly" && <span>2 months free</span>}
                    </div>
                </div>
                <div>
                    <span onClick={handleMonthlyClick}>Monthly</span>
                    <span onClick={handleYearlyClick}>Yearly</span>
                </div>
            </div>
        </section>
    )
}

export default Step2;