import React from 'react'
import { useLocation } from 'react-router-dom'
import qs from 'query-string'

export default function DetailBySearch() {
    const {search} = useLocation()
    const {id,title, content} = qs.parse(search.slice(1))
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
