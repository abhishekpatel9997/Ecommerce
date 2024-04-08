import { Route,BrowserRouter,Routes } from "react-router-dom"
import Home from "./Home"
import Get from "./Get"
import Post from "./Post"
import Put from "./Put"
import Jewlery from "./Jewlery"
import Navbar from "./Navbar"
import Manclothing from "./Manclothing"
import Womenclothing from "./Womenclothing"
import Electronic from "./Electronic"
import Footer from "./Footer"


function Routing() {

    return (
        <div>

            <BrowserRouter>
                <Navbar></Navbar>

                <Routes>
                  
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="jewlery" element={<Jewlery></Jewlery>}></Route>
                    <Route path="/manclothing" element={<Manclothing></Manclothing>}></Route>
                    <Route path="/womenclothing" element={<Womenclothing></Womenclothing>}></Route>
                    <Route path="/electronic" element={<Electronic></Electronic>}></Route>
                </Routes>
                <Footer></Footer>

            </BrowserRouter>
            {/* <Table></Table> */}
           
        </div>
    )
}
export default Routing