import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'antd'
import apiUrl from '../../apiConfig'
import axios from 'axios'

// import design & styling items
import 'antd/dist/antd.css'
// import MtgCardBack from '../../Images/mtg-card-back-2.jpg' /* Possible option for 'deck' image */
import MtgLogo1 from '../../Images/mtg-logo-1.jpg' /* Possible option for 'deck' image */

const { Meta } = Card

const MySingleDeck = (props, match, ...rest) => {
  const [deckCards, setDeckCards] = useState(null)
  const user = props.user
  // console.log('props is: ', props)
  // console.log('this.state is: ', this.state)
  // console.log('match is: ', match)

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/decks/${props.deckId}`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(res => {
        // console.log('response is ', res)
        // const deckReturn = res.data.deck
        const responseCards = res.data.deck.cardsInDeck
        // console.log('deckReturn is ', deckReturn)
        // console.log('responseCards is: ', responseCards)
        return responseCards
        // return responseCards.forEach(card => {
        //   // console.log('the cards: ', card)
        //   const cardIndex = card
        //   // console.log('cardIndex is: ', cardIndex)
        //   setDeckCards(cardIndex)
        //   // console.log('the owner: ', deck.owner)
        //   // return deck.owner === props.user._id
        // })
      })
      .then((responseCards) => {
        setDeckCards(responseCards)
      })
      // .then(cardIndex => {
      //   console.log('response cardIndex is: ', cardIndex)
      //   setDeckCards(cardIndex)
      // })
      .catch(console.error)
  }, [])

  console.log('props is: ', props)

  const deleteOnClick = event => {
    event.preventDefault()
    axios({
      method: 'DELETE',
      url: `${apiUrl}/decks/${props.deckId}`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
    // .then(() => { this.props.history.push('/my-play-decks') })
  }

  // console.log('setDeckCards is: ', setDeckCards)
  // console.log('deckCards is: ', deckCards)
  // console.log('responseCards from outside the function is: ', responseCards)

  if (!deckCards) {
    return <p>Loading....</p>
  }

  if (deckCards.length === 0) {
    return <p>This deck does not currently have any cards.</p>
  }

  return (
    <div>
      <button onClick={deleteOnClick}>Delete This Deck</button>
      <div key={deckCards._id} className="site-card-wrapper">
        <Row gutter={16}>
          {deckCards.map(deck => (
            <div key={deckCards._id}>
              <Col span={8}>
                <Card
                  className="my-decks-card"
                  style={{ width: 200 }}
                  hoverable
                  bordered={false}
                  cover={
                    <img
                      alt="mtg-card"
                      src={MtgLogo1}
                    />
                  }
                >
                  <Meta
                    title='Card Name'
                  />
                  <ul>
                    <li>Placeholder - card data</li>
                    <li>Placeholder - card data</li>
                    <li>Placeholder - card data</li>
                    <li>Placeholder - card data</li>
                  </ul>
                </Card>
              </Col>
            </div>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default MySingleDeck
