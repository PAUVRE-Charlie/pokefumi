import React from 'react'
import { Link } from 'react-router-dom'
import { PageLinkProps } from './types'

export default function pageLink({text, link}: PageLinkProps) {
    return (
        <Link to={process.env.PUBLIC_URL + '/' + link}>{text}</Link>
    )
}
