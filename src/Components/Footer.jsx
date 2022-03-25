import React, { useRef } from "react";
import styled from "styled-components";
import Email from "./images/email.png";
import Phone from "./images/call.png";
import Pin from "./images/pin.png";
import emailjs from "@emailjs/browser";
import {
  FaFacebookSquare,
  FaWhatsappSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yv72tad",
        "template_gvl8zxy",
        form.current,
        "gPCVLkImp6KNbUGGh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <Foot id="contact">
      <Container>
        <h3>Get in Touch</h3>
        <h4>You can talk with us via the following details</h4>
        <ContactDetails>
          <span>
            <img src={Pin} alt="" />
            SomeWhere in Nigeria.
          </span>
          <span>
            <img src={Phone} alt="" />
            <a
              href="https://api.whatsapp.com/send?phone=+2348134117444"
              target="_blank"
            >
              Whatsapp Me
            </a>
          </span>
          <span>
            <img src={Email} alt="" />
            <a href="mailto:slowpacerapper@gmail.com">Send Email</a>
          </span>
        </ContactDetails>
        <ContactForm>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your name" />
            <input type="email" name="email" placeholder="Your email" />
            <textarea
              name="message"
              id="message"
              placeholder="Your message"
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </ContactForm>
        <Copyright>&copy;Copyright SPINK 2022</Copyright>
        <SocialMediaIcons className="react-icons">
          <a href="https://web.facebook.com/temitayo.bakare">
            <FaFacebookSquare />
          </a>
          <a href="https://api.whatsapp.com/send?phone=+2348134117444">
            <FaWhatsappSquare />
          </a>
          <a href="https://www.linkedin.com/in/ayodeji-bakare-08a3851b7/">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/BakareAyodeji14">
            <FaTwitterSquare />
          </a>
          <a href="https://www.instagram.com/slow_pace_rapper/">
            <FaInstagramSquare />
          </a>
        </SocialMediaIcons>
      </Container>
    </Foot>
  );
};

const Foot = styled.footer`
  width: 100%;
  padding: 4rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #187e5f;
  align-items: center;
  overflow: hidden;
  h3 {
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: 600;
    color: #f8ecd6;
    text-align: center;
    @media (max-width: 575px) {
      font-size: 1.5rem;
    }
  }
  h4 {
    text-transform: uppercase;
    font-weight: 400;
    color: #f8ecd6;
    text-align: center;
    font-size: 0.8rem;
    margin-bottom: 3rem;
  }
`;
const Container = styled.div`
  width: 90%;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 500px;
  gap: 2rem;
  /* border: 3px solid black; */
  margin: 0 auto;
  span {
    display: flex;
    flex: 1;
    font-weight: 400;
    color: #f8ecd6;
    font-size: 0.8rem;
    flex-flow: column;
    align-items: center;
    text-align: center;
    gap: 0.5rem;
    transition: all 0.3s ease-in-out;
    border: 1px solid #f8ecd6;
    padding: 0.7rem 1.2rem;
    border-radius: 5px;
    a {
      text-decoration: none;
      color: #f8ecd6;
    }
    img {
      width: 1.7rem;
      height: 1.7rem;
      filter: invert(100%) sepia(15%) saturate(3200%) hue-rotate(320deg)
        brightness(100%) contrast(70%);
    }
  }
`;
const ContactForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 500px;
  gap: 2rem;
  border: 1px solid #f8ecd6;
  border-radius: 5px;
  margin: 2rem auto;
  padding: 2rem 0;
  form {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-flow: column;
    gap: 1rem;
    input {
      background: transparent;
      border: 1px solid #f8ecd6;
      border-radius: 5px;
      height: 3rem;
      padding: 0.3rem;
      color: #f8ecd6;
      outline: none;
      &::placeholder {
        color: #f8ecd6;
      }
    }
    textarea {
      background: transparent;
      border: 1px solid #f8ecd6;
      border-radius: 5px;
      color: #f8ecd6;
      padding: 0.5rem;
      outline: none;
      resize: none;
      min-height: 150px;
      &::placeholder {
        color: #f8ecd6;
        padding: 0.3rem;
      }
    }
    button {
      width: max-content;
      padding: 0.5rem 1.5rem;
      background: transparent;
      border: 1px solid #f8ecd6;
      border-radius: 5px;
      color: #f8ecd6;
      transition: all 0.4s ease-in-out;
      &:hover {
        background: #f8ecd6;
        color: #187e5f;
      }
    }
  }
`;
const SocialMediaIcons = styled.div`
  max-width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;
const Copyright = styled.div`
  position: relative;
  color: #f8ecd6;
  margin: 2rem auto;
  max-width: 500px;
  text-align: center;
  &::before {
    position: absolute;
    content: "";
    width: 30%;
    height: 1px;
    background: #f8ecd6;
    left: 0;
    top: 50%;
    @media (max-width: 425px) {
      width: 15%;
    }
  }
  &::after {
    position: absolute;
    content: "";
    width: 30%;
    height: 1px;
    background: #f8ecd6;
    right: 0;
    top: 50%;
    @media (max-width: 425px) {
      width: 15%;
    }
  }
`;
export default Footer;
