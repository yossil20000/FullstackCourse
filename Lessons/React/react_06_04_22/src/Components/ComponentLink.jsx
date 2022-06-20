import React from 'react'
import {Link} from 'react-router-dom';
function ComponentLink() {
    return (
        <>
            <h2>ComponentLink</h2>
            <p>We can use html link as following</p>
            <a href="/info">Link By {"<a> href='' </a>"}</a>
            <p>As you can see the link is doing the job, but the problem that it cause to <b>REFRESH</b> the page and that is not we want</p>
            <p>In order to AVOID the refresh React have it's owan LINK Component </p>
            <p>Usage: {'import {Link} from "react-router-dom" '}</p>
            <p>{'<LINK to="/info">I am Link link</>'}</p>
            <Link to="/info">{'I am react-router-dom Link go to info page'} </Link>
        </>
    )
}

export default ComponentLink