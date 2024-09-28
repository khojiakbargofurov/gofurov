import React, { useState, useEffect } from "react";

const AutoTypingText = () => {
  const words = ["kitoblar", "lug'atlar", "testlar"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);
  const [loop, setLoop] = useState(0);

  useEffect(() => {
    let typingEffect = setTimeout(() => {
      const currentWord = words[currentWordIndex];
      const isTypingCompleted = !isDeleting && currentText === currentWord;
      const isDeletingCompleted = isDeleting && currentText === "";

      // Harflarni yozish yoki o'chirish
      setCurrentText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      // Agar so'z to'liq yozilsa yoki o'chirilsa, o'zgarishlar
      if (isTypingCompleted) {
        setTimeout(() => setIsDeleting(true), 1000); // To'liq yozilgandan keyin kutish
      } else if (isDeletingCompleted) {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Keyingi so'zga o'tish
      }

      setSpeed(isDeleting ? 100 : 150);
    }, speed);

    return () => clearTimeout(typingEffect);
  }, [currentText, isDeleting, speed, words, currentWordIndex]);

  return (
    <div >
      <h1 className="font-bold">Ingliz Tilini </h1>
      <span className="font-black" >{currentText}</span> <span className="opacity-0">s</span>
      <h1 className="font-bold">bilan o'rganing</h1>
    </div>
  );
};

export default AutoTypingText;
