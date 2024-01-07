import "../index.css";
import hero from "../images/heroImg 1.png";
function Header() {
  return (
    <header>
      <nav className="w-full h-20 flex items-center justify-around">
        <h2 className="p-1 tracking-widest text-xl">
          <span className="font-bold">Ji</span>ran
        </h2>
        <ul className="flex">
          <li className="mx-7 p-1 cursor-pointer">About</li>
          <li className="mx-7 p-1 cursor-pointer">Passions</li>
          <li className="mx-7 p-1 cursor-pointer">Portfolio</li>
          <li className="mx-7 bg-indigo-400 p-1 rounded-md text-white cursor-pointer hover:bg-indigo-600">
            Contact Me
          </li>
        </ul>
      </nav>
      <div className="flex justify-center items-center w-3/5 m-auto">
        <div className="w-3/6">
          <span className="text-xl">HI !</span>
          <br></br>
          <h1 className="font-bold text-5xl mt-1 text-blue-950">
            I'm Jiran Chatwet a Full-Stack Developer
          </h1>
          <p className="mt-6">
            I'm graduated from TechUp Full-Stack Software Development Bootcamp
            who is passionate about coding. I'm coding with a clean,tidy and it
            is readable for the team. I'm ready to work as a software
            Developer🚀.
          </p>
        </div>
        <div className="w-3/6">
          <img src={hero} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
