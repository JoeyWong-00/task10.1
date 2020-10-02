import React from 'react'

function DescribeTask({ requestedTask, setRequestedTask}) {
    return (
        <div className="my-4">
            <div className="alert alert-success" role="alert">
            Describe your task to Workers
            </div>
            <div className="form-group">
                <label >Title</label>
                <input type="text" className="form-control" onChange={e => setRequestedTask({...requestedTask, task_title: e.target.value})} />
            </div>
            <div className="form-group">
                <label >Description</label>
                <textarea  className="form-control" onChange={e => setRequestedTask({...requestedTask, task_description: e.target.value})}  />
            </div>
            <div className="form-group">
                <label >Expire Date</label>
                <input type="date" className="form-control" onChange={e => setRequestedTask({...requestedTask, task_date: e.target.value})} />
            </div>
        </div>
    )
}

export default DescribeTask;