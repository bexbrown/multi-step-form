import './CardHeader.scss';

function CardHeader() {
    return (
        <div className="header">
            {/*mobile*/}
            {/* <div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </div> */}
            <div className="header__1">
                <span>1</span>
                <div>
                    <span>Step 1</span>
                    <span>Your info</span>
                </div>
            </div>
            <div>
                <span>2</span>
                <div>
                    <span>Step 2</span>
                    <span>Select plan</span>
                </div>
            </div>
            <div>
                <span>3</span>
                <div>
                    <span>Step 3</span>
                    <span>Add-ons</span>
                </div>
            </div>
            <div>
                <div>4</div>
                <div>
                    <div>Step 4</div>
                    <div>Summary</div>
                </div>
            </div>
        </div>
    )
}

export default CardHeader;