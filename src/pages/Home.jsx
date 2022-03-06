import React, { useState } from 'react'
import { Navigate, NavLink, Outlet } from 'react-router-dom'

export default function Home() {
    const [sum, setSum] = useState(0)
    return (
        <div className='component'>
            <h3>Home 组件的内容</h3>
            {sum === 2 ?
                // 渲染 Navigate 的时候，会立即重新渲染当前页面
                <Navigate to='/about' /> :
                <h4> sum = {sum}</h4>
            }
            <button onClick={() => setSum(2)}> set sum as 2</button>
            <h4> 嵌套路由的 NavLink </h4>
            <NavLink to='messages' className="list-group-item"> messages </NavLink>
            <NavLink to='/about' className="list-group-item"> about </NavLink>
            <Outlet />
            
        </div>


    )
}
