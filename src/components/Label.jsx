/* eslint-disable react/prop-types */
const Label = ({ htmlFor, children }) => {
    return (
        <label className="text-base text-neutral-darker-grey" htmlFor={htmlFor}>
            {children} <span className="ps-1 text-primary-medium-green" aria-hidden="true">*</span>
        </label>
    )
}

export default Label