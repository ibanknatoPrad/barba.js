import { Component } from 'kapla';

export default class extends Component {
  load() {
    const subscriber = this.subscribe('menu-trigger');
    const overlay = this.$el.querySelector('.menu__overlay');

    subscriber.on('menu:open', this.open);
    subscriber.on('menu:close', this.close);

    this.delegateClick = 'a';

    // Close menu if click on overlay
    overlay.addEventListener('click', () => {
      this.onOverlayClick();
    });
  }

  open() {
    this.$el.classList.add('is-open');
  }

  close() {
    this.$el.classList.remove('is-open');
  }

  onOverlayClick() {
    this.emit('overlay:close');
    this.close();
  }

  onClick() {
    this.emit('link:close');
    this.close();
  }
}