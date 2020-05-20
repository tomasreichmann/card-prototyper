import React from "react";

export const Card = ({ children, width, height, style, onClick, flipped }) => {
  const flippedStyle = flipped
    ? {
        animation: "flip 1s",
        transform: `translateZ(0) rotateY(180deg)`
      }
    : {
        animation: "flip-back 1s",
        transform: `translateZ(0) rotateY(0deg)`
      };
  const combinedStyle = {
    width,
    height,
    backgroundColor: "white",
    transformStyle: "preserve-3d",
    transition: "1s ease",
    ...flippedStyle,
    ...style
  };

  return (
    <div style={combinedStyle} onClick={onClick}>
      <style>{`
        @keyframes flip {
          from {
            transform: translateZ(0) rotateY(0);
          }
          50% {
            transform: translateZ(${width}) rotateY(180deg);
          }
          to {
            transform: translateZ(0) rotateY(180deg);
          }
        }
        @keyframes flip-back {
          from {
            transform: translateZ(0) rotateY(180deg);
          }
          50% {
            transform: translateZ(${width}) rotateY(0deg);
          }
          to {
            transform: translateZ(0) rotateY(0deg);
          }
        }

      `}</style>
      {children}
    </div>
  );
};

Card.defaultProps = {
  width: "63.50mm",
  height: "88.9mm",
  flipped: false,
  style: {
    borderRadius: "3mm",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  onClick: f => f
};

export default Card;
