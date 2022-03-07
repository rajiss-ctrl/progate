import React from 'react';


class Header extends React.Component{
render(){
    return(
        <header>
            <nav>
                <img src={'https://prog-8.com/assets/packs/dist/images/typo_logo-b40bf595603dc0e63a5c..svg'} alt="progate logo" />
               <div className="nav-items">
                    <ul>
                    <li>
                        <select name="" id="">
                            <option value="">Languages</option>
                            <option value="">English</option>
                            <option value="">日本語</option>
                        </select>
                    </li>
                    <li>Login</li>
                    
                </ul>
                <a href="/">Sign up</a>
               </div>

            </nav>
        </header>

    )
}
}

export default Header;






