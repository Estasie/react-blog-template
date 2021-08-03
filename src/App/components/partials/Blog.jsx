import React from 'react'
import BlogPost from '../BlogPost';
import Pagination from '../Pagination';

export default function Blog({data}) {
    
    return (
        <section className="blog-section">
        <div className="blog-container">
            {data.map(el => {
                return(
                    <BlogPost key={el.ID} data = {el}/>
                )
            })}
        </div>
        <Pagination />
      </section>
    )
}
