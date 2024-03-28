import RunningHeader from "./components/RunningHeader";
import Lenis from '@studio-freight/lenis'
import { useEffect } from "react";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const Homepage = () => {
    useEffect(() => {
        const projects = new Swiper(".portfolio .swiper", {
            slidesPerView: 4,
            spaceBetween: 15,
            navigation: {
                prevEl: ".portfolio .prev-el",
                nextEl: ".portfolio .next-el"
            },
            resistanceRatio: 0
        });

        const reviews = new Swiper(".reviews .swiper", {
            slidesPerView: 4,
            spaceBetween: 15,
            navigation: {
                prevEl: ".reviews .prev-el",
                nextEl: ".reviews .next-el"
            },
            resistanceRatio: 0,
            progress: true,
            on: {
                progress: function (progress) {
                    document.querySelector(".reviews .swiper-progressbar div").style.width = (progress * 100) + "%";
                },
            },
        });

        const lenis = new Lenis();
        lenis.on('scroll', (event) => {
            console.log(event);
        });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    })

    return (
        <>
            <div className="main">
                <div className="body">
                    <RunningHeader></RunningHeader>
                    <div className="body">
                            <div className="hero-section">
                                <div className="hero-header">
                                    <div className="col-1">
                                        <img src="/assets/images/logo.svg" alt="" />
                                    </div>
                                    <div className="col-2">
                                        <div>
                                            <p>
                                                Warsaw, Poland <span>10:17 AM</span>
                                            </p>
                                            <div className="menu-trigger">
                                                Menu
                                                <svg width="40" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="22" cy="22" r="20.75" stroke="#D9D9D9" strokeWidth="1.5" />
                                                    <rect x="16" y="16" width="4" height="4" fill="#D9D9D9" />
                                                    <rect x="16" y="24" width="4" height="4" fill="#D9D9D9" />
                                                    <rect x="24" y="16" width="4" height="4" fill="#D9D9D9" />
                                                    <rect x="24" y="24" width="4" height="4" fill="#D9D9D9" />
                                                    <rect x="20" y="20" width="4" height="4" fill="#D9D9D9"
                                                        style={{ visibility: "hidden" }} />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hero-container">
                                    <div className="hero-text">
                                        <h1>Top-Notch Subscription Magic for FMCG Trailblazers!</h1>
                                        <p>We collaborate with FMCG businesses to create, refine, and enhance product experiences—all
                                            conveniently covered by a single, transparent monthly fee.</p>
                                    </div>
                                    <div className="hero-partners"></div>
                                    <div className="hero-ctas">
                                        <button className="discover-work-cta">Discover Work</button>
                                        <button className="book-now-cta">
                                            <svg width="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M2 12.2292C2 8.14366 2 6.10091 3.2692 4.8317C4.53841 3.5625 6.58116 3.5625 10.6667 3.5625H15C19.0855 3.5625 21.1283 3.5625 22.3975 4.8317C23.6667 6.10091 23.6667 8.14366 23.6667 12.2292V14.3958C23.6667 18.4813 23.6667 20.5241 22.3975 21.7933C21.1283 23.0625 19.0855 23.0625 15 23.0625H10.6667C6.58116 23.0625 4.53841 23.0625 3.2692 21.7933C2 20.5241 2 18.4813 2 14.3958V12.2292Z"
                                                    stroke="#21201F" strokeWidth="2.5" />
                                                <path d="M7.4165 3.5625V1.9375" stroke="#21201F" strokeWidth="2.5"
                                                    strokeLinecap="round" />
                                                <path d="M18.25 3.5625V1.9375" stroke="#21201F" strokeWidth="2.5"
                                                    strokeLinecap="round" />
                                                <path d="M2.5415 8.97919H23.1248" stroke="#21201F" strokeWidth="2.5"
                                                    strokeLinecap="round" />
                                            </svg>
                                            Book a Call</button>
                                    </div>
                                </div>
                            </div>
                            <div className="stepper">
                                <div className="steps">
                                    <div className="step">
                                        <p className="step-count">01.</p>
                                        <p className="step-text">We roast you.</p>
                                    </div>
                                    <img src="/assets/images/arrow.webp" alt="" />
                                    <div className="step">
                                        <p className="step-count">02.</p>
                                        <p className="step-text">We roast and toast.</p>
                                    </div>
                                    <img src="/assets/images/arrow.webp" alt="" />
                                    <div className="step">
                                        <p className="step-count">03.</p>
                                        <p className="step-text">We toast your ROAS.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="portfolio">
                                <h2>Subscribe and start making <br />
                                    <span>Roastify together.</span>
                                </h2>
                                <div className="portfolio-box">
                                    <div className="portfolio-container">
                                        <div className="portfolio-slider">
                                            <div className="swiper mySwiper">
                                                <div className="swiper-wrapper">
                                                    <a href="" className="swiper-slide">
                                                        <div className="work">
                                                            <img src="/assets/images/portfolio.webp" alt="" />
                                                            <div className="portfolio-details">
                                                                <div>
                                                                    <h5>Anjali Gold</h5>
                                                                    <p>We collaborate with FMCG businesses to create, refine, and
                                                                        enhance.
                                                                    </p>
                                                                </div>
                                                                <p className="portfolio-services">Meta Ads • Website Development • Graphics
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="" className="swiper-slide">
                                                        <div className="work">
                                                            <img src="/assets/images/portfolio.webp" alt="" />
                                                            <div className="portfolio-details">
                                                                <div>
                                                                    <h5>Anjali Gold</h5>
                                                                    <p>We collaborate with FMCG businesses to create, refine, and
                                                                        enhance.
                                                                    </p>
                                                                </div>
                                                                <p className="portfolio-services">Meta Ads • Website Development • Graphics
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="" className="swiper-slide">
                                                        <div className="work">
                                                            <img src="/assets/images/portfolio.webp" alt="" />
                                                            <div className="portfolio-details">
                                                                <div>
                                                                    <h5>Anjali Gold</h5>
                                                                    <p>We collaborate with FMCG businesses to create, refine, and
                                                                        enhance.
                                                                    </p>
                                                                </div>
                                                                <p className="portfolio-services">Meta Ads • Website Development • Graphics
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="" className="swiper-slide">
                                                        <div className="work">
                                                            <img src="/assets/images/portfolio.webp" alt="" />
                                                            <div className="portfolio-details">
                                                                <div>
                                                                    <h5>Anjali Gold</h5>
                                                                    <p>We collaborate with FMCG businesses to create, refine, and
                                                                        enhance.
                                                                    </p>
                                                                </div>
                                                                <p className="portfolio-services">Meta Ads • Website Development • Graphics
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="" className="swiper-slide">
                                                        <div className="work">
                                                            <img src="/assets/images/portfolio.webp" alt="" />
                                                            <div className="portfolio-details">
                                                                <div>
                                                                    <h5>Anjali Gold</h5>
                                                                    <p>We collaborate with FMCG businesses to create, refine, and
                                                                        enhance.
                                                                    </p>
                                                                </div>
                                                                <p className="portfolio-services">Meta Ads • Website Development • Graphics
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="" className="swiper-slide">
                                                        <div className="work">
                                                            <img src="/assets/images/portfolio.webp" alt="" />
                                                            <div className="portfolio-details">
                                                                <div>
                                                                    <h5>Anjali Gold</h5>
                                                                    <p>We collaborate with FMCG businesses to create, refine, and
                                                                        enhance.
                                                                    </p>
                                                                </div>
                                                                <p className="portfolio-services">Meta Ads • Website Development • Graphics
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portfolio-navigation">
                                        <div className="col-1">
                                            <div className="padding"></div>
                                            <div className="round-corner"></div>
                                        </div>
                                        <div className="col-2">
                                            <a href="">
                                                <button>Show all Projects</button>
                                            </a>
                                            <div>
                                                <svg width="45" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    className="prev-el">
                                                    <rect opacity="0.1" width="80" height="80" fill="#9FE870" />
                                                    <rect x="34" y="38" width="4" height="4" fill="#9FE870" />
                                                    <rect x="38" y="34" width="4" height="4" fill="#9FE870" />
                                                    <rect x="42" y="30" width="4" height="4" fill="#9FE870" />
                                                    <rect width="4" height="4" transform="matrix(1 0 0 -1 34 42)" fill="#9FE870" />
                                                    <rect width="4" height="4" transform="matrix(1 0 0 -1 38 46)" fill="#9FE870" />
                                                    <rect width="4" height="4" transform="matrix(1 0 0 -1 42 50)" fill="#9FE870" />
                                                </svg>
                                                <svg width="45" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    className="next-el">
                                                    <rect opacity="0.1" width="80" height="80" fill="#9FE870" />
                                                    <rect width="4" height="4" transform="matrix(-1 0 0 1 46 38)" fill="#9FE870" />
                                                    <rect width="4" height="4" transform="matrix(-1 0 0 1 42 34)" fill="#9FE870" />
                                                    <rect width="4" height="4" transform="matrix(-1 0 0 1 38 30)" fill="#9FE870" />
                                                    <rect x="46" y="42" width="4" height="4" transform="rotate(180 46 42)"
                                                        fill="#9FE870" />
                                                    <rect x="42" y="46" width="4" height="4" transform="rotate(180 42 46)"
                                                        fill="#9FE870" />
                                                    <rect x="38" y="50" width="4" height="4" transform="rotate(180 38 50)"
                                                        fill="#9FE870" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="services">
                                <h2>You will catch Roastify doing a combo <br />
                                    <span>of these things</span>
                                </h2>
                                <div className="services-container">
                                    <div className="service">
                                        <h4>Website Development</h4>
                                        <p>Key to standout success. We shape unique brand
                                            identities that last and resonate in dynamic evolved and
                                            competitive markets.</p>
                                        <div className="tools">
                                            <img src="/assets/images/webflow.webp" alt="" />
                                            <img src="/assets/images/shopify.webp" alt="" />
                                            <img src="/assets/images/wordpress.webp" alt="" />
                                            <img src="/assets/images/figma.webp" alt="" />
                                        </div>
                                    </div>
                                    <div className="service">
                                        <h4>Application Development</h4>
                                        <p>Key to standout success. We shape unique brand
                                            identities that last and resonate in dynamic evolved and
                                            competitive markets.</p>
                                        <div className="tools">
                                            <img src="/assets/images/webflow.webp" alt="" />
                                            <img src="/assets/images/shopify.webp" alt="" />
                                            <img src="/assets/images/wordpress.webp" alt="" />
                                            <img src="/assets/images/figma.webp" alt="" />
                                        </div>
                                    </div>
                                    <div className="service">
                                        <h4>Performace Marketing</h4>
                                        <p>Key to standout success. We shape unique brand
                                            identities that last and resonate in dynamic evolved and
                                            competitive markets.</p>
                                        <div className="tools">
                                            <img src="/assets/images/webflow.webp" alt="" />
                                            <img src="/assets/images/shopify.webp" alt="" />
                                            <img src="/assets/images/wordpress.webp" alt="" />
                                            <img src="/assets/images/figma.webp" alt="" />
                                        </div>
                                    </div>
                                    <div className="service">
                                        <h4>Graphic & Video Editing</h4>
                                        <p>Key to standout success. We shape unique brand
                                            identities that last and resonate in dynamic evolved and
                                            competitive markets.</p>
                                        <div className="tools">
                                            <img src="/assets/images/webflow.webp" alt="" />
                                            <img src="/assets/images/shopify.webp" alt="" />
                                            <img src="/assets/images/wordpress.webp" alt="" />
                                            <img src="/assets/images/figma.webp" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="reviews">
                                <h2>Hear What Our Clients <br />
                                    <span>Say About Us</span>
                                </h2>
                                <div className="review-container">
                                    <div className="swiper">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide review">
                                                <img src="/assets/images/client-logo.svg" alt="" />
                                                <div className="review-content">
                                                    <p>"We had the pleasure of working with Zorro Design for the last 2 websites we've
                                                        built. We are obsessed with our website. His team crushed it! Their creativity
                                                        is unmatched and they did an excellent job at understanding our objectives to
                                                        meet our goals."</p>
                                                    <div>
                                                        <p className="reviewer-person">Simran Narang</p>
                                                        <p className="reviewer-salutation">Founder • Majik Cosmetics</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide review">
                                                <img src="/assets/images/client-logo.svg" alt="" />
                                                <div className="review-content">
                                                    <p>"We had the pleasure of working with Zorro Design for the last 2 websites we've
                                                        built. We are obsessed with our website. His team crushed it! Their creativity
                                                        is unmatched and they did an excellent job at understanding our objectives to
                                                        meet our goals."</p>
                                                    <div>
                                                        <p className="reviewer-person">Simran Narang</p>
                                                        <p className="reviewer-salutation">Founder • Majik Cosmetics</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide review">
                                                <img src="/assets/images/client-logo.svg" alt="" />
                                                <div className="review-content">
                                                    <p>"We had the pleasure of working with Zorro Design for the last 2 websites we've
                                                        built. We are obsessed with our website. His team crushed it! Their creativity
                                                        is unmatched and they did an excellent job at understanding our objectives to
                                                        meet our goals."</p>
                                                    <div>
                                                        <p className="reviewer-person">Simran Narang</p>
                                                        <p className="reviewer-salutation">Founder • Majik Cosmetics</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide review">
                                                <img src="/assets/images/client-logo.svg" alt="" />
                                                <div className="review-content">
                                                    <p>"We had the pleasure of working with Zorro Design for the last 2 websites we've
                                                        built. We are obsessed with our website. His team crushed it! Their creativity
                                                        is unmatched and they did an excellent job at understanding our objectives to
                                                        meet our goals."</p>
                                                    <div>
                                                        <p className="reviewer-person">Simran Narang</p>
                                                        <p className="reviewer-salutation">Founder • Majik Cosmetics</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide review">
                                                <img src="/assets/images/client-logo.svg" alt="" />
                                                <div className="review-content">
                                                    <p>"We had the pleasure of working with Zorro Design for the last 2 websites we've
                                                        built. We are obsessed with our website. His team crushed it! Their creativity
                                                        is unmatched and they did an excellent job at understanding our objectives to
                                                        meet our goals."</p>
                                                    <div>
                                                        <p className="reviewer-person">Simran Narang</p>
                                                        <p className="reviewer-salutation">Founder • Majik Cosmetics</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide review">
                                                <img src="/assets/images/client-logo.svg" alt="" />
                                                <div className="review-content">
                                                    <p>"We had the pleasure of working with Zorro Design for the last 2 websites we've
                                                        built. We are obsessed with our website. His team crushed it! Their creativity
                                                        is unmatched and they did an excellent job at understanding our objectives to
                                                        meet our goals."</p>
                                                    <div>
                                                        <p className="reviewer-person">Simran Narang</p>
                                                        <p className="reviewer-salutation">Founder • Majik Cosmetics</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide review">
                                                <img src="/assets/images/client-logo.svg" alt="" />
                                                <div className="review-content">
                                                    <p>"We had the pleasure of working with Zorro Design for the last 2 websites we've
                                                        built. We are obsessed with our website. His team crushed it! Their creativity
                                                        is unmatched and they did an excellent job at understanding our objectives to
                                                        meet our goals."</p>
                                                    <div>
                                                        <p className="reviewer-person">Simran Narang</p>
                                                        <p className="reviewer-salutation">Founder • Majik Cosmetics</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide review">
                                                <img src="/assets/images/client-logo.svg" alt="" />
                                                <div className="review-content">
                                                    <p>"We had the pleasure of working with Zorro Design for the last 2 websites we've
                                                        built. We are obsessed with our website. His team crushed it! Their creativity
                                                        is unmatched and they did an excellent job at understanding our objectives to
                                                        meet our goals."</p>
                                                    <div>
                                                        <p className="reviewer-person">Simran Narang</p>
                                                        <p className="reviewer-salutation">Founder • Majik Cosmetics</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide review">
                                                <img src="/assets/images/client-logo.svg" alt="" />
                                                <div className="review-content">
                                                    <p>"We had the pleasure of working with Zorro Design for the last 2 websites we've
                                                        built. We are obsessed with our website. His team crushed it! Their creativity
                                                        is unmatched and they did an excellent job at understanding our objectives to
                                                        meet our goals."</p>
                                                    <div>
                                                        <p className="reviewer-person">Simran Narang</p>
                                                        <p className="reviewer-salutation">Founder • Majik Cosmetics</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide review">
                                                <img src="/assets/images/client-logo.svg" alt="" />
                                                <div className="review-content">
                                                    <p>"We had the pleasure of working with Zorro Design for the last 2 websites we've
                                                        built. We are obsessed with our website. His team crushed it! Their creativity
                                                        is unmatched and they did an excellent job at understanding our objectives to
                                                        meet our goals."</p>
                                                    <div>
                                                        <p className="reviewer-person">Simran Narang</p>
                                                        <p className="reviewer-salutation">Founder • Majik Cosmetics</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide review">
                                                <img src="/assets/images/client-logo.svg" alt="" />
                                                <div className="review-content">
                                                    <p>"We had the pleasure of working with Zorro Design for the last 2 websites we've
                                                        built. We are obsessed with our website. His team crushed it! Their creativity
                                                        is unmatched and they did an excellent job at understanding our objectives to
                                                        meet our goals."</p>
                                                    <div>
                                                        <p className="reviewer-person">Simran Narang</p>
                                                        <p className="reviewer-salutation">Founder • Majik Cosmetics</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide review">
                                                <img src="/assets/images/client-logo.svg" alt="" />
                                                <div className="review-content">
                                                    <p>"We had the pleasure of working with Zorro Design for the last 2 websites we've
                                                        built. We are obsessed with our website. His team crushed it! Their creativity
                                                        is unmatched and they did an excellent job at understanding our objectives to
                                                        meet our goals."</p>
                                                    <div>
                                                        <p className="reviewer-person">Simran Narang</p>
                                                        <p className="reviewer-salutation">Founder • Majik Cosmetics</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="navigation">
                                            <div className="swiper-progressbar">
                                                <div></div>
                                            </div>
                                            <div className="nav-bar">
                                                <svg width="45" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    className="prev-el">
                                                    <rect opacity="0.1" width="80" height="80" fill="#9FE870" />
                                                    <rect x="34" y="38" width="4" height="4" fill="#9FE870" />
                                                    <rect x="38" y="34" width="4" height="4" fill="#9FE870" />
                                                    <rect x="42" y="30" width="4" height="4" fill="#9FE870" />
                                                    <rect width="4" height="4" transform="matrix(1 0 0 -1 34 42)" fill="#9FE870" />
                                                    <rect width="4" height="4" transform="matrix(1 0 0 -1 38 46)" fill="#9FE870" />
                                                    <rect width="4" height="4" transform="matrix(1 0 0 -1 42 50)" fill="#9FE870" />
                                                </svg>
                                                <svg width="45" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    className="next-el">
                                                    <rect opacity="0.1" width="80" height="80" fill="#9FE870" />
                                                    <rect width="4" height="4" transform="matrix(-1 0 0 1 46 38)" fill="#9FE870" />
                                                    <rect width="4" height="4" transform="matrix(-1 0 0 1 42 34)" fill="#9FE870" />
                                                    <rect width="4" height="4" transform="matrix(-1 0 0 1 38 30)" fill="#9FE870" />
                                                    <rect x="46" y="42" width="4" height="4" transform="rotate(180 46 42)"
                                                        fill="#9FE870" />
                                                    <rect x="42" y="46" width="4" height="4" transform="rotate(180 42 46)"
                                                        fill="#9FE870" />
                                                    <rect x="38" y="50" width="4" height="4" transform="rotate(180 38 50)"
                                                        fill="#9FE870" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>

            <style jsx>
                {`
                    .hero-section {
                        background-color: #000000;
                        padding: 50px;
                        border-radius: 50px;
                    }
                    
                    .hero-header {
                        display: flex;
                        justify-content: space-between;
                    }
                    
                    .hero-header img {
                        width: 160px;
                    }
                    
                    .hero-header .col-2 div,
                    .hero-header .col-2 div p {
                        display: flex;
                        align-items: center;
                    }
                    
                    .hero-header .col-2 div {
                        gap: 50px;
                    }
                    
                    .hero-header .col-2 div p {
                        gap: 5px;
                        color: #919191;
                        font-weight: 300;
                    }
                    
                    .hero-header .col-2 div p span {
                        color: #D9D9D9;
                    }
                    
                    .hero-header .col-2 div .menu-trigger {
                        gap: 20px;
                        color: #919191;
                        font-weight: 300;
                    }
                    
                    .hero-container {
                        padding: 100px 0 0;
                        display: flex;
                        flex-direction: column;
                        gap: 50px;
                    }
                    
                    .hero-text {
                        display: flex;
                        flex-direction: column;
                        gap: 15px;
                        width: 70%;
                    }
                    
                    .hero-text h1 {
                        color: #ffffff;
                        font-size: 50px;
                        text-transform: lowercase;
                    }
                    
                    .hero-text p {
                        color: #919191;
                        font-size: 18px;
                        font-weight: 400;
                    }
                    
                    .hero-partners {
                        display: flex;
                        gap: 50px;
                    }
                    
                    .hero-ctas {
                        margin-top: 10px;
                        display: flex;
                        gap: 30px;
                    }
                    
                    .hero-ctas button {
                        height: 50px;
                        background-color: transparent;
                        border: none;
                        outline: none;
                    }
                    
                    .discover-work-cta {
                        padding: 0 25px;
                        background-color: #9FE870 !important;
                        color: #2E2E2E;
                        border-radius: 16px;
                        font-weight: 500;
                    }
                    
                    .book-now-cta {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        padding: 0 20px;
                        background-color: #ffffff !important;
                        color: #21201F;
                        border-radius: 16px;
                        font-weight: 500;
                    }
                    
                    .stepper {
                        display: flex;
                        margin-top: 50px;
                        width: 100%;
                    }
                    
                    .steps {
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin: auto;
                    }
                    
                    .step {
                        display: flex;
                        align-items: center;
                        gap: 5px;
                        font-size: 20px;
                    }
                    
                    .step-count {
                        color: #818181;
                    }
                    
                    .step-text {
                        color: #F9F9F9;
                    }
                    
                    .stepper img {
                        width: 80px;
                    }
                    
                    .portfolio {
                        margin-top: 100px;
                        display: flex;
                        flex-direction: column;
                        gap: 50px;
                    }
                    
                    .portfolio h2 {
                        font-size: 30px;
                        color: #717171;
                    }
                    
                    .portfolio h2 span {
                        color: #F9F9F9;
                    }
                    
                    .portfolio-container {
                        background-color: #000000;
                        border-radius: 2rem 2rem 0 2rem;
                        display: flex;
                        flex-direction: column;
                    }
                    
                    .portfolio-slider {
                        padding: 25px;
                        position: relative;
                    }
                    
                    .work {
                        display: flex;
                        flex-direction: column;
                        gap: 20px;
                    }
                    
                    .work img {
                        width: 100%;
                        border-radius: 20px;
                    }
                    
                    .work .portfolio-details {
                        display: flex;
                        flex-direction: column;
                        gap: 20px;
                    }
                    
                    .work .portfolio-details div {
                        display: flex;
                        flex-direction: column;
                        gap: 10px;
                    }
                    
                    .work .portfolio-details div h5 {
                        font-size: 16px;
                        font-weight: 400;
                        color: #F9F9F9;
                    }
                    
                    .work .portfolio-details div p {
                        font-size: 14px;
                        font-weight: 300;
                        color: #919191;
                    }
                    
                    .work .portfolio-services {
                        font-size: 14px;
                        font-weight: 100;
                        color: #E8E8E8;
                    }
                    
                    .portfolio-navigation {
                        height: 100px;
                        position: relative;
                        display: flex;
                    }
                    
                    .portfolio-navigation .col-1 {
                        background-color: #000000;
                        height: 100%;
                        width: 70%;
                        position: relative;
                    }
                    
                    .portfolio-navigation .col-1 .padding {
                        z-index: 1;
                        width: 100%;
                        height: 100%;
                        border-top-right-radius: 2rem;
                        position: absolute;
                        background-color: #222222;
                    }
                    
                    
                    .portfolio-navigation .col-1 .round-corner {
                        z-index: 0;
                        width: 3rem;
                        height: 3rem;
                        position: absolute;
                        top: 0%;
                        bottom: auto;
                        left: auto;
                        right: 0%;
                        border-top-right-radius: 2rem;
                    }
                    
                    .portfolio-navigation .col-2 {
                        background-color: #000000;
                        height: 100%;
                        width: 30%;
                        position: relative;
                        border-radius: 0 0 2rem 2rem;
                        position: relative;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 0 30px;
                    }
                    
                    .portfolio-navigation .col-2 div {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 20px;
                    }
                    
                    .portfolio-navigation .col-2 button {
                        height: 50px;
                        border: none;
                        outline: none;
                        padding: 0 25px;
                        background-color: #9FE870 !important;
                        color: #2E2E2E;
                        border-radius: 16px;
                        font-weight: 600;
                    }
                    
                    .portfolio-navigation .col-2 svg {
                        display: flex;
                        border-radius: .8rem;
                        cursor: pointer;
                        transition: all .4s;
                    }
                    
                    .portfolio-navigation .col-2 svg.swiper-button-disabled {
                        opacity: .6;
                    }
                    
                    .services {
                        display: flex;
                        flex-direction: column;
                        gap: 80px;
                        margin-top: 150px;
                    }
                    
                    .services h2 {
                        font-size: 30px;
                        color: #717171;
                    }
                    
                    .services h2 span {
                        font-size: 30px;
                        color: #D9D9D9;
                    }
                    
                    .services-container {
                        display: grid;
                        grid-template-columns: repeat(2, 1FR);
                        row-gap: 60px;
                        column-gap: 200px;
                    }
                    
                    .service {
                        display: flex;
                        flex-direction: column;
                        gap: 5px;
                    }
                    
                    .service h4 {
                        color: #D9D9D9;
                        font-weight: 500;
                        font-size: 20px;
                    }
                    
                    .service p {
                        color: #919191;
                        font-weight: 100;
                        font-size: 16px;
                    }
                    
                    .service .tools {
                        display: flex;
                        gap: 15px;
                        margin-top: 15px;
                    }
                    
                    .service .tools img {
                        width: 45px;
                    }
                    
                    .reviews {
                        display: flex;
                        flex-direction: column;
                        gap: 50px;
                        margin-top: 200px;
                    }
                    
                    .reviews h2 {
                        color: #717171;
                        font-size: 30px;
                    }
                    
                    .reviews h2 span {
                        color: #D9D9D9;
                    }
                    
                    .reviews .swiper {
                        display: flex;
                        flex-direction: column;
                        gap: 80px;
                    }
                    
                    .review {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        width: 100%;
                        height: 420px;
                        min-height: 420px;
                        background-color: #000000;
                        padding: 30px;
                        border-radius: 20px;
                    }
                    
                    .review img {
                        width: 100px;
                    }
                    
                    .review p {
                        color: #818181;
                        font-weight: 100;
                    }
                    
                    .review .review-content {
                        display: flex;
                        flex-direction: column;
                        gap: 30px;
                    }
                    
                    .review .review-content .reviewer-salutation {
                        color: #D9D9D9
                    }
                    
                    .reviews .navigation {
                        display: flex;
                        flex-direction: column;
                        gap: 30px;
                    }
                    
                    .reviews .navigation .swiper-progressbar {
                        background-color: #919191;
                        height: .5px;
                        width: 30%;
                        margin: auto;
                        position: relative;
                    }
                    
                    .reviews .navigation .swiper-progressbar div {
                        background-color: #FFFFFF;
                        height: 1px;
                        margin: auto;
                        position: absolute;
                        top: 50%;
                        left: 0;
                        transform: translate(0,-50%);
                        transition: all .4s;
                    }
                    
                    .reviews .navigation .nav-bar {
                        display: flex;
                        gap: 15px;
                        margin: auto;
                    }
                    
                    .reviews .navigation .nav-bar svg {
                        border-radius: 10px;
                        cursor: pointer;
                        transition: all .4s;
                    }
                    
                    .reviews .navigation .nav-bar svg.swiper-button-disabled {
                        opacity: .6;
                    }
                `}
            </style>
        </>
    )
}

export default Homepage