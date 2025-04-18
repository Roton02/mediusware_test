import React from "react";

const TopHeader = () => {
  return (
    <div>
      <div className="bg-primary-1">
        <div className="flex justify-between container text-white py-[13px]">
          {/* left  */}
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3 h-3 md:w-4 md:h-4"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
            <a
              href="tel:+880 1750 020408"
              className="lg:text-xs text-[10px] lg:text-[14px] font-[450] ml-1 text-white"
            >
              +880 1750 020408
            </a>

            <span className="text-xs lg:mx-3 mx-1">|</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3 h-3 md:w-4 md:h-4"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>

            <a
              href="mailto:contact@mediusware.com"
              className="lg:text-xs text-[10px] lg:text-[14px] font-[450] ml-1 text-white"
            >
              contact@mediusware.com
            </a>
          </div>

          {/* right */}
          <div className="flex">
          <a href="https://www.facebook.com/mediusware/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2 16.0782C2 23.0385 7.05517 28.8263 13.6667 30V19.8885H10.1667V16H13.6667V12.8885C13.6667 9.3885 15.9218 7.44483 19.1115 7.44483C20.1218 7.44483 21.2115 7.6 22.2218 7.75517V11.3333H20.4333C18.7218 11.3333 18.3333 12.1885 18.3333 13.2782V16H22.0667L21.4448 19.8885H18.3333V30C24.9448 28.8263 30 23.0397 30 16.0782C30 8.335 23.7 2 16 2C8.3 2 2 8.335 2 16.0782Z"
                      fill="white"
                    />
                  </svg>
                </a>

                <a href="https://bd.aedin.com/company/mediusware-ltd">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M16 2C8.26792 2 2 8.26792 2 16C2 23.7321 8.26792 30 16 30C23.7321 30 30 23.7321 30 16C30 8.26792 23.7321 2 16 2ZM12.5729 21.8027H9.73792V12.6794H12.5729V21.8027ZM11.1379 11.5594C10.2425 11.5594 9.66354 10.925 9.66354 10.1404C9.66354 9.33979 10.26 8.72437 11.1744 8.72437C12.0887 8.72437 12.6487 9.33979 12.6662 10.1404C12.6662 10.925 12.0887 11.5594 11.1379 11.5594ZM22.9271 21.8027H20.0921V16.7467C20.0921 15.5698 19.6808 14.7706 18.6556 14.7706C17.8725 14.7706 17.4073 15.3117 17.2017 15.8323C17.1258 16.0175 17.1069 16.28 17.1069 16.541V21.8012H14.2704V15.5888C14.2704 14.4498 14.234 13.4975 14.196 12.6779H16.6592L16.789 13.9452H16.8458C17.2192 13.3502 18.1335 12.4723 19.6633 12.4723C21.5285 12.4723 22.9271 13.7221 22.9271 16.4083V21.8027Z"
                      fill="white"
                    />
                  </svg>
                </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
