import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SideBar from './uiComponents/Sidebar';
import './index.css';

function Time() {
  var hours = new Date().getHours();
  var timeLaps = '';
  if(hours >= 1 && hours <12) {
    timeLaps = "Good Morning..!";
  } else if(hours >= 12 && hours < 16) {
    timeLaps ="Good Afternoon..!";
  } else {
    timeLaps = "Good Evening..!"
  }
  return (<span>{timeLaps}</span>);
}
setInterval(Time, 1000);


class Index extends React.Component {
  render() {
    return (
      <div>
        <h3 className="heading">
          Hey! <Time />
        </h3>
        <App />
        <SideBar />
      </div>
    )
  }
}

ReactDOM.render(
 <Index />  ,
  document.getElementById('root')
);
