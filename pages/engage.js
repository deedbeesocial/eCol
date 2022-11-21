import React from "react";
import { useState } from "react";

export default function Engage() {
  const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="border rounded shadow-sm">
        <button
          type="button"
          aria-label="Open item"
          title="Open item"
          className="flex items-center justify-between w-full  ease-out duration-300 transition-all p-4 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="text-lg  ease-out duration-300  font-medium">{title}</p>
          <div className="flex items-center justify-center w-8 h-8 border rounded-full">
            <svg
              viewBox="0 0 24 24"
              className={`w-3 text-gray-600 transition-transform duration-200 ${
                isOpen ? "transform rotate-180  ease-out duration-300 " : ""
              }`}
            >
              <polyline
                fill="none"
                stroke="green"
                strokeWidth="5"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="2,7 12,17 22,7"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
        {isOpen && (
          <div className="p-4 pt-0">
            <p className="text-gray-700">{children}</p>
          </div>
        )}
      </div>
    );
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="bg-lightgray">
      <div className="py-16       lg:py-20">
        <div className="md:container  md:mx-auto">
          <div className="flex flex-col mb-16 sm:text-center">
            <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
              <h2 className="text-3xl text-black text-center mt-14">
                How do you engage with Alttech ?
              </h2>
            </div>
          </div>
          <div className="space-y-4 ">
            <Item title="What are buildings that qualify for Alttech Solutions??">
              Buildings with high energy or water use is strongly urged to fill
              the Data Form. Your application will be followed by an NDA between
              your Company and Alttech India. If you are an SME, we will sign
              the NDA including your and your MSME cluster’s stakeholders
              name(s).
            </Item>
            <Item title="What happens after this?">
              Once the NDA is signed, we arrange a pre-investment meeting with
              the applicant. We handle all applications very seriously; the
              reason behind the value of opinions, is that there is always a
              room to grow with a derivative for the business.
            </Item>
            <Item title="What are the key areas we need to focus before applying?">
              Alttech is an ideas accelerator to bring efficiency in resource
              use in your company. Alttech India has a funding mechanism to
              support potential for such resource efficiency on water, energy,
              waste, air management or other areas of process manufacture on
              operations in your company. Alttech , upon evaluation, brings in
              ideas and solutions on smart clean technologies either for
              reduction in use of resources or for local generation of energy or
              water or for waste management. Alttech will bring in integrated
              A.I. and/or smart technologies where applicable to enhance the
              effectiveness of solutions.
            </Item>
            <Item title="What type of support does the building owner-company receive?">
              Alttech India, with its battery of green leaders and experts,
              provides immeasurable and priceless support in terms of:
              <ul>
                <li>
                  <br />- Mentoring in operations and business process on
                  maintenance,
                </li>
                <li>
                  - Strategic planning of solutions with a comprehensive,
                  synergistic approach,
                </li>
                <li>- R&D, testing and commissioning,</li>
                <li>
                  - ICT and IEC where it helps the company with its
                  stakeholders,
                </li>
                <li>- Human resources training and capacity building,</li>
                <li>
                  - Meeting stakeholders within the company and external, to
                  explain the potential for savings and the investment returns
                  that Alttech solutions offer.{" "}
                </li>
                <li>
                  - Funding, depending on the budget required for the solutions,
                  with a structured exit of Alttech ’s investment at attractive
                  costs.{" "}
                </li>
              </ul>
            </Item>
            <Item title="Any support period?">
              Alttech selects solutions depending on how to accelerate the ideas
              that will bring such savings for the building or the manufacturing
              unit. Solution frameworks are offered in a timely manner, with
              solutions implementation cycle never exceeding 3 to 6 months. By
              the end of the acceleration period, Alttech will organize
              demonstrations with all potential investors and stakeholders
              present. Once implemented, the savings are measured, monitored and
              managed.
            </Item>
          </div>
        </div>
      </div>
    </section>
  );
}
