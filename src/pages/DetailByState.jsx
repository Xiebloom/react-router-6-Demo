import React from 'react'
import { useLocation } from 'react-router-dom'

export default function DetailByState() {
    const { state } = useLocation()
    const { id, title, content } = state;
    return (
        <div className='component'>
            Detail here
            <ul>
                <li>
                    {id}
                </li>
                <li>
                    {title}
                </li>
                <li>
                   { content}
                </li>
            </ul>
        </div>
    )
}
