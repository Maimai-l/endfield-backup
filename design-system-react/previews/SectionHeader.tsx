import * as React from 'react';
import { E, mount } from './_kit';
const { SectionHeader } = E;

mount(
  <div style={{ padding: '16px 16px 0' }}>
    <SectionHeader hollow="SPACING" eyebrow={['Section 04', 'Spacing and layout']} title="间距与布局"
      art={{ src: '/_blob/9d11a8677a56051f3a4b2e5a17abdc6c', width: 150, height: 144 }} />
  </div>
);
