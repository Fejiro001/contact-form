/* eslint-disable react/prop-types */
const Label = ({ htmlFor, children, ...rest }) => {
    return (
        <label className="text-base text-neutral-darker-grey" htmlFor={htmlFor} {...rest}>
            {children} <span className="ps-1 text-primary-medium-green" aria-hidden="true">*</span>
        </label>
    )
}

export default Label