const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

const config = {
  section1: 'http://localhost:3101',
  section2: 'http://localhost:3102',
  section3: 'http://localhost:3103',
}

const getJson = async (url) => await(await(fetch(url))).json();

const getFragment = async (url) => {
  const json = await getJson(url);
  return json.fragment;
}

const setSection1 = () => {
  getFragment(config.section1).then((fragment) => {
    first.innerHTML = fragment;
  })
}

const setSection2 = () => {
  getFragment(config.section2).then((fragment) => {
    second.innerHTML = fragment;
  })
}

const setSection3 = () => {
  getFragment(config.section3).then((fragment) => {
    third.innerHTML = fragment;
  })
}

const main = () => {
  setSection1();
  setSection2();
  setSection3();
  
}

main();
