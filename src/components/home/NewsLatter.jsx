import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function NewsletterSignup() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_10spk4i",
        "template_hmouvu3",
        form.current,
        "eBzIz6XcIJWLwQzcI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your newsletter signup logic here
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div className="border image p-10 font-Roboto flex flex-col justify-center items-center h-[14rem]  shadow-xl">
      <h1 className="text-3xl font-OpenSans yellow_gradient mb-5">
        Sign up for our newsletter
      </h1>
      <p className="text-[0.98rem]">
        Join Our Fashion Community! Get First Dibs on New Arrivals, Styling
        Tips, and Insider Deals
      </p>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="my-2 flex flex-col items-center justify-center w-full md:flex-row"
      >
        <label htmlFor="user_email" className="text-4xl font-semibold">
          Sign up for our newsletter
        </label>
        <input
          type="email"
          name="user_email"
          placeholder="Enter your email"
          className="mx-5 border border-5 border-slate-400 "
          required
        />
        <button
          type="submit"
          value="Send"
          className="rounded-[5px] bg-gray-500 w-[8rem] h-[2rem]  active:scale-90 active:text-gray-200"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default NewsletterSignup;
