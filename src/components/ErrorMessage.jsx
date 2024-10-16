/* eslint-disable react/prop-types */
const ErrorMessage = ({ id, children }) => {
    return (
        <div className=" text-primary-red" id={id} role="alert">
            {children}
        </div>
    )
}

export default ErrorMessage