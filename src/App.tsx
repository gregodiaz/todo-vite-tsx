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
    const updatedTasks: ITask[] = [...tasks, { name, done: false }]
    setTasks(updatedTasks)
  }

  const toggleTask = (i: number): void => {
    const allTasks: ITask[] = [...tasks]
    allTasks[i].done = !allTasks[i].done
    setTasks(allTasks)
  }

  const deleteTask = (i: number): void => {
    const allTasks: ITask[] = [...tasks]
    allTasks.splice(i, 1)
    setTasks(allTasks)
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
            <h1 style={{ textDecoration: task.done ? 'line-through' : '' }}>{task.name}</h1>
            <div>
              <button onClick={() => toggleTask(i)} >{task.done ? '✗' : '✓'}</button>
              <button onClick={() => deleteTask(i)} >{'🗑'}</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default App
