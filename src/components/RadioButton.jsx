/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { forwardRef } from "react";

const RadioButton = forwardRef(
    ({ id, htmlFor, children, value, ...rest }, ref) => {
        return (
            <div className="w-full">
                <label className="flex gap-3 place-items-center w-full border rounded-lg border-neutral-medium-grey px-7 py-3 text-lg text-neutral-darker-grey hover:cursor-pointer focus:outline-1 focus:outline-primary-medium-green focus-within:ring-primary-medium-green focus-within:ring-1 focus-within:bg-primary-light-green" htmlFor={htmlFor}>
                    <input
                        className="border h-5 w-5 align-text-top hover:cursor-pointer"
                        id={id}
                        name="query_type"
                        type="radio"
                        value={value}
                        ref={ref}
                        {...rest}
                    />
                    {children}
                </label>
            </div>
        );
    }
);

export default RadioButton;
