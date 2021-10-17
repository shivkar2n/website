import './language.scss'
import {useState} from 'react'

function Language({name}) {
  let [state,setState] = useState(1);

  return (
					<div className={"language "+(state || "active")} onClick={()=>{setState(!state)}}>
              {
              state?
              <>
                <img src={"/images/" + name.a +".svg"} alt={"/images/" + name.a +".svg"}/>

              </>
                :
              <>
                <img src={"/images/" + name.a +".png"} alt="Image here"/>
              </>
              }
					</div>
      )
}

export default Language
