import React from 'react'
import {Link,useParams, useHistory} from 'react-router-dom'
import User from '../Components/User';
function InfoPage() {
  const history = useHistory();
  const {id} = useParams();
  console.log("InfoPage id: ",id)
  return (
    <>
    <h1>InfoPage</h1>
    <Link to="/example">goto /example</Link>
    <div>{`params id: ${id}`} get from /info/:id route</div>
    <User id={id}/>
    </>

  )
}

export default InfoPage