import React from 'react'
import "./css/CardDummy.scss"

const CardDummy = () => {
  return (
    <div className="cd">
      <div className="cd__inner">
        <div className="cd__front">
          <div className="cd__header">
            <div className="cd__number">Question 1</div>
            <div className="cd__options">o</div>
          </div>
          <div className="cd__content">
            <div className="cd__question">
                What ended in 1947?
            </div>
          </div>
        </div>
        <div className="cd__back">
          <div className="cd__header">
            <div className="cd__number">Answer</div>
            <div className="cd__options">o</div>
          </div>
          <div className="cd__content">
            <div className="cd__answer">
              1946
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CardDummy
