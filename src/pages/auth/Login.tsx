import { NavLink } from "react-router-dom";
import logo from "../../assets/twma.png";
import { useState } from "react";
import { useSignIn } from "../../hooks/useRegister";

const Login = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    password: "",
  });

  const { register, loading } = useSignIn();

  const handleRegister = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      // Call the register function with updated formdata
      await register(formdata);
    } catch (error) {
      console.log(`an error occured registering user`, error);
    }
  };

  const isFormFilled = formdata.password && formdata.name !== "";

  return (
    <div className="w-[50%] h-[90vh] flex justify-center items-center max-md:w-full max-md:justify-center">
      <div className="w-[48%] h-[80%] flex flex-col gap-2 max-lg:w-[310px] max-sm:w-full">
        {/* top */}
        <div className="w-full h-[90%]  bg-gradient-to-r from-indigo-500 to-orange-500  p-[1.2px] max-md:bg-none max-md:h-full">
          <div className="w-full flex flex-col justify-center h-full bg-white py-7 px-8">
            {/* logo */}
            <div className="w-full grid place-items-center mb-6">
              <img src={logo} alt="twma logo" width={150} height={150} />
            </div>
            {/* form */}
            <form
              className="flex flex-col gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* user mail */}
              <label className="relative bg-[#f5f5f5] block overflow-hidden border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-[var(--primary-color)] focus-within:ring-1 focus-within:ring-[var(--primary-color)]">
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  className="peer  h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  value={formdata.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFormdata({ ...formdata, name: e.target.value });
                  }}
                />

                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  name
                </span>
              </label>

              {/* password */}
              <label className="relative bg-[#f5f5f5] block overflow-hidden border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-[var(--primary-color)] focus-within:ring-1 focus-within:ring-[var(--primary-color)]">
                <input
                  type="password"
                  required
                  placeholder="password"
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  value={formdata.password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFormdata({ ...formdata, password: e.target.value });
                  }}
                />

                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  password
                </span>
              </label>

              {isFormFilled ? (
                <NavLink
                  to="ward"
                  className="mt-5 text-center py-2 px-3 bg-[var(--primary-color)] text-white hover:text-white"
                  onClick={handleRegister}
                >
                  <button>{loading ? "One moment, please..." : "Login"}</button>
                </NavLink>
              ) : (
                <button
                  disabled
                  className="mt-5 text-center py-2 px-3 bg-gray-300 text-gray-600 cursor-not-allowed"
                >
                  Login
                </button>
              )}
            </form>
            <p className="text-center mt-3 text-sm ">forgot password?</p>
          </div>
        </div>

        {/* bottom */}
        <div className="w-full h-[10%] bg-gradient-to-r from-indigo-500 to-orange-500  p-[1.2px] max-md:bg-none ">
          <div className="w-full h-full bg-white p-4 flex justify-center gap-1 text-sm">
            Don't have an account?{" "}
            <NavLink
              to="/"
              className="text-[var(--accent-color)] font-semibold"
            >
              Create one
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
