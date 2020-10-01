import React from 'react';
import { Route , Redirect } from 'react-router-dom';
import auth from './auth'


export const ProtectedRoute = ({ component: Component, ...rest}) =>{
    return (
        <Route
            {...rest}
            render ={props =>{
                console.log(localStorage.getItem('StudentToken'))
                if(!localStorage.getItem('StudentToken') === null){
                    console.log('h')
                    return <Component {...props} />;
                }else{
                    console.log('j')
                    return <Redirect to ={
                        {
                            pathname: "/login",
                            state: {
                                from: props.location
                            }
                        }
                    }
                    />
                }
            }}
        />
    )
}