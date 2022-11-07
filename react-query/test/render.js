import {render, renderHook as _renderHook} from '@testing-library/react';

export function renderComponent(...args) {
	return render(...args);
}

export function renderHook(...args) {
	return _renderHook(...args);
}
