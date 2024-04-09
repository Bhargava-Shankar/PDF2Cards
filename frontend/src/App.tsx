import './App.css'
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios';
type Input = {
  file: File
}
function App() {
  const [message,setMessage] = useState<string>("")
  const { register, handleSubmit, watch } = useForm<Input>();
  const onSubmit: SubmitHandler<Input> = async (data: any) => {
    console.log(data.file[0])
    const formData = new FormData();
    formData.append('file', data.file);
    console.log(formData);
    await axios.post("http://127.0.0.1:5000/summarize", data.file, {
      headers: {
        'Content-type' : 'multipart/form-data'
      }
    });
    setMessage("FILE SUBMITTED")
  }

  return (
    <>
      <h1>{ message }</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("file")} type="file"  />
        <input type="submit" />
     </form>
    </>
  )
}

export default App
