import "./footer.css";

function footer() {
  return (
    <div>
      <div className="footer-blue-bg">
        <div className="footer-padding">
          <div className="footer-top-row">
            <div className="footer-nav-col">
              <div className="footer-title">NAVIGATION</div>
              <div className="footer-divider">
                <svg
                  width="151"
                  height="2"
                  viewBox="0 0 151 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M151 1L4.88758e-06 1"
                    stroke="white"
                    stroke-opacity="0.5"
                    stroke-width="1.5"
                  />
                </svg>
              </div>
              <div className="footer-subtext-top">HOME</div>
              <div className="footer-subtext">PROJECTS</div>
              <div className="footer-subtext">BLOG</div>
              <div className="footer-subtext">PRICING</div>
            </div>
            <div className="footer-legal-col">
              <div className="footer-title">LEGAL</div>
              <div className="footer-divider">
                <svg
                  width="235"
                  height="2"
                  viewBox="0 0 235 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M235 1L-4.41074e-06 1"
                    stroke="white"
                    stroke-opacity="0.5"
                    stroke-width="1.5"
                  />
                </svg>
              </div>
              <div className="footer-subtext-top">PRIVACY POLICY</div>
              <div className="footer-subtext">STUDENT TERMS OF SERVICE</div>
              <div className="footer-subtext">BUSINESS TERMS OF SERVICE</div>
            </div>
            <div className="footer-social-col">
              <div className="footer-title">SOCIAL</div>
              <div className="footer-divider">
                <svg
                  width="376"
                  height="2"
                  viewBox="0 0 376 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M376 1L5.24521e-06 1"
                    stroke="#828087"
                    stroke-width="1.5"
                  />
                </svg>
              </div>
              <div className="footer-social-buttons-container">
                <button className="footer-social-newletter-button">
                  SIGN UP FOR NEWSLETTER
                </button>
                <button className="footer-social-ig-button">
                  <svg
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="26" cy="26" r="26" fill="white" />
                    <path
                      d="M18.2326 11.8291H33.619L34.2146 11.9317C35.8387 12.1872 37.3196 13.0103 38.394 14.2547C39.4685 15.4991 40.0669 17.0842 40.0829 18.7281C40.1111 23.5773 40.1011 28.4282 40.0829 33.279C40.0827 34.6555 39.6524 35.9975 38.852 37.1173C37.4673 39.0845 35.5431 40.1284 33.1541 40.1483C28.3314 40.1896 23.5103 40.1615 18.6876 40.1582C18.4775 40.1582 18.2657 40.135 18.054 40.1152C16.6584 39.9765 15.3373 39.4194 14.2638 38.5169C13.1903 37.6144 12.4146 36.4086 12.0384 35.0575C11.916 34.6075 11.8514 34.141 11.7588 33.681V18.2947C11.7952 18.0879 11.825 17.8794 11.8663 17.6726C12.4371 14.822 14.1031 12.9508 16.8843 12.0971C17.3287 11.9843 17.7788 11.8949 18.2326 11.8291ZM37.2588 26.0243C37.2588 23.6716 37.2588 21.3196 37.2588 18.968C37.2588 17.7636 36.87 16.7048 35.9981 15.8527C35.5983 15.4608 35.1239 15.1533 34.6029 14.9484C34.082 14.7435 33.5251 14.6454 32.9655 14.6599C30.8147 14.6599 28.6507 14.6599 26.4933 14.6599C23.9675 14.6599 21.4406 14.6599 18.9126 14.6599C18.0776 14.6403 17.2551 14.8657 16.5468 15.3084C15.2232 16.1571 14.6028 17.3963 14.5945 18.9399C14.5796 21.9179 14.5945 24.8794 14.5945 27.8508C14.5945 29.5929 14.5829 31.3367 14.5945 33.0788C14.6077 34.457 15.1272 35.6101 16.2291 36.4655C16.9986 37.0522 17.9453 37.3586 18.9126 37.3341H26.4652C28.6325 37.3341 30.7998 37.3341 32.9655 37.3341C33.5344 37.3486 34.1002 37.2473 34.6287 37.0363C35.1572 36.8252 35.6372 36.5089 36.0395 36.1066C36.4419 35.7042 36.7582 35.2242 36.9693 34.6957C37.1803 34.1672 37.2816 33.6014 37.2671 33.0325C37.2649 30.6931 37.2621 28.357 37.2588 26.0243Z"
                      fill="#050210"
                    />
                    <path
                      d="M25.9238 18.9117C27.3254 18.9124 28.6954 19.3288 29.8603 20.1083C31.0252 20.8878 31.9327 21.9953 32.4679 23.2907C33.0032 24.5862 33.1421 26.0113 32.8672 27.3857C32.5922 28.7601 31.9158 30.0221 30.9234 31.0119C29.931 32.0017 28.6673 32.6749 27.2922 32.9463C25.9171 33.2177 24.4924 33.0751 23.1983 32.5365C21.9043 31.998 20.7991 31.0876 20.0226 29.9207C19.2461 28.7538 18.8332 27.3828 18.8361 25.9812C18.8293 25.0494 19.0081 24.1255 19.362 23.2635C19.716 22.4015 20.2381 21.6186 20.8979 20.9606C21.5577 20.3025 22.3419 19.7824 23.2048 19.4306C24.0677 19.0789 24.992 18.9025 25.9238 18.9117ZM25.9238 30.2497C26.765 30.2496 27.5873 30.0003 28.2868 29.5332C28.9864 29.0661 29.5318 28.4021 29.8541 27.6251C30.1765 26.8481 30.2614 25.9931 30.098 25.1679C29.9346 24.3427 29.5303 23.5845 28.9362 22.989C28.3421 22.3935 27.5848 21.9875 26.76 21.8222C25.9352 21.6568 25.08 21.7397 24.3022 22.0602C23.5245 22.3808 22.8593 22.9246 22.3905 23.6231C21.9217 24.3216 21.6705 25.1433 21.6685 25.9845C21.6585 26.5467 21.7617 27.1051 21.9719 27.6266C22.1822 28.1481 22.4952 28.6219 22.8924 29.0199C23.2896 29.4178 23.7628 29.7318 24.2839 29.9431C24.805 30.1544 25.3632 30.2586 25.9254 30.2497H25.9238Z"
                      fill="#050210"
                    />
                    <path
                      d="M34.4236 18.9002C34.4259 19.1812 34.3446 19.4566 34.19 19.6914C34.0355 19.9261 33.8147 20.1097 33.5556 20.2187C33.2965 20.3277 33.0109 20.3572 32.735 20.3035C32.4592 20.2499 32.2054 20.1154 32.0061 19.9173C31.8068 19.7191 31.6709 19.4662 31.6156 19.1906C31.5603 18.9151 31.5882 18.6293 31.6956 18.3696C31.8031 18.1099 31.9854 17.888 32.2192 17.7321C32.453 17.5762 32.728 17.4933 33.009 17.4939C33.3818 17.4969 33.7386 17.6458 34.003 17.9086C34.2674 18.1715 34.4184 18.5274 34.4236 18.9002Z"
                      fill="#050210"
                    />
                  </svg>
                </button>
                <button className="footer-social-in-button">
                  <svg
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="26" cy="26" r="26" fill="white" />
                    <path
                      d="M18.3733 11.8291H33.7596L34.3552 11.9317C35.9793 12.1872 37.4602 13.0103 38.5346 14.2547C39.6091 15.4991 40.2075 17.0842 40.2236 18.7281C40.2517 23.5773 40.2418 28.4282 40.2236 33.279C40.2234 34.6555 39.793 35.9975 38.9926 37.1173C37.6079 39.0845 35.6838 40.1284 33.2947 40.1483C28.472 40.1896 23.651 40.1615 18.8282 40.1582C18.6181 40.1582 18.4064 40.135 18.1946 40.1152C16.799 39.9765 15.4779 39.4194 14.4044 38.5169C13.331 37.6144 12.5553 36.4086 12.179 35.0575C12.0566 34.6075 11.9921 34.141 11.8994 33.681V18.2947C11.9358 18.0879 11.9656 17.8794 12.007 17.6726C12.5777 14.822 14.2438 12.9508 17.0249 12.0971C17.4694 11.9843 17.9194 11.8949 18.3733 11.8291ZM37.3994 26.0243C37.3994 23.6716 37.3994 21.3196 37.3994 18.968C37.3994 17.7636 37.0106 16.7048 36.1387 15.8527C35.739 15.4608 35.2645 15.1533 34.7435 14.9484C34.2226 14.7435 33.6657 14.6454 33.1061 14.6599C30.9553 14.6599 28.7913 14.6599 26.6339 14.6599H19.0516C18.2166 14.6403 17.3941 14.8657 16.6857 15.3084C15.3622 16.1571 14.7418 17.3963 14.7335 18.9399C14.7186 21.9096 14.7335 24.8794 14.7335 27.8508C14.7335 29.5929 14.7219 31.3367 14.7335 33.0788C14.7467 34.457 15.2662 35.6101 16.3681 36.4655C17.1376 37.0521 18.0843 37.3586 19.0516 37.3341H26.6041C28.7715 37.3341 30.9388 37.3341 33.1045 37.3341C33.6733 37.3486 34.2392 37.2473 34.7677 37.0363C35.2961 36.8252 35.7761 36.5089 36.1785 36.1066C36.5809 35.7042 36.8972 35.2242 37.1082 34.6957C37.3193 34.1672 37.4206 33.6014 37.406 33.0325C37.4049 30.6931 37.4027 28.357 37.3994 26.0243Z"
                      fill="#050210"
                    />
                    <path
                      d="M23.6973 34.0764C23.6973 30.5557 23.6973 27.0345 23.6973 23.5127V23.3009H26.9185V24.7899C26.9499 24.7588 26.9791 24.7257 27.0062 24.6907C27.5736 23.7493 28.4306 23.2364 29.4878 23.071C30.2967 22.9411 31.1252 23.0174 31.8967 23.2927C32.9241 23.6616 33.5181 24.4276 33.8275 25.4435C34.0397 26.1873 34.1428 26.9581 34.1335 27.7316C34.1434 29.8443 34.1335 31.957 34.1335 34.0697H30.7932C30.7932 32.1936 30.7932 30.3175 30.7932 28.4446C30.7888 28.0931 30.7579 27.7425 30.7005 27.3957C30.5649 26.5387 30.1016 26.0589 29.2926 25.9845C28.1924 25.8819 27.4016 26.3154 27.1733 27.4735C27.0938 27.9013 27.0539 28.3354 27.0541 28.7706C27.0409 30.5358 27.0541 32.3028 27.0541 34.0648L23.6973 34.0764Z"
                      fill="#050210"
                    />
                    <path
                      d="M18.2412 34.0766C18.2412 34.0038 18.2528 33.931 18.2528 33.8565V23.3011H21.6047V23.5113C21.6047 26.9613 21.6047 30.4098 21.6047 33.8565C21.6047 33.9293 21.6047 34.0038 21.6146 34.0766H18.2412Z"
                      fill="#050210"
                    />
                    <path
                      d="M17.9844 19.6297C17.996 19.5851 18.0092 19.5387 18.0191 19.4941C18.1121 19.0208 18.3779 18.5992 18.7649 18.3112C19.1518 18.0233 19.632 17.8898 20.112 17.9367C20.5921 17.9836 21.0374 18.2075 21.3613 18.5649C21.6852 18.9222 21.8644 19.3873 21.8641 19.8696C21.8641 20.8474 21.0947 21.7193 20.1567 21.807C19.6684 21.8622 19.1773 21.7315 18.7812 21.4408C18.385 21.1501 18.1129 20.7209 18.0191 20.2386C18.0108 20.1922 17.996 20.1476 17.9844 20.1029V19.6297Z"
                      fill="#050210"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="footer-middle-divider">
            <svg
              width="1014"
              height="2"
              viewBox="0 0 1014 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1014 1L8.58307e-06 1"
                stroke="white"
                stroke-opacity="0.5"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <div className="footer-logo-container">
            <div className="footer-logo">
              <svg
                width="28"
                height="30"
                viewBox="0 0 28 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1144_4985)">
                  <path
                    d="M18.0618 17.0037H12.219L17.0732 25.0574H4.91932V4.89854H4.92452L6.58684 7.65737H11.1368L9.09203 4.89854H16.6648C20.0077 4.89854 22.7262 7.55893 22.7262 10.8281V11.0975C22.7262 13.0326 21.7688 14.75 20.299 15.8328L23.1346 19.8273C25.8635 17.856 27.6455 14.6827 27.6455 11.0975V10.8281C27.6455 4.85709 22.721 0 16.6648 0H0V12.0326V29.956H20.0233L20.0519 30.0026H27.6923L18.0618 17.0037Z"
                    fill="#0B6FFF"
                  />
                  <path
                    d="M10.6895 14.4677H16.1837L12.3674 9.31787H7.58594L10.6895 14.4677Z"
                    fill="#0B6FFF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1144_4985">
                    <rect width="27.6923" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="footer-logo-text">Runway</div>
            <div className="footer-logo-copyright">
              Ⓒ 2023 Runway LLC. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
