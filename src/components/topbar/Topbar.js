import  "./topbar.scss"
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export default function Topbar({menuOpen,setMenuOpen }) {
	return(
		<div className={"topbar " + (menuOpen && "active")}>
			<div className="wrapper">
				<div className="left">
					<a href="#about" className="logo">@Shiv</a>
					<div className="itemContainer">
						<GitHubIcon className="icon"/>
						<span><a href="https://github.com/shivkar2n/" target="_blank">GitHub</a> </span>				
					</div>	
					<div className="itemContainer">
						<EmailIcon className="icon"/>
						<span>shivtech@gmail.com</span>				
					</div>	
				</div>
				<div className="right">
					<div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
						<span className="line1"></span>       
						<span className="line2"></span>       
						<span className="line3"></span>
					</div>      
				</div>
			</div>
		</div>
		)
}



