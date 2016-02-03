// ハンドラーという概念で要素を操作、ある意味コンポーネント化しているのか
class HandlerFactory {
  constructor() {
    this.handlers = [];
  }

  registerHandler(handler) {
    this.handlers.push(handler);
  }

  handlerFor(elem) {
    for (const handler of this.handlers) {
      if (handler.canHandle(elem)) {
        return handler;
      }
    }
    return false;
  }
}

export default new HandlerFactory();
