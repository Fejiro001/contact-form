/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { forwardRef } from "react"

const RadioButton = forwardRef(({ id, htmlFor, children, value, ...rest }, ref) => {
    return (
        <div className="peer-group input-style !px-6 w-full text-neutral-darker-grey">
            <input
                className="peer border h-5 w-5 align-text-top"
                id={id}
                name="query_type"
                type="radio"
                value={value}
                ref={ref}
                {...rest}
            />
            <label className="ms-4 text-lg hover:cursor-pointer peer-checked:bg-primary-light-green" htmlFor={htmlFor}>{children}</label>
        </div>
    )
})

export default RadioButton