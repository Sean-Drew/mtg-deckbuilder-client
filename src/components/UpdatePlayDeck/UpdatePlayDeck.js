import React, { useState } from 'react'
import { Form, Input, Button, Select } from 'antd'
import apiUrl from '../../apiConfig'
import axios from 'axios'

// import design & styling items
import 'antd/dist/antd.css'
// import MtgCardBack from '../../Images/mtg-card-back-2.jpg' /* Possible option for 'deck' image */
// import MtgLogo1 from '../../Images/mtg-logo-1.jpg' /* Possible option for 'deck' image */

const UpdatePlayDeck = (props, msgAlert, ...rest) => {
  const [deck, postDeck] = useState({
    name: '',
    manaColor: '',
    ownerNotes: ''
  })
  const user = props.user
  console.log(msgAlert)

  // const onChange = event => {
  //   event.persist = () => {}
  //   handleChange(event)
  // }

  const handleChange = (event) => {
    event.persist()
    console.log('event.target is: ', event.target)
    postDeck(deck => ({ ...deck, [event.target.id]: event.target.value }))
  }

  const handleDropdownChange = (color) => {
    postDeck(deck => ({ ...deck, manaColor: color }))
  }

  const handleSubmit = (event) => {
    console.log('props is: ', props)
    axios({
      method: 'PATCH',
      url: `${apiUrl}/decks/${props.deckId}`,
      headers: {
        'Authorization': `Token token=${user.token}`
      },
      data: { deck: deck }
    })
  }

  console.log('the deck is: ', deck)

  return (
    <div id="create-deck-wrapper">

      <Form onFinish={handleSubmit}>

        <Form.Item
          name='name'
          label="Name"
          onChange={handleChange}
          placeholder="25 chars max."
          value={deck.name}
          rules={[
            {
              required: true,
              maxlength: 25
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Select">
          <Select
            name='manaColor'
            placeholder="Mana Color(s)"
            /* onSelect={(event) => handleChange(event)} */
            onChange={handleDropdownChange}
            value={deck.manaColor}
          >
            <Select.Option value="Black">Black</Select.Option>
            <Select.Option value="Blue">Blue</Select.Option>
            <Select.Option value="Green">Green</Select.Option>
            <Select.Option value="Red">Red</Select.Option>
            <Select.Option value="White">White</Select.Option>
            <Select.Option value="Black/Blue">Black/Blue</Select.Option>
            <Select.Option value="Black/Green">Black/Green</Select.Option>
            <Select.Option value="Black/Red">Black/Red</Select.Option>
            <Select.Option value="Black/White">Black/White</Select.Option>
            <Select.Option value="Blue/Green">Blue/Green</Select.Option>
            <Select.Option value="Blue/Red">Blue/Red</Select.Option>
            <Select.Option value="Blue/White">Blue/White</Select.Option>
            <Select.Option value="Green/Red">Green/Red</Select.Option>
            <Select.Option value="Green/White">Green/White</Select.Option>
            <Select.Option value="Red/White">Red/White</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name='ownerNotes'
          label="Notes"
          placeholder="400 chars max."
          onChange={handleChange}
          value={deck.ownerNotes}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Update Deck
          </Button>
        </Form.Item>

      </Form>

    </div>
  )
}

export default UpdatePlayDeck
