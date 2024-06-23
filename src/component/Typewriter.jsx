import React, { useState, useEffect } from "react";

const TypewriterEffect = () => {
  const staticText = "Find Your Dream";
  const sentences = [
    " Apartment",
    " Plaza",
    " House",
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentSentence = sentences[sentenceIndex];
      let updatedText = "";

      if (isDeleting) {
        updatedText = currentSentence.substring(0, charIndex - 1);
        setCharIndex(charIndex - 1);
      } else {
        updatedText = currentSentence.substring(0, charIndex + 1);
        setCharIndex(charIndex + 1);
      }

      setDisplayedText(updatedText);

      if (!isDeleting && updatedText === currentSentence) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
        setCharIndex(0);
      }
    };

    const typingDelay = isDeleting ? 100 : 200;
    const typingTimeout = setTimeout(handleTyping, typingDelay);

    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, sentenceIndex, sentences]);

  return (
    <div>
      <h1 className=" text-white font-semibold text-3xl lg:text-4xl lg:p-0 p-[21vw] text-center ">
        {staticText}
        <span> {displayedText} |</span>
      </h1>
    </div>
  );
};

export default TypewriterEffect;
