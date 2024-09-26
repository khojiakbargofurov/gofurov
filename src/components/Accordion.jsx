import { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-600">
      <button
        className="w-full py-4 text-left text-lg font-medium px-4 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span>{isOpen ? '^' : '>'}</span>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 ">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
