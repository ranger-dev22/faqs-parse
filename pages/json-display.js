import jsonData from "../data/faqs.json";

const JsonDisplay = () => {
  return (
    <div>
      <h1>Parsed JSON Data</h1>
      <ul>
        {jsonData.map((item, index) => (
          <li key={index}>
            <h3>Question: {item.Q}</h3>
            <p>Answer: {item.A}</p>
            <p>Type: {item.T}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JsonDisplay;
