import { Routes, Route } from 'react-router-dom'
import Login from '../login'
export default function Router () {
    return (
        <Routes>
            <Route path='/login' element={<Login/>}></Route>
        </Routes>
    )
}