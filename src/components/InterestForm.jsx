import React, { useState } from "react";
import Logo from "../images/britam-logo-no-bg.png";

const InterestForm = ({ setIsOpen }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    typeOfCover: "",
    currentValuation: "",
    Product: "",
    yearOfManufacture: "",
    vehicleModel: "",
  });

  const { fullName, phoneNumber, email, vehicleModel, currentValuation, yearOfManufacture, typeOfCover } = formData;

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/xml");

    let raw = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">\r\n<soap:Header xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\r\n</soap:Header>\r\n<soapenv:Body>\r\n<ws:registerCustomerInput xmlns:ws="http://ws.britam/">\r\n<NAME>${fullName}</NAME>\r\n<PHONENUMBER>${phoneNumber}</PHONENUMBER>\r\n<EMAIL>${email}</EMAIL>\r\n<VEHICLEMODEL>${vehicleModel}</VEHICLEMODEL>\r\n<YEAROFMANUFACTURE>${yearOfManufacture}</YEAROFMANUFACTURE>\r\n<CURRENTVALUATION>${currentValuation}</CURRENTVALUATION>\r\n<TYPEOFCOVER>${typeOfCover}</TYPEOFCOVER>\r\n</ws:registerCustomerInput>\r\n</soapenv:Body>\r\n</soapenv:Envelope>`;
    let requestOptions = {
      mode: 'no-cors',
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://10.10.4.62:9005/AutoExpress/ProxyService/AutoExpressPipelineProxyService", requestOptions)
      .then(response => {
        response.text();
        setIsOpen(true);
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          typeOfCover: "",
          currentValuation: "",
          Product: "",
          yearOfManufacture: "",
          vehicleModel: "",
        });
      })
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    };

  return (
    <article className="h-screen relative container lg:overflow-hidden bg-cover bg-no-repeat m-auto bg-gradient-to-r from-cyan-500 to-blue-700 flex items-center">
      <form className="m-auto bg-white/90 p-5" onSubmit={handleSubmit}>
        <img
          src={Logo}
          alt="banner-poster"
          style={{ width: "10rem", height: "3rem", margin: "auto" }}
        />

        <h2 className="text-sky-600 text-xl font-bold text-center mb-2">
          BRITAM MOTOR INSURANCE
        </h2>
        <hr className="border-sky-500" />
        <div className="flex flex-wrap -mx-3 my-4">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-sky-500 text-xs font-bold mb-2"
              htmlFor="grid-name"
            >
              Name <span className="text-red-600">*</span>
            </label>
            <input
              name="fullName"
              className="appearance-none block w-full bg-gray-200 text-sky-700 border-0 border-b-2 border-sky-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-sky-500"
              id="grid-name"
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-1/2 px-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-sky-500 text-xs font-bold mb-2"
              htmlFor="grid-phone-number"
            >
              Phone Number <span className="text-red-600">*</span>
            </label>
            <input
              name="phoneNumber"
              className="appearance-none block w-full bg-gray-200 text-sky-700 border-0 border-b-2 border-sky-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-sky-500"
              id="grid-phone-number"
              type="tel"
              placeholder="07XX XXX XXX"
              value={phoneNumber}
              onChange={handleChange}
              maxLength="10"
              minLength="10"
              required
            />
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-sky-500 text-xs font-bold mb-2"
              htmlFor="grid-email"
            >
              Email <span className="text-red-600">*</span>
            </label>
            <input
              name="email"
              className="appearance-none block w-full bg-gray-200 text-sky-700 border-0 border-b-2 border-sky-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-sky-500"
              id="grid-email"
              type="email"
              placeholder="johndoe@gmail.com"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-1/2 px-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-sky-500 text-xs font-bold mb-2"
              htmlFor="grid-model"
            >
              Vehicle Model <span className="text-red-600">*</span>
            </label>
            <input
              name="vehicleModel"
              className="appearance-none block w-full bg-gray-200 text-sky-700 border-0 border-b-2 border-sky-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-sky-500"
              id="grid-model"
              type="text"
              placeholder="Enter model eg. Toyota"
              value={vehicleModel}
              onChange={handleChange}
              required
            />
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-sky-500 text-xs font-bold mb-2"
              htmlFor="grid-valuation"
            >
              Current Valuation <span className="text-red-600">*</span>
            </label>
            <input
              name="currentValuation"
              className="appearance-none block w-full bg-gray-200 text-sky-700 border-0 border-b-2 border-sky-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-sky-500"
              id="grid-valuation"
              type="number"
              placeholder="Enter current value in KES"
              value={currentValuation}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-1/2 px-3 md:mb-0 flex flex-col">
            <label
              className="block uppercase tracking-wide text-sky-500 text-xs font-bold mb-2"
              htmlFor="grid-year"
            >
              Year of Manufacture <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <select
                name="yearOfManufacture"
                className="block appearance-none w-full bg-gray-200 border-0 border-b-2 border-sky-300 text-sky-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-sky-500"
                id="grid-year"
                value={yearOfManufacture}
                onChange={handleChange}
                required
              >
                <option value="">Choose an option</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="Other">Other</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-sky-500">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            {yearOfManufacture === "Other" ? <span className="text-xs italic text-red-600 lg:w-64" >Note: Cars older than 15 years require a mechanical evaluation.</span> : ""}
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-sky-500 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              Type of Cover <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <select
                name="typeOfCover"
                className="block appearance-none w-full bg-gray-200 border-0 border-b-2 border-sky-300 text-sky-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                value={typeOfCover}
                onChange={handleChange}
                required
              >
                <option value="">Choose an option</option>
                <option value="Comprehensive">Comprehensive</option>
                <option value="Third Party">Third Party</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-sky-500">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="form-check text-center mb-4 flex flex-col">
          <div>
            <input
              className="form-check-input"
              type="checkbox"
              id="check1"
              name="option1"
              required
            />
            <label className="form-check-label text-sky-500 px-2">
              I have read and agree to the
              <a
                href="https://ke.britam.com/help/other-services/terms-and-conditions"
                className="text-red-600"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Terms and Conditions
              </a>
            </label>
          </div>
        </div>
        <footer className="grid justify-center">
          <button className="rounded-lg bg-gradient-to-r from-sky-700 to-red-500 p-2 text-white text-lg hover:text-xl text-bold w-52 hover:opacity-80">
            Submit
          </button>
        </footer>
      </form>
    </article>
  );
};

export default InterestForm;
