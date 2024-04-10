import { cardProps } from "../propTypes"
import "./css/FlashCard.scss"
const FlashCard = ({question, answer}: cardProps) => {
  return (
      <div className="card">
          <div className="card__inner">
              <div className="card__front">
                  <div className="card__header">
                      <div className="card__number">Question 1</div>
                      <div className="card__options">o</div>
                  </div>
                  <div className="card__content">
                      <div className="card__question">
                          {question}
                      </div>
                  </div>
              </div>
              <div className="card__back">
                  <div className="card__header">
                      <div className="card__number">Answer</div>
                      <div className="card__options">o</div>
                  </div>
                  <div className="card__content">
                      <div className="card__answer">
                          {answer}
                      </div>
                  </div>

              </div>
          </div>
      </div>
  )
}

export default FlashCard
