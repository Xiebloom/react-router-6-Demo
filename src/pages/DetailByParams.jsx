import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {
    const { id, title, content } = useParams()
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
