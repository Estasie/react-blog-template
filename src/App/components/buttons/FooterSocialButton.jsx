import React from 'react'

export default function FooterSocialButton({el}) {
    return (
        <div className="footer-social-item">
          <a href="#">
            <img src={el} alt={el} />
          </a>
        </div>
    )
}
