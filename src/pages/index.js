import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react"

const Homepage = () => {

    return (
        <>
            <main>
                <section>
                    <div className="hero-section">
                        <div className="hero-container">
                            <h1>Excitement is on the horizon!</h1>
                            <p>Get ready for an extraordinary unveiling! Innovation, creativity, and magic await. Stay tuned for the countdown!</p>
                            <div>
                                <button className="book-call">
                                    <svg width="22" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2 12.2292C2 8.14366 2 6.10091 3.2692 4.8317C4.53841 3.5625 6.58116 3.5625 10.6667 3.5625H15C19.0855 3.5625 21.1283 3.5625 22.3975 4.8317C23.6667 6.10091 23.6667 8.14366 23.6667 12.2292V14.3958C23.6667 18.4813 23.6667 20.5241 22.3975 21.7933C21.1283 23.0625 19.0855 23.0625 15 23.0625H10.6667C6.58116 23.0625 4.53841 23.0625 3.2692 21.7933C2 20.5241 2 18.4813 2 14.3958V12.2292Z"
                                            stroke="#ffffff" strokeWidth="2.5" />
                                        <path d="M7.41667 3.5625V1.9375" stroke="#ffffff" strokeWidth="2.5"
                                            strokeLinecap="round" />
                                        <path d="M18.25 3.5625V1.9375" stroke="#ffffff" strokeWidth="2.5"
                                            strokeLinecap="round" />
                                        <path d="M2.54167 8.97917H23.125" stroke="#ffffff" strokeWidth="2.5"
                                            strokeLinecap="round" />
                                    </svg>

                                    Book a Call
                                </button>
                            </div>
                        </div>
                    </div>
                    </section>
            </main>
            <style jsx>{
                `
      @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200;12..96,300;12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=Manrope:wght@200;300;400;500;600;700;800&display=swap');
    main {
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        overflow-y: scroll;
    }

    section {
        display: flex;
        height: 100%;
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
    
    @media screen and (max-width: 767px) {
        .hero-section {
            padding: 60px 20px;
        }
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

    @media screen and (max-width: 767px){
        .hero-container h1 {
            font-size: 35px;
        }
    }
    
    .hero-container p {
        width: 80%;
        margin: auto;
        font-family: var(--secondary-font);
        font-size: 18px;
        text-align: center;
        color: #414141;
    }

    @media screen and (max-width: 767px){
        .hero-container p {
            font-size: 15px;
            width: 100%;
        }
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

    @media screen and (max-width: 767px){
        .hero-section button.book-call {
            width: 100%;
        }
    }
    
    .hero-section button.book-call {
        height: 50px;
        background-color: #21201F;
        color: #ffffff;
        border-radius: 15px;
        padding: 0 20px;
        font-weight: 400;
      `
            }</style>
        </>
    )
}

export default Homepage