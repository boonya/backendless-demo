export default function withProvider(Component, options) {
  return ({children}) => <Component {...options}>{children}</Component>;
}
