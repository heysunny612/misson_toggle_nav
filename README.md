# [제로베이스 자바스크립트 미션과제] 1. 토글 슬라이드 네비게이션 

<p align="center">
    <img src="https://user-images.githubusercontent.com/127499117/236144243-96ddf09b-e6d1-4d3e-b5f9-fc9cf21ba884.gif" alt="ewe">
</p>


> 페이지 이동시, 리로드시에도 이전에 적용된 사이드 네비게이션 상태가 모든 웹페이지에 동일하게 적용되어야한다. 해당 상태가 전역으로 관리될 수 있게 localStorage를 이용 하였고, 웹페이지의 DOM 요소 생성이 완성된 직 후에, 로컬스토리지에 저장되어있는 상태를 가져올 수 있게 DOMContentLoaded 이벤트를 적용하였고, 사용자가 웹페이지를 떠나기 직전에 발생하는 beforeunload 이벤트를 사용해 상태 값을 localStorage로 저장해주었다. 

<br/>
<br/>

## 새로 배운 것들

 <br/>

```js
window.addEventListener('DOMContentLoaded', () => {
  const getKey = localStorage.getItem(STATE_KEY);
  init();
  setToggleEvent();
  keepStatus(getKey);
});

const saveLocalStorage = () => {
  if ($nav.matches('.active')) {
    localStorage.setItem(STATE_KEY, 'open');
  } else {
    localStorage.setItem(STATE_KEY, 'close');
  }
};

window.addEventListener('beforeunload', () => {
  saveLocalStorage();
});


```

## 1.localStorage
- 브라우저의 기능인 웹스토리지는 브라우저에 저장되는 키-값 쌍으로 그 중, 로컬스토리지는 브라우저 종료 시에도 유지되는 데이터이다.로컬스토리지 사용은 localStorage.setItme('key',value)로 접근은 localStoraget.getItem('key')로 삭제는 localStroage.removeItem('key')로 한다. 

 <br/>
 
 ## 2.beforeunload
 - 사용자가 페이지를 떠나기 전​(새로고침, 앞으로/뒤로 가기, 브라우저 닫기, form submit 등),  unload전에 발생한다.  브라우저를 닫기 전에 무언가를 해야할 때 사용한다.
※unload : 모든 리소스(css,image)가 전부 unload 된 후 발생한다.

<br/> 

- 사용자가 토글 네비게이션의 상태(열렸다, 닫혔다)를 바꿀때마다 계속 저장해야할까? 
계속 저장할 필요 없이, beforeunload 이벤트가 발생하면 로컬 스토리지에 상태를 저장히는 편이 효율적이다.

 <br/>
 
 ## 3.DOMContentLoaded
- HTML 문서의 로드와 파싱(분석)이 완료되어, DOM 생성이 완료되었을 때 이벤트가 발생한다. (DOM생성 즉, HTML만 다 완료가 되면 이벤트 발생).
- ※load : DOMContentLoaded 이벤트가 발생한이 후, 모든 리소스(이미지,폰트,css 등)의 로딩이 완료되었을때 이벤트 발생 
- ※defer > DOMcontentLoaded > load 순으로 호출 
- ※ 이미지나, 폰트등의 리소스가 먼저 보여져야 한다면 리소스에 동적으로 무언가를 수행하지 않는 이상 DOM 안에서 작성하는게 조금 더 빠르게 사용자에게 보여질 수 있음.

<br/>

 ## 3.DOMContentLoaded
 - 요소에 해당 선택자(CSS selector)가 있는지 확인하고, true 또는 false를 반환하는 메서드이다. 
