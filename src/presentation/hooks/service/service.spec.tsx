import React from 'react';
import { renderHook } from '@testing-library/react';

describe('useServices', () => {
  it('should can use useServicesHook', () => {
    const { default: useServices } = jest.requireActual('presentation/hooks/service/service.tsx');
    const { result } = renderHook(() => useServices());

    expect(result.current.characters).toBeDefined();
    expect(result.current.comics).toBeDefined();
  });
});
