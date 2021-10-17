import './menu.scss'

export default function Menu({ menuOpen, setMenuOpen }){
	return(
		<div className={"menu "+(menuOpen && "active")} id="menu">
	 	    <ul>
				<li onClick={()=>setMenuOpen(false)}><a href="#about">About</a></li>
			</ul>
	 	    <ul>
				<li onClick={()=>setMenuOpen(false)}><a href="#skills">Skills</a></li>
			</ul>
	 	    <ul>
				<li onClick={()=>setMenuOpen(false)}><a href="#bio">Bio</a></li>
			</ul>
	 	    <ul>
				<li onClick={()=>setMenuOpen(false)}><a href="#contact">Contact</a></li>
			</ul>
		</div>
		)
}
