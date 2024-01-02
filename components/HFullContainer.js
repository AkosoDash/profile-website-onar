const HFullContainer = ({ children, bgColor }) => {
    return (
      <div
        className={
          bgColor === "dark"
            ? "bg-black h-full flex justify-center items-center"
            : "bg-slate-50 h-full flex justify-center items-center"
        }
      >
        {children}
      </div>
    );
  };
  
  export default HFullContainer;
  