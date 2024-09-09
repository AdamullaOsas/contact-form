import React, { useState, useEffect } from "react";
import checkboxIcon from "./images/icon-checkbox-check.svg";
import radioIcon from "./images/icon-radio-selected.svg";
import successIcon from "./images/icon-success-check.svg";

const App = () => {
    const [selectedQueryType, setSelectedQueryType] = useState("");
    const [isTermsChecked, setIsTermsChecked] = useState(false);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [errors, setErrors] = useState({});
    const [showAlert, setShowAlert] = useState(false);

    const handleRadioClick = (queryType) => {
        setSelectedQueryType(queryType);
    };

    const handleCheckboxClick = () => {
        setIsTermsChecked(!isTermsChecked);
    };

    const validateForm = () => {
        const newErrors = {};

        if (!firstName.trim()) {
            newErrors.firstName = "First name is required";
        }
        if (!lastName.trim()) {
            newErrors.lastName = "Last name is required";
        }
        if (!email.trim()) {
            newErrors.email = "Email is required";
        }
        if (!selectedQueryType) {
            newErrors.queryType = "Please select a query type";
        }
        if (!message.trim()) {
            newErrors.message = "Message is required";
        }
        if (!isTermsChecked) {
            newErrors.terms = "You must agree to the terms and conditions";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            setShowAlert(true);
        }
    };

    useEffect(() => {
        if (showAlert) {
            const timer = setTimeout(() => {
                setShowAlert(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [showAlert]);

    return (
        <div className="flex justify-center items-center min-h-screen w-full bg-green-200">
            <section className="md:w-[736px] w-[90%] bg-white p-10 rounded-2xl">
                <h1 className="text-green-900 heading">Contact Us</h1>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div className="flex sm:flex-row flex-col w-full sm:gap-4 ">
                        <div className="flex flex-col flex-1">
                            <label
                                htmlFor="firstName"
                                className="body text-green-900 mt-6 mb-2"
                            >
                                First name{" "}
                                <span className="text-green-600">*</span>
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                className={`border-[1px] border-solid rounded-lg h-12 p-2 outline-green-600 hover:cursor-pointer ${
                                    errors.firstName
                                        ? "border-red-500"
                                        : "border-grey-500"
                                }`}
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            {errors.firstName && (
                                <span className="text-red body">
                                    {errors.firstName}
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col flex-1">
                            <label
                                htmlFor="lastName"
                                className="body text-green-900 mt-6 mb-2"
                            >
                                Last name{" "}
                                <span className="text-green-600">*</span>
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                className={`border-[1px] border-solid rounded-lg h-12 p-2 outline-green-600 hover:cursor-pointer ${
                                    errors.lastName
                                        ? "border-red-500"
                                        : "border-grey-500"
                                }`}
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            {errors.lastName && (
                                <span className="text-red body">
                                    {errors.lastName}
                                </span>
                            )}
                        </div>
                    </div>

                    <label
                        htmlFor="email"
                        className="body text-green-900 mt-6 mb-2"
                    >
                        Email Address <span className="text-green-600">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className={`border-[1px] border-solid rounded-lg h-12 p-2 outline-green-600 hover:cursor-pointer ${
                            errors.email ? "border-red-500" : "border-grey-500"
                        }`}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && (
                        <span className="text-red body">{errors.email}</span>
                    )}

                    <div className="flex flex-col">
                        <label className="mt-6 mb-2 body text-green-900">
                            Query Type <span className="text-green-600">*</span>
                        </label>
                        <div className="flex sm:flex-row w-full gap-4 flex-col">
                            <div
                                onClick={() => handleRadioClick("general")}
                                className={`flex flex-1 gap-3 max-h-[51px] items-center border-[1px] border-solid border-grey-500 rounded-lg h-12 p-6 outline-green-600 hover:cursor-pointer ${
                                    selectedQueryType === "general"
                                        ? "bg-no-repeat bg-center bg-contain bg-green-200"
                                        : ""
                                }`}
                            >
                                <div
                                    className="h-5 w-5 rounded-full border-[1px] border-grey-500 bg-no-repeat bg-center "
                                    style={{
                                        backgroundImage:
                                            selectedQueryType === "general"
                                                ? `url(${radioIcon})`
                                                : "none",
                                    }}
                                ></div>
                                <label
                                    htmlFor="general"
                                    className="bodyRegular text-grey-900 hover:cursor-pointer"
                                >
                                    General Enquiry
                                </label>
                            </div>
                            <div
                                onClick={() => handleRadioClick("support")}
                                className={`flex flex-1 gap-3 max-h-[51px] items-center border-[1px] border-solid border-grey-500 rounded-lg h-12 p-6 outline-green-600 hover:cursor-pointer ${
                                    selectedQueryType === "support"
                                        ? "bg-no-repeat bg-center bg-contain bg-green-200"
                                        : ""
                                }`}
                            >
                                <div
                                    className="h-5 w-5  rounded-full border-[1px] border-grey-500 bg-no-repeat bg-center "
                                    style={{
                                        backgroundImage:
                                            selectedQueryType === "support"
                                                ? `url(${radioIcon})`
                                                : "none",
                                    }}
                                ></div>{" "}
                                <label
                                    htmlFor="support"
                                    className="bodyRegular text-grey-900 hover:cursor-pointer"
                                >
                                    Support Request
                                </label>
                            </div>
                        </div>
                        {errors.queryType && (
                            <span className="text-red body">
                                {errors.queryType}
                            </span>
                        )}
                    </div>

                    <label
                        htmlFor="message"
                        className="mt-6 mb-2 body text-green-900"
                    >
                        Message <span className="text-green-600">*</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className={`min-h-[105px] border-[1px] border-solid rounded-lg py-3 px-6 outline-green-600 text-green-900 bodyRegular hover:cursor-pointer ${
                            errors.message
                                ? "border-red-500"
                                : "border-grey-500"
                        }`}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    {errors.message && (
                        <span className="text-red body">{errors.message}</span>
                    )}

                    <div
                        className="mt-10 flex gap-4 hover:cursor-pointer"
                        onClick={handleCheckboxClick}
                    >
                        <div
                            className={`w-6 h-6 border-[1px] border-solid border-grey-500 rounded-lg flex justify-center items-center ${
                                isTermsChecked
                                    ? "bg-no-repeat bg-center bg-contain border-none"
                                    : ""
                            }`}
                            style={{
                                backgroundImage: isTermsChecked
                                    ? `url(${checkboxIcon})`
                                    : "none",
                            }}
                        ></div>
                        <label
                            htmlFor="terms"
                            className="body hover:cursor-pointer"
                        >
                            I have read and agree to the terms and conditions{" "}
                            <span className="text-green-600">*</span>
                        </label>
                    </div>
                    {errors.terms && (
                        <span className="text-red body">{errors.terms}</span>
                    )}

                    <button className="bodyBold text-white bg-green-600 rounded-lg py-4 mt-10 w-full">
                        Submit
                    </button>
                </form>
            </section>

            {showAlert && <CustomAlert />}
        </div>
    );
};

const CustomAlert = () => {
    return (
        <div className="fixed top-[24px] left-1/2 transform -translate-x-1/2 bg-grey-900 shadow-lg rounded-lg p-6 flex flex-col z-50">
            <div className="flex items-center justify-start gap-2 mb-2">
                <img src={successIcon} alt="Success" className="size-6" />
                <h2 className="text-white bodyBold">Message Sent!</h2>
            </div>
            <p className="body text-green-200">
                Thanks for completing the form. We'll be in touch soon!
            </p>
        </div>
    );
};

export default App;
