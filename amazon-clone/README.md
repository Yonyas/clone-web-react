#Amazon clone

## firebase hosting

## React router

라우터란? www.yonyas.com/login, www.yonyas.com/main 이런 식으로 주소 분리해주는 것
해야할 일 `npm install react-router`, `yarn add react-router-dom`
코드

```js
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <h1>Checkgout</h1>
          </Route>
          <Route path="/login">
            <h1>Login pahe</h1>
          </Route>
          <Route path="/">
            <h1>HOME PAGE!!!</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
```

## Header.js - Link 사용

href와의 차이점 : Link는 refresh가 안 된다. 빠름.

코드

```js
import { Link } from "react-router-dom";

<Link to="/login">
  <div></div>
</Link>;
```

## Header.js - searchbox icon 넣기

사이트 https://material-ui.com/components/icons/#icons

material-ui.com 들어가서 `npm install @material-ui/core`
`npm install @material-ui/icons` 두개 다 설치

코드

```js
import SearchIcon from "@material-ui/icons/Search";

<SearchIcon className="header__searchIcon" />;
```

팁: 사이즈조절할 때는 !important 해야 한다.
