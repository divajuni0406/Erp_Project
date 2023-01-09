const Button = ({ className, children }) => {
  const btnClass = className ? className : "";
  return (
    <>
      <button className={btnClass}>{children}</button>
    </>
  );
};

export default Button;
