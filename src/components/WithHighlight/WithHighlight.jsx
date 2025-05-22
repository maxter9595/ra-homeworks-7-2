import { New, Popular } from '../Labels';

export function withHighlight(Component) {
  return function WrappedComponent(props) {
    if (props.views >= 1000) {
      return (
        <Popular>
          <Component {...props} />
        </Popular>
      );
    }
    if (props.views <= 100) {
      return (
        <New>
          <Component {...props} />
        </New>
      );
    }
    return <Component {...props} />;
  };
}
