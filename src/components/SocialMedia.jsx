import React from 'react';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <BsFacebook/>
        </div>
        <div>
            <BsGithub/>
        </div>
        <div>
            <BsLinkedin/>
        </div>
    </div>
  )
}

export default SocialMedia