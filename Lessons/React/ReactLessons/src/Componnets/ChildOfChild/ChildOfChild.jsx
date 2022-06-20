import React,{useContext} from 'react'
import AuthContext from '../../Context/AuthContext';
function ChildOfChild() {
    console.log("ChildOfChild Rendering");
    const auth = useContext(AuthContext);
  return (
    <div>ChildOfChild Consume Context
        <p>ChildOfChild Get Context:</p>
        <p>AuthContext: Authenticated:{auth.Authenticated}</p>
        <p>AuthContext: Login:{auth.Login}</p>
        {auth.Login()}
    </div>

  )
}

export default ChildOfChild