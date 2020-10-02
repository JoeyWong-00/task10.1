import React from 'react';

const genders = ["Female", "Male", "Other"]
function DecisionTask({ requestedTask, setRequestedTask}) {
    return (
        <div className="my-4">
            <div>
                <div className="form-check-inline">What is your gender</div>
                {genders.map((gender, index) => {
                    return (
                    <div className="form-check form-check-inline" key={index}>
                        <input className="form-check-input" type="radio" value={gender} onClick={e => setRequestedTask({...requestedTask, gender: e.target.value})}/>
                        <label className="form-check-label">
                            {gender}
                        </label>
                    </div>
                    )
                })}
            </div>
            <div>
                <div className="form-check-inline">Do you have a pet?</div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" value="yes" onClick={e => setRequestedTask({...requestedTask, pet: e.target.value})}/>
                    <label className="form-check-label">
                        Yes
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" value="no"  onClick={e => setRequestedTask({...requestedTask, pet: e.target.value})}/>
                    <label className="form-check-label" >
                        No
                    </label>
                </div>
            </div>
        </div>
    )
}

export default DecisionTask;