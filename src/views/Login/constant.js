import { FcGoogle } from "react-icons/fc";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";

export const buttons = [
  {
    key: "google",
    type: "submit",
    children: (
      <div>
        <FcGoogle /> Continue with google{" "}
      </div>
    ),
    isFilled: false,
  },
  {
    key: "linkedin",
    type: "submit",
    children: (
      <div>
        <IoLogoLinkedin /> Continue with Linkedin
      </div>
    ),
    isFilled: false,
  },
  {
    key: "facebook",
    type: "submit",
    children: (
      <div>
        <FaSquareFacebook /> Continue with Facebook
      </div>
    ),
    isFilled: false,
  },
];
