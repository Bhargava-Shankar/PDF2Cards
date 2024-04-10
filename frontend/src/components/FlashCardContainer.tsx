import React, { useContext } from 'react'
import FlashCard from './FlashCard'
import { formContext } from '../contexts/ContextProvider'
import { cardProps } from '../propTypes'
const FlashCardContainer = () => {
    const { cardList } = useContext<any>(formContext);
  return (
        cardList.length ? <div>
            {
                cardList.map((card: cardProps) => {
                    return (
                        <FlashCard question={card.question}
                            answer={card.answer}
                        ></FlashCard>
                    )
                })
            }

        </div> : <div></div>
  )
}

export default FlashCardContainer
