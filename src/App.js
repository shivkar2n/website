import Topbar from "./components/topbar/Topbar.js"
import About from "./components/about/About.js"
import Bio from "./components/Bio/Bio.js"
import Skills from "./components/skills/Skills.js"
import Contact from "./components/contacts/Contacts.js"
import "./app.scss"
import { useState } from "react"
import Menu from "./components/menu/Menu.js"

function App(){
	const [menuOpen, setMenuOpen] = useState(false)
	return (
		<div className="app">
			<Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
			<div className="sections">
				<About/>
				<Skills/>
				<Bio/>
				<Contact/>
			</div>
		</div>
	);
}

export default App;
