import {BrowserRouter, Router, Routes, Route} from 'react-router-dom'
import Header from "./components/Header";
import Home from "./components/Home";
import BlogDetails from './components/BlogDetails';
import UpdateForm from './components/UpdateForm';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <main className=" max-w-[1400px] mx-auto mt-3">
                <Routes>
                <Route path='/' element={<Home />} />
                <Route path='api/blog/:id' element={<BlogDetails />} />
                <Route path='api/blog/update/:id' element={<UpdateForm />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
