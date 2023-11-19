import React from "react";
import "./PortfolioPageStyle.css";

const PortfolioPage = () => {
  return (
    <div className="container animate__animated animate__slideInRight">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Flutterwave</h5>
          <p className="card-text">
           Flutterwave is a leading payment technology company in Nigeria and Africa that provides businesses and individuals with a suite of payment solutions to send, receive, and manage money.
          </p>
          <a href="https://peter-cloneflutterwave.netlify.app/" className="card-link">
            Live Link
          </a>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Edozzier</h5>
          <p className="card-text">
            Edozzier is an AI-powered administrative assistant that helps schools manage their administrative tasks and improve their efficiency. It was founded in 2018 by Nigerian entrepreneurs who were looking for a way to make it easier for schools to run smoothly. 
          </p>
          <a href="https://peter-cloneedozzier.netlify.app/" className="card-link">
            Live Link
          </a>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Paystack</h5>
          <p className="card-text">
            Paystack is a leading online payment processing platform in Africa. It provides businesses with a secure and easy way to accept payments from customers around the world.
          </p>
          <a href="https://peter-clonepaystack.netlify.app/" className="card-link">
            Live Link
          </a>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">NoteCorner</h5>
          <p className="card-text">
           NoteCorner website provides a simple and effective solution for keeping all your notes organized and accessible in one place.
          </p>
          <a href="https://timexdev.github.io/NoteCorner/index.html" className="card-link">
            Live Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
