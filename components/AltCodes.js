import {useState} from 'react';

function AltCodes() {

  const conversions = [
    '', '☺', '☻', '♥', '♦', '♣', '♠', '•', '◘', '○', // 0 - 9
    '◙','♂', '♀', '♪', '♫', '☼', '►', '◄', '↕', '‼', '¶', // 10-19
    // TODO add through 255
  ];

  const [givenCode, setGivenCode] = useState(0);
  const [converted, setConverted] = useState(conversions[0]);

  function handleChange(evt) {
    let given = evt.target.value;
    setGivenCode(given);

    let index = Number(evt.target.value) % 256;
    setConverted(conversions[index]);
  }

  return (
      <div>
        <div className="inputArea">
          <span>Alt code:</span>
          <input type="number" onChange={handleChange} value={givenCode}/>
        </div>

        <div className="outputArea">
          {converted}
        </div>

        {/*language=css*/}
        <style jsx>{`
          .inputArea {
            border: thin solid green;
            padding: 5px;
          }

          .outputArea {
            padding: 5px;
            margin-top: 10px;
            border: thin solid blue;
            min-height: 55px;
            font-size: 48px;
          }
        `}</style>
      </div>
  )
}

export default AltCodes;