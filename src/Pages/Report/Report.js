import React from "react";

const Report = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("Role") !== "SPSO") {
      navigate("/Error");
    }
  }, []);
  return (
    <div className="w-full h-[500px] flex items-center justify-center font-bold text-3xl">
      Hello from Report page
    </div>
  );
};

export default Report;
