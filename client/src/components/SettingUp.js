import React from 'react'
import ChoiceTask from './ChoiceTask'
import DecisionTask from './DecisionTask'
import SentenceTask from './SentenceTask'

function SettingUp({ requestedTask, setRequestedTask}) { 
    return (
        <div className="my-4">
            <div className="alert alert-success" role="alert">
                Setting up your Task
            </div>
            {
                requestedTask.task_type === "choice" &&
                    <ChoiceTask requestedTask={requestedTask} setRequestedTask={setRequestedTask}/>
            }
            {
                requestedTask.task_type === "decision-making" &&
                    <DecisionTask requestedTask={requestedTask} setRequestedTask={setRequestedTask}/>
            }
            {
                requestedTask.task_type === "sentence-level" &&
                    <SentenceTask requestedTask={requestedTask} setRequestedTask={setRequestedTask}/>
            }
        </div>
    )
}

export default SettingUp;