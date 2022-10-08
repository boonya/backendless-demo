export default function wrapper(props, component) {
	const Component = component || <div />;
	return (story) => <Component {...props}>{story()}</Component>;
}
