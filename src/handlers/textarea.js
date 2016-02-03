import BaseHandler from './base';

// textarea用のハンドラー
class TextareaHandler extends BaseHandler {
  canHandle(elem) {
    return elem.tagName && elem.tagName.toLowerCase() === 'textarea';
  }

  setValue(elem, value) {
    elem.value = value;
  }

  getValue(elem) {
    return elem.value;
  }
}

export default new TextareaHandler();
