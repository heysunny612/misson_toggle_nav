// do something!
const STATE_KEY = 'toggle';
const $body = document.body;
const $toggleButton = document.querySelector('.toggle');
const $nav = document.getElementsByTagName('nav')[0];

//반복해서 사용되기때문에 함수로 만들어줌
const removePreload = () => {
  return $body.classList.remove('preload');
};

//새로고침해도 toggle 상태를 유지
//open 상태를 유지하되, 애니메이션이 보이지 않도록 preload를 추가
const keepStatus = (key) => {
  if (key === 'open') {
    $nav.classList.add('active');
    $body.classList.add('preload');
  } else {
    $nav.classList.remove('active');
  }
};

/*클릭 이벤트가 발생하면, 애니메이션이 동작할 수 있도록 preload는 제거
 *(state상태가 open일경우, preload를 추가해주었기때문에 확실히 하기위해, 제거해줌)
  */
const setToggleEvent = () => {
  $toggleButton.addEventListener('click', () => {
    $nav.classList.toggle('active');
    removePreload();
  });
};

//웹페이지의 DOM이 완성 된 직후 body 컨텐츠 보여주기
//애니메이션 동작시키기 위해 preload 제거
const init = () => {
  $body.style.visibility = 'visible';
  removePreload();
};

// 로컬스토리지 상태를 가져와서 변수에저장 
window.addEventListener('DOMContentLoaded', () => {
  const getKey = localStorage.getItem(STATE_KEY);
  init();
  setToggleEvent();
  keepStatus(getKey);
});

// 사용자가 웹페이지를 떠나기 직전 로컬스토리지에 상태를 저장한다.
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
