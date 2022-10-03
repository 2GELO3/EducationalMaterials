// function loadAsset(url, type, callback) {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', url);
//   xhr.responseType = type;

//   xhr.onload = function () {
//     callback(xhr.response);
//   };

//   xhr.send();
// }

// function displayImage(blob) {
//   const objectURL = URL.createObjectURL(blob);

//   const image = document.createElement(img);
//   image.src = objectURL;
//   document.body.appendChild(image);
// }

// loadAsset('coffee.jpg', 'blob', displayImage);

// fetch('products.json')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(json => initialize(json))
//   .catch(err => console.error(`Fetch problem: ${err.message}`));


// let myGreeting = setTimeout(function () {
//   alert('Hello, Mr. Universe!');
// }, 2000)

// function sayHi() {
//   alert('Hi');
// }

// let myGreeting = setTimeout(sayHi, 2000)

// function sayHi(who) {
//   alert(`Hello ${who}`);
// }

// let myGreeting = setTimeout(sayHi, 2000, 'Mr. Universe');

// clearTimeout(myGreeting);

// function displayTime() {
//   let date = new Date();
//   let time = date.toLocaleTimeString();
//   document.getElementById('demo').textContent = time;
// }

// const createClock = setInterval(displayTime, 1000);
// const myInterval = setInterval(myFunction, 2000);

// clearInterval(myInterval);

// let i = 1;

// setTimeout(function run() {
//   console.log(i);
//   i++;
//   setTimeout(run, 100);
// }, 100);

// Promise
fetch('coffee.jpg')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status:
      ${response.status}`);
    } else {
      return response.blob();
    }
  })
  .then(myBlob => {
    let objectURL = URL.createObjectURL(myBlob),
      image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
  })
  .catch(e => {
    console.log('There has been a problem with your fetch operation: ' + e.message);
  });

// Async/Await
async function myFetch() {
  let response = await fetch('coffee.jpg');

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    let myBlob = await response.blob(),
      objectURL = URL.createObjectURL(myBlob),
      image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
  }
}

myFetch()
  .catch(e => {
    console.log('There has been a problem with your fetch operation: ' + e.message);
  })

// Try/catch
async function myFetch() {
  try {
    let response = await fetch('coffee.jpg');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      let myBlob = await response.blob(),
        objectURL = URL.createObjectURL(myBlob),
        image = document.createElement('img');
      image.src = objectURL;
      document.body.appendChild(image);
    }
  } catch (e) {
    console.log(e);
  }
}

myFetch();

// The best method
async function myFetch() {
  let response = await fetch('coffee.jpg');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    return await response.blob();
  }
}

myFetch().then((blob) => {
  let objectURL = URL.createObjectURL(blob),
    image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
})
  .catch((e) => {
    console.log(e)
  });

// Await/Promise.all()
async function fetchAndDecode(url, type) {
  let response = await fetch(url),
    content;

  if (!response.ok) {
    throw new Error(`HTTP error! status:
    ${response.status}`);
  } else {
    if (type === 'blob') {
      content = await response.blob();
    } else if (type === 'text') {
      content = await response.text();
    }

    return content;
  }
}

async function displayContent() {
  let coffee = fetchAndDecode('coffee.jpg', 'blob'),
    tea = fetchAndDecode('tea.jpg', 'blob'),
    description = fetchAndDecode('description.txt', 'text'),
    values = await Promise.all([coffee, tea, description]),
    objectURL1 = URL.createObjectURL(values[0]),
    objectURL2 = URL.createObjectURL(values[1]),
    descText = values[2],
    image1 = document.createElement('img'),
    image2 = document.createElement('img');
  image1.src = objectURL1;
  image2.src = objectURL2;
  document.body.appendChild(image1);
  document.body.appendChild(image2);

  let para = document.createElement('p');
  para.textContent = descText;
  document.body.appendChild(para);
}

displayContent()
  .catch((e) => {
    console.log(e)

  })


// На выполнение 9 секунд
// async function timeTest() {
//   await timeoutPromise(3000);
//   await timeoutPromise(3000);
//   await timeoutPromise(3000);
// }

// На выполнение 3 секунды
// async function timeTest() {
//   const timeoutPromise1 = timeoutPromise(3000);
//   const timeoutPromise2 = timeoutPromise(3000);
//   const timeoutPromise3 = timeoutPromise(3000);

//   await timeoutPromise1;
//   await timeoutPromise2;
//   await timeoutPromise3;
// }

// Async/await class methods
// class Person {
//   constructor(first, last, age, gender, interests) {
//     this.name = {
//       first,
//       last
//     };
//     this.age = age;
//     this.gender = gender;
//     this.interests = interests;
//   }

//   async greeting() {
//     return await Promise.resolve(`Hi! I'm ${this.name.first}`);
//   };

//   farewell() {
//     console.log(`${this.name.first} has left the building. Bye for now!`);
//   };
// }

// let han = new Promise('Han', 'Solo', '25', 'male', ['Smuggling']);


// Constraint Validation API


// const email = document.getElementById('mail');

// email.addEventListener('input', function (event) {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity('I am expecting an e-mail address!')
//   }
// });

// Существуют разные способы получить DOM-узел; здесь мы определяем саму форму и
// поле ввода email и элемент span, в который поместим сообщение об ошибке
// const form = document.getElementsByTagName('form')[0];

// const email = document.getElementById('mail');
// const emailError = document.querySelector('#mail + span.error');

