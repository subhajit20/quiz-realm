import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './Version-6 Navigation/Home';
import Login from './Version-6 Navigation/Login';
import Dashboard from './Version-6 Navigation/Dashboard';
import Public from './Version-6 Navigation/Public';
import Signup from './Version-6 Navigation/Signup';
import Profile from './Version-6 Navigation/Profile';
import Quizes from './Version-6 Navigation/Quiz_qs';
import Resultpage from './Version-6 Navigation/Resultpage';


function App() {

  return (
    <div>
      <Routes>
        <Route element={<Public />}>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route element={<Home />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="/quiz/:catagory" element={<Quizes />} />
          <Route path="/result/:marks/:len/:right/:wrong" element={<Resultpage />} />
        </Route>
        <Route path="*" element={<h1>!!!404!!! Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App;