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
    if (name) setTasks(updatedTasks);
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
    <div className='flex flex-col items-center bg-neutral-900 text-neutral-50 p-4 h-full min-h-screen'>
      <div className='flex justify-center items-center w-1/2 p-4 bg-neutral-700'>
        <div className='p-4'>Add task:</div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={e => setNewTask(e.target.value)}
            value={newTask}
            autoFocus
            className='text-neutral-900 p-1'
          />
          <button className='bg-neutral-600 text-neutral-50 p-1 px-4 m-3'>
            Save
          </button>
        </form>
      </div>
      <div className='flex flex-col items-center'>
        {
          tasks.map((task: ITask, i: number) => (
            <div key={i} className='flex items-center justify-between p-2 mt-2 bg-neutral-800'>
              <div className='flex text-neutral-50 px-4 w-96'>
                <h1 style={{ textDecoration: task.done ? 'line-through' : '' }}>{task.name}</h1>
              </div>
              <div className='text-neutral-50 p-4'>
                <button onClick={() => toggleTask(i)} className='text-neutral-50 px-4' >{task.done ? '✗' : '✓'}</button>
                <button onClick={() => deleteTask(i)} className='text-neutral-50 px-4' >{'🗑'}</button>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default App
