import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Col, Row } from 'antd'
import apiUrl from '../../apiConfig'
import axios from 'axios'

// import design & styling items
import 'antd/dist/antd.css'
// import MtgCardBack from '../../Images/mtg-card-back-2.jpg' /* Possible option for 'deck' image */
import MtgLogo1 from '../../Images/mtg-logo-1.jpg' /* Possible option for 'deck' image */

const { Meta } = Card

const MyPlayDecks = (props, match, ...rest) => {
  const [decks, setDecks] = useState(null)
  const user = props.user
  // console.log('user is ', user)

  // console.log('decks is ', decks)
  // console.log('props.decks is ', props.decks)

  useEffect(() => {
    // axios(`${apiUrl}/decks`)
    axios({
      method: 'GET',
      url: `${apiUrl}/decks`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(res => {
        // console.log('response is ', res)
        const deckReturn = res.data.decks
        // console.log('deckReturn is ', deckReturn)
        return deckReturn.filter(deck => {
          // console.log('the deck: ', deck)
          // console.log('the owner: ', deck.owner)
          return deck.owner === props.user._id
        })
      })
      .then(response => {
        setDecks(response)
      })
      .then(() => props.msgAlert({ message: 'Successful action.', variant: 'success' }))
      // .catch(console.error)
  }, [])

  const deleteOnClick = event => {
    event.preventDefault()
    // console.log('decks from index delete is: ', decks)
    // console.log('decks._id from index delete is: ', decks._id)
    return decks.forEach(deck => {
      // console.log('the deck from delete is: ', deck)
      // console.log('deck._id from index delete is: ', deck._id)
      // console.log('the owner: ', deck.owner)
      return axios({
        method: 'DELETE',
        url: `${apiUrl}/decks/${deck._id}`,
        headers: {
          'Authorization': `Token token=${user.token}`
        }
      })
        .then(() => props.msgAlert({ message: 'Successful action.', variant: 'success' }))
    })
  }

  if (!decks) {
    return <p>Loading....</p>
  }

  if (decks.length === 0) {
    return <p>You have no decks - try making one!</p>
  }

  const deckCardCounter = (deck) => {
    const numberOfCards = deck.cardsInDeck.length
    return numberOfCards
  }

  const checkIfFavorite = (deck) => {
    const favoriteDeck = deck.isFavorite
    if (favoriteDeck) {
      return 'Yes'
    } else return 'No'
  }

  return (
    <div>
      <div key={decks._id} className="site-card-wrapper">
        <Row gutter={16}>
          {decks.map(deck => (
            <div key={decks._id}>
              <button onClick={deleteOnClick}>Delete All Decks</button>
              <Col span={8}>
                <Card
                  className="my-decks-card"
                  style={{ width: 250 }}
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
                    title={deck.name}
                  />
                  <ul>
                    <li>Color(s): {deck.manaColor}</li>
                    <li>Total Cards: {deckCardCounter(deck)}</li>
                    <li>Notes: {deck.ownerNotes}</li>
                    <li>Favorite? {checkIfFavorite(deck)}</li>
                  </ul>
                  <Link to={`/decks/${deck._id}`}>
                    <button type='button'>View Deck</button>
                  </Link>
                  <Link to={`/decks/update/${deck._id}`}>
                    <button type='button'>Update Deck</button>
                  </Link>
                </Card>
              </Col>
            </div>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default MyPlayDecks
