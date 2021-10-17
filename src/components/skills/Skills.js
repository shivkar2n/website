import './skills.scss';
import Language from './Language/language.js'

export default function Skills(){
	var data1 = {
		"a": "c",
	}
	var data2 = {
		"a": "c-plus-plus",
	}
	var data3 = {
		"a": "python",
	}
	var data4 = {
		"a": "javascript",
	}
	var data5 = {
		"a": "html",
	}

	return (
		<div className="skills" id="skills">
			<h1>Skills</h1>
			<h3>I am currently working with the following technologies</h3>
			<div className="wrapper">
			<Language name={data1}/>
			<Language name={data2}/>
			<Language name={data3}/>
			<Language name={data4}/>
			<Language name={data5}/>
			</div>
		</div>
	)
}
