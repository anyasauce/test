import React from "react";
import "./App.css";

function App() {
    return (
        <div style={{ backgroundColor: "#292945", color: "white", minHeight: "100vh" }}>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#2e2e4a" }}>
                <div className="container">
                    <a className="navbar-brand text-white" href="1">
                        Sarap Express
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#home">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#service">
                                    Service
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#menu">
                                    Menu
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <i className="bi bi-cart text-white mx-2"></i>
                            <i className="bi bi-search text-white mx-2"></i>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Section */}
            <section className="py-5">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Side */}
                        <div className="col-md-6">
                            <h1>
                                Fastest Delivery <br /> In your City
                            </h1>
                            <p>
                                Experience the fastest and most delicious delivery service right at your doorstep.
                                Sarap Express is here to serve you!
                            </p>
                            <div>
                                <button className="btn btn-get-started me-3">Get Started</button>
                                <button className="btn btn-order-processed">Order Processed</button>
                            </div>
                        </div>
                        {/* Right Side */}
                        <div className="col-md-6 text-center">
                            <div className="floating-photo-box mx-auto"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews */}
            <section id="reviews" className="py-5 mt-5">
                <div className="container">
                    <h2 className="text-center">What Our Customers Say</h2>
                    <p className="text-center mt-3">"Best food delivery service ever!"</p>
                </div>
            </section>
        </div>
    );
}

export default App;
