import logoImage from "../../images/b.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BiSun } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { RiEyeCloseLine } from "react-icons/ri";
import { MdRemoveRedEye } from "react-icons/md";
import { loginUser } from "../../services/loginService";
import { toast } from "react-toastify";
import { useAushDispather } from "../../context/AuthProvider";
const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };
const AuthDis = useAushDispather()
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("include an @ email address ")
      .required("email is requried"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });
  const onSubmit = async (values) => {
    const userData = {
      email: values.email,
      password: values.password,
    };
    try {
      const { data } = await loginUser(userData);
      toast.success(`${data.name} you are Login`);
      AuthDis("data");
      localStorage.setItem("user" , JSON.stringify(data))
    
    } catch (error) {
      if (error.response.data.message) {
        toast.error(`${error.response.data.message}`);
      }
    }
  };
  const Formik = useFormik({
    onSubmit,
    initialValues,
    validationSchema,
    validateOnMount: true,
  });
  const [show, setShow] = useState(false);

  return (
    <div className="bg-[#111111] h-[1000px]">
      <div>
        <nav>
          <div className="flex flex-row justify-between pt-[10px] ">
            <div className="flex flex-row ml-5">
              <button className="bg-[#1a1c1e] self-start mx-2 p-1 text-white">
                kk
              </button>
              <button className="bg-[#1a1c1e] self-start mx-2 p-1">
                <BiSun className="text-[20px] text-white" />
              </button>
            </div>
          </div>
          <div className="flex flex-col mt-5 self-center">
            <div className="self-center mb-2">
              <img src={logoImage} alt="" />
            </div>
          </div>
        </nav>
        <section className="flex flex-col text-white self-center mt-10  bg-[#111111]">
          <div className="self-center border border-[#717374] p-5 rounded-md bg-[#121212] w-[310px] ">
            <form onSubmit={Formik.handleSubmit}>
              <div className="flex flex-col mb-5 ">
                <label htmlFor="1" className="mb-2 text-[#b5b5b5]">
                  Email
                </label>
                <input
                  type="text"
                  className="rounded-sm h-9 bg-[#121212] border border-[#717374]
                outline-none ml-2"
                  name="email"
                  {...Formik.getFieldProps("email")}
                />
                {Formik.errors.email && Formik.touched.email && (
                  <div className="text-red-600 text-sm ">
                    {Formik.errors.email}
                  </div>
                )}
              </div>
              <div className="flex flex-col mb-5 ">
                <label htmlFor="1" className="mb-2 text-[#b5b5b5]">
                  Password
                </label>
                <div className="flex ">
                  <input
                    type={show ? "text" : "password"}
                    className="rounded-l-sm h-9 bg-[#121212] border border-[#717374]
                  outline-none ml-2 w-full border-r-0"
                    name="password"
                    {...Formik.getFieldProps("password")}
                  />
                  <div className="flex border border-l-0 pr-3 border-[#717374] rounded-r-sm">
                    <button
                      className="self-center"
                      onClick={(e) => {
                        e.preventDefault();
                        setShow(!show);
                      }}
                    >
                      {!show ? <RiEyeCloseLine /> : <MdRemoveRedEye />}
                    </button>
                  </div>
                </div>

                {Formik.errors.password && Formik.touched.password && (
                  <div className="text-red-600 text-sm ">
                    {Formik.errors.password}
                  </div>
                )}
              </div>
              <div className="flex justify-center mb-5">
                  <button
                    className={
                      Formik.errors.email || Formik.errors.password
                        ? "bg-[#2c323b] px-12 py-1 rounded-lg"
                        : "bg-[#386aaf] px-12 py-1 rounded-lg"
                    }
                    type="submit"
                    // onClick={(e)=>e.preventDefault()}
                    disabled={
                      Formik.errors.email || Formik.errors.password
                        ? true
                        : false
                    }
                  >
                <Link to={"/"} onClick={Formik.errors.email||Formik.errors.password ? (event) => event.preventDefault() : ""}>
                    LOGIN
                </Link>
                  </button>
              </div>
            </form>
            <div className="self-center my-8">
              <div className="flex justify-center">
                <span className="mr-2">or</span>
                <Link to={"/singup"} className="text-[#386aaf]">
                  Create a new account
                </Link>
              </div>
              <div className="flex justify-center">
                <Link className="text-[#386aaf]">Forgot Password? </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoginForm;
