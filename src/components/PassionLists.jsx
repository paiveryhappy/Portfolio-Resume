import "../index.css";
import frontendLogo from "../images/frontend.png";
import backendLogo from "../images/backend.png";
import uxLogo from "../images/uiux.png";

function PassionLists() {
  return (
    <section className="mt-20 text-center">
      <h3 className="font-bold text-2xl text-indigo-600">
        Additional
        <span className="font-bold text-2xl text-blue-950"> passions</span>
      </h3>
      <div className="flex gap-10 items-center justify-center mt-10">
        <div className="passion-card p-5 rounded-xl">
          <div className="image-card">
            <img src={frontendLogo} alt="" />
          </div>
          <h4 className="mt-3">
            <span className="font-bold">Front-End</span> Developer
          </h4>
          <p>(Sass, Bootstrap, Tailwind)</p>
        </div>
        <div className="passion-card p-5 rounded-xl">
          <div className="image-card">
            <img src={backendLogo} alt="" />
          </div>
          <h4 className="mt-3">
            <span className="font-bold">Back-End</span> Developer
          </h4>
          <p>(NodeJS, Laravel, Express)</p>
        </div>
        <div className="passion-card p-5 rounded-xl">
          <div className="image-card">
            <img src={uxLogo} alt="" />
          </div>
          <h4 className="mt-3">
            <span className="font-bold">UI/UX</span> Developer
          </h4>
          <p>(Figma, Zeplin, Adobe)</p>
        </div>
      </div>
    </section>
  );
}

export default PassionLists;
