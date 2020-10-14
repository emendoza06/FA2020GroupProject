import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => { 
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/summary">
                        v1/summaryactivity
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;