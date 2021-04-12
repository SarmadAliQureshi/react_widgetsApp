import React , {useState} from 'react'

//Hooks based implementation of getting clicked index

const Accordion = ({items}) =>{
    const [activeIndex, setActiveIndex] = useState(null)

    console.log('Rendering...');
    console.log(activeIndex);


    const  titleClicked = (index) =>{
        // console.log("Title Clicked",index)
        setActiveIndex(index)
    }
    

    const renderedItems = items.map((item,index)=>{
      const  active = index===activeIndex ? 'active' : ''
      console.log('I',item);
      return(
      <React.Fragment key={item.title}>
          <div className={`title  ${active}`} onClick = { function(){ titleClicked(index)}}>
              <i className="dropdown icon"></i>
                {item.title}
          </div>
          <div className={"content "+ active} >
              <p>{item.content}</p>
          </div>
      </React.Fragment> 
      ) 
    })
    return(
        <div className="ui styled accordion">
             {renderedItems}
             {/* <h1>{activeIndex}</h1> */}
        </div>
    )
}

//Functional based implementation of getting clicked index

// const Accordion = ({items}) =>{

//     const  titleClicked = (index) =>{
//         console.log("Title Clicked",index)
//     }
    

//     const renderedItems = items.map((item,index)=>{
//       console.log('I',item);
//       return(
//       <React.Fragment key={item.title}>
//           <div className="title active" onClick = { function(){ titleClicked(index)}}>
//               <i className="dropdown icon"></i>
//                 {item.title}
//           </div>
//           <div className="content active" >
//               <p>{item.content}</p>
//           </div>
//       </React.Fragment> 
//       ) 
//     })
//     return(
//         <div className="ui styled accordion">
//              {renderedItems}
//         </div>
//     )
// }


//Class based implementation of getting clicked index

// class Accordion extends React.Component{

//     state = {activeIndex:0}

//     itemClicked(val,index){
//         console.log('Console', index);
//         this.setState({activeIndex:index})
//     }
    
//     GetData () {
//         // console.log();
//         var items = this.props.items
//         // const a = items.map((val,index)=>{
//         // above or this method
//         return items.map((val,index)=>{
//             console.log('A',val.title);
//             return (<div onClick={()=>{this.itemClicked(val,index)}}> {val.title} </div>)
//         })
//         // return <div>{a}</div>
        
//     }
//     render(){
//         // console.log(this.props);
//         console.log("rendering");
//         return(
//             <div>
//                 Accord
//                 {this.GetData()}
//                 <h1>{this.state.activeIndex}</h1>
//             </div>
//         )
//     }
// }


export default Accordion