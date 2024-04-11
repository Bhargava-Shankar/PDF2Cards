import React from 'react'
import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form'
import { redirect, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { childProps, contextProps, Input, cardProps } from '../propTypes'
import { createContext } from 'react'

export const formContext = createContext<contextProps>({});

const ContextProvider = ({ children }: childProps) => {
  const [cardList, setCardList] = useState<cardProps[] | null>([]);
  const [message, setMessage] = useState<string>("")
  const [file, setFile] = useState<any>();

  //when any file is added or removed
  function handleFileChange(event: any) {
    setFile(event.target.files[0]);
  }

  function handleSubmit(event: any,file: any) {
    event.preventDefault();
    const url = "http://127.0.01:5000/summarize";
    const formData = new FormData();
    formData.append('file', file);
    const config = {
      headers: {
        'Content-type': "multipart/form-data"
      }
    }
    //POST DATA
    axios.post(url, formData, config).then((res) => {
      console.log(res.data.cards);
      setCardList(res.data.cards);
    })
    
  }

    const contexts = { message, handleSubmit, handleFileChange, cardList };
  return (
    <formContext.Provider value={contexts}>
      {children}
    </formContext.Provider>
  )
}

export default ContextProvider
