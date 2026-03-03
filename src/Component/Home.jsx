import React, { useEffect, useState } from 'react'
import Cart from './Cart';
import { useSearchParams } from 'react-router-dom';

const Home = () => {
  let[data,setData]=useState([]);
  let[articalcount,setArticalCount]=useState(0);
  let [searchParams]=useSearchParams("");
  let qparam=searchParams.get("q") ?? "All"
  let lanparam=searchParams.get("language") ?? "hi"

  async function getApiData(){
    let response=await fetch(`https://newsapi.org/v2/everything?q=${qparam}&language=${lanparam}&sortBy=publishedAt&apiKey=33789fcca736456699ce70c2884950c2`);
    response=await response.json();
    setData(response.articles)
    setArticalCount(response.totalResults)
  }
  useEffect(()=>{
    getApiData()
  },[qparam,lanparam])
  return (
    <>
    <h3 className='background mt-3 text-center mx-2 rounded p-1 text-capitalize text-light'>{searchParams.get("q")?searchParams.get("q"):"Artical"} ({articalcount})</h3>
    <div className='container-fluid'>
        <div className='row'>
            {
                data.map((item,index)=>{
                    return <Cart key={index} Cartdata={item}/>
                })
            }
        </div>
    </div>
    </>
  )
}

export default Home

