export default function validatorForm(task) {
  const {
    task_type,
    task_title,
    task_description,
    task_date,
    choice_task,
    gender,
    pet,
    sentence_task,
    require_master,
    reward,
    number_workers,
  } = task;
  if (task_type === "") {
    return { status: "failed", message: "Please choose the task type" };
  }
  if (task_title === "") {
    return { status: "failed", message: "Please enter the task title" };
  }
  if (task_description === "") {
    return { status: "failed", message: "Please enter the task description" };
  }
  if (task_date === "") {
    return { status: "failed", message: "Please choose the task date" };
  }
  if (task_type === "choice" && choice_task.length === 0) {
    return {
      status: "failed",
      message: "Please select favourite color in setting up task",
    };
  }
  if (task_type === "decision-making" && gender === "") {
    return {
      status: "failed",
      message: "Please select your gender in setting up task",
    };
  }
  if (task_type === "decision-making" && pet === "") {
    return {
      status: "failed",
      message: "Please select pet option  in setting up task",
    };
  }
  if (task_type === "sentence-level" && sentence_task === "") {
    return {
      status: "failed",
      message: "Please answer the question in setting up task",
    };
  }
  if (require_master === "") {
    return { status: "failed", message: "Please choose option require master" };
  }
  if (reward === "") {
    return { status: "failed", message: "Please provide reward" };
  }
  if (number_workers === "") {
    return { status: "failed", message: "Please provide number of workers" };
  }
  return { status: "good", message: "" };
}
