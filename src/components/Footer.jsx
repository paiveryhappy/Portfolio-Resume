import "../index.css";
import background from "../images/Vector.png";
import githubLogo from "../images/GitHub_logo.png";
import linkedInLogo from "../images/OIP.jpg";
import phoneLogo from "../images/OIh.jpg";
import wave from "../images/Vector-1.png";

function Footer() {
  return (
    <footer>
      <section>
        <h2 className="mt-20 font-bold text-2xl text-indigo-600 text-center">
          Contact <span className="font-bold text-2xl text-blue-950"> Me</span>
        </h2>
        <div className="flex gap-32 mt-5 justify-center text-2xl">
          <div className="relative">
            <img src={background} alt="" />
            <a href="https://github.com/paiveryhappy" target="_blank">
              <img src={githubLogo} alt="" className="logo" />
            </a>
            <p className="text-center">GitHub Profile</p>
          </div>

          <div className="relative">
            <img src={background} alt="" />
            <a
              href="https://www.linkedin.com/in/jiran-chatwet-a236732a2/"
              target="_blank"
            >
              <img src={linkedInLogo} alt="" className="logo rounded-xl" />
            </a>

            <p className="text-center">LinkedIn Profile</p>
          </div>
          <div className="relative">
            <img src={background} alt="" />
            <img src={phoneLogo} alt="" className="logo rounded-full" />
            <p className="text-center">Phone number</p>
          </div>
        </div>
      </section>
      <img src={wave} alt="" className="w-full" />
    </footer>
  );
}

export default Footer;
