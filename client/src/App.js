import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import TypeOfTask from "./components/TypeOfTask";
import DescribeTask from "./components/DescribeTask";
import SettingUp from "./components/SettingUp";
import WorkRequirement from "./components/WorkRequirement";
import validatorFrom from "./validatorForm";

const URL = "https://task10-1.herokuapp.com";

function App() {
  const [requestedTask, setRequestedTask] = useState({
    task_type: "",
    task_title: "",
    task_description: "",
    task_date: "",
    choice_task: [],
    gender: "",
    pet: "",
    sentence_task: "",
    require_master: "",
    reward: "",
    number_workers: "",
  });
  async function handleSubmit(e) {
    e.preventDefault();
    const { status, message } = validatorFrom(requestedTask);
    if (status === "failed") {
      alert(message);
    } else {
      const response = await fetch(`${URL}/task`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestedTask),
      });
      response
        .json()
        .then(
          (data) => (window.location.href = `${URL}/task/${data.task._id}`)
        );
    }
  }
  return (
    <form className="App container" onSubmit={handleSubmit}>
      <Nav />
      <TypeOfTask
        requestedTask={requestedTask}
        setRequestedTask={setRequestedTask}
      />
      <DescribeTask
        requestedTask={requestedTask}
        setRequestedTask={setRequestedTask}
      />
      <SettingUp
        requestedTask={requestedTask}
        setRequestedTask={setRequestedTask}
      />
      <WorkRequirement
        requestedTask={requestedTask}
        setRequestedTask={setRequestedTask}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button type="submit" className="btn btn-success">
          Save
        </button>
      </div>
    </form>
  );
}

export default App;
