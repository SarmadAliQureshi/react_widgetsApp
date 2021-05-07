import React from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'

const items = [
    {
        title:'What is react?',
        content:'React is a fornt end framework'
    },
    {
        title:'Why use react?',
        content:'React easy to use'
    },
    {
        title:'How do you use  react?',
        content:'You use react by creating components'
    }
]

const options =[{
    label:'The color red',
    value:'red'
},{
    label:'The color green',
    value:'green'
},{
    label:'The color blue',
    value:'blue'
},
]
const selectedColor = (e)=>{
    console.log('abc',e);
}

const App = ()=>{

    return(<div>
        {/* <Accordion items = {items}/> */}
        {/* {<Search/>} */}
        {<Dropdown options={options} selectedColor={selectedColor}/>}
    </div>)

}


export default App