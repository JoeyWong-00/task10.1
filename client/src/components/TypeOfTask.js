import React from 'react'

function TypeOfTask({ requestedTask, setRequestedTask}) {
    function handleChoose(e) {
        setRequestedTask({...requestedTask, task_type: e.target.value})
    }
    return (
        <div className="my-4">
            <div className="alert alert-success" role="alert">
                Select Task Type
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" name="type" type="radio" id="choice"  value="choice" onClick={handleChoose}/>
                <label className="form-check-label" forhtml="choice">Choice Task</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" name="type" type="radio" id="decision" value="decision-making" onClick={handleChoose}/>
                <label className="form-check-label" forhtml="decision">Decision-Making Task</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" name="type" type="radio"   id="decision" value="sentence-level" onClick={handleChoose}/>
                <label className="form-check-label" forhtml="sentence">Sentence-Level Task</label>
            </div>
        </div>
    )
} 
export default TypeOfTask;