import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Home = () => {
    return (
        <>
           <header><Header /></header>
            <div
                className="container"
                style={{ backgroundColor: "black", color: "white" }}
            >
                <div className="name">
                    <h1>Syed Zain Aly</h1>
                    <h5>Advocate | Software Engineer</h5>
                </div>
                {/* <img src={ProfileImg} alt="" /> */}
                <div className="home__img"></div>
                <p>Welcome to my home page</p>

                <p>
                    My Name is Zain Aly and I am a Advocate by profession and i'm Software
                    Developer. i have done 6 months of internship in{" "}
                    <a className="links" target="_blank" href="https://www.softmindinfotech.com/">
                        Softmind infotech pvt ltd
                    </a>{" "}
                    as a Full Stack Developer(MERN). i have completed my Graduation in BCA
                    now im doing job as a full Stack developer(PHP, Laravel) developer in{" "}
                    <a className="links" target="_blank" href="https://www.adimudra.com/">
                        Adimudra Pvt Ltd{" "}
                    </a>
                </p>

                <p>Now im persuing MCA(Master in Computer Application)</p>

                <p>
                    As well I'm Muslim Student Activist, who is always raise Muslim voice.
                    against Anti islamophobia, Hindutva terrorism, and different types
                    of discrimination against Muslims by Right and Left Wings and Majority. i also
                    led protests against Citizenship Amendment Act.
                </p>
                {/* <button> Link for sponsors </button> */}

                <p>
                    I think you are here to get to know me. Best way is to start with my
                    work.
                </p>


            </div>
            <footer><Footer /></footer>
            
        </>

    );
};

export default Home;
