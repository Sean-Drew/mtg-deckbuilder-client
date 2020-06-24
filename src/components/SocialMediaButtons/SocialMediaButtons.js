import React from 'react'
import { LinkedinShareButton, LinkedinIcon, FacebookShareButton, FacebookIcon, PinterestShareButton, PinterestIcon, TwitterShareButton, TwitterIcon, EmailShareButton, EmailIcon } from 'react-share'
import './socialSidebar.scss'

const SocialMediaButtons = () => (
  <div className="social-media-button-group">

    <div className="social-btn">
      <FacebookShareButton
        url="https://sean-drew.github.io/mtg-deckbuilder-client/#/"
      >
        <FacebookIcon size={40} round={true} iconFillColor={'white'}/>
      </FacebookShareButton>
    </div>

    <div className="social-btn">
      <LinkedinShareButton
        url="https://sean-drew.github.io/mtg-deckbuilder-client/#/"
      >
        <LinkedinIcon size={40} round={true} iconFillColor={'white'}/>
      </LinkedinShareButton>
    </div>

    <div className="social-btn">
      <TwitterShareButton
        url="https://sean-drew.github.io/mtg-deckbuilder-client/#/"
      >
        <TwitterIcon size={40} round={true} iconFillColor={'white'}/>
      </TwitterShareButton>
    </div>

    <div className="social-btn">
      <PinterestShareButton
        url="https://sean-drew.github.io/mtg-deckbuilder-client/#/"
        media=""
      >
        <PinterestIcon size={40} round={true} iconFillColor={'white'}/>
      </PinterestShareButton>
    </div>

    <div className="social-btn">
      <EmailShareButton
        subject=""
        url="https://sean-drew.github.io/mtg-deckbuilder-client/#/"
        body=""
      >
        <EmailIcon size={40} round={true} iconFillColor={'white'}/>
      </EmailShareButton>
    </div>

  </div>
)

export default SocialMediaButtons
