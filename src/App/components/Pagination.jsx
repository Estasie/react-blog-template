import React from 'react'
import prevButton from '../assets/prevPass.svg';
import nextButton from '../assets/nextPass.svg';

export default function Pagination() {
    return (
        <div className="pagination-container">
          <a href="#">
            <div className="previous-post">
              <img src={prevButton} alt="prev" className="prev-img" />
              <span className="pagination-text">OLDER POST</span>
            </div>
          </a>
          <div className="pages">
            <a href="#"><span>1</span></a>
            <a href="#"><span>2</span></a>
            <a href="#"><span>3</span></a>
            <a href="#"><span>...</span></a>
            <a href="#"><span>8</span></a>
          </div>
          <a href="#">
            <div className="next-post">
              <span className="pagination-text">NEXT POST</span>
              <img src={nextButton} alt="next" />
            </div>
          </a>
        </div>
    )
}
