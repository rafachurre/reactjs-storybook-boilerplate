import { configure, addParameters, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import React from 'react';

// Info Addon congif
const Red = props => <span style={{ color: 'red' }} {...props} />;
const borderStyle = { 'border': '1px solid black', 'borderCollapse': 'collapse', 'padding': '15px 20px', 'boxSizing': 'border-box'}
const headerStyle = {'backgroundColor': 'rgb(230, 230, 230)'};

addDecorator(withInfo({
  TableComponent: ({ propDefinitions }) => {
    const props = propDefinitions.map(
      ({ property, propType, required, description, defaultValue }) => {
        return (
          <tr key={property} style={borderStyle}>
            <td style={borderStyle}>
              {property}
              {required ? <Red> *</Red> : null}
            </td>
            <td style={borderStyle}>{propType.name}</td>
            <td style={borderStyle}>{defaultValue}</td>
            <td style={borderStyle}>{description}</td>
          </tr>
        );
      }
    );
  
    return (
      <div>
        <table style={borderStyle}>
          <thead style={headerStyle}>
            <tr>
              <th style={borderStyle}>name</th>
              <th style={borderStyle}>type</th>
              <th style={borderStyle}>default</th>
              <th style={headerStyle}>description</th>
            </tr>
          </thead>
          <tbody>{props}</tbody>
        </table>
        <span><Red>*</Red> = required property</span>
      </div>
    );
  }
  
}));

addDecorator(
  withBackgrounds([
    { name: 'none', value: '#ffffff', default: true },
    { name: 'twitter', value: '#00aced' },
    { name: 'facebook', value: '#3b5998' }
  ])
);

// Global Storybook parameters
addParameters({
  options: {
    name: 'React - Storybook Boilerplate',
    goFullScreen: false,
    showAddonsPanel: true,
    showSearchBox: false,
    addonPanelInRight: true,
    sortStoriesByKind: false,
    hierarchySeparator: /\./,
    hierarchyRootSeparator: /\|/,
    enableShortcuts: true,
  },
});

function loadStories() {
  require('../src/stories/index');

  // automatically import all story js files that end with *.stories.js
  const req = require.context('../src/', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);