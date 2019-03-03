import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import Button from './Button';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <div>
      <Button onClick={action('clicked')} content="Basic Button"/>
    </div>
  ))
  .add('Block style', () => (
    <div>
      <Button onClick={action('clicked')} content="Button - Block Style" style_isBlock={true}/>
    </div>
  ))
  // Knobs as dynamic variables.
  .add('with knobs', () => {
    const props = {
      style_theme: select("Theme", {primary: "primary", secondary: "secondary"}, "primary", "Style"),
      style_isBlock: boolean("is Block?", false, "Style"),
      href: text('Link (href)', undefined, "Link"),
      target: select("Target", {default: null, blank: "_blank"}, null, "Link"),
      content: text('Button Text', 'Button Text', "General"),
    }

    return (<Button {...props}/>);
  },
  {
    info: `
          This is a theme-enabled button.
          
          Use the 'knobs' tab to change the button properties.
        `,
  });