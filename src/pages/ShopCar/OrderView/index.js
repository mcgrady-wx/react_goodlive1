import React from "react"
import Item from "./Item"


export default class OrderView extends React.Component {
    render() {
        const data = this.props.data;
        //console.log(data)
        return (
            <div>
                {
                	data.map((element,index)=>{
                		return <Item key={index} data={element}/>
                	})
                }
            </div>
        )
    }
}