import React from 'react'
import person from "./Assets/person1.png"

const TestimonialPerson = () => {
  return (
    <>
    <article className="persondetails flex justify-center items-center px-4 py-2 gap-4">
        <img src={person} alt="" className="person" />
        <div className="content flex flex-col justify-start items-start gap-0">
            <p className="name text-accent2 font-bold">Raksha Singh</p>
            <p className="place text-[12px] text-textsecondary -mt-1">Mangalore, Karnataka</p>
        </div>
    </article>
    </>
  )
}

export default TestimonialPerson