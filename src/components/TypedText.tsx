import React, { useState, useEffect, useMemo } from "react";

const TypedText: React.FC = () => {
  const roles = useMemo(
    () => [
      "Data Analyst",
      "BI Specialist",
      "Analytics Engineer",
      "Python Developer",
      "SQL Expert",
    ],
    []
  );

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeoutId: number;

    if (isTyping) {
      // Typing effect
      if (displayText.length < currentRole.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 100);
      } else {
        // Wait before starting to delete
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      // Deleting effect
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        // Move to next role
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => window.clearTimeout(timeoutId);
  }, [displayText, isTyping, currentRoleIndex, roles]);

  return (
    <span className="typed-text">
      {displayText}
      <span className="cursor">|</span>
    </span>
  );
};

export default TypedText;
