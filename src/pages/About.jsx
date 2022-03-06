import React from 'react'
import { useInRouterContext, useLocation, useNavigationType, useOutlet, useResolvedPath } from 'react-router-dom'

export default function About() {
    console.log({ 
        useInRouterContext: useInRouterContext(), 
        useNavigationType: useNavigationType(),
        useOutlet: useOutlet(),
        useResolvedPath: useResolvedPath('/About?querya=1&b=2'),
        location: useLocation(),
    })
    return (
        <h3 className='component'>我是About的内容</h3>
    )
}
