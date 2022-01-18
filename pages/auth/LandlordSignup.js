import Image from "next/image";
import Landlord from "../../public/images/Landlord.png";
import Home_fill from "../../public/images/Home_fill.png";
import Ellipse47 from "../../public/images/Ellipse47.png";

function Lsignup() {
  const [check, setCheck] = useState({
    isChecked: false,
  });

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setCheck({
      ...check,
      [e.target.name]: value,
    });
  };

  const onChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submitHandler(details);
  };

  // if (state.userInfo) {
  //   router.push("/profile/tenant");
  // }

  const submitHandler = async (details) => {
    closeSnackbar();
    try {
      console.log(details);
      const { data } = await axios.post("/api/auth/users/register", details);
      dispatch({ type: "USER_LOGIN", payload: data });
      console.log(data);
      Cookies.set("userInfo", JSON.stringify(data));
      enqueueSnackbar("User Signed Up Successfully", { variant: "success" });
      router.push(redirect || "/landing/landlord");
    } catch (err) {
      enqueueSnackbar(err.message, { variant: "error" });
    }
  };

  return (
    <>
      <div className="main">
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
          crossOrigin="anonymous"
        />
        <section className="signup">
          <div className="container pr_container praj">
            <div className="fish">
              <Image src={Home_fill} alt="sub" />
            </div>
            <div className="fishes">
              <Image src={Ellipse47} alt="sub" />
            </div>
            <div className="signup-content">
              <div className="signup-form">
                <h2 className="form-title pr_form-title">Landlord Sign up</h2>
                <form
                  method="POST"
                  className="register-form"
                  id="register-form"
                >
                  <div className="form-group pr_form-group">
                    <label htmlFor="name">
                      <i className="fas fa-user"></i>
                    </label>
                    <input
                      className="pa_input"
                      type="text"
                      name="firstName"
                      id="firstName"
                      onChange={(e) => onChange(e)}
                      placeholder="Your First Name"
                    />
                  </div>
                  <div className="form-group pr_form-group">
                    <label htmlFor="email">
                      <i className="fas fa-envelope"></i>
                    </label>
                    <input
                      className="pa_input"
                      type="text"
                      name="lastName"
                      id="lastName"
                      onChange={(e) => onChange(e)}
                      placeholder="Your Last Name"
                    />
                  </div>
                  <div className="form-group pr_form-group">
                    <label className="pr_label" htmlFor="email">
                      <i className="fas fa-envelope"></i>
                    </label>
                    <input
                      className="pa_input"
                      type="text"
                      name="email"
                      id="email"
                      onChange={(e) => onChange(e)}
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="form-group pr_form-group">
                    <label className="pr_label" htmlFor="contact">
                      <i className="fas fa-phone-square-alt"></i>
                    </label>
                    <input
                      className="pa_input"
                      type="number"
                      name="contact"
                      id="contact"
                      onChange={(e) => onChange(e)}
                      placeholder="Your Contact"
                    />
                  </div>

                  {/* <div className="form-group pr_form-group">
                    <label htmlFor="contact">
                      <i className="fas fa-phone-square-alt"></i>
                    </label>
                    <input
                      type="text"
                      name="contact"
                      id="contact"
                      placeholder="Your Contact"
                    />
                  </div>
                  <div className="form-group pr_form-group">
                    <label htmlFor="pass">
                      <i className="fas fa-lock"></i>
                    </label>
                    <input
                      type="password"
                      name="pass"
                      id="pass"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group pr_form-group">
                    <label htmlFor="re-pass">
                      <i className="fas fa-lock"></i>
                    </label>
                    <input
                      type="password"
                      name="re_pass"
                      id="re_pass"
                      placeholder="Re-enter password"
                    />
                  </div> */}
                  <div className="custom-control custom-checkbox pt-5">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                      name="isChecked"
                      checked={state.isChecked}
                      onChange={handleChange}
                    />
                    <label
                      className="custom-control-label p_agree"
                      htmlFor="customCheck1"
                    >
                      I agree to all
                      <a href="#" className="terms">
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                  <div className="form-group pr_form-group form-button pr_form-button">
                    <button
                      type="submit"
                      onClick={(e) => onSubmit(e)}
                      className=" btn btn-primary pr_form-submit"
                      value="Sign Up"
                      disabled={check.isChecked ? false : true}
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
              <div className="signup-image">
                <figure>
                  <Image src={Landlord} height={550} width={750} alt="tenant" />{" "}
                </figure>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Lsignup;
