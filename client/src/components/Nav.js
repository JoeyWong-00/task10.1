import React from 'react';

function Nav() {
    return (
        <ul className="nav nav-pills mt-4 mb-3">
            <li className="nav-item">
                <a className="nav-link active" href="/">New Requester Task</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Worker Task</a>
            </li>
        </ul>
    )
}

export default Nav;