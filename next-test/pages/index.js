import Head from 'next/head'
import List from './githublist'
import axios from 'axios'
import { useState, createContext, useEffect } from 'react'
import myContext from './mycreate'
import myUrl from './myUrl'
import {Button} from 'antd'

export default function Home() {
    const [list,setlist]=useState()
    const [loading,setloading]=useState('true')
    const [path,setpath]=useState('https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories')
    // 'https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories'
    useEffect(()=>{
        async function fetchMyAPI(){
            setlist(
                await axios(path).then().catch(function (error) {
                    console.log(error);
                  }))
            setloading('true')
        } 
        
        fetchMyAPI()
    },[path])
    
    console.log(loading)
    let listcomponent
    let loadingcomponent
    if(loading=='false'){
        loadingcomponent=(
            <h2 style={{textAlign:'center'}}>Loading....</h2>
        )
    }
    if(loading=='true'){
        listcomponent=(<myContext.Provider value={list}>
            <List/>       
        </myContext.Provider>)
    }
    
    
    
    
    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <Head>
            <title >github热门项目</title>         
        </Head>  
        <h2 style={{textAlign:'center'}}>github热门项目</h2>
        <div>
            <Button onClick={()=>{setloading('false')
            setpath('https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories')}}>All</Button>
            <Button onClick={()=>{  
                setloading('false')
                setpath('https://api.github.com/search/repositories?q=stars:%3E1+language:java&sort=stars&order=desc&type=Repositories')}}>java</Button>
            <Button onClick={()=>{
                setloading('false')
                setpath('https://api.github.com/search/repositories?q=stars:%3E1+language:javascript&sort=stars&order=desc&type=Repositories')}}>javascript</Button>
            <Button onClick={()=>{
                setloading('false')
                setpath('https://api.github.com/search/repositories?q=stars:%3E1+language:css&sort=stars&order=desc&type=Repositories')}}> css</Button>
            <Button onClick={()=>{
                setloading('false')
                setpath('https://api.github.com/search/repositories?q=stars:%3E1+language:ruby&sort=stars&order=desc&type=Repositories')}}>ruby</Button>
        </div>
        {listcomponent}
        {loadingcomponent}
        
        <style jsx >{`
            html,
            body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
            display:flex;
            width:100%;
            height:100%;
            }
        `}</style>
        </div>
    )
    }
   