email.addEventListener('input', function (event) {
  // Каждый раз, когда пользователь что-то вводит,
  // мы проверяем, являются ли поля формы валидными

  if (email.validity.valid) {
    // Если на момент валидации какое-то сообщение об ошибке уже отображается,
    // если поле валидно, удаляем сообщение
    emailError.textContent = ''; // Сбросить содержимое сообщения
    emailError.className = 'error'; // Сбросить визуальное состояние сообщения
  } else {
    // Если поле не валидно, показываем правильную ошибку
    showError();
  }
});

form.addEventListener('submit', function (event) {
  // Если поле email валдно, позволяем форме отправляться

  if (!email.validity.valid) {
    // Если поле email не валидно, отображаем соответствующее сообщение об ошибке
    showError();
    // Затем предотвращаем стандартное событие отправки формы
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // Если поле пустое,
    // отображаем следующее сообщение об ошибке
    emailError.textContent = 'You need to enter an e-mail address.';
  } else if (email.validity.typeMismatch) {
    // Если поле содержит не email-адрес,
    // отображаем следующее сообщение об ошибке
    emailError.textContent = 'Entered value needs to be an e-mail address.';
  } else if (email.validity.tooShort) {
    // Если содержимое слишком короткое,
    // отображаем следующее сообщение об ошибке
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  // Задаём соответствующую стилизацию
  emailError.className = 'error active';
}


// Not Constraint Validation API


const form = document.qetElementByTagName('form')[0];
const email = document.getElementById('mail');

let error = email;
while ((error = error.nextSibling).nodeType != 1);

const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


function addEvent(element, event, callback) {
  let previousEventCallBack = element['on' + event];
  element['on' + event] = function (e) {
    let output = callback(e);

    if (output === false) return false;

    if (typeof previousEventCallBack === 'function') {
      output = previousEventCallBack(e);
      if (output === false) return false;
    }
  };
}

addEvent(window, 'load', function () {
  const test = email.value.length === 0 || emailRexExp.test(email.value);

  email.className = test ? 'valid' : 'invalid';
});

addEvent(email, 'input', function () {
  const test = email.value.length === 0 || emailRegExp.test(email.value);
  if (test) {
    email.className = 'valid';
    error.testContent = '';
    error.className = 'error';
  } else {
    email.className = 'invalid';
  }
});

addEvent(form, 'submit', function () {
  const test = email.value.length === 0 || emailRegExp.test(email.value);

  if (!test) {
    email.className = 'invalid';
    error.testContent = 'I expect an e-mail, darling!';
    error.className = 'error active';

    return false;
  } else {
    email.className = 'valid';
    error.textContent = '';
    error.className = 'error';
  }
});


window.addEventListener('load', function () {
  document.body.classList.remove('no-widget');
  document.body.classList.add('widget')
});

NodeList.prototype.forEach = function (callback) {
  Array.prototype.forEach.call(this, callback);
}

// ARIA(Accessible Rich Internet Application)

// Атрибут role
{/* <div class="select" role="listbox">
  <span class="value">Cherry</span>
  <!-- Также мы добавили атрибут role="presentation" в элемент ul -->
  <ul class="optList" role="presentation">
    <!-- И мы добавили атрибут role="option" во все элементы li -->
    <li role="option" class="option">Cherry</li>
    <li role="option" class="option">Lemon</li>
    <li role="option" class="option">Banana</li>
    <li role="option" class="option">Strawberry</li>
    <li role="option" class="option">Apple</li>
  </ul>
</div> */}

// Атрибут aria-selected
// function updateValue(select, index) {
//   var nativeWidget = select.previousElementSibling;
//   var value = select.querySelector('.value');
//   var optionList = select.querySelectorAll('.option');

//   // Мы уверены что все варианты не выбраны
//   optionList.forEach(function (other) {
//     other.setAttribute('aria-selected', 'false');
//   });

//   // Мы уверены что выбранный вариант отмечен
//   optionList[index].setAttribute('aria-selected', 'true');

//   nativeWidget.selectedIndex = index;
//   value.innerHTML = optionList[index].innerHTML;
//   highlightOption(select, optionList[index]);
// };


// XMLHttpRequest
const btn = document.querySelector('button');

function sendData(data) {
  // console.log('Sending data');

  const XHR = new XMLHttpRequest(),
    FD = new FormData();

  // Push our data into our FormData object
  for (name in data) {
    FD.append(name, data[name]);
  }

  let urlEncodedData = '',
    urlEncodedDataPairs = [],
    name;

  for (name in data) {
    urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
  }

  urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');

  XHR.addEventListener('load', function (event) {
    alert('Yeah! Data sent and response loaded.');
  });

  XHR.addEventListener('error', function (event) {
    alert('Oops! Something went wrong.');
  });

  XHR.open('POST', 'https://example.com/cors.php')

  XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

  XHR.send(urlEncodedData);
}

btn.addEventListener('click', function () {
  sendData({ test: 'ok' });
})


// errorList
function createLink(testItem) {
  const listItem = document.createElement('li');
  const anchor = document.createElement('a');

  anchor.textContent = 'Поле ввода ' + testItem.input.name + ' пусто: введите ' + testItem.input.name + '.';
  anchor.href = '#' + testItem.input.name;
  anchor.onclick = function () {
    testItem.input.focus();
  };
  listItem.appendChild(anchor);
  errorList.appendChild(listItem);
}
