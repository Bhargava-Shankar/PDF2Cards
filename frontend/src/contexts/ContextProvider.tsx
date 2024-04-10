import React from 'react'
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form'
import { redirect, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { childProps, contextProps, Input, cardProps } from '../propTypes'
import { createContext } from 'react'

export const formContext = createContext<contextProps>({});

const ContextProvider = ({ children }: childProps) => {
    const [cardList, setCardList] = useState<cardProps[] | null>([]);
    const [message, setMessage] = useState<string>("")
    const { register, handleSubmit } = useForm<Input>();
    const onSubmit: SubmitHandler<Input> = async (data: any) => {
    console.log('SENDING FILE')
    console.log(data.file)
        await axios.post("http://127.0.0.1:5000/summarize", data.file, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }).then((res) => {
          console.log(res.data);
          setCardList(res.data['cards']);
          res.data['cards'].map((card: any) => {
                console.log(card)
            })
        });
        setMessage("FILE SUBMITTED")
    }

    const contexts = { message, onSubmit, handleSubmit, register, cardList };
  return (
    <formContext.Provider value={contexts}>
      {children}
    </formContext.Provider>
  )
}

export default ContextProvider
