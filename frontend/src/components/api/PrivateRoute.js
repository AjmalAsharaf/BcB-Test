import React,{Fragment} from 'react'
import {Route,Redirect} from 'react-router-dom'
import { isAuthenticated } from './index';

const PrivateRoute =({component: Component, ...rest}) =>{
    const data = isAuthenticated()
    return(
       
        <Fragment>
            <Route 
            {...rest}
            render={props =>{
            
                if(data === false){
                    return <Redirect to='/login'/>
                }
                

                    return <Component {...props}/>
                
            }}
            />

            
        </Fragment>
    )
}

export default PrivateRoute
