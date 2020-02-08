import React, {useState} from 'react';
import Autentification from './Autentification';
import AppContainer from "../containers/AppContainer";

const Main = () => {
    const[allowIn, setAllowIn] = useState(false);

    return (allowIn ? <AppContainer/> : <Autentification setAllowIn={() => setAllowIn(true)}/>)
}
  
export default Main;