import './about.scss'

export default function About(){
	return(
		<div className="about" id="about">
			 <div className="left">
				<div className="imgContainer">
					<img src="/images/logo.png"/>
				</div>
			</div>
			<div className="right">
				<div className="wrapper">
					<h2>Hello There! This is </h2>
					<h1>Shiv Karthik</h1>
					<h3>Web Developer, Student, Nerd</h3>
					<h4><a href="#contact">Contact Me</a></h4>

				</div>
			</div>
		</div>
		)
}
