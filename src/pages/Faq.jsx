import React from 'react'
import Accordion from '../components/Accordion'

function Faq() {
  return (
    <div>
      <div className="min-h-60  flex items-baseline justify-center">
      <div className="w-full max-w-lg">
        <Accordion
          title="Accordion Item 1"
          content="This is the content of the first accordion item."
        />
        <Accordion
          title="Accordion Item 2"
          content="This is the content of the second accordion item."
        />
        <Accordion
          title="Accordion Item 3"
          content="This is the content of the third accordion item."
        />
      </div>
    </div>
    </div>
  )
}

export default Faq
