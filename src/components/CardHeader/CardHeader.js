import './CardHeader.scss';

function CardHeader() {
    return (
        <div>
            {/*mobile*/}
            {/* <div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </div> */}
            <div>
                <div>1</div>
                <div>
                    <div>Step 1</div>
                    <div>Your info</div>
                </div>
            </div>
            <div>
                <div>2</div>
                <div>
                    <div>Step 2</div>
                    <div>Select plan</div>
                </div>
            </div>
            <div>
                <div>3</div>
                <div>
                    <div>Step 3</div>
                    <div>Add-ons</div>
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