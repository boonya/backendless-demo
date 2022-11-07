import {isLoggerEnabled} from '../featureToggle';

function messageReducer(acc, cur) {
	if (!acc.length) {
		return cur;
	}
	return [...acc, '\n', ...cur];
}

/* eslint-disable no-console */
const logFunction = (method) => {
	return (...args) => {
		return (...additional) => {
			if (isLoggerEnabled() && additional.length) {
				const message = [args, additional]
					.filter((v) => v && v.length)
					.reduce(messageReducer, []);
				console[method](...message);
			}
			else {
				console[method](...args);
			}
		};
	};
};

export const logInfo = logFunction('info');
export const logWarn = logFunction('warn');
export const logError = logFunction('error');
/* eslint-enable no-console */
