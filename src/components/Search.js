import React, {useState, useEffect, useCallback} from 'react'
import axios from 'axios'
import Youtube from '../api/Youtube'
const Search = () =>{
    const [searchTerm, setSearchTerm] = useState('programming')
    const [decoratedTerm, setDecoratedTerm] = useState(searchTerm)
    const [results, setResults] = useState([])
    const [time, setTime] = useState(1)
    console.log('rendering',searchTerm);

    // useEffect(()=>{
    //     console.log('both',decoratedTerm, searchTerm);
    //     const timeoutid = setTimeout(()=>{
    //         console.log('time out');
    //         setDecoratedTerm(searchTerm)
    //     },1000)
    //     return ()=>{
    //         clearTimeout(timeoutid)
    //     }
        
    // },[searchTerm])

    // useEffect(()=>{
    //     const search = async ()=>{
    //         var {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
    //             params:{
    //                 action:'query',
    //                 list:'search',
    //                 format:'json',
    //                 origin:'*',
    //                 srsearch:searchTerm,
    //             }
    //         })
    //         setResults(data.query.search)
    //     }
    //     console.log('dec', decoratedTerm);
    //     search()
    // },[decoratedTerm])
    
    // Use the above two useEffects or the below useEffect (both work almost same)
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
        // To search first term instantly
        if (searchTerm &&! results.length){
            search()
        }
        
        const timeoutId = setTimeout(()=>{
            if(searchTerm){
                search()
            console.log('Time out id',timeoutId)
            setTime(timeoutId)
        }
        },5000)
        
        return ()=>{
            console.log('clean up',timeoutId , searchTerm);
            clearTimeout(timeoutId)
        }
        // console.log(results);
    },[searchTerm])

    const renderedResults = results.map((result)=>{
        // console.log(result);
        return (
        <div className="item">
            <div className="right floated content">
                <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}> Go</a>
            </div>
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