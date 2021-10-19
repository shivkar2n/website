import './skills.scss';
import c from "../images/c.svg" 
import cpp from "../images/c-plus-plus.svg" 
import html from "../images/html.svg" 
import javascript from "../images/javascript.svg" 
import python from "../images/python.svg" 


export default function Skills(){

	return (
		<div className="skills" id="skills">
			<h1>Skills</h1>
			<h3>I am currently working with the following technologies</h3>
			<div className="wrapper">

				<a href="https://en.wikipedia.org/wiki/C_(programming_language" target="_blank">
					<img src={c}/>
				</a>	

				<a href="https://en.wikipedia.org/wiki/C%2B%2B" target="_blank">
					<img src={cpp}/>
				</a>	

				<a href="https://en.wikipedia.org/wiki/HTML" target="_blank">
					<img src={html}/>
				</a>	

				<a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">
					<img src={javascript}/>
				</a>	

				<a href="https://en.wikipedia.org/wiki/Python_(programming_language)" target="_blank">
					<img src={python}/>
				</a>	
			</div>
		</div>
	)
}
