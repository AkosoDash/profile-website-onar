const MainContainer = ({ children, bgColor }) => {
  return (
    <div
      className={
        bgColor === "dark"
          ? "bg-black h-screen flex justify-center items-center"
          : "bg-slate-50 h-screen flex justify-center items-center"
      }
    >
      {children}
    </div>
  );
};

export default MainContainer;
