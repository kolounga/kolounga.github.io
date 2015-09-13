'use strict';

describe('KoloApp', () => {
  let React = require('react/addons');
  let KoloApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    KoloApp = require('components/KoloApp.js');
    component = React.createElement(KoloApp);
  });

  it('should create a new instance of KoloApp', () => {
    expect(component).toBeDefined();
  });
});
