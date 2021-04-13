import React from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'


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

const App = ()=>{
    

    return(<div>
        {/* <Accordion items = {items}/> */}
        {<Search/>}
    </div>)

}


export default App