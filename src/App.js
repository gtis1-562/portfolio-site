import './App.css';
import img from './bck-img.png';
import me from './me-img.png';
import car from './cars.png';
import monsters from './monsters-rolodex.png';
import tip from './tip-calc.png';
import job from './jobs.png';
import {FaLaptop, FaMobile, FaGithub, FaLinkedin, FaPhone, FaEnvelope} from 'react-icons/fa';


function App() {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  function sendEmail() {
    window.location.assign("mailto:gerardotalvera@gmail.com");
  }

  return (
    <div className='App'>
      <div className='body'>

    <div className='img'>

      <img className='back' src={img} alt="background"/>
      <div className='top-info'>
        <img id="gerardo" src={me} alt="my-name"/>
      <h1 id='name'>Gerardo Talavera</h1>
      <h2>Developer</h2>
      </div>

    </div>

    <div className='info'>
      <h1>What I Do</h1>
      <div className='i-do'>
        <div className='connect'>
        <FaLaptop className='icons'/>
        <h3>Front End Development</h3>
        </div>
        <p>I am a front end web developer that has a focus on HTML5, CSS3, Javascript and React.js</p>
        <div className='connect'>
        <FaMobile className='icons'/>
        <h3>Responsive Mobile</h3>
        </div>
        <p>As a mobile user myself, I focus on mobile usability and a simplistic experience</p>
      </div>
    </div>

    
    <div className='about-me'>
      <div className='about'>
        <h2>About Gerardo</h2>
        <p>I am a developer with an act for creativity whether it be artistic or technical. 
          I fully enjoy emerging myself in projects that get my brain working because it shows me that there is something new to learn.
          Finally just to add a bit of a personal touch, I enjoy viewing and making art along with being an enthusiast and practitioner of Parkour.
          </p>
        
      </div>
      <div className='github'>
        <h4>Check out my LinkedIn</h4>
       <FaLinkedin onClick={() => openInNewTab('https://www.linkedin.com/in/gerardo-talavera/')} className='icons iconLink'/>
        <h4>Check out my Github</h4>
        <FaGithub onClick={() => openInNewTab('https://github.com/gtis1-562')} className='icons iconLink'/>
      </div>
    </div>


    <div className='projects'>
      <h1 id='project-head'>Projects</h1>
      <div className="project-1">
        <img onClick={() => openInNewTab('https://statuesque-queijadas-3272df.netlify.app/')} className='images' src={monsters} alt='site1'/>
      <img onClick={() => openInNewTab ('https://compassionate-kilby-d325c4.netlify.app/')} className='images' src={tip} alt='site2'/>
      </div>


      <div className='project-2'>
      <img onClick={() => openInNewTab('https://jovial-chandrasekhar-955da9.netlify.app/')} className='images' src={job} alt='site4'/>
      <img onClick={() => openInNewTab('https://heuristic-curran-2fac03.netlify.app/')} className='images' id='mentor1' src={car} alt='site3'/>
      </div>
    </div>


    <div className='contact'>
      <h3>Contact Me</h3>
      <di className='contact-info'>
        <div>
        <FaPhone className='icons'/>
        <p>562-285-8882</p>
        </div>
        <div>
        <FaEnvelope onClick={sendEmail} className='icons iconLink'/>
        <p>gerardotalvera@gmail.com</p>
        </div>
        
      </di>
    </div>


    </div>
    </div>
  );
}

export default App;