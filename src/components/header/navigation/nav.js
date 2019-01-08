import $ from 'jquery';
import str from './nav.template';
// import './nav.css';

export default function Nav(name) {
  let parent;
  if (document.querySelectorAll('header').length) {
    parent = document.querySelector('header');
  } else {
    parent = document.body;
  }
  const nav = document.createElement('nav');
  nav.className = 'nav-bar';
  nav.innerHTML = str;
  parent.appendChild(nav);

  if (name) {
    $('.choosePlayerName').text(name);
  }
}
