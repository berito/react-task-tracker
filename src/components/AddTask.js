import React from 'react'
import { useState } from 'react'

const AddTask = ({addTask}) => {
    const [text,setText]=useState('')
    const [day,setDay]=useState('')
    const [reminder,setReminder]=useState(false)
    const submit=(e)=>{
    e.preventDefault()
    if(!text){
        alert('please add task')
        return
    }
    addTask({text,day,reminder})
    setText('')
    setDay('')
    setReminder(false)
  }
  return (
    <form className="add-form" onSubmit={submit}>
        <div className="form-control">
            <label>Tasks</label>
            <input type='text' value={text} onChange={(e)=>setText(e.target.value)} placeholder='Add Task'/>
        </div>
        <div className="form-control">
            <label>Day and Time</label>
            <input type='text' value={day} onChange={(e)=>setDay(e.target.value)} placeholder='Set day and time'/>
        </div>
        <div className="form-control-check ">
            <label>Reminder</label>
            <input type='checkbox' checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)} />
        </div>
        <input className='btn btn-block'type='submit'  value='Save Task'/>
    </form>
  )
}

export default AddTask