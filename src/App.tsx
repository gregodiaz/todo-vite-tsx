import { useState } from "react"

type FormElement = React.FormEvent<HTMLFormElement>

function App(): JSX.Element {

  const [newTask, setNewTask] = useState<string>('')

  const handleSubmit = (e: FormElement): void => {
    e.preventDefault()
    console.log(newTask)
    setNewTask('')
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
    </div>
  )
}

export default App
