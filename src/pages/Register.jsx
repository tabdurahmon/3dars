//rrd import
import { Form, Link, useActionData } from "react-router-dom";
import { useEffect } from "react";

//components
import { FormInput } from "../components";

//Action
export const action = async ({ request }) => {
  let formData = await request.formData();
  let displayName = formData.get("displayName");
  let photoURL = formData.get("photoURL");
  let email = formData.get("email");
  let password = formData.get("password");
  return { displayName, photoURL, email, password };
};

function Register() {
  const farxod = useActionData();
  useEffect(() => {
    if (farxod) {
      console.log(farxod);
    }
  }, [farxod]);

  return (
    <div className="auth-container">
      <div className="auth-left"></div>
      <div className="auth-right">
        <Form
          method="post"
          className="flex flex-col gap-3 w-[340px] shadow-2xl p-7 rounded-xl bg-[rgba(255,255,255,0.5)]"
        >
          <h1 className="text-4xl  text-center">Register</h1>

          <input
            label="Your Name :"
            type="text"
            name="displayName"
            placeholder="Your Name"
            className="input input-bordered input-accent w-full max-w-xs"
          />

          <input
            label="photo image URL :"
            type="url"
            name="photoURL"
            placeholder="Photo Image URL"
            className="input input-bordered input-error w-full max-w-xs"
          />

          <FormInput type="email" name="email" placeholder="Email" />
          <FormInput type="password" name="password" placeholder="Password" />
          <div className="mt-6">
            <button
              className="btn bg-teal-800 btn-block no-animation"
              type="button"
            >
              Register
            </button>
          </div>
          <div>
            <button className="btn btn-block no-animation" type="button">
              Google
            </button>
          </div>

          <div className="text-center">
            <p className="text-black font-medium lg:text-slate-400">
              If you have account,{" "}
              <Link className="link link-primary" to="/login">
                Login
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
