#Amazon clone

## firebase hosting

## React router

라우터란? www.yonyas.com/login, www.yonyas.com/main 이런 식으로 주소 분리해주는 것
해야할 일 `npm install react-router`,
`yarn add react-router-dom`

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

## Header.js

### Link 사용

href와의 차이점 : Link는 refresh가 안 된다. 빠름.

```js
import { Link } from "react-router-dom";

<Link to="/login">
  <div></div>
</Link>;
```

### search input(검색창) 옆에 icon 넣기

사이트 https://material-ui.com/components/icons/#icons

- material-ui.com 들어가서 `npm install @material-ui/core`
  `npm install @material-ui/icons` 두개 다 설치
- 사이즈조절할 때는 !important 해야 한다.

```js
import SearchIcon from "@material-ui/icons/Search";

<SearchIcon className="header__searchIcon" />;
```

### search input focus 할 때 테두리 생기기

![input](https://user-images.githubusercontent.com/60434382/109580069-5c7f4c00-7b3d-11eb-9098-1597240f0dc7.png)

- border vs outline : border를 주면 안쪽의 내용이 흐트러지니까 이럴때는 outline 이 좋다.
- input:focus 일 때 전체 div 에 테두리 주기 : focus-within 사용한다. 그래야 input 즉 적용하려는 div 의 안쪽을 클릭해도 focus 인식이 된다.
- border-radius를 사용하면서 안쪽 내용이 흐트러지지 않게 하기 : pseudo 사용

```css
.header__search:focus-within::before {
  content: "";
  display: block;
  position: absolute;
  top: -1px;
  bottom: -1px;
  left: -1px;
  right: -1px;
  border: 2px solid orange;
  border-radius: 3px;
}
```

-1px을 줘야 테두리가 바깥에 생긴다.

### Material-UI Select API 사용하기

임포트 후 사용한다.
여기서는 option의 글씨에 따라 select의 크기가 바뀌도록 autoWidth를 사용했다.

```js
import Select from "@material-ui/core/Select";

<Select
  className="header__searchSelect"
  value={selectedOption}
  onChange={(e) => {
    setSelectedOption(e.target.value);
  }}
  autoWidth
>
  <option className="header__option" value="All">
    All
  </option>
  <option className="header__option" value="arts-craft">
    Arts & Craft
  </option>
</Select>;
```
