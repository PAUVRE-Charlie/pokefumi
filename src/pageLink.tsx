import React from 'react'
import { PageLinkProps } from './types'

export default function pageLink({text, link}: PageLinkProps) {
    return (
        <a href={process.env.PUBLIC_URL + '/' + link}>{text}</a>
    )
}
