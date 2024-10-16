/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { forwardRef } from "react";

const Input = forwardRef(({ id, name, type, isInput = true, error, ...rest }, ref) => {
    return (
        <>
            {isInput ? (
                <input
                    className={`input-style ${error ? 'border-primary-red' : 'border-neutral-medium-grey'}`}
                    id={id}
                    name={name}
                    type={type}
                    ref={ref}
                    {...rest}
                />
            ) : (
                <textarea
                    className={`input-style h-60 md:h-[6.6rem] ${error ? 'border-primary-red' : 'border-neutral-medium-grey'}`}
                    id={id}
                    name={name}
                    ref={ref}
                    {...rest}
                ></textarea>
            )}
        </>
    );
})

export default Input;
