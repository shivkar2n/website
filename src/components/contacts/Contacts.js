import './contacts.scss';
import linkedin from '../images/linkedin.svg'
import github from '../images/github.svg'

export default function Contacts(){
	return (
		<div className="contact" id="contact">
			<h1>Contact Me</h1>
				<h2>
				Please contact me if you have an interesting project or idea that you want to share.
				</h2>
			<div className="imageContainer">
				<a href="https://www.linkedin.com/in/shiv-karthik-291887223/" target="_blank">
					<img src={linkedin}></img>
				</a>	

				<a href="https://www.linkedin.com/in/shiv-karthik-291887223/" target="_blank">
					<img src={github}></img>
				</a>	
			</div>
			<h3>copyright © 2021 </h3>
		</div>
	)
}
