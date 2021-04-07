import React from 'react'
import {NavLink} from 'react-router-dom'

export const About = () => (
    <div className="jumbotron">
    <h1 className="display-4">Portfolio</h1>
    <p className="lead">
    The first non-shameful application
    </p>
    <p>Version 1.0.1</p>
    <hr className="my-4"/>

    <p className="lead">
        <NavLink className="btn btn-primary btn-lg" to="/" role="button">Learn more</NavLink>
    </p>
    </div>
)
