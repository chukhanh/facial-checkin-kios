import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import { createBrowserHistory } from 'history';
import HomeAndFail from './containers/HomeAndFail';
import Identity from './containers/Identity';
import Register from './containers/Register';
import CameraScreen from './containers/CameraScreen';
import OnSuccess from './containers/OnSuccess';
import LoginScreen from './containers/LoginScreen';
//const history = createBrowserHistory();

function AppRouter() {
  const HomeProp = {
    content: `" Those Who Dare To Fail Miserably Can Achieve Greatly`,
    note: '- John F.Kenedy -',
    buttonContent: 'Chạm để chấm công',
    isHome: true,
  };

  const FailProp = {
    content: 'Không nhận diện được khuôn mặt',
    note: 'Nếu là người mới, xin vui lòng liên hệ với nhân sự',
    buttonContent: 'Thử lại',
    isHome: false,
  };

  const OnSuccessProp = {
    buttonContent: 'Không phải tôi',
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeAndFail
            content={HomeProp.content}
            note={HomeProp.note}
            buttonContent={HomeProp.buttonContent}
            isHome={HomeProp.isHome}
          />
        </Route>
        <Route path="/login" component={LoginScreen} />
        <Route path="/onsuccess">
          <OnSuccess buttonContent={OnSuccessProp.buttonContent} />
        </Route>
        <Route path="/identity" component={Identity} />
        <Route path="/checkin" component={CameraScreen} />
        <Route path="/fail">
          <HomeAndFail
            content={FailProp.content}
            note={FailProp.note}
            buttonContent={FailProp.buttonContent}
            isHome={FailProp.isHome}
          />
        </Route>
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
