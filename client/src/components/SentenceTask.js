import React from 'react'

function SentenceTask({ requestedTask, setRequestedTask}) { 
    return (
        <div className="form-group">
            <label >Could your introduce about yourself as a Requester?</label>
            <textarea  className="form-control" onChange={e => setRequestedTask({...requestedTask, sentence_task: e.target.value})}/>
        </div>
    )
}

export default SentenceTask;