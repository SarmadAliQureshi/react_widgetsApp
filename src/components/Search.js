import React, {useState, useEffect, useCallback} from 'react'
import axios from 'axios'
import Youtube from '../api/Youtube'
const Search = () =>{
    const [searchTerm, setSearchTerm] = useState('')
    const [results, setResults] = useState([])
    console.log('rendering');
    
    useEffect(()=>{
        //1 (async ()=>{
        //     await axios.get('')
        // })()
        //2 axios.get('').then((resp)=>{
        // })
        //Both above and below requests are same
        const search = async ()=>{
            var {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    action:'query',
                    list:'search',
                    format:'json',
                    origin:'*',
                    srsearch:searchTerm,
                }
            })
            setResults(data.query.search)
        }
        // console.log(results);
        if(searchTerm){
        search()
        }
        // console.log(results);
    },[searchTerm])

    const renderedResults = results.map((result)=>{
        console.log(result);
        return (
        <div className="item">
            <div className="content">
                <div className="header">
                    {result.title}
                </div>
                <span dangerouslySetInnerHTML={{__html:result.snippet}}></span>
                {/* {result.snippet} */}
            </div>
        </div>
        )
    })

    function onInput(e){

        setSearchTerm(e.target.value)
        // console.log('inp',e);
    }
    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input className="input" value={searchTerm} onChange={onInput}></input>
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}

export default Search