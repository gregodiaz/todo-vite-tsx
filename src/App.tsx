import { useState } from "react"

type FormElement = React.FormEvent<HTMLFormElement>
interface ITask {
  name: string;
  done: boolean;
}

function App(): JSX.Element {

  const [newTask, setNewTask] = useState<string>('')
  const [tasks, setTasks] = useState<ITask[]>([])

  const handleSubmit = (e: FormElement): void => {
    e.preventDefault()
    addTask(newTask)
    setNewTask('')
  }

  const addTask = (name: string): void => {
    const updatedTask = [...tasks, { name, done: false }]
    setTasks(updatedTask)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={e => setNewTask(e.target.value)}
          value={newTask}
          autoFocus
        />
        <button>
          Save
        </button>
      </form>
      {
        tasks.map((task: ITask, i: number) => (
          <div key={i}>
            {task.name}
          </div>
        ))
      }
    </div>
  )
}

export default App
