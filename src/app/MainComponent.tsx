"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Popup from "reactjs-popup";

const MainComponent = (content: string) => {
  const openTick = (_: any) => {
    setOpenModal(true);
  };

  const onAgree = (_: any) => {
    setAgree(true);
    setOpenModal(false);
  };

  const onCloseModal = () => {
    if (agree) {
      setChecked(true);
    } else {
      setChecked(false);
    }
    setOpenModal(false);
  };

  useEffect(() => {
    console.log(`${typeof content} ${content.toString()}`);
  }, []);

  const [openModal, setOpenModal] = useState(false);
  const [checked, setChecked] = useState(false);
  const [agree, setAgree] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const stringHtml = `
<b>Last Updated : 26 January 2024</b>
<h2 id="article-1-purpose-and-application-">Article 1 (Purpose and Application)</h2>
<ol>
<li><p>The purpose of these Terms of Use is to set forth the rights, obligations and responsibilities of PT Upbit Exchange Indonesia (hereinafter &quot;Company&quot; or &quot;we&quot;, &quot;us&quot; and &quot;our&quot;) and the Users or &quot;you&quot; and &quot;your&quot;, concerning the Services. This User Agreement (as defined under Article 2 below) is a legal contract between Users and the Company, and accordingly, Users should read all the terms and conditions carefully as they affect the Users&#39; legal rights, by accessing the Upbit Site or using the Services.</p>
</li>
<li><p>By signing up to use an account through www.id.upbit.com or any other websites, pages, features or content, which the Company owns or operates, including its mobile applications or third party applications relying on such APIs and related services (collectively the &quot;Upbit Site&quot;), the User agrees that it has read, understood, and accepted all of the terms and conditions contained in the User Agreement (including this Terms of Use, the User Guide and Privacy Policy), which shall constitute the entire agreement between the User (as subscriber, customer or user of the Services) and the Company (as owner, operator and/or offeror of the Services). Users may not pick and choose which terms apply to the Users. If Users do not agree with any of the terms in the User Agreement, Users must cease all access, stop using the Upbit Site and any of the Services offered by the Company.</p>
</li>
<li><p>The User should be aware and accepts that the risk of loss in trading or holding Digital Assets can be substantial. Digital Assets are currently regulated by the Commodity Futures Trading Regulatory Agency (&quot;BAPPEBTI&quot;). Notwithstanding the above, the User should carefully consider whether trading or holding Digital Assets is suitable for the User in light of the User’s financial condition and personal circumstances.</p>
</li>
</ol>
<h2 id="article-2-definitions-">Article 2 (Definitions)</h2>
<p>The terms used herein shall have the following meaning:</p>
<ol>
<li><p>&quot;Account&quot; means a User&#39;s trading account opened and maintained in the method prescribed by the Company and for the Company to make the Services available to the User after the User agrees and accepts the terms and conditions to the User Agreement electronically or in such other method prescribed by the Company;</p>
</li>
<li><p>&quot;Affiliate&quot; means any related corporations, entities or associates of the Company, including its parent company;</p>
</li>
<li><p>&quot;AML and CFT&quot; means anti-money laundering and countering the financing of terrorism;</p>
</li>
<li><p>&quot;Applicable Law&quot; means the laws, rules, regulations, by-laws, customs, usages, practices, rulings, interpretations, directives, directions, decisions, guidelines, notices, practice notes and circulars of all applicable Regulatory Authorities for the time being in force in Indonesia or such other jurisdictions that are applicable and binding on the relevant party or the use or offer of the Services;</p>
</li>
<li><p>&quot;Applicant&quot; has the meaning ascribed to it in Article 5;</p>
</li>
<li><p>&quot;Authorized Representatives&quot; means the User&#39;s officers, employees, representatives, agents, service providers, sub-contractors or delegates or any other persons, whom the User has authorized access to use the Services through the User&#39;s Account on behalf of the User, irrespective of whether such a person has been registered with the Company as Authorized Representative of the User, in accordance with the User Agreement;</p>
</li>
<li><p>&quot;Business Day(s)&quot; or &quot;business day(s)&quot; means every day except Saturday, Sunday and other public holidays determined by the Indonesian government where commercial banks in Indonesia are open and are operating to carry out business activities;</p>
</li>
<li><p>&quot;Content&quot; means the online images, digital information or materials that are owned, operated, licensed or controlled and made available on the Upbit Site by the Company, its Affiliates or its third-party service providers to Users in the form of signs, texts, letters, codes, algorithms, diagrams, colors, voices, sounds, graphics, images or videos (or in any kind of combination of the foregoing);</p>
</li>
<li><p>&quot;Connected Person&quot; means: (a) in relation to a legal entity (other than a partnership), any director, substantial or controlling shareholder or any natural person having executive authority in the legal entity; (b) in relation to a partnership, means any partner or manager; and (c) with regard to any other legal arrangement, any natural person having executive authority or controlling position in the legal arrangement.</p>
</li>
<li><p>&quot;Digital Assets&quot; mean Bitcoin (BTC), Ethereum (ETH), and any other Digital Assets, virtual or cryptocurrencies, digital tokens or electronic money, which can be traded or exchanged through the Services from time to time as determined by the Company in its sole and absolute discretion. &quot;Digital Assets&quot; shall also include such Digital Assets having a stable value, commonly known as “stablecoins” but shall not include securities, units of collective investment schemes or any other capital markets products as determined by the Company in its sole and absolute discretion.</p>
</li>
</ol>
<p>Distributed of Denial of Services (&quot;DDOS&quot;) attacks and other hacking attacks;</p>
<p>Internet Data Center (&quot;IDC&quot;) failure;</p>
<p>disruptions in the circuits of key telecommunications business operators;</p>
<p>war, riot, civil unrest or revolution, sabotage, terrorism, insurrection, acts of civil or military authority, the imposition of sanctions, embargo, breaking off of diplomatic relations or similar actions;</p>
<p>terrorist attacks, civil war, civil commotions or riots;</p>
<p>acts of God, epidemic, pandemic, flood, earthquake, typhoon or other natural disasters or adverse weather or environmental condition;</p>
<p>any act of state or other exercises of a sovereign, judicial or executive prerogative by any government or public authority, including expropriation, nationalisation or compulsory acquisition or acts claimed to be justified by executive necessity;</p>
<p>fire, explosion or accidental damage;</p>
<p>the collapse of building structures or failure of plant machinery, computers or vehicles;</p>
<p>interruption or failure of utility service, including but not limited to electricity, power, gas or water;</p>
<p>any labour disputes, including but not limited to strikes, industrial action or lockouts; or</p>
<p>any legal and regulatory changes, which materially impacts the Service or Company&#39;s business.</p>
<p>&quot;IDR&quot; means Indonesian Rupiah, being the lawful currency of Indonesia.</p>
<h2 id="article-3-posting-application-and-amendment-">Article 3 (Posting, Application and Amendment)</h2>
<ol>
<li><p>The Company shall post these Terms of Use, the Privacy Policy, the User Guide and any other documents governing the terms and conditions for the use of the Services, on the initial landing page used to access the Services, in order to allow the Terms of Use, Privacy Policy and User Guide to be available and easily accessible to Users, via the Upbit Site.</p>
</li>
<li><p>The Company reserves the right to supplement, vary or amend the terms of the Terms of Use or any of the Privacy Policy and User Guide or any part of it from time to time, subject to Applicable Laws.</p>
</li>
<li><p>The Company shall notify the Users of any such supplement, variation or amendments by posting a general notification through the Services on the Upbit Site or following such other method as reasonably determined by the Company. In posting the notification, the Company shall state the applicable date and such supplement, variation or amendment shall take effect fourteen (14) days following the posting of such notification. However, where such supplement, modification or change (in the reasonable opinion of the Company) may cause material impact to Users or substantially affect the Services or no applicable date is stated; then such supplement, variation or amendments shall take effect thirty (30) days following the posting of such notification (&quot;Effective Date of Change&quot;). The revised User Agreement Terms of Use, Privacy Policy &amp; User Guide (with the revised &quot;Last Updated&quot; date at the top of the applicable document) will be posted on/through the Services.</p>
</li>
<li><p>If a User does not agree to any proposed supplement, variation or amendment, the User may express such objection before the Effective Date of Change and/or terminate the Services. Users who do not raise any opposition to any proposed supplement, variation or amendment shall be deemed to have agreed to such supplement, variation or amendment.</p>
</li>
<li><p>The continued access or use of the Services and the Account by the User on or after the Effective Date of Change constitutes User&#39;s agreement to be legally bound by the User Agreement, as supplemented, varied or amended. Therefore, it is the User&#39;s responsibility to (a) review the latest versions of each document forming the User Agreement; (b) the User does not use the Services on or after the Effective Date of Change, if the User has any serious objection or concerns to any of the supplement, variation or amendment.</p>
</li>
</ol>
<h2 id="article-4-separate-user-guide-or-other-documents-">Article 4 (Separate User Guide or Other Documents)</h2>
<ol>
<li><p>The Company may establish a separate user guide (&quot;User Guide&quot;), including frequently asked questions (&quot;FAQ&quot;) or any other documents in addition to these Terms of Use from time to time. The User Guide may include residents of sanctioned countries not permitted to access the Service, matters on the applicable service fees and taxes, any minimum transaction size and guidelines on the use of the Services.</p>
</li>
<li><p>It is the User&#39;s responsibility to keep itself informed of the Terms of Use, User Guide and any other applicable documents as may be amended from time to time.</p>
</li>
</ol>
<h2 id="article-5-user-eligibility-">Article 5 (User Eligibility)</h2>
<p>All users may access specific public areas of the Upbit Site. However, only registered Users may access and use the Services. To use the Services, the individual person or legal entity who desires to become a User or customer of the Company&#39;s Services (&quot;Applicant&quot;) will need to register for an Account (&quot;Account&quot; or &quot;Upbit Account&quot;). The application is subject to the Applicant providing the Company with such information and documents to prove that the Applicant fulfils the following criteria:</p>
<p>The Applicant shall complete, to the satisfaction of the Company, a registration form supplied by the Company, either online or by such other method as the Company shall notify the Applicant;</p>
<p>To be eligible to use the Services, the Applicant must be at least 18 years old.</p>
<p>The Applicant&#39;s eligibility to access Services also depends on the country in which the Applicant resides. Residents of sanctioned countries are not allowed to use Services and list of such countries can be found in the User Guide.</p>
<p>The Applicant shall provide, to the satisfaction of the Company, such information and supporting documents as may be required by the Company to conduct KYC, process the application, and pass the KYC test or procedures as determined by the Company following the Company&#39;s internal policies;</p>
<p>The Applicant shall have no indicia of being connected with money laundering or terrorist financing as determined by the Company in its sole discretion;</p>
<p>The Applicant shall be of legal capacity to enter into a contract;</p>
<p>The Applicant confirms that the application is made on its own behalf and that the Account is used by the Applicant for its account, and not as agent for any third parties;</p>
<p>The Applicant has agreed to the User Agreement; and</p>
<p>The Applicant shall satisfy such other criteria and procedures as the Company may determine from time to time following the Company&#39;s internal policies or as required by Applicable Laws.</p>
<p>The continued use of the Services by the User shall be subject to the above eligibility criteria, applied with the necessary modifications. The Company may, in its sole discretion, refuse to open an Upbit Account for the Applicant or limit the number of Upbit Accounts that the Applicant may hold, even with full compliance of the abovementioned.</p>
<p>Where the Applicant or User is a non-natural person or legal entity, the Applicant or User shall nominate its own Authorized Representatives to act as primary liaison with the Company (including providing instructions) and to access and manage the User&#39;s Account on behalf of the User.</p>
<p>The Applicant and User agree to provide the Company with the information requested for identity verification, and the detection of money laundering, terrorist financing, fraud, or any other financial crime and the Company is permitted to keep a record of such information. The Applicant and User are required to complete specific verification procedures before being allowed to use or continue to use the Services, and the limits that apply to the use of the Services may change as a result of the information collected on an ongoing basis. The information which the Company request will include the Applicant and User’s Personal Data, including, but not limited to its full name, address, telephone number, e-mail address, country/date of birth or incorporation (in case of corporate entity), occupation, primary source of funds and/or income, annual income, taxpayer identification number, government identification number, and information regarding the User’s bank account (such as the name of the bank, bank’s address, account type, SWIFT address, and account number) and similar personal information as it relates to its Connected Persons, Authorized Representatives and respective beneficial owners (collectively the “Relevant Third Parties”). In providing us with such Personal Data or any other information that may be required, the Applicant and User confirm that the information is current, valid, accurate and not misleading.</p>
`;
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <nav className="flex flex-row bg-blueUpbit-1 items-center h-16 w-screen p-4">
        <div className="flex pr-10 ml-10">
          <Image
            src="upbit_logo.svg"
            alt="upbit logo"
            width={140}
            height={32}
          ></Image>
        </div>
        <div className="flex flex-row px-5 justify-between items-center w-2/4">
          <p className="text-neutralGrey3 font-semibold text-md">Exchange</p>
          <p className="text-neutralGrey3 font-semibold text-md">Wallets</p>
          <p className="text-neutralGrey3 font-semibold text-md">My Trade</p>
          <p className="text-neutralGrey3 font-semibold text-md">Trends</p>
          <p className="text-neutralGrey3 font-semibold text-md">Support</p>
        </div>

        <div className="flex flex-row px-5 justify-end items-center w-full">
          <p className="text-primary text-sm px-2">Log In</p>
          <p className="text-primary text-sm px-2">Sign Up</p>
          <p className="text-primary text-sm font-bold px-2">EN</p>
          <p className="text-primary text-sm px-2">|</p>
          <p className="text-neutralGrey3 text-sm px-2">ID</p>
        </div>
      </nav>

      <div className="flex w-full justify-center mt-10">
        <div className="flex flex-col justify-center w-1/2 text-center items-center p-10">
          <p className="font-bold text-3xl">Sign Up</p>
          <p className="text-md font-extrabold text-neutralGrey3 p-2">
            Please ensure that you are at our official website as shown below
          </p>
          <p className="mb-8">
            <i className="fa fa-lock text-2xl text-blueUpbit-2"></i>
            <span className="font-medium text-blueUpbit-2 ml-1">https</span>
            <span className="font-medium">://id.upbit.com</span>
          </p>
          <input className="py-4 px-4 my-1 border w-full" placeholder="Email" />
          <input
            className="py-4 px-4 my-1 border w-full"
            placeholder="Password"
            type="password"
          />
          <input
            className="py-4 px-4 my-1 border w-full"
            placeholder="Confirm Password"
            type="password"
          />
          <input
            className="py-4 px-4 my-1 border w-full"
            placeholder="Referral Code (optional)"
          />
          <div
            id="checkbox"
            className="flex flex-row w-full pt-4 items-center text-left my-2"
          >
            <input
              onChange={openTick}
              checked={checked}
              type="checkbox"
              className="w-4 h-4 bg-neutralGrey3 border-gray-300 rounded text-justify"
            />
            <label
              htmlFor="checkbox"
              className="ml-4 text-sm font-poppins text-primary "
            >
              <p className="flex text-left text-black">
                I certify that I am 18 years of age or older, and I agree to the
                <span className="text-blueUpbit-2 mx-1">Terms & Condition</span>
                and
                <span className="text-blueUpbit-2 mx-1">Privacy Policy</span>.
              </p>
            </label>
          </div>
          <button
            className={`flex text-primary mt-4 ${
              agree ? "bg-blueUpbit-1" : "bg-neutralGrey2"
            } w-full justify-center p-4 text-center`}
            disabled={agree}
            onClick={(e) => setChecked(!e)}
          >
            Sign Up
          </button>
          <Popup
            contentStyle={{
              width: "50%",
            }}
            open={openModal}
            onClose={onCloseModal}
            modal
            position="center center"
            overlayStyle={{ backdropFilter: "blur(2px)" }}
          >
            <div
              id="square"
              className="flex w-full bg-primary p-6 rounded-md flex-col items-center text-black"
            >
              <p className="text-xl font-medium">Terms and Condition</p>

              <div
                id="scrollableDiv"
                ref={(node) => {
                  const div = document.getElementById("scrollableDiv");

                  div?.addEventListener("scroll", () => {
                    console.log(
                      `${div.scrollTop} + ${div.clientHeight} >= ${div.scrollHeight}`
                    );
                    if (div.scrollTop + div.clientHeight >= div.scrollHeight) {
                      console.log("reading done!");
                      setDisabled(false);
                    }
                  });
                }}
                className="flex overflow-auto h-96 rounded-sm p-4 my-2 w-11/12 border-black border-2"
              >
                <article
                  className="prose-lg max-[767px]:prose"
                  dangerouslySetInnerHTML={{
                    __html: stringHtml,
                  }}
                />
              </div>
              <button
                disabled={disabled}
                onClick={onAgree}
                className={`${
                  disabled ? "bg-neutralGrey2" : "bg-blueUpbit-1"
                } w-11/12  flex justify-center text-primary p-2 rounded-sm m-2`}
              >
                I have read the Terms and Condition
              </button>
            </div>
          </Popup>
        </div>
      </div>

      <div className="flex items-center my-4"></div>
    </div>
  );
};

export default MainComponent;
