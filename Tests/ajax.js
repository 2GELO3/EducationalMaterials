// let header = document.querySelector('header'),
//   section = document.querySelector('section'),
//   requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json',
//   request = new XMLHttpRequest();

// request.open('GET', requestURL);

// request.responseType = 'json';
// request.send();

// request.onload = function () {
//   let superHeroes = request.response;
//   populateHeader(superHeroes);
//   showHeroes(superHeroes);
// }

// function populateHeader(jsonObj) {
//   let myH1 = document.createElement('h1');
//   myH1.textContent = jsonObj['squadName'];
//   header.appendChild(myH1);

//   let myPara = document.createElement('p');
//   myPara.textContent = `Hometown ${jsonObj['homeTown']} Formed: ${jsonObj['formed']}`;
//   header.appendChild(myPara);
// }

// function showHeroes(jsonObj) {
//   let heroes = jsonObj['members'];

//   for (let i = 0; i < heroes.length; i++) {
//     let myArticle = document.createElement('article'),
//       myH2 = document.createElement('h2'),
//       myPara1 = document.createElement('p'),
//       myPara2 = document.createElement('p'),
//       myPara3 = document.createElement('p'),
//       myList = document.createElement('ul');

//     myH2.textContent = heroes[i].name;
//     myPara1.textContent = `Secret identity: ${heroes[i].secretIdentity}`;
//     myPara2.textContent = `Age: ${heroes[i].age}`;
//     myPara3.textContent = 'Superpowers:';

//     let superPowers = heroes[i].powers;
//     for (let j = 0; j < superPowers.length; j++) {
//       let listItem = document.createElement('li');
//       listItem.textContent = superPowers[j];
//       myList.appendChild(listItem);
//     }

//     myArticle.appendChild(myH2);
//     myArticle.appendChild(myPara1);
//     myArticle.appendChild(myPara2);
//     myArticle.appendChild(myPara3);
//     myArticle.appendChild(myList);

//     section.appendChild(myArticle);
//   }
// }


function makeRequest(url) {
  let httpRequest = false;

  if (window.XMLHttpRequest) {
    httpRequest = new XMLHttpRequest();

    if (httpRequest.overrideMimeType) {
      httpRequest.overrideMimeType('text/xml');
    }
  } else if (window.ActiveXObject) {
    try {
      httpRequest = new ActiveXObject('Msxml2.XMLHTTP');
    } catch (e) {
      try {
        httpRequest = new ActiveXObject('Microsoft.XMLHTTP');
      } catch (e) { }
    }
  }

  if (!httpRequest) {
    alert('Не вышло :( Невозможно создать экземпляр класса XMLHTTP ')
    return false;
  }

  httpRequest.onreadystatechange = function () {
    alertContents(httpRequest);
  };
  httpRequest.open('GET', url, true);
  httpRequest.send(null);
}

function alertContents(httpRequest) {
  if (httpRequest.readyState == 4) {
    if (httpRequest.status == 200) {
      alert(httpRequest.responseText);
    } else {
      alert('С запросом возникла проблема.')
    }
  }
}

// Пример отправки POST запроса

async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'applycation/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  });

  return await response.json();
}

postData('https://example.com/answer', { answer: 42 })
  .then((data) => {
    console.log(data);
  });

// Отправка данных в формате JSON

const url = 'https://example.com/profile';
const data = { username: 'example' };

try {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application / json'
    }
  });

  const json = await response.json();
  console.log('Успех:', JSON.stringify(json));
} catch (error) {
  console.error('Ошибка:', error);
}

// Загрузка файла га сервер

const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]);

try {
  const response = await fetch(
    'https://example.com/profile/avatar', {
    method: 'PUT',
    body: formData
  });
  const result = await response.json();
  console.log('Успех:', JSON.stringify(result));
} catch (error) {
  console.error('Ошибка:', error);
}

// Обработка текстового файла построчно

async function* makeTextFileLineIterator(fileURL) {
  const utf8Decoder = new TextDecoder('utf-8');
  let response = await fetch(fileURL),
    reader = response.body.getReader(),
    { value: chunk, done: readerDone } = await
      reader.read();
  chunk = chunk ? utf8Decoder.decode(chunk) : '';

  let re = /\n|\r|\r\n/gm,
    startIndex = 0;
  result;

  for (; ;) {
    let result = re.exec(chunk);
    if (!result) {
      if (readerDone) {
        break;
      }
      let remainder = chunk.substr(startIndex);
      ({ value: chunk, done: readerDone } = await
        reader.read());
      chunk = remainder + (chunk ?
        utf8Decoder.decode(chunk) : '');
      startIndex = re.lastIndex = 0;
      continue;
    }
    yield chunk.substring(startIndex, result.index);
    startIndex = re.lastIndex;
  }
  if (startIndex < chunk.length) {
    yield chunk.substr(startIndex);
  }
}

for await (let line of
  makeTextFileLineIterator(urlOfFile)) {
  processLine(line);
}

// Проверка успешности запроса

try {
  const response = await fetch('flowers.jpg');
  if (!response.ok) {
    throw new Error('Ответ сети был не ok.');
  }
  const myBlob = await response.blob();
  const objectURL = URL.createObjectURL(myBlob);
  myImage.src = objectURL;
} catch (error) {
  console.log('Возникла проблема с вашим fetch запросом: ', error.message);
}

// Составление своего запроса посредством конструктора Request()

// const myHeaders = new Headers();

// const myInit = {
//   method: 'GET',
//   headers: myHeaders,
//   mode: 'cors',
//   cache: 'default'
// };

// const myRequest = new Request('flowers.jpg', myInit);
// const response = await fetch(myRequest);
// const myBlob = await response.blob();
// const objectURL = URL.createObjectURL(myBlob);
// myImage.src = objectURL;

// Создание собственного объекта заголовков посредством Headers()

// const content = 'Hello World';
// const myHeaders = new Headers();
// myHeaders.append('Content-Type', 'text/plain');
// myHeaders.append('Content-Length',
//   content.length.toString());
// myHeaders.append('X-Custom-Header',
//   'ProcessThisImmediately');

// ===

const myHeaders = new Headers({
  'Content-Type': 'text/plain',
  'Content-Length': alertContents.length.toString(),
  'X-Custom-Header': 'ProcessThisImmediately'
});

// constructor() { deepAll: right; fear: cool  }


class Fear {
  constructor(width, height, left, right, top, bottom) {
    this.width = width;
    this.height = height;
    this.left = left;
    this.right = right;
    this.top = top;
    this.bottom = bottom;
  }

}