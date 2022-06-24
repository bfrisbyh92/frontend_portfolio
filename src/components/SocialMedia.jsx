import React from 'react';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';

const linkedin = "https://www.linkedin/in/brendan-frisby"

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
        <a href="https://www.facebook.com/BrendanFriz/" target="_blank" rel="noreferrer noopener">
            <BsFacebook on/>
        </a>
        </div>
        <div>
        <a href="https://github.com/bfrisbyh92" target="_blank" rel="noreferrer noopener">
          <BsGithub/>
        </a>
        </div>
        
        <div>
        <a href="https://linkedin.com/in/brendan-frisby/" target="_blank" rel="noreferrer noopener">
        <BsLinkedin/>
        </a>
        </div>



    </div>
  )
}

export default SocialMedia