import React from "react";
import '../assets/Dashboard.css';

export default function Dashboard(){
    return(
        <section id="dashboard" className="dashboard">
            <h1>My Dashboard</h1>
            <p className="dashboard-intro">Here's a quick overview of my projects ,
                 technologies and productivity stats.</p>
            <div className="dashboard-grid">
                <div className="dashboard-card">
                    <h3>Project Completed</h3>
                    <p>2</p>
                </div>
                <div className="dashboard-card">
                    <h3>Technologies Used</h3>
                    <p>React,Flask,MYSQL</p>
                </div>
                <div className="dashboard-card">
                 <h3>Current Focus </h3>
                 <p>Decentralized Energy Credit and Trading Platform</p>
                </div>
            </div>     
        </section>
    )
}