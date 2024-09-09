import React, { useState } from "react";
import checkboxIcon from "./images/icon-checkbox-check.svg";
import radioIcon from "./images/icon-radio-selected.svg";
import successIcon from "./images/icon-success-check.svg";

const App = () => {
    const [selectedQueryType, setSelectedQueryType] = useState("");
    const [isTermsChecked, setIsTermsChecked] = useState(false);

    const handleRadioClick = (queryType) => {
        setSelectedQueryType(queryType);
    };

    const handleCheckboxClick = () => {
        setIsTermsChecked(!isTermsChecked);
    };

    return (
        <div className="flex justify-center items-center min-h-screen w-full bg-green-200">
            <section className="w-[736px] bg-white p-10 rounded-2xl">
                <h1 className="text-green-900 heading">Contact Us</h1>
                <form className="flex flex-col">
                    <div className="flex flex-row w-full gap-4">
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
                                className="border-[1px] border-solid border-grey-500 rounded-lg h-12 p-2 outline-green-600 hover:cursor-pointer"
                            />
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
                                className="border-[1px] border-solid border-grey-500 rounded-lg h-12 p-2 outline-green-600 hover:cursor-pointer"
                            />
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
                        className="border-[1px] border-solid border-grey-500 rounded-lg h-12 p-2 outline-green-600 hover:cursor-pointer"
                    />

                    <div className="flex flex-col">
                        <label className="mt-6 mb-2 body text-green-900">
                            Query Type <span className="text-green-600">*</span>
                        </label>
                        <div className="flex flex-row w-full gap-4">
                            <div
                                onClick={() => handleRadioClick("general")}
                                className={`flex flex-1 gap-3 items-center border-[1px] border-solid border-grey-500 rounded-lg h-12 p-6 outline-green-600 hover:cursor-pointer ${
                                    selectedQueryType === "general"
                                        ? "bg-no-repeat bg-center bg-contain"
                                        : ""
                                }`}
                            >
                                <div
                                    className="h-5 w-5 bg-white rounded-full border-[1px] border-grey-500 bg-no-repeat bg-center "
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
                                className={`flex flex-1 gap-3 items-center border-[1px] border-solid border-grey-500 rounded-lg h-12 p-6 outline-green-600 hover:cursor-pointer ${
                                    selectedQueryType === "support"
                                        ? "bg-no-repeat bg-center bg-contain"
                                        : ""
                                }`}
                            >
                                <div
                                    className="h-5 w-5 bg-white rounded-full border-[1px] border-grey-500 bg-no-repeat bg-center "
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
                        className="min-h-[105px] border-[1px] border-solid border-grey-500 rounded-lg py-3 px-6 outline-green-600 text-green-900 bodyReuglar hover:cursor-pointer"
                    ></textarea>

                    <div
                        className="my-10 flex gap-4 hover:cursor-pointer"
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

                    <button className="bodyBold text-white bg-green-600 rounded-lg py-4 w-full">
                        Submit
                    </button>
                </form>
            </section>
        </div>
    );
};

export default App;
