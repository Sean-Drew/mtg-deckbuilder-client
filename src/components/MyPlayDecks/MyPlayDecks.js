import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'antd'
import apiUrl from '../../apiConfig'
import axios from 'axios'

// import design & styling items
import 'antd/dist/antd.css'
// import MtgCardBack from '../../Images/mtg-card-back-2.jpg' /* Possible option for 'deck' image */
import MtgLogo1 from '../../Images/mtg-logo-1.jpg' /* Possible option for 'deck' image */

const { Meta } = Card

const MyPlayDecks = (props) => {
  const [decks, setDecks] = useState(null)
  const user = props.user
  console.log('user is ', user)

  console.log('decks is ', decks)
  console.log('props.decks is ', props.decks)

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
        console.log('response is ', res)
        const deckReturn = res.data.decks
        console.log('deckReturn is ', deckReturn)
        return deckReturn.filter(deck => deck.owner._id === props.user._id)
      })
      .then(response => {
        setDecks(response)
      })
      .catch(console.error)
  }, [])

  if (!decks) {
    return <p>Loading....</p>
  }

  if (decks.length === 0) {
    return <p>You have no decks - try making one!</p>
  }

  return (
    <div>
      {decks.map(deck => (
        <div key={decks._id} className="site-card-wrapper">
          <Row gutter={16}>
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
                  title="Archangel Avacyn"
                />
                <ul>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Consectetur adipiscing elit.</li>
                  <li>Vivamus a vehicula mi.</li>
                  <li>Nam ac metus ornare justo euismod aliquet sit amet sed lacus.</li>
                  <li>Cras eu.</li>
                </ul>
              </Card>
            </Col>
          </Row>
        </div>
      ))}
    </div>
  )
}

// const MyPlayDecks = (props) => {
//   return (
//     <div className="site-card-wrapper">
//
//       <Row gutter={16}>
//         <Col span={8}>
//           <Card
//             className="my-decks-card"
//             style={{ width: 250 }}
//             hoverable
//             bordered={false}
//             cover={
//               <img
//                 alt="mtg-card"
//                 src={MtgCardBack}
//               />
//             }
//           >
//             <Meta
//               title="Archangel Avacyn"
//             />
//             <ul>
//               <li>Lorem ipsum dolor sit amet.</li>
//               <li>Consectetur adipiscing elit.</li>
//               <li>Vivamus a vehicula mi.</li>
//               <li>Nam ac metus ornare justo euismod aliquet sit amet sed lacus.</li>
//               <li>Cras eu.</li>
//             </ul>
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   )
// }

// const MyPlayDecks = (props) => {
//   return (
//     <div className="site-card-wrapper">
//
//       <Row gutter={16}>
//         <Col span={8}>
//           <Card
//             className="my-decks-card"
//             style={{ width: 250 }}
//             hoverable
//             bordered={false}
//             cover={
//               <img
//                 alt="mtg-card"
//                 src={MtgCardBack}
//               />
//             }
//           >
//             <Meta
//               title="Archangel Avacyn"
//             />
//             <ul>
//               <li>Lorem ipsum dolor sit amet.</li>
//               <li>Consectetur adipiscing elit.</li>
//               <li>Vivamus a vehicula mi.</li>
//               <li>Nam ac metus ornare justo euismod aliquet sit amet sed lacus.</li>
//               <li>Cras eu.</li>
//             </ul>
//           </Card>
//         </Col>
//         <Col span={8}>
//           <Card
//             className="my-decks-card"
//             style={{ width: 250 }}
//             hoverable
//             bordered={false}
//             cover={
//               <img
//                 alt="mtg-card"
//                 src={MtgCardBack}
//               />
//             }
//           >
//             <Meta
//               title="Archangel Avacyn"
//             />
//             <ul>
//               <li>Lorem ipsum dolor sit amet.</li>
//               <li>Consectetur adipiscing elit.</li>
//               <li>Vivamus a vehicula mi.</li>
//               <li>Nam ac metus ornare justo euismod aliquet sit amet sed lacus.</li>
//               <li>Cras eu.</li>
//             </ul>
//           </Card>
//         </Col>
//         <Col span={8}>
//           <Card
//             className="my-decks-card"
//             style={{ width: 250 }}
//             hoverable
//             bordered={false}
//             cover={
//               <img
//                 alt="mtg-card"
//                 src={MtgCardBack}
//               />
//             }
//           >
//             <Meta
//               title="Archangel Avacyn"
//             />
//             <ul>
//               <li>Lorem ipsum dolor sit amet.</li>
//               <li>Consectetur adipiscing elit.</li>
//               <li>Vivamus a vehicula mi.</li>
//               <li>Nam ac metus ornare justo euismod aliquet sit amet sed lacus.</li>
//               <li>Cras eu.</li>
//             </ul>
//           </Card>
//         </Col>
//       </Row>
//
//       <Row gutter={16}>
//         <Col span={8}>
//           <Card
//             className="my-decks-card"
//             style={{ width: 250 }}
//             hoverable
//             bordered={false}
//             cover={
//               <img
//                 alt="mtg-card"
//                 src={MtgCardBack}
//               />
//             }
//           >
//             <Meta
//               title="Archangel Avacyn"
//             />
//             <ul>
//               <li>Lorem ipsum dolor sit amet.</li>
//               <li>Consectetur adipiscing elit.</li>
//               <li>Vivamus a vehicula mi.</li>
//               <li>Nam ac metus ornare justo euismod aliquet sit amet sed lacus.</li>
//               <li>Cras eu.</li>
//             </ul>
//           </Card>
//         </Col>
//         <Col span={8}>
//           <Card
//             className="my-decks-card"
//             style={{ width: 250 }}
//             hoverable
//             bordered={false}
//             cover={
//               <img
//                 alt="mtg-card"
//                 src={MtgCardBack}
//               />
//             }
//           >
//             <Meta
//               title="Archangel Avacyn"
//             />
//             <ul>
//               <li>Lorem ipsum dolor sit amet.</li>
//               <li>Consectetur adipiscing elit.</li>
//               <li>Vivamus a vehicula mi.</li>
//               <li>Nam ac metus ornare justo euismod aliquet sit amet sed lacus.</li>
//               <li>Cras eu.</li>
//             </ul>
//           </Card>
//         </Col>
//         <Col span={8}>
//           <Card
//             className="my-decks-card"
//             style={{ width: 250 }}
//             hoverable
//             bordered={false}
//             cover={
//               <img
//                 alt="mtg-card"
//                 src={MtgCardBack}
//               />
//             }
//           >
//             <Meta
//               title="Archangel Avacyn"
//             />
//             <ul>
//               <li>Lorem ipsum dolor sit amet.</li>
//               <li>Consectetur adipiscing elit.</li>
//               <li>Vivamus a vehicula mi.</li>
//               <li>Nam ac metus ornare justo euismod aliquet sit amet sed lacus.</li>
//               <li>Cras eu.</li>
//             </ul>
//           </Card>
//         </Col>
//       </Row>
//
//     </div>
//   )
// }

export default MyPlayDecks
