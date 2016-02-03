import {handlerFactory} from './handlers';
import {textSyncer, TextElement} from './content-script-tools';

function run() {
  const title = document.title;

  // fucus中の要素を取得できる
  const activeElement = document.activeElement;

  const handler = handlerFactory.handlerFor(activeElement);

  if (!handler) {
    const elemName = activeElement.tagName.toLowerCase();
    console.error(`Atomic Chrome does not support <${elemName}> (yet?)`);
    return;
  }
  const textElem = new TextElement(handler, activeElement);
  textSyncer.linkElem(title, textElem);
}

run();
