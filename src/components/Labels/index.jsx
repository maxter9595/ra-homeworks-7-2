export function New({ children }) {
  return (
    <div className="wrap-item wrap-item-new">
      <span className="label">New!</span>
      {children}
    </div>
  );
}

export function Popular({ children }) {
  return (
    <div className="wrap-item wrap-item-popular">
      <span className="label">Popular!</span>
      {children}
    </div>
  );
}
