import "../index.css";
import sendpay from "../images/Sendpay.png";
import Ecommerce from "../images/E-commerce.png";
import learning from "../images/Learning.png";

function Portfolio() {
  return (
    <section className="mt-20 text-center">
      <h3 className="font-bold text-2xl text-indigo-600">
        My
        <span className="font-bold text-2xl text-blue-950"> Portfolio</span>
      </h3>
      <div className="flex items-center justify-center mt-10">
        <div className="rounded-xl portfolio-card">
          <img src={sendpay} alt="" />
        </div>
        <div className="rounded-xl portfolio-card">
          <img src={Ecommerce} alt="" />
        </div>
        <div className="rounded-xl portfolio-card">
          <img src={learning} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
