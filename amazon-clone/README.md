#Amazon clone

## React router

라우터란? www.yonyas.com/login, www.yonyas.com/main 이런 식으로 주소 분리해주는 것
해야할 일 `npm install react-router`,
`yarn add react-router-dom`

```jsx
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

```jsx
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

![all](https://user-images.githubusercontent.com/60434382/110225760-ce83d680-7f2b-11eb-9a0e-18da77b62bb8.png)

![long](https://user-images.githubusercontent.com/60434382/110225762-d479b780-7f2b-11eb-9eaf-04c96019d3c6.png)

```jsx
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

## Home.js - background image

### 화면을 줄일 때 항상 이미지의 가운데만 보여주면서 축소

https://velog.io/@yonyas/cssimg%ED%83%9C%EA%B7%B8%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4%EC%84%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80%EA%B0%80-%ED%95%AD%EC%83%81-center%EB%A5%BC-%EB%B3%B4%EC%97%AC%EC%A3%BC%EB%8F%84%EB%A1%9D-%EB%B0%98%EC%9D%91%ED%98%95-%EB%B0%B0%EA%B2%BD-%EB%A7%8C%EB%93%A4%EA%B8%B0

벨로그에 정리했습니다.

### image slider

![back](https://user-images.githubusercontent.com/60434382/110225820-44883d80-7f2c-11eb-989d-ebd2e4b50d84.png)

- 이전 다음버튼을 누르면 counter변수가 바뀌고 그에 맞는 배경화면이 보인다.
- 어려웠던 것 : 화면 리사이징할 때 이미지가 항상 가운데만 보이게 하는게 어려웠다.
  이미지가 하나일 때는 괜찮았는데 여러 이미지들의 슬라이더와 동시에 적용하려다보니, 화면 리사이징할 때 다른 이미지가 화면에 같이 보이는 문제가 있었다.
  이를 위해서 position:absolute을 주고 left 값을 유동적으로 해야 했다.

```jsx
const onClickNext = (e) => {
  setCounter((prevCounter) => prevCounter + 1);
  // setXcoord(window.innerWidth * conter)
  // 이렇게 하면 안된다. counter는 비동기적으로 바뀌기 때문.
  // 그래서 useLayoutEffect에 따로 써줬다.
};

const onClickPrev = (e) => {
  setCounter((prevCounter) => prevCounter - 1);
};

// 화면사이즈 변경할 때, 이전 다음버튼 눌러서 카운터 바뀔 때
useLayoutEffect(() => {
  if (counter > 4) {
    setCounter(0);
  } else if (counter < 0) {
    setCounter(4);
  }
  setXcoord(window.innerWidth * counter); // position:absolute, left: {Xcoord}
  // 리사이징될 때 left의 크기를 유동적으로 조절해서 이미지를 항상 가운데만 보여줄 수 있다.
  // 다른말로 화면을 줄일 때 이미지의 좌우가 짤리면서 보인다.

  window.addEventListener("resize", updateWidth); // 1. 리사이징될 때

  setArrowPosition(
    screenWidth > 1500 ? (window.innerWidth - 1500) / 2 + 30 : 30
  );
  // 참고: 이미지사이즈가 1500px
  // 화살표가 이미지 좌우에서 각각 30px씩 떨어지게끔 조절했다.

  return () => {
    window.removeEventListener("resize", updateWidth);
  };
}, [screenWidth, counter]); // 3. screenWidth변수가 변할 때 실행될 함수들

const updateWidth = () => {
  // 2. screenWidth변수가 변한다.
  setScreenWidth(window.innerWidth);
};
```

- useLayoutEffect를 사용 : 화면이 리사이징될 때마다 화면 길이를 변수에 넣어야 한다. 부드러운 사용을 위해 useEffect를 사용하지 않았다.

**마크업**

```jsx
<div className="home">
  <div className="home__arrow">
    // 이미지슬라이드의 이전 다음버튼 구현
    <a onClick={onClickPrev} style={{ left: `${arrowPosition}px` }}>
      <ArrowBackIosIcon className="arrow back__arrow" />
    </a>
    <a
      onClick={onClickNext}
      style={
        screenWidth > 1000
          ? { right: `${arrowPosition}px` }
          : { right: null, left: "916px" }
      }
    >
      <ArrowForwardIosIcon className="arrow forward__arrow" />
    </a>
  </div>
  <ol
    className="home__imgSlide"
    style={{
      transform: `translateX(-${Xcoord}px)`,
      width: `${screenWidth * 5}px`,
      //참고: 5개의 슬라이더
      //ol의 너비를 현재 보이는 화면의 5배를 줬다. 리사이징될 때 유동적으로 바뀐다.
    }}
  >
    <BackImg
      link=""
      imgSrc={background1}
      imgAlt="background1 - ship over 45 million products around the world"
      screenWidth={screenWidth}
      show={counter === 0 ? "visible" : "hidden"}
    />
    // 총 5개의 <BackImg /> 컴포넌트가 있다. 여기서는 생략
  </ol>
</div>
```
