import { NavLink } from "react-router-dom";
import logo from "../../assets/twma.png";
import { useRecoilState } from "recoil";
import { tempUserData } from "../../global/RecoilState";
import { useEffect } from "react";
// import { fetcher } from "../../utils/swr/swr";
import useSWR from "swr";
import { fetcher } from "../../utils/api";

const Register = () => {
  const [formdata, setFormdata] = useRecoilState(tempUserData);

  const { data } = useSWR(`stationId`, fetcher);

  console.log(`this is data`, data);

  // Load saved form data from local storage when component mounts
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("tempUserData") || "{}");
    setFormdata(savedData);
  }, []);

  // Save form data to local storage and Recoil state
  const handleProceed = () => {
    localStorage.setItem("tempUserData", JSON.stringify(formdata));
  };

  const isFormFilled =
    formdata.psp && formdata.address && formdata.name && formdata.email !== "";

  return (
    <div className="w-[50%] h-[90vh]  flex justify-start items-center max-md:w-full max-md:justify-center">
      <div className="w-[48%] h-[80%] flex flex-col gap-2 max-lg:w-[310px] max-sm:w-full">
        {/* top */}
        <div className="w-full h-[90%]  bg-gradient-to-r from-indigo-500 to-orange-500  p-[1.2px] max-md:bg-none max-md:h-full">
          <div className="w-full flex flex-col justify-center h-full bg-white py-7 px-8 max-md:py-3">
            {/* logo */}
            <div className="w-full grid place-items-center mb-6">
              <img src={logo} alt="twma logo" width={150} height={150} />
            </div>
            {/* form */}
            <form
              className="flex flex-col gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <label className="relative bg-[#f5f5f5] block overflow-hidden border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-[var(--primary-color)] focus-within:ring-1 focus-within:ring-[var(--primary-color)]">
                <input
                  type="text"
                  required
                  placeholder="your name"
                  className="peer  h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  value={formdata.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFormdata({ ...formdata, name: e.target.value });
                  }}
                />

                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  Your Name
                </span>
              </label>
              {/* email */}
              <label className="relative bg-[#f5f5f5] block overflow-hidden border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-[var(--primary-color)] focus-within:ring-1 focus-within:ring-[var(--primary-color)]">
                <input
                  type="email"
                  required
                  placeholder="your email"
                  className="peer  h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  value={formdata.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFormdata({ ...formdata, email: e.target.value });
                  }}
                />

                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  Your email
                </span>
              </label>

              {/* user mail */}
              <label className="relative bg-[#f5f5f5] block overflow-hidden border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-[var(--primary-color)] focus-within:ring-1 focus-within:ring-[var(--primary-color)]">
                <input
                  type="text"
                  placeholder="Resident or office address"
                  required
                  className="peer  h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  value={formdata.address}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFormdata({ ...formdata, address: e.target.value });
                  }}
                />

                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  Resident or office address
                </span>
              </label>

              {/* select ward */}
              <div>
                <label
                  htmlFor="HeadlineAct"
                  className="block text-sm bg-[#f5f5f5] font-medium text-gray-900 border-x border-t border-gray-200 px-3 pt-3"
                >
                  Select PSP
                </label>

                <div className="relative bg-[#f5f5f5] border-x border-b border-gray-200 px-3">
                  <select
                    id="HeadlineAct"
                    required
                    className="w-full bg-[#f5f5f5] outline-0 py-2 rounded-lg border-gray-300 pe-10 text-gray-700 sm:text-sm"
                    onChange={(e: any) => {
                      setFormdata({ ...formdata, psp: e.target.value });
                    }}
                    value={formdata.psp}
                  >
                    <option disabled hidden placeholder="Please select PSP">
                      Please select PSP
                    </option>
                    <option value="">Please select PSP</option>
                    {/* {data?.map((id: any) => (
                      <div key={id}>
                        <option value="Ikeja waste managers">
                          Ikeja waste managers
                        </option>
                      </div>
                    ))} */}
                  </select>
                </div>
              </div>

              {isFormFilled ? (
                <NavLink
                  to="ward"
                  className="mt-5 text-center py-2 px-3 bg-[var(--primary-color)] text-white hover:text-white"
                  onClick={handleProceed}
                >
                  <button>Proceed</button>
                </NavLink>
              ) : (
                <button
                  disabled
                  className="mt-5 text-center py-2 px-3 bg-gray-300 text-gray-600 cursor-not-allowed"
                >
                  Proceed
                </button>
              )}
            </form>
          </div>
        </div>

        {/* bottom */}
        <div className="w-full h-[10%] bg-gradient-to-r from-indigo-500 to-orange-500  p-[1.2px] max-md:bg-none ">
          <div className="w-full h-full bg-white p-4 flex justify-center gap-1 text-sm">
            Already have an account?{" "}
            <NavLink
              to="/login"
              className="text-[var(--accent-color)] font-semibold"
            >
              Sign in
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
