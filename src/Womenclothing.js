import { useEffect, useState } from "react"
import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

export default function Womenclothing() {
  const [appdata,setdata]=useState([])
  useEffect(()=>{
      fetch("https://fakestoreapi.com/products/category/women's%20clothing/").then((result)=>{
          result.json().then((data)=>{
              setdata(data)
              console.log(data)
          })
      })
  },[])
  return (
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
    {
      appdata.map((item)=>
      <MDBCol>
      <MDBCard>
        <MDBCardImage
          src={item.image}
          alt='...'
          position='top'
          style={{width:"100px", height:"100px"}}
        />
        <MDBCardBody>
          <MDBCardTitle>{item.title}</MDBCardTitle>
          <MDBCardText>
           {item.description}
          </MDBCardText>
          <MDBCardTitle style={{color:"red"}}>RS.{item.price*80}</MDBCardTitle>
          <MDBCardTitle>{item.category}</MDBCardTitle>
          <MDBCardTitle>{item.rating.rate}</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    )
    }
    
  </MDBRow>
  );
}