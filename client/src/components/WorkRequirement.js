import React from 'react';

function WorkRequirement({ requestedTask, setRequestedTask}) {
    return (
        <div className="my-4">
            <div className="alert alert-success" role="alert">
            Work Requirement
            </div>
            <div>
                <div className="form-check-inline">Require Master Workers:</div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" name="master" type="radio" value="yes" onClick={(e) => setRequestedTask({...requestedTask, require_master: e.target.value})}/>
                    <label className="form-check-label">
                        Yes
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" name="master" type="radio" value="no"onClick={(e) => setRequestedTask({...requestedTask, require_master: e.target.value})}/>
                    <label className="form-check-label" >
                        No
                    </label>
                </div>
            </div>
            <div className="form-group row my-2">
                <label  className="col-sm-2 col-form-label">Reward per response</label>
                <div className="col-sm-3">
                    <input type="number" className="form-control" min={0} onChange={(e) => setRequestedTask({...requestedTask, reward: e.target.value})}/>
                </div>
            </div>
            <div className="form-group row my-2">
                <label  className="col-sm-2 col-form-label">Number of workers</label>
                <div className="col-sm-3">
                    <input type="number" className="form-control" min={0} onChange={(e) => setRequestedTask({...requestedTask, number_workers: e.target.value})}/>
                </div>
            </div>
        </div>
    )
}
export default WorkRequirement;