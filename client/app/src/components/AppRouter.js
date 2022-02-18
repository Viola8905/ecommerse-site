import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Context } from '..';

import { authRoutes, publicRoutes } from '../routes';
import NavBar from './NavBar';
const AppRouter = () => {
	const {user} = useContext(Context)
	console.log(user)
	return (
    <Router>
			<NavBar/>
      <Routes>
        {user.isAuth &&
          authRoutes.map(({path,Component}) => 
            <Route key={path} exact path={path} element={<Component/>} />
          )}
        {publicRoutes.map(({path, Component }) => 
          <Route key={path}  exact path={path} element={<Component/>} />
        )}

        
      </Routes>
    </Router>
  );
};

export default AppRouter;
