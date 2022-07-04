import React from 'react';

import * as S from './styled';

export default function Toggle() {
  return (
    <S.Wrapper>
      <div className="toggle-switch">
        <input type="checkbox" className="toggle-switch-checkbox" />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className="toggle-switch-label">
          <span className="toggle-switch-inner" />
          <span className="toggle-switch-switch" />
        </label>
      </div>
    </S.Wrapper>
  );
}
