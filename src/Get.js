import { useEffect, useState } from "react"
import './Get.css'

function Get(){
    const [appdata,setdata]=useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products").then((result)=>{
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
                            </div>
                          </div>

                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default Get