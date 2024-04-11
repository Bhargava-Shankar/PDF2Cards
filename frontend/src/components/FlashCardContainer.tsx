import React, { useContext } from 'react'
import FlashCard from './FlashCard'
import { formContext } from '../contexts/ContextProvider'
import { cardProps } from '../propTypes'
import "./css/FlashCard.scss";
const FlashCardContainer = () => {
  const { cardList } = useContext<any>(formContext);
  return ( 
        cardList.length ? <div className='cards-container'>
            {
                cardList.map((card: cardProps) => {
                    return (
                        <FlashCard question={card.question}
                            answer={card.answer}
                        ></FlashCard>
                    )
                })
            }

        </div> : <div>NO FILE UPLOADED</div>
  )
}

export default FlashCardContainer
