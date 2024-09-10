import { useState } from "react";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const heartContainerStyle = {
  display: "flex",
};

const textStyle = {
  fontSize: "20px",
  color: "#B53471",
  lineHeight: "1",
  margin: 0,
};

export default function HeartRating({ maxHearts = 10 }) {
  const [hoverRating, setHoverRating] = useState(0);
  const [rating, setRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
  }

  return (
    <div style={containerStyle}>
      <div style={heartContainerStyle}>
        {Array.from({ length: maxHearts }, (_, i) => (
          <Heart
            key={i}
            onRate={() => handleRating(i + 1)}
            full={hoverRating ? hoverRating >= i + 1 : rating > i}
            onHoverIn={() => setHoverRating(i + 1)}
            onHoverOut={() => setHoverRating(0)}
          />
        ))}
      </div>
      <p style={textStyle}>{hoverRating || rating || ""}</p>
    </div>
  );
}

const heartStyle = {
  width: "32px",
  height: "32px",
  display: "block",
  cursor: "pointer",
};

function Heart({ onRate, onHoverIn, onHoverOut, full }) {
  return (
    <span
      style={heartStyle}
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#B53471"
          viewBox="0 0 256 256"
        >
          <path d="M240,102c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,228.66,16,172,16,102A62.07,62.07,0,0,1,78,40c20.65,0,38.73,8.88,50,23.89C139.27,48.88,157.35,40,178,40A62.07,62.07,0,0,1,240,102Z"></path>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#B53471"
          viewBox="0 0 256 256"
        >
          <path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z"></path>
        </svg>
      )}
    </span>
  );
}
