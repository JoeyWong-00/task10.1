import React from 'react';
const colors = ["Green", "Blue", "Red", "Yellow", "White", "Black"]
function ChoiceTask({ requestedTask, setRequestedTask}) {
    function handleChange(e) {
        let chosenColors = []
        let allColors = document.querySelectorAll("#color")
        allColors.forEach(color => {
            if(color.checked) {
                chosenColors.push(color.value);
            }
        })
        setRequestedTask({...requestedTask, choice_task: chosenColors})
    } 
    return (
        <div className="my-4">
            <h6>What are your favorite color?</h6>
            {colors.map((color, index) => {
                return (
                    <div className="form-check" key={index}>
                        <input id="color" className="form-check-input" type="checkbox" value={color} onChange={handleChange}/>
                        <label className="form-check-label" >
                            {color}
                        </label>
                    </div>
                )
            })}
        </div>
    )
}

export default ChoiceTask;