import React from 'react';
import { Link } from 'react-router-dom';

function Page404() {
    return (
        <div className="page-404">
            <h1>Oops!</h1>
            <p>It looks like we've run into a problem! It is possible that the page no longer exists or that there is an error in the address of the page.</p>
            
            <Link 
                className="page-404-link"
                to='/'>
                    Back to the homepage
            </Link>
        </div>
    )
}

export default Page404;