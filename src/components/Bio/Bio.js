import './bio.scss'
import profile from '../images/profile2.jpg'

export default function Bio(){
	return(
		<div className="bio" id="bio">
			<h1>Bio</h1>
			<div className="imageContainer">
				<img src={profile}></img>
			</div>
			<h2>I'm a 2nd Year Computer Science student of NIT Trichy who has a love for maths, science and technology. I hope to contribute to open source and develop efficient
			software tools. I enjoy learning new technologies and am a passionate linux user.</h2>
		</div>
		)
}
