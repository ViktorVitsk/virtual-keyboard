/* eslint-disable no-restricted-syntax */
/* eslint-disable no-new */
// eslint-disable-next-line import/extensions
import KeyBoard from './js/keyBoard.js';

let language = localStorage.getItem('lang_saved') || 0;
let capsLock = false;

const LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
  'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y',
  'z', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м',
  'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ъ', 'ы', 'э', 'ю', 'я',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
  'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'А', 'Б', 'В', 'Г', 'Д', 'Е',
  'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф',
  'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ъ', 'Ы', 'Э', 'Ю', 'Я'];

const TEXT_AREA = document.querySelector('body > div > textarea');
TEXT_AREA.id = 'txt-field';

const createDoc = () => {
  document.onkeydown = () => false;

  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  document.body.append(wrapper);
  const input = document.createElement('textarea');
  input.classList.add('input');
  document.querySelector('body > div.wrapper').append(input);
  new KeyBoard(language, 0);
};

const makeBoard = (lang, upperCase) => {
  document.querySelector('#keyboard').remove();
  new KeyBoard(lang, upperCase);
};

const changeLangOnKeyboard = () => {
  const keysDown = new Set();

  document.addEventListener('keydown', (event) => {
    keysDown.add(event.code);
    const keysForChange = ['AltLeft', 'ControlLeft'];
    for (const code of keysForChange) {
      if (!keysDown.has(code)) {
        return;
      }
    }
    keysDown.clear();
    language = language === 0 ? 1 : 0;
    localStorage.setItem('lang_saved', language);
    makeBoard(language, 0);
    capsLock = false;
    keysDown.delete(event.code);
  });
};

const textIn = (letter) => {
  const scrollPosition = TEXT_AREA.scrollTop;
  let cursorPosition = TEXT_AREA.selectionStart;
  const currentTxt = TEXT_AREA.value;
  const startTxt = currentTxt.substring(0, cursorPosition);
  const endTxt = currentTxt.substring(TEXT_AREA.selectionEnd, currentTxt.length);
  TEXT_AREA.value = startTxt + letter + endTxt;
  cursorPosition += 1;
  TEXT_AREA.selectionStart = cursorPosition;
  TEXT_AREA.selectionEnd = cursorPosition;
  TEXT_AREA.focus();
  TEXT_AREA.scrollTop = scrollPosition;
};

const changeCase = (capsL) => {
  const elements = document.getElementsByClassName('standard');
  for (const element of elements) {
    const currentContent = element.textContent;
    if (LETTERS.includes(currentContent)) {
      const value = capsL ? currentContent.toUpperCase() : currentContent.toLowerCase();
      element.textContent = value;
      element.setAttribute('buttonValue', value);
    }
  }
};

const backOrDel = (back) => {
  const scrollPosition = TEXT_AREA.scrollTop;
  const cursorStart = back ? TEXT_AREA.selectionStart - 1 : TEXT_AREA.selectionStart;
  const cursorEnd = back ? TEXT_AREA.selectionEnd : TEXT_AREA.selectionEnd + 1;
  const currentTxt = TEXT_AREA.value;
  TEXT_AREA.value = currentTxt.substring(0, cursorStart)
  + currentTxt.substring(cursorEnd, currentTxt.length);
  TEXT_AREA.selectionStart = cursorStart;
  TEXT_AREA.selectionEnd = cursorEnd - 1;
  TEXT_AREA.focus();
  TEXT_AREA.scrollTop = scrollPosition;
};

const print = (target) => {
  if (target.className === 'standard') {
    if (target.getAttribute('code') === 'Lang') {
      language = language === 0 ? 1 : 0;
      localStorage.setItem('lang_saved', language);
      makeBoard(language, 0);
      capsLock = false;
    } else {
      const letter = target.getAttribute('buttonValue');
      textIn(letter);
    }
  }
  if (target.className === 'optional') {
    // eslint-disable-next-line default-case
    switch (target.getAttribute('code')) {
      case 'Tab':
        textIn('\t');
        break;
      case 'CapsLock':
        capsLock = !capsLock;
        changeCase(capsLock);
        break;
      case 'Enter':
        textIn('\n');
        break;
      case 'Backspace':
        backOrDel(true);
        break;
      case 'Delete':
        backOrDel(false);
        break;
      case 'ArrowUp':
      case 'ArrowRight':
      case 'ArrowDown':
      case 'ArrowLeft':
        textIn(target.textContent);
        break;
    }
  }
};

const shiftUp = (target) => {
  if (target.getAttribute('code') === 'ShiftLeft' || target.getAttribute('code') === 'ShiftRight') {
    makeBoard(language, 0);
    if (capsLock) {
      capsLock = false;
    }
  }
};

const shiftDown = (target) => {
  if (target.getAttribute('code') === 'ShiftLeft' || target.getAttribute('code') === 'ShiftRight') {
    makeBoard(language, 1);
    if (target.getAttribute('code') === 'ShiftRight') {
      document.querySelector('#ShiftRight').style.opacity = '0.5';
    } else {
      document.querySelector('#ShiftLeft').style.opacity = '0.5';
    }
  }
};

function getButton(buttonDown) {
  const allButton = document.querySelector('#keyboard').childNodes;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < allButton.length; i++) {
    const element = allButton[i];
    if (element.getAttribute('code') === buttonDown) {
      return element;
    }
  }
  return undefined;
}

document.addEventListener('click', (event) => {
  const { target } = event;
  print(target);
});

document.addEventListener('mousedown', (event) => {
  const { target } = event;
  shiftDown(target);
});

document.addEventListener('mouseup', (event) => {
  const { target } = event;
  shiftUp(target);
});

document.addEventListener('keydown', (event) => {
  const button = getButton(event.code);
  if (button) {
    print(button);
    button.style.opacity = '0.5';
    shiftDown(button);
  }
});

document.addEventListener('keyup', (event) => {
  const button = getButton(event.code);
  if (button) {
    shiftUp(button);
    button.style.opacity = '';
  }
});

createDoc();
makeBoard(language, 0);
changeLangOnKeyboard();
