유튜브 강의 https://youtu.be/XtMThy8QKqU

### axios
axios 이용해서 api 가져오기 
`npm install axios`


axios에 baseURL 설정
```
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
```
정보 받아와서 request에 넣기
```
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
  ```
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
  ```
  
 
