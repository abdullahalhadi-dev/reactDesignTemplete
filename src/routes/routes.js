import React from 'react'
import { Route, Switch } from 'react-router-dom'
import route_list from './routes-list'

export default function Routes(){
    return(

            <Switch>
                {
                    route_list.map((route,index)=><Routes key={index} {...route} />)
                }
            </Switch>
    )
}