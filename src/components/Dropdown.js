import React from 'react'

const Dropdown = ({options,selectedColor})=>{
    // console.log(selectedColor);
    selectedColor('hyy')
    const renderedOptions = options.map((option)=>{
        return(
            <div className='item' key={option.label}>
                {option.label}
            </div>
        )
    })

    const itemClicked=(e)=>{
        console.log('item',e.target.textContent);
        selectedColor(e.target.textContent)
    }
    return(
    <div className="ui from">
        <label className='label'>Select a color</label>
        <div className='field'>
            <div className='ui selection dropdown visible active'>
                <i className="dropdown icon"></i>
                <div className='text'>Select Color</div>
                <div className='menu visible transition' onClick={itemClicked}>
                    {renderedOptions}
                </div>
            </div>
        </div>
    </div>
    )
}

export default Dropdown