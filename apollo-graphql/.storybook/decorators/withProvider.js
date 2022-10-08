export default function withDecorator(Component, options) {
  return (story) => <Component {...options}>{story()}</Component>;
}
