function withLoading(Component) {
  console.log(Component);
  return ({ isLoading, ...props }) => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    console.log(isLoading);
    return <Component {...props}> </Component>;
  };
}

export default withLoading;
