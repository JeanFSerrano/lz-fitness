import { Routes, Route } from 'react-router-dom'
import { Blusas, Calcas, Home, Product, Shorts, Tops } from '../pages'

function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/collections/blusas" element={<Blusas />} />
                <Route path="/collections/tops" element={<Tops />} />
                <Route path="/collections/shorts" element={<Shorts />} />
                <Route path="/collections/calcas" element={<Calcas />} />
                <Route path="/:products/:id" element={<Product />} />
            </Routes>
        </>
    )
}

export default AppRoutes