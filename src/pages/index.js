import { useEffect, useState } from "react"

const Homepage = () => {
    const [currentTime, setCurrentTime] = useState();
    useEffect(() => {
        const updateCurrentTime = () => {
            const currentDate = new Date();
            let currentHour = currentDate.getHours();
            const currentMinutes = currentDate.getMinutes();
            const ampm = currentHour >= 12 ? 'PM' : 'AM';
            currentHour = currentHour % 12 || 12;
            const formattedMinutes = currentMinutes < 10 ? '0' + currentMinutes : currentMinutes;
            setCurrentTime(`${currentHour}:${formattedMinutes} ${ampm}`);
        };

        updateCurrentTime();
        const intervalId = setInterval(updateCurrentTime, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <main>
                <header>
                    <div className="header-col-1">
                      <img src="./roastify-logo.webp" alt="" />
                    </div>
                    <div className="header-col-2">
                        <p>Delhi, India <span>{currentTime}</span></p>
                        <div className="menu-trigger">
                            Menu
                            <svg width="40" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="22.2839" cy="22" r="20.75" stroke="#E8E8E8" strokeWidth="1.5" />
                                <rect x="15.2839" y="16" width="4" height="4" fill="#21201F" />
                                <rect x="15.2839" y="24" width="4" height="4" fill="#21201F" />
                                <rect x="24.2839" y="16" width="4" height="4" fill="#21201F" />
                                <rect x="24.2839" y="24" width="4" height="4" fill="#21201F" />
                            </svg>
                        </div>
                    </div>
                </header>
                <section>
                    <div className="hero-section">
                        <div className="hero-container">
                            <h1>Top-Notch Subscription Magic for Trailblazing Impulse Brands!</h1>
                            <p>We collaborate with impulsive brands to create, refine, and enhance product experiences—all
                                conveniently covered by a single, transparent monthly fee.</p>
                            <div>
                                <button className="work">
                                    <svg width="22" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M15.4559 2.57147C13.7131 3.0335 11.4044 3.9555 8.2387 5.22178C6.8478 5.77814 6.3223 5.99907 5.91497 6.35627C5.80543 6.45233 5.70231 6.55545 5.60626 6.66498C5.24906 7.07231 5.02812 7.59781 4.47176 8.98871C3.20549 12.1544 2.28348 14.4631 1.82145 16.2059C1.35281 17.9736 1.42875 18.9168 1.84148 19.5242C2.07788 19.8721 2.37792 20.1721 2.7258 20.4085C3.33318 20.8212 4.27637 20.8972 6.04412 20.4285C7.78691 19.9665 10.0956 19.0445 13.2613 17.7782C14.6522 17.2219 15.1777 17.0009 15.585 16.6437L16.0438 17.1669L15.585 16.6437C15.6945 16.5477 15.7977 16.4446 15.8937 16.335L16.4226 16.7988L15.8937 16.335C16.2509 15.9277 16.4719 15.4022 17.0282 14.0113C18.2945 10.8456 19.2165 8.53692 19.6785 6.79413C20.1472 5.02639 20.0712 4.0832 19.6585 3.47582C19.4221 3.12794 19.1221 2.8279 18.7742 2.5915C18.1668 2.17876 17.2236 2.10282 15.4559 2.57147ZM15.0715 1.12155C16.8992 0.637018 18.4276 0.542423 19.6172 1.35084C20.1215 1.69352 20.5565 2.12846 20.8991 2.63275C21.7076 3.82241 21.613 5.35082 21.1284 7.17851C20.6401 9.02039 19.6828 11.4137 18.4427 14.5139L18.4209 14.5684C18.4039 14.611 18.387 14.6532 18.3704 14.6948C17.8825 15.9154 17.569 16.6997 17.0215 17.324C16.8823 17.4828 16.7328 17.6323 16.574 17.7715C15.9497 18.319 15.1654 18.6325 13.9448 19.1204C13.9032 19.137 13.861 19.1539 13.8184 19.1709L13.7639 19.1927C10.6637 20.4328 8.27038 21.3902 6.4285 21.8785C4.60081 22.363 3.07239 22.4576 1.88273 21.6492C1.37845 21.3065 0.943507 20.8715 0.600828 20.3673L1.22116 19.9457L0.600827 20.3673C-0.207593 19.1776 -0.112997 17.6492 0.371539 15.8215C0.859836 13.9796 1.81718 11.5863 3.05727 8.48607L3.07905 8.43163C3.09611 8.38896 3.11296 8.34681 3.12961 8.30517C3.61752 7.08455 3.931 6.3003 4.47847 5.67599C4.61771 5.51721 4.7672 5.36773 4.92598 5.22849C5.55028 4.68102 6.33454 4.36753 7.55517 3.87962C7.59681 3.86297 7.63895 3.84613 7.68161 3.82906L7.73605 3.80729C10.8363 2.56719 13.2296 1.60985 15.0715 1.12155ZM10.75 9.25C9.50735 9.25 8.49999 10.2574 8.49999 11.5C8.49999 12.7426 9.50735 13.75 10.75 13.75C11.9926 13.75 13 12.7426 13 11.5C13 10.2574 11.9926 9.25 10.75 9.25ZM6.99999 11.5C6.99999 9.42894 8.67892 7.75 10.75 7.75C12.8211 7.75 14.5 9.42894 14.5 11.5C14.5 13.5711 12.8211 15.25 10.75 15.25C8.67892 15.25 6.99999 13.5711 6.99999 11.5Z"
                                            fill="white" />
                                    </svg>
                                    See our Work
                                </button>
                                <button className="book-call">
                                    <svg width="22" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2 12.2292C2 8.14366 2 6.10091 3.2692 4.8317C4.53841 3.5625 6.58116 3.5625 10.6667 3.5625H15C19.0855 3.5625 21.1283 3.5625 22.3975 4.8317C23.6667 6.10091 23.6667 8.14366 23.6667 12.2292V14.3958C23.6667 18.4813 23.6667 20.5241 22.3975 21.7933C21.1283 23.0625 19.0855 23.0625 15 23.0625H10.6667C6.58116 23.0625 4.53841 23.0625 3.2692 21.7933C2 20.5241 2 18.4813 2 14.3958V12.2292Z"
                                            stroke="#21201F" strokeWidth="2.5" />
                                        <path d="M7.41667 3.5625V1.9375" stroke="#21201F" strokeWidth="2.5"
                                            strokeLinecap="round" />
                                        <path d="M18.25 3.5625V1.9375" stroke="#21201F" strokeWidth="2.5"
                                            strokeLinecap="round" />
                                        <path d="M2.54167 8.97917H23.125" stroke="#21201F" strokeWidth="2.5"
                                            strokeLinecap="round" />
                                    </svg>

                                    Book a Call
                                </button>
                            </div>
                        </div>
                        <p className="hero-note">Flat monthly fee <span>·</span> No surprises <span>·</span> No contracts
                            <span>·</span> Pause or
                            cancel anytime
                        </p>
                    </div>
                    <div className="client-section">
                        <div className="clientele">
                            <div className="clientele-container">
                                <img src="" alt="" />
                                <div className="col-1">
                                    <div>
                                        <h4>Our friends & partners</h4>
                                        <p>Some brands that’ve tasted the goodness. You might’ve heard of some of these.</p>
                                    </div>
                                </div>
                                <div className="col-2"></div>
                            </div>
                        </div>
                    </div>
                    <div className="how-it-works">
                        <div className="how-it-works-container">
                            <h2>Seamless design and development. <span>Making the process easy and efficient by breaking it into
                                manageable tasks.</span></h2>
                            <div className="steps">
                                <div>
                                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="100" height="100" fill="#D9D9D9" />
                                    </svg>
                                    <p><span>Subscribe</span> and gain access to a Trello board and Slack for collaboration.</p>
                                </div>
                                <div>
                                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="100" height="100" fill="#D9D9D9" />
                                    </svg>
                                    <p><span>Subscribe</span> and gain access to a Trello board and Slack for collaboration.</p>
                                </div>
                                <div>
                                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="100" height="100" fill="#D9D9D9" />
                                    </svg>
                                    <p><span>Subscribe</span> and gain access to a Trello board and Slack for collaboration.</p>
                                </div>
                                <div>
                                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="100" height="100" fill="#D9D9D9" />
                                    </svg>
                                    <p><span>Subscribe</span> and gain access to a Trello board and Slack for collaboration.</p>
                                </div>
                            </div>
                            <p className="how-it-works-note">While we recommend our workflow for efficiency, we're also ready to
                                adapt
                                to your established processes and tools to ensure a perfect fit with your team's needs.x</p>
                        </div>
                    </div>
                    <div className="subscriptions">
                        <div className="subscription-container">
                            <div className="subscriptions-header">
                                <h2>Subscribe and start making
                                    <br />
                                    <span>Roastify together.</span>
                                </h2>
                                <p>Clear pricing, no surprises. Choose month-to-month or one-time fees for transparent
                                    subscriptions.</p>
                            </div>
                            <div className="subscription-plans">
                                <div className="subscription">
                                    <div className="subscription-header">
                                        <div>
                                            <h4>Rhythm Pro</h4>
                                            <p>$6,995 / monthly</p>
                                        </div>
                                        <p>Best for startups and founders looking to iterate quickly, bypassing the headache of
                                            trying
                                            to find and hire top-quality designers.</p>
                                    </div>
                                    <button>
                                        <svg width="22" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.37701 12.2292C1.37701 8.14366 1.37701 6.10091 2.64622 4.8317C3.91542 3.5625 5.95818 3.5625 10.0437 3.5625H14.377C18.4625 3.5625 20.5053 3.5625 21.7745 4.8317C23.0437 6.10091 23.0437 8.14366 23.0437 12.2292V14.3958C23.0437 18.4813 23.0437 20.5241 21.7745 21.7933C20.5053 23.0625 18.4625 23.0625 14.377 23.0625H10.0437C5.95817 23.0625 3.91542 23.0625 2.64622 21.7933C1.37701 20.5241 1.37701 18.4813 1.37701 14.3958V12.2292Z"
                                                stroke="#21201F" strokeWidth="2.5" />
                                            <path d="M6.7937 3.5625V1.9375" stroke="#21201F" strokeWidth="2.5"
                                                strokeLinecap="round" />
                                            <path d="M17.627 3.5625V1.9375" stroke="#21201F" strokeWidth="2.5"
                                                strokeLinecap="round" />
                                            <path d="M1.9187 8.97925H22.502" stroke="#21201F" strokeWidth="2.5"
                                                strokeLinecap="round" />
                                        </svg>
                                        Book a Call
                                    </button>
                                    <div className="capabilities">
                                        <h3>Capabilities</h3>
                                        <div className="capability">
                                            <div>
                                                <p>Framer</p>
                                            </div>
                                            <div>
                                                <p>Framer</p>
                                            </div>
                                            <div>
                                                <p>Framer</p>
                                            </div>
                                            <div>
                                                <p>Framer</p>
                                            </div>
                                            <div>
                                                <p>Framer</p>
                                            </div>
                                            <div>
                                                <p>Framer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="subscription">
                                    <div className="subscription-header">
                                        <div>
                                            <h4>Rhythm Pro</h4>
                                            <p>$6,995 / monthly</p>
                                        </div>
                                        <p>Best for startups and founders looking to iterate quickly, bypassing the headache of
                                            trying
                                            to find and hire top-quality designers.</p>
                                    </div>
                                    <button>
                                        <svg width="22" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.37701 12.2292C1.37701 8.14366 1.37701 6.10091 2.64622 4.8317C3.91542 3.5625 5.95818 3.5625 10.0437 3.5625H14.377C18.4625 3.5625 20.5053 3.5625 21.7745 4.8317C23.0437 6.10091 23.0437 8.14366 23.0437 12.2292V14.3958C23.0437 18.4813 23.0437 20.5241 21.7745 21.7933C20.5053 23.0625 18.4625 23.0625 14.377 23.0625H10.0437C5.95817 23.0625 3.91542 23.0625 2.64622 21.7933C1.37701 20.5241 1.37701 18.4813 1.37701 14.3958V12.2292Z"
                                                stroke="#21201F" strokeWidth="2.5" />
                                            <path d="M6.7937 3.5625V1.9375" stroke="#21201F" strokeWidth="2.5"
                                                strokeLinecap="round" />
                                            <path d="M17.627 3.5625V1.9375" stroke="#21201F" strokeWidth="2.5"
                                                strokeLinecap="round" />
                                            <path d="M1.9187 8.97925H22.502" stroke="#21201F" strokeWidth="2.5"
                                                strokeLinecap="round" />
                                        </svg>
                                        Book a Call
                                    </button>
                                    <div className="capabilities">
                                        <h3>Capabilities</h3>
                                        <div className="capability">
                                            <div>
                                                <p>Framer</p>
                                            </div>
                                            <div>
                                                <p>Framer</p>
                                            </div>
                                            <div>
                                                <p>Framer</p>
                                            </div>
                                            <div>
                                                <p>Framer</p>
                                            </div>
                                            <div>
                                                <p>Framer</p>
                                            </div>
                                            <div>
                                                <p>Framer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="subscription">
                                    <div className="subscription-header">
                                        <div>
                                            <h4>Rhythm Pro</h4>
                                            <p>$6,995 / monthly</p>
                                        </div>
                                        <p>Best for startups and founders looking to iterate quickly, bypassing the headache of
                                            trying
                                            to find and hire top-quality designers.</p>
                                    </div>
                                    <button>
                                        <svg width="22" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.37701 12.2292C1.37701 8.14366 1.37701 6.10091 2.64622 4.8317C3.91542 3.5625 5.95818 3.5625 10.0437 3.5625H14.377C18.4625 3.5625 20.5053 3.5625 21.7745 4.8317C23.0437 6.10091 23.0437 8.14366 23.0437 12.2292V14.3958C23.0437 18.4813 23.0437 20.5241 21.7745 21.7933C20.5053 23.0625 18.4625 23.0625 14.377 23.0625H10.0437C5.95817 23.0625 3.91542 23.0625 2.64622 21.7933C1.37701 20.5241 1.37701 18.4813 1.37701 14.3958V12.2292Z"
                                                stroke="#21201F" strokeWidth="2.5" />
                                            <path d="M6.7937 3.5625V1.9375" stroke="#21201F" strokeWidth="2.5"
                                                strokeLinecap="round" />
                                            <path d="M17.627 3.5625V1.9375" stroke="#21201F" strokeWidth="2.5"
                                                strokeLinecap="round" />
                                            <path d="M1.9187 8.97925H22.502" stroke="#21201F" strokeWidth="2.5"
                                                strokeLinecap="round" />
                                        </svg>
                                        Book a Call
                                    </button>
                                    <div className="capabilities">
                                        <h3>Capabilities</h3>
                                        <div className="capability">
                                            <div>
                                                <p>Framer</p>
                                            </div>
                                            <div>
                                                <p>Framer</p>
                                            </div>
                                            <div>
                                                <p>Framer</p>
                                            </div>
                                            <div>
                                                <p>Framer</p>
                                            </div>
                                            <div>
                                                <p>Framer</p>
                                            </div>
                                            <div>
                                                <p>Framer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="onboarding">
                        <div className="onboarding-container">
                            <h2>What exciting steps await you after
                                <br /> <span>subscribing us?</span>
                            </h2>
                            <div className="onboarding-steps">
                                <div>
                                    <svg width="46" height="46" viewBox="0 0 46 46" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_d_35_14)">
                                            <rect x="4.25" y="2.25" width="37.5" height="37.5" rx="9.75" fill="white"
                                                stroke="#E5E5E5" strokeWidth="0.5" />
                                        </g>
                                        <path d="M17 20.7143L21 25L29 16" stroke="black" strokeWidth="1.4" />
                                        <defs>
                                            <filter id="filter0_d_35_14" x="0" y="0" width="46" height="46"
                                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="2" />
                                                <feGaussianBlur stdDeviation="2" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix"
                                                    result="effect1_dropShadow_35_14" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_35_14"
                                                    result="shape" />
                                            </filter>
                                        </defs>
                                    </svg>

                                    <p>After subscribing you will be sent a welcome email to onboard you to Roastify.</p>
                                </div>
                                <div>
                                    <svg width="46" height="46" viewBox="0 0 46 46" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_d_35_14)">
                                            <rect x="4.25" y="2.25" width="37.5" height="37.5" rx="9.75" fill="white"
                                                stroke="#E5E5E5" strokeWidth="0.5" />
                                        </g>
                                        <path d="M17 20.7143L21 25L29 16" stroke="black" strokeWidth="1.4" />
                                        <defs>
                                            <filter id="filter0_d_35_14" x="0" y="0" width="46" height="46"
                                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="2" />
                                                <feGaussianBlur stdDeviation="2" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix"
                                                    result="effect1_dropShadow_35_14" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_35_14"
                                                    result="shape" />
                                            </filter>
                                        </defs>
                                    </svg>

                                    <p>Soon, you'll get a Trello board invite to kickstart working on your needs right away. .
                                    </p>
                                </div>
                                <div>
                                    <svg width="46" height="46" viewBox="0 0 46 46" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_d_35_14)">
                                            <rect x="4.25" y="2.25" width="37.5" height="37.5" rx="9.75" fill="white"
                                                stroke="#E5E5E5" strokeWidth="0.5" />
                                        </g>
                                        <path d="M17 20.7143L21 25L29 16" stroke="black" strokeWidth="1.4" />
                                        <defs>
                                            <filter id="filter0_d_35_14" x="0" y="0" width="46" height="46"
                                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="2" />
                                                <feGaussianBlur stdDeviation="2" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix"
                                                    result="effect1_dropShadow_35_14" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_35_14"
                                                    result="shape" />
                                            </filter>
                                        </defs>
                                    </svg>

                                    <p>1:1 communication with a designer via a private Slack channel.</p>
                                </div>
                                <div>
                                    <svg width="46" height="46" viewBox="0 0 46 46" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_d_35_14)">
                                            <rect x="4.25" y="2.25" width="37.5" height="37.5" rx="9.75" fill="white"
                                                stroke="#E5E5E5" strokeWidth="0.5" />
                                        </g>
                                        <path d="M17 20.7143L21 25L29 16" stroke="black" strokeWidth="1.4" />
                                        <defs>
                                            <filter id="filter0_d_35_14" x="0" y="0" width="46" height="46"
                                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="2" />
                                                <feGaussianBlur stdDeviation="2" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix"
                                                    result="effect1_dropShadow_35_14" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_35_14"
                                                    result="shape" />
                                            </filter>
                                        </defs>
                                    </svg>

                                    <p>Organize your workload with the Trello board backlog for upcoming tasks.</p>
                                </div>
                                <div>
                                    <svg width="46" height="46" viewBox="0 0 46 46" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_d_35_14)">
                                            <rect x="4.25" y="2.25" width="37.5" height="37.5" rx="9.75" fill="white"
                                                stroke="#E5E5E5" strokeWidth="0.5" />
                                        </g>
                                        <path d="M17 20.7143L21 25L29 16" stroke="black" strokeWidth="1.4" />
                                        <defs>
                                            <filter id="filter0_d_35_14" x="0" y="0" width="46" height="46"
                                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="2" />
                                                <feGaussianBlur stdDeviation="2" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix"
                                                    result="effect1_dropShadow_35_14" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_35_14"
                                                    result="shape" />
                                            </filter>
                                        </defs>
                                    </svg>

                                    <p>Receive designs in 2-3 business days on average. Make unlimited changes.</p>
                                </div>
                                <div>
                                    <svg width="46" height="46" viewBox="0 0 46 46" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_d_35_14)">
                                            <rect x="4.25" y="2.25" width="37.5" height="37.5" rx="9.75" fill="white"
                                                stroke="#E5E5E5" strokeWidth="0.5" />
                                        </g>
                                        <path d="M17 20.7143L21 25L29 16" stroke="black" strokeWidth="1.4" />
                                        <defs>
                                            <filter id="filter0_d_35_14" x="0" y="0" width="46" height="46"
                                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="2" />
                                                <feGaussianBlur stdDeviation="2" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix"
                                                    result="effect1_dropShadow_35_14" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_35_14"
                                                    result="shape" />
                                            </filter>
                                        </defs>
                                    </svg>

                                    <p>After subscribing you will be sent a welcome email to onboard you to Roastify.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <div className="footer-container">
                        <div>
                            <img src="https://framerusercontent.com/images/mXUoxHWW0oAAHDRmZpRj7kZ1P2M.png" alt="" />
                            <p>Roastify.  ©2024 |  Delhi, IN</p>
                        </div>
                        <ul>
                            <li>Instagram</li>
                            <li>X</li>
                            <li>Reddit</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>
                </footer>
            </main>
            <style jsx>{
                `
      @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200;12..96,300;12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=Manrope:wght@200;300;400;500;600;700;800&display=swap');

      header {
        height: 80px;
        font-family: var(--secondary-font);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 50px;
        width: 100%;
        max-width: 896px;
        margin: auto;
    }

    .header-col-1 img {
        width: 160px;
    }
    
    .header-col-2 {
        display: flex;
        align-items: center;
        gap: 100px;
    }
    
    .header-col-2 div {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .header-col-2 p {
        color: #919191;
    }
    
    .header-col-2 p span {
        font-weight: 600;
        color: #212121;
    }
    
    main {
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        overflow-y: scroll;
    }
    
    .hero-section {
        display: flex;
        flex-direction: column;
        gap: 60px;
        padding: 60px 50px;
        width: 100%;
        max-width: 896px;
        margin: auto;
    }
    
    .hero-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 50px 0;
    }
    
    .hero-container h1 {
        font-family: var(--primary-font);
        font-size: 55px;
        font-weight: 900;
        text-align: center;
    }
    
    .hero-container p {
        width: 80%;
        margin: auto;
        font-family: var(--secondary-font);
        font-size: 18px;
        text-align: center;
        color: #414141;
    }
    
    .hero-container div {
        display: flex;
        gap: 20px;
        margin: 15px auto 0 auto;
    }
    
    .hero-section button {
        border: none;
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        font-family: var(--secondary-font);
    }
    
    .hero-section button.work {
        height: 50px;
        background-color: #21201F;
        color: #ffffff;
        border-radius: 15px;
        padding: 0 20px;
    }
    
    .hero-section button.book-call {
        height: 50px;
        background-color: #E8E8E8;
        color: #21201F;
        border-radius: 15px;
        padding: 0 20px;
        font-weight: 600;
    }
    
    .hero-section p.hero-note {
        color: #414141;
        font-family: var(--secondary-font);
        margin: 0 auto;
    }
    
    .hero-section p.hero-note span {
        color: #9FE7C4;
        font-weight: 500;
    }
    
    .clientele {
        padding: 0 50px 60px 50px;
        width: 100%;
        max-width: 896px;
        margin: auto;
    }
    
    .clientele-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        background-color: #f5f5f5;
        border-radius: 40px;
        padding: 20px;
    }
    
    .clientele-container img {
        height: 320px;
        width: 100%;
        background-color: #ffffff; 
        border-radius: 30px;
    }
    
    .clientele-container .col-1 {
        display: flex;
        align-items: center;
        gap: 20px;
    }
    
    .clientele-container .col-1 div {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    
    .clientele-container .col-1 h4 {
        font-family: var(--primary-font);
    }
    
    .clientele-container .col-1 p {
        font-family: var(--secondary-font);
        font-size: 14px;
    }
    
    .how-it-works {
        padding: 60px 50px;
        width: 100%;
        max-width: 896px;
        margin: auto;
    }
    
    .how-it-works-container {
        display: flex;
        flex-direction: column;
        gap: 50px;
    }
    
    .how-it-works h2 {
        font-family: var(--primary-font);
        font-size: 40px;
        font-weight: 900;
    }
    
    .how-it-works h2 span {
        color: #818181;
    }
    
    .how-it-works .steps {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 50px;
        row-gap: 50px;
    }
    
    .how-it-works .steps div {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    
    .how-it-works .steps p {
        font-family: var(--secondary-font);
        font-size: 18px;
        color: #818181;
    }
    
    .how-it-works .steps p span {
        font-family: var(--primary-font);
        font-weight: 900;
        color: #212121;
    }
    
    .how-it-works .how-it-works-note {
        font-family: var(--secondary-font);
        color: #414141;
        margin-top: 30px;
    }
    
    .subscriptions {
        padding: 100px 50px;
        width: 100%;
        max-width: 896px;
        margin: auto;
    }
    
    .subscription-container {
        display: flex;
        flex-direction: column;
        gap: 60px;
    }
    
    .subscriptions-header {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    
    .subscriptions-header h2 {
        font-family: var(--primary-font);
        font-size: 40px;
        font-weight: 900;
    }
    
    .subscriptions-header h2 span {
        color: #818181;
    }
    
    .subscriptions-header p {
        font-family: var(--secondary-font);
        color: #414141;
        width: 70%;
    }
    
    .subscription-plans {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
    }
    
    .subscription {
        padding: 30px;
        border: solid 2px #E5E5E5;
        border-radius: 20px;
        background-color: #F5F5F5;
        display: flex;
        flex-direction: column;
        gap: 30px;
        width: 100%;
    }
    
    .subscription:nth-child(3) {
        grid-column: span 2;
    }
    
    .subscription-header {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    
    .subscription-header div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .subscription-header div h4 {
        font-family: var(--primary-font);
        font-size: 25px;
        font-weight: 900;
        color: #212121;
    }
    
    .subscription-header div p {
        font-family: var(--secondary-font);
        font-size: 14px;
        font-weight: 500;
        color: #616161;
    }
    
    .subscription-header p {
        font-family: var(--secondary-font);
        color: #818181;
    }
    
    .subscription button {
        border: none;
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        font-family: var(--secondary-font);
        height: 50px;
        width: fit-content;
        background-color: #E8E8E8;
        color: #21201F;
        border-radius: 15px;
        padding: 0 20px;
        font-weight: 600;
    }
    
    .capabilities {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    
    .capabilities h3 {
        font-family: var(--primary-font);
    }
    
    .capability {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }
    
    .capability div {
        display: flex;
        align-items: center;
        gap: 10px;
        width: fit-content;
        background-color: #E8E8E8;
        padding: 8px 15px;
        border-radius: 100px;
    }
    
    .capability div p {
        font-family: var(--secondary-font);
        font-size: 12px;
        font-weight: 500;
    }
    
    .onboarding {
        padding: 60px 50px;
        width: 100%;
        max-width: 896px;
        margin: auto;
    }
    
    .onboarding h2 {
        font-family: var(--primary-font);
        font-size: 40px;
        font-weight: 900;
    }
    
    .onboarding h2 span {
        color: #818181;
    }
    
    .onboarding-container {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }
    
    .onboarding-steps {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    
    .onboarding-steps div {
        display: flex;
        gap: 15px;
    }
    
    .onboarding-steps div svg {
        display: flex;
        width: 25px;
        height: 25px;
    }
    
    .onboarding-steps div p {
        font-family: var(--secondary-font);
        color: #818181;
    }
    
    footer {
        padding: 80px 50px 20px 50px;
        width: 100%;
        max-width: 896px;
        margin: auto;
    }
    
    .footer-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: var(--secondary-font);
        font-size: 14px;
    }
    
    .footer-container div {
        display: flex;
        align-items: center;
        gap: 20px;
    }
    
    .footer-container div img {
        width: 50px;
        margin-left: -5px;
    }
    
    .footer-container div p {
        font-weight: 600;
        color: #212121;
    }
    
    .footer-container ul {
        display: flex;
        align-items: center;
        gap: 15px;
        list-style: none;
    }
    
    .footer-container ul li {
        font-weight: 400;
        color: #818181;
        transition: all .6s;
        position: relative;
    }
    
    .footer-container ul li:hover {
        color: #212121;
    }
      `
            }</style>
        </>
    )
}

export default Homepage