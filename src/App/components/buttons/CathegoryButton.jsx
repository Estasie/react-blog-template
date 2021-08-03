import React from 'react'

export default function CathegoryButton({el}) {
    return (
        <div className="cat-item">
            <a href="#">
              <p>{el.name}</p>
              <p>{el.times}</p>
            </a>
          </div>
    )
}
