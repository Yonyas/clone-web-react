유튜브 강의 https://youtu.be/XtMThy8QKqU

### axios
axios 이용해서 api 가져오기 
`npm install axios`


axios에 baseURL 설정
```javascript
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
```
정보 받아와서 request에 넣기
```javascript
useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(request.data.results[Math.floor(Math.random() * 20)]);
      console.log(request.data.results);
      return request;
    }
    fetchData();
  }, []);
  ```
  
  ### 스크롤다운할 때 nav 배경 검정색으로 변경
  ```javascript
    const [show, setShow] = useState(false);

    useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  
  return (
  <nav className={show ? "black" : null}></nav>
  )
  ```
  
  ### 포스터 클릭하면 유튜브 예고편 뜨기 - react에서 youtube trailer 이용하는 방법
  `npm i react-youtube`
  `npm i movie-trailer`
  
  ```javascript
  import YouTube from "react-youtube";
  import movieTrailer from "movie-trailer";
  
  const [trailerUrl, setTrailerUrl] = useState("");

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          //https://youtu.be/XtMThy8QKqU
          //new URL(url).search  <-- 동영상 주소 XtMT... 만 추출
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  
  return(
  <img onClick = {() => {handleClick(movie)} />                  // movie 는 영화api 
  {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
  )
  ```
  
  
 
