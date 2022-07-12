import React, { useState } from 'react'
import { Close, MenuOutlined, } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import './navbar.scss';

function Navbar() { 
     const [active,setActive] = useState(false);

    //Navbar icon functionality function 
    const DisplayMenu = () => {
        setActive(!active)
    }

    const resumeLink = (
    <a className="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
      CV
    </a>
    );



    
    return (
        
        <div className='header'>
            <div className='navlogo'>
                <h1>HA</h1>
            </div>
            <nav className={active ? 'navbar':'navbar'}>
                <ul>
                    <div className='closed'>
                        <Close className='closed' onClick={DisplayMenu}/>
                    </div>

                    <li>
                        <Link to='/'>About</Link>
                    </li>
                    <li>
                        <Link to='/'>Skills</Link>
                    </li>
                    <li>
                        <Link to='/'>Portfolio</Link>
                    </li>
                    <li>
                        <Link to='/'>Contact</Link>
                    </li>
                    <li id='resumeLink'>
                    {resumeLink}
                    </li>
                    
                </ul>
                
            </nav>

            {/* handed display function as prop for menu icon functionanility when it's used on small devices eg mobile devices*/}


            <div className="menubar">
                <MenuOutlined className='menu' onClick={DisplayMenu}/>
            </div>
        </div>
        

    )
}
export default Navbar