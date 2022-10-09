function printExpectedReceived(expected, received) {
	return [
		`Expected: ${this.utils.printExpected(expected)}`,
		`Received: ${this.utils.printReceived(received)}`,
	].join('\n');
}

function toMatchApolloQueryResult(received, _expected) {
	const expected = {
		loading: false,
		data: undefined,
		error: undefined,
		..._expected,
	};

	let pass = this.equals(received, expected);

	if (pass && received?.error && expected?.error) {
		pass = this.equals(received?.error.graphQLErrors, expected?.error.graphQLErrors);
		if (!pass) {
			return {
				message: () => [
					printExpectedReceived.call(this, expected, received),
					this.utils.diff(expected.error.graphQLErrors, received.error.graphQLErrors),
				].join('\n\n'),
				pass,
			};
		}
	}

	if (pass) {
		return {
			message: () => printExpectedReceived.call(this, expected, received),
			pass,
		};
	}

	return {
		message: () => [
			printExpectedReceived.call(this, expected, received),
			this.utils.diff(expected, received),
		].join('\n\n'),
		pass,
	};
}

expect.extend({toMatchApolloQueryResult});
