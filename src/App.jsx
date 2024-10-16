import { useForm } from "react-hook-form";
import ErrorMessage from "./components/ErrorMessage";
import FormElementsWrapper from "./components/FormElementsWrapper";
import Input from "./components/Input";
import Label from "./components/Label";
import RadioButton from "./components/RadioButton";
import { Slide, toast, ToastContainer } from "react-toastify";
import 'react-toastify/ReactToastify.css';
import image from "./assets/images/icon-success-check.svg";

function App() {
  // Use React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Display a Toast message after successful form submission
  const onSubmit = () => {
    toast.success(
      <div className="w-fit font-body space-y-2">
        <div className="flex place-items-center"><img src={image} className="inline" /><p className="inline font-bold ps-3 text-lg">Message Sent!</p></div>
        <p className="text-wrap md:text-nowrap">Thanks for completing the form. We&apos;ll be in touch soon!</p>
      </div>,
      {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        closeButton: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide
      }
    );

    reset();
  };

  return (
    <>
      <ToastContainer />
      <main className="body-style">

        <form className="form-style" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-3xl font-bold text-neutral-darker-grey">
            Contact Us
          </h1>

          <div className="flex flex-col space-y-6 font-normal md:space-y-[1.55rem]">
            <div className="inline-style">
              {/* First Name Field */}
              <FormElementsWrapper>
                <Label htmlFor={"first_name"}>First Name</Label>
                <Input
                  id={"first_name"}
                  name={"first_name"}
                  type={"text"}
                  error={errors.first_name}
                  {...register("first_name", {
                    required: "This field is required",
                  })}
                />

                {errors.first_name && (
                  <ErrorMessage id={"first_name-error"}>
                    {errors.first_name.message}
                  </ErrorMessage>
                )}
              </FormElementsWrapper>

              {/* Last Name Field */}
              <FormElementsWrapper>
                <Label htmlFor={"last_name"}>Last Name</Label>
                <Input
                  id={"last_name"}
                  name={"last_name"}
                  type={"text"}
                  error={errors.last_name}
                  {...register("last_name", {
                    required: "This field is required",
                  })}
                />

                {errors.last_name && (
                  <ErrorMessage id={"last_name-error"}>
                    {errors.last_name.message}
                  </ErrorMessage>
                )}
              </FormElementsWrapper>
            </div>

            {/* Email Field */}
            <FormElementsWrapper>
              <Label htmlFor={"email"}>Email Address</Label>
              <Input
                id={"email"}
                name={"email"}
                type={"email"}
                error={errors.email}
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/i,
                    message: "Please enter a valid email address",
                  },
                })}
              />

              {errors.email && (
                <ErrorMessage id={"email-error"}>
                  {errors.email.message}
                </ErrorMessage>
              )}
            </FormElementsWrapper>

            {/* Query Type Field */}
            <FormElementsWrapper>
              <Label>Query Type</Label>
              <div className="inline-style pt-[0.4rem] !gap-3">
                <RadioButton
                  value={"General Enquiry"}
                  id={"general_enquiry"}
                  htmlFor={"general_enquiry"}
                  {...register("query_type", {
                    required: "Please select a query type",
                  })}
                >
                  General Enquiry
                </RadioButton>

                <RadioButton
                  value={"Support Request"}
                  id={"support_request"}
                  htmlFor={"support_request"}
                  {...register("query_type", {
                    required: "Please select a query type",
                  })}
                >
                  Support Request
                </RadioButton>
              </div>
              {errors.query_type && (
                <ErrorMessage id={"query_type-error"}>
                  {errors.query_type.message}
                </ErrorMessage>
              )}
            </FormElementsWrapper>

            {/* Message Field */}
            <FormElementsWrapper>
              <Label htmlFor={"message_body"}>Message</Label>
              <Input
                id={"message_body"}
                name={"message_body"}
                isInput={false}
                error={errors.message_body}
                {...register("message_body", {
                  required: "This field is required",
                })}
              />

              {errors.message_body && (
                <ErrorMessage id={"message_body-error"}>
                  {errors.message_body.message}
                </ErrorMessage>
              )}
            </FormElementsWrapper>

            {/* Consent Field */}
            <FormElementsWrapper>
              <div className="flex place-items-center gap-5 pt-3">
                <input
                  className="border h-6 w-6 md:h-5 md:w-5 hover:cursor-pointer"
                  type="checkbox"
                  id="consent"
                  name="consent"
                  {...register("consent", {
                    required:
                      "To submit this form, please consent to being contacted",
                  })}
                />
                <Label className="hover:cursor-pointer" htmlFor="consent">
                  I consent to being contacted by the team
                </Label>
              </div>

              {errors.consent && (
                <ErrorMessage id={"consent-error"}>
                  {errors.consent.message}
                </ErrorMessage>
              )}
            </FormElementsWrapper>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                className="w-full bg-primary-medium-green text-neutral-white rounded-md p-4 text-lg hover:bg-hover-color"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </main>
    </>

  );
}

export default App;

