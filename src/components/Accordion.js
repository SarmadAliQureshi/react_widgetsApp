import React from 'react'


const Accordion = ({items}) =>{

    const  titleClicked = (index) =>{
        console.log("Title Clicked",index)
    }
    

    const renderedItems = items.map((item,index)=>{
      console.log('I',item);
      return(
      <React.Fragment key={item.title}>
          <div className="title active" onClick = { function(){ titleClicked(index)}}>
              <i className="dropdown icon"></i>
                {item.title}
          </div>
          <div className="content active">
              <p>{item.content}</p>
          </div>
      </React.Fragment> 
      ) 
    })
    return(
        <div className="ui styled accordion">
             {renderedItems}
        </div>
    )
}

export default Accordion