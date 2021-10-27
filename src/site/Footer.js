import React from 'react';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = (props) => {
    return(
        <div className="Footer">
            <div >
                <h2>Brought To You By:</h2>
                <h1><a href="https://www.linkedin.com/in/jen-zimski-86037413b/"> Jen Zimski </a>@ LinkedIn</h1>
                <h2>Find the Code Here:</h2>
                <ul>
                <li><a href="https://github.com/jlzimski/Funko-Pop-Client.git">Client Side</a></li>
                <li><a href="https://github.com/jlzimski/Funko-Pop-Server.git">Server Side</a></li>
                </ul>
                <h2>Thanks for the Memories...</h2>
                <ul>
                    <li><a href="https://github.com/kennymkchan">Kenny Chan</a>  for creating a Database for me to play with</li>
                    <li><a href="https://www.hobbydb.com">HobbyDB</a> for providing the Data to Kenny(but not to me)</li>
                    <li>All images are property of FUNKO and used for this student project with the utmost respect</li>
                </ul>
                <h2>Last but Not Least:</h2>
                <h1>Thank You Funko!</h1>
            </div>
        </div>
    )
}

export default Footer;