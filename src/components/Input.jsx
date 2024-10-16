/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { forwardRef } from "react";

const Input = forwardRef(({ id, name, type, isInput = true, ...rest }, ref) => {
    return (
        <>
            {isInput ? (
                <input
                    className="input-style"
                    id={id}
                    name={name}
                    type={type}
                    ref={ref}
                    {...rest}
                />
            ) : (
                <textarea
                    className="input-style h-60 md:h-[6.6rem]"
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
