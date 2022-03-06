import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export default function Message() {
    const msgs = [
        {
            id: 1, 
            title: 'msg1',
            content: 'msg1\'s content'
        },
        {
            id: 2, 
            title: 'msg2',
            content: 'msg2\'s content'
        },
        {
            id: 3, 
            title: 'msg3',
            content: 'msg3\'s content'
        }
    ]
    const [m1, m2, m3] = msgs;

    // 编程式路由
    const navigate = useNavigate()
    const jumpToDetailByState = (m) => {
        navigate('detail_by_state',{
            replace: false,
            state: m
        })
    }
    return (
        <div className='component'>
            message here...
            {/* 正常写法 */}
            {/* {
                msgs.map(m => {
                    return (
                        <Link key={m.id} className="list-group-item" to='detail'> {m.title} </Link>
                    )
                })
            } */}
            <Link className="list-group-item" to={`detail_by_params/${m1.id}/${m1.title}/${m1.content}`}> params 参数传递：{m1.title} </Link>
            <Link className="list-group-item" to={`detail_by_search/?id=${m2.id}&title=${m2.title}&content=${m2.content}`}> search 参数传递：{m2.title} </Link>
            <Link className="list-group-item" to='detail_by_state' state={m3}> state 参数传递：{m3.title} </Link>

            {/* 编程式路由 */}
            <button onClick={() => {jumpToDetailByState(m3)}}> 传递m3 </button>
            <Outlet></Outlet>
        </div>
    )
}
