import React from 'react'

import { Link, Route, Routes, Navigate, NavLink, useRoutes } from 'react-router-dom'

import routers from './routers'

export default function App() {
    const element = useRoutes(routers)
    return (
        <div className="App">
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 路由链接 */}
                            <NavLink className={({ isActive }) => isActive ? 'list-group-item my-active' : 'list-group-item'} to="/home"> Home </NavLink>
                            <NavLink className={({ isActive }) => {
                                return isActive ? 'list-group-item my-active' : 'list-group-item'
                            }} to="/About"> About </NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                                {/* react-router-5 的写法
                                <Routes>
                                    <Route path='/home' element={<Home />}></Route>
                                    <Route path='/about' element={<About />}></Route>
                                    <Route path='/' element={<Navigate to='/about' />} />
                                </Routes> */}

                                {/* react-router-6 的写法 */}
                                {element}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


