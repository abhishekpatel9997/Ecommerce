import { useEffect, useState } from "react"
import './Get.css'
import Footer from "./Footer"

function Womenclothing(){
    const [appdata,setdata]=useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/category/women's clothing").then((result)=>{
            result.json().then((data)=>{
                setdata(data)
                console.log(data)
            })
        })
    },[])
    return(
        <div>
            <div className="container">
                <div className="row">
                    {
                        appdata.map((item)=>
                          <div className="col-md-3 col-lg-3 col-12">
                            <div className="Mycart">
                                <img src={item.image}></img>
                                <h4>{item.title}</h4>
                            </div>
                          </div>

                        )
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default Womenclothing