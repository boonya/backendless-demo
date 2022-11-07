export default function wrapper(props, component) {
	const Component = component || <div />;
	return ({children}) => <Component {...props}>{children}</Component>;
}
