import React, {useState}from "react";

const AddTodo = ({onAdd}) => {
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    if(!text){    
      alert('Please add todo.')
      return;
    }
    onAdd( text, description, date);
    setText('')
    setDescription('')
    setDate('')
  };
  return (
    <form style={{padding:'10px'}} onSubmit={onSubmit} method="POST">
      <input type="text" placeholder="Description"  value={description} onChange={(e) => setDescription(e.target.value)} style={{width:'100%',height:'30px', padding:'20px'}}/>
      <input type ="date" id="date"  value={date} onChange={(e) => setDate(e.target.value)} style={{width:'100%',height:'30px', padding:'20px'}}/>
      <input type="text"  placeholder="Add Tasks" value={text}  onChange={(e) => setText(e.target.value)} style={{width:'100%',height:'30px', padding:'20px'}}/>
      <button className="btn" style={{backgroundColor:'green', width:'100%',margin:'20px 0'}}>Save</button>
  </form>
  )
};

export default AddTodo;
