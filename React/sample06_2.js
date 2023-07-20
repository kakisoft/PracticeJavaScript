import React from 'react';
import ReactDOM from 'react-dom';

const jsonParams = {
  "NOTIFICATION": "届出書（通知書）",
  "CHANGE_NOTIFICATION": "変更届出書（通知書）"
};

const App = () => {
  const radioItems = Object.keys(jsonParams).map(key => (
    <label key={key}>
      <input type="radio" value={key} name="notification" />
      {jsonParams[key]}
    </label>
  ));

  return (
    <div>
      {radioItems}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
