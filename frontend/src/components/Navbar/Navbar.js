import React from 'react';
import {useHistory} from 'react-router-dom'
import SearchBar from 'material-ui-search-bar';
import './Navbar.css'

export default function Navbar() { 

    const history = useHistory()
    const logout = ()=>{
        localStorage.removeItem('jwt')
        history.push('/login')
       
    }
    return (
        <div id='headerSet'>
        <h2 className='logoHeader' onClick={()=>history.push('/')} >BackB</h2>  

            <div className="searchDiv">
            <SearchBar
                
                style={{ border: '1px solid #393b3a',
                    display: 'inline-flex',
                    width: '36vw',
                    margin: '3px auto',
                    height:'38px',
                    marginLeft:'-1rem',
                    marginRight:'0rem'
                }}
                id='searchBar'
            />
            </div>
                
           

           <div className="buttonSet"><button id='button-Login' onClick={()=>{logout()}}>Logout</button></div>
           
           
            
            
        </div>  
    )
}
