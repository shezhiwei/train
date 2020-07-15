
import { Card, Col, Row} from 'antd'
import React, { useContext, useState,useEffect } from 'react'
import myContext from './mycreate'
const List=()=>{  
    const list=useContext(myContext) 
    {
        if(list!=undefined){
            console.log(list)       
    return (             
            <div style={{width:"100%",textAlign:"center"}}>           
                <Row gutter={20} style={{margin:0,marginTop:"20px",display:'flex',justifyContent:'center'}}>
                    {
                    list.data.items.map((item,index)=><Col span={4} xs={24} sm={12} md={12} lg={3} xl={4} key={index}>
                    <Card size="small" title={'#'+(index+1)} 
                        cover={<img alt="example" src={item.owner.avatar_url} 
                        />}
                    >         
                            <p href={item.html_url}>{item.full_name}</p>             
                            <p><i className="fa fa-user  fa-lg" style={{ color: 'orange' }}></i> {item.owner.login}</p>
                            <p><i className="fa fa-star fa-lg fa-fw" style={{ color: 'yellow' }}></i>{item.stargazers_count}</p>
                            <p><i className="fa fa-code-fork fa-lg fa-fw" style={{ color: 'lightblue' }}></i>{item.forks}</p>
                            <p><i className="fa fa-warning fa-lg fa-fw" style={{ color: 'purple' }}></i>{item.open_issues}</p>
                        </Card>

                    </Col>)
                    }
                    </Row>
                </div>
    )}else{
        {console.log(list)}
        return(
            <h2 style={{textAlign:'center'}}>Loading....</h2>
            
        )
    }
}
                }



  export default List