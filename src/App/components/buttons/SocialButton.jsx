import React from "react";

export default function SocialButton({el}) {
  return (
    <button className="social-item">
      <img src={el.picture} alt={el.descr} />
      <span>{el.descr}</span>
    </button>
  );
}
