import React from 'react'

const RunningHeader = () => {
    return (
        <>
            <header>
                <div className="col-1">
                    <div>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" fill="#9FE870" />
                        </svg>
                        <h6>Currently Working</h6>
                    </div>
                </div>
                <div className="col-2">
                    <div className="marquee">
                        <div>
                            <p>A website for selling adulteration free mustard oil <span>Anjali Gold</span></p>
                            <p>A website for selling adulteration free mustard oil <span>Anjali Gold</span></p>
                            <p>A website for selling adulteration free mustard oil <span>Anjali Gold</span></p>
                            <p>A website for selling adulteration free mustard oil <span>Anjali Gold</span></p>
                            <p>A website for selling adulteration free mustard oil <span>Anjali Gold</span></p>
                        </div>
                        <div>
                            <p>A website for selling adulteration free mustard oil <span>Anjali Gold</span></p>
                            <p>A website for selling adulteration free mustard oil <span>Anjali Gold</span></p>
                            <p>A website for selling adulteration free mustard oil <span>Anjali Gold</span></p>
                            <p>A website for selling adulteration free mustard oil <span>Anjali Gold</span></p>
                            <p>A website for selling adulteration free mustard oil <span>Anjali Gold</span></p>
                        </div>
                        <div>
                            <p>A website for selling adulteration free mustard oil <span>Anjali Gold</span></p>
                            <p>A website for selling adulteration free mustard oil <span>Anjali Gold</span></p>
                            <p>A website for selling adulteration free mustard oil <span>Anjali Gold</span></p>
                            <p>A website for selling adulteration free mustard oil <span>Anjali Gold</span></p>
                            <p>A website for selling adulteration free mustard oil <span>Anjali Gold</span></p>
                        </div>
                        <div>
                            <p>A website for selling adulteration free mustard oil <span>Anjali Gold</span></p>
                            <p>A website for selling adulteration free mustard oil <span>Anjali Gold</span></p>
                            <p>A website for selling adulteration free mustard oil <span>Anjali Gold</span></p>
                            <p>A website for selling adulteration free mustard oil <span>Anjali Gold</span></p>
                            <p>A website for selling adulteration free mustard oil <span>Anjali Gold</span></p>
                        </div>
                    </div>
                </div>
            </header>

            <style jsx>
                {`
                header {
                    display: flex;
                    align-items: center;
                    height: 60px;
                }
                
                header .col-1 {
                    width: 15%;
                }
                
                header .col-2 {
                    width: 85%;
                }
                
                header .col-1 div {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    width: max-content;
                    min-width: max-content;
                }
                
                header .col-1 div h6 {
                    color: #D9D9D9;
                    font-size: 16px;
                    font-weight: 500;
                }
                
                header .marquee {
                    display: inline-flex;
                    gap: 10px;
                    width: 100%;
                    color: #ffffff;
                    font-size: 15px;
                    overflow: hidden;
                }
                
                header .marquee div {
                    display: inline-flex;
                    width: max-content;
                    min-width: max-content;
                    animation: marquee 30s linear infinite; /* Increased duration */
                }
                
                header .marquee div p {
                    color: #717171;
                    font-size: 15px;
                    font-weight: 300;
                    padding: 0 15px;
                }
                
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }
                
                header .col-2 div p span {
                    color: #D9D9D9;
                }
            `}
            </style>
        </>
    )
}

export default RunningHeader