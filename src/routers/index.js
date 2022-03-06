import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import DetailByParams from '../pages/DetailByParams'
import DetailBySearch from '../pages/DetailBySearch'
import DetailByState from '../pages/DetailByState'
import {Navigate} from 'react-router-dom'

export default [
    {
        path: '/home',
        element: <Home />,
        children: [
            {
                path: 'messages',
                element: <Message />,
                children: [
                    {
                        path:'detail_by_params/:id/:title/:content',
                        element: <DetailByParams />
                    },
                    {
                        path:'detail_by_search/',
                        element: <DetailBySearch />
                    },
                    {
                        path:'detail_by_state/',
                        element: <DetailByState />
                    }
                ]
            }
        ]
    }, {
        path: '/about',
        element: <About />
    }, {
        path: '/',
        element: <Navigate to='/about' />
    }
]