const KEYS_ARRAY = [
  {
    key: [
      ['`', '~'],
      ['ё', 'Ё'],
    ],
    code: 'Backquote',
    class: 'standard',
    id: false,
  },
  {
    key: [
      ['1', '!'],
      ['1', '!'],
    ],
    code: 'Digit1',
    class: 'standard',
    id: false,
  },
  {
    key: [
      ['2', '@'],
      ['2', '"'],
    ],
    code: 'Digit2',
    class: 'standard',
    id: false,
  },
  {
    key: [
      ['3', '#'],
      ['3', '№'],
    ],
    code: 'Digit3',
    class: 'standard',
    id: false,
  },
  {
    key: [
      ['4', '$'],
      ['4', ';'],
    ],
    code: 'Digit4',
    class: 'standard',
    id: false,
  },
  {
    key: [
      ['5', '%'],
      ['5', '%'],
    ],
    code: 'Digit5',
    class: 'standard',
    id: false,
  },
  {
    key: [
      ['6', '^'],
      ['6', ':'],
    ],
    code: 'Digit6',
    class: 'standard',
    id: false,
  },
  {
    key: [
      ['7', '&'],
      ['7', '?'],
    ],
    code: 'Digit7',
    class: 'standard',
    id: false,
  },
  {
    key: [
      ['8', '*'],
      ['8', '*'],
    ],
    code: 'Digit8',
    class: 'standard',
    id: false,
  },
  {
    key: [
      ['9', '('],
      ['9', '('],
    ],
    code: 'Digit9',
    class: 'standard',
    id: false,
  },
  {
    key: [
      ['0', ')'],
      ['0', ')'],
    ],
    code: 'Digit0',
    class: 'standard',
    id: false,
  },
  {
    key: [
      ['-', '_'],
      ['-', '_'],
    ],
    code: 'Minus',
    class: 'standard',
    id: false,
  },
  {
    key: [
      ['=', '+'],
      ['=', '+'],
    ],
    code: 'Equal',
    class: 'standard',
    id: false,
  },
  {
    key: 'Backspace',
    code: 'Backspace',
    class: 'optional',
    id: 'Backspace',
  },
  {
    key: 'Tab',
    code: 'Tab',
    class: 'optional',
    id: 'Tab',
  },
  {
    key: [
      ['q', 'Q'],
      ['й', 'Й'],
    ],
    code: 'KeyQ',
    class: 'standard',
    id: false,
  },
  {
    key: [
      ['w', 'W'],
      ['ц', 'Ц'],
    ],
    code: 'KeyW',
    class: 'standard',
    id: false,
  },
  {
    key: [
      ['e', 'E'],
      ['у', 'У'],
    ],
    code: 'KeyE',
    class: 'standard',
    id: false,
  },
  {
    key: [
      ['r', 'R'],
      ['к', 'К'],
    ],
    code: 'KeyR',
    class: 'standard',
    id: false,
  },
  {
    key: [
      ['t', 'T'],
      ['е', 'Е'],
    ],
    code: 'KeyT',
    class: 'standard',
    id: false,
  },
  {
    key: [
      ['y', 'Y'],
      ['н', 'Н'],
    ],
    code: 'KeyY',
    class: 'standard',
    id: false,
  },
  {
    key: [
      ['u', 'U'],
      ['г', 'Г'],
    ],
    code: 'KeyU',
    class: 'standard',
    id: false,
  },
  {
    key: [
      ['i', 'I'],
      ['ш', 'Ш'],
    ],
    code: 'KeyI',
    class: 'standard',
    id: false,
  },
  {
    key: [
      ['o', 'O'],
      ['щ', 'Щ'],
    ],
    code: 'KeyO',
    class: 'standard',
    id: false,
  },
  {
    key: [
      ['p', 'P'],
      ['з', 'З'],
    ],
    code: 'KeyP',
    class: 'standard',
    id: false,
  },
  {
    key: [
      ['[', '{'],
      ['х', 'Х'],
    ],
    code: 'BracketLeft',
    class: 'standard',
    id: false,
  },
  {
    key: [
      [']', '}'],
      ['ъ', 'Ъ'],
    ],
    code: 'BracketRight',
    class: 'standard',
    id: false,
  },
  {
    key: [
      ['\\', '|'],
      ['\\', '|'],
    ],
    code: 'Backslash',
    class: 'standard',
    id: false,
  },
  {
    key: 'Del',
    code: 'Delete',
    class: 'optional',
    id: 'Delete',
  },
  {
    key: 'CapsLock',
    code: 'CapsLock',
    class: 'optional',
    id: 'CapsLock',
  },
  {
    key: [
      ['a', 'A'],
      ['ф', 'Ф'],
    ],
    code: 'KeyA',
    class: 'standard',
    id: false,
  },
  {
    key: [
      ['s', 'S'],
      ['ы', 'Ы'],
    ],
    code: 'KeyS',
    class: 'standard',
    id: false,
  },
  {
    key: [
      ['d', 'D'],
      ['в', 'В'],
    ],
    code: 'KeyD',
    class: 'standard',
    id: false,
  },
  {
    key: [
      ['f', 'F'],
      ['а', 'А'],
    ],
    code: 'KeyF',
    class: 'standard',
    id: false,
  },
  {
    key: [
      ['g', 'G'],
      ['п', 'П'],
    ],
    code: 'KeyG',
    class: 'standard',
    id: false,
  },
  {
    key: [
      ['h', 'H'],
      ['р', 'Р'],
    ],
    code: 'KeyH',
    class: 'standard',
    id: false,
  },
  {
    key: [
      ['j', 'J'],
      ['о', 'О'],
    ],
    code: 'KeyJ',
    class: 'standard',
    id: false,
  },
  {
    key: [
      ['k', 'K'],
      ['л', 'Л'],
    ],
    code: 'KeyK',
    class: 'standard',
    id: false,
  },
  {
    key: [
      ['l', 'L'],
      ['д', 'Д'],
    ],
    code: 'KeyL',
    class: 'standard',
    id: false,
  },
  {
    key: [
      [';', ':'],
      ['ж', 'Ж'],
    ],
    code: 'Semicolon',
    class: 'standard',
    id: false,
  },
  {
    key: [
      ["'", '"'],
      ['э', 'Э'],
    ],
    code: 'Quote',
    class: 'standard',
    id: false,
  },
  {
    key: 'Enter',
    code: 'Enter',
    class: 'optional',
    id: 'Enter',
  },
  {
    key: 'Shift',
    code: 'ShiftLeft',
    class: 'optional',
    id: 'ShiftLeft',
  },
  {
    key: [
      ['z', 'Z'],
      ['я', 'Я'],
    ],
    code: 'KeyZ',
    class: 'standard',
    id: false,
  },
  {
    key: [
      ['x', 'X'],
      ['ч', 'Ч'],
    ],
    code: 'KeyX',
    class: 'standard',
    id: false,
  },
  {
    key: [
      ['c', 'C'],
      ['c', 'C'],
    ],
    code: 'KeyC',
    class: 'standard',
    id: false,
  },
  {
    key: [
      ['v', 'V'],
      ['м', 'М'],
    ],
    code: 'KeyV',
    class: 'standard',
    id: false,
  },
  {
    key: [
      ['b', 'B'],
      ['и', 'И'],
    ],
    code: 'KeyB',
    class: 'standard',
    id: false,
  },
  {
    key: [
      ['n', 'N'],
      ['т', 'Т'],
    ],
    code: 'KeyN',
    class: 'standard',
    id: false,
  },
  {
    key: [
      ['m', 'M'],
      ['ь', 'Ь'],
    ],
    code: 'KeyM',
    class: 'standard',
    id: false,
  },
  {
    key: [
      [',', '<'],
      ['б', 'Б'],
    ],
    code: 'Comma',
    class: 'standard',
    id: false,
  },
  {
    key: [
      ['.', '>'],
      ['ю', 'Ю'],
    ],
    code: 'Period',
    class: 'standard',
    id: false,
  },
  {
    key: [
      ['/', '?'],
      ['.', ','],
    ],
    code: 'Slash',
    class: 'standard',
    id: false,
  },
  {
    key: '↑',
    code: 'ArrowUp',
    class: 'optional',
    id: 'ArrowUp',
  },
  {
    key: 'Shift',
    code: 'ShiftRight',
    class: 'optional',
    id: 'ShiftRight',
  },
  {
    key: 'Ctrl',
    code: 'ControlLeft',
    class: 'optional',
    id: 'ControlLeft',
  },
  {
    key: [
      ['EN', 'EN'],
      ['RU', 'RU'],
    ],
    code: 'Lang',
    class: 'standard',
    id: 'Lang',
  },
  {
    key: 'Alt',
    code: 'AltLeft',
    class: 'optional',
    id: 'AltLeft',
  },
  {
    key: [
      [' ', ' '],
      [' ', ' '],
    ],
    code: 'Space',
    class: 'standard',
    id: 'Space',
  },
  {
    key: 'Alt',
    code: 'AltRight',
    class: 'optional',
    id: 'AltRight',
  },
  {
    key: '←',
    code: 'ArrowLeft',
    class: 'optional',
    id: 'ArrowLeft',
  },
  {
    key: '↓',
    code: 'ArrowDown',
    class: 'optional',
    id: 'ArrowDown',
  },
  {
    key: '→',
    code: 'ArrowRight',
    class: 'optional',
    id: 'ArrowRight',
  },
  {
    key: 'Ctrl',
    code: 'ControlRight',
    class: 'optional',
    id: 'ControlRight',
  },
];

export default KEYS_ARRAY;
