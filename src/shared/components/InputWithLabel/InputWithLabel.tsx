import { forwardRef } from "react";
import { Fragment } from "react/jsx-runtime";

import { Input, Label } from "@/shared/ui";

export interface InputWithLabelProps extends React.ComponentProps<"input"> {
    id?: string;
    label: string;
}

export const InputWithLabel = forwardRef<HTMLInputElement, InputWithLabelProps>(
    ({ id, label, ...props }, ref) => {
        return (
            <Fragment>
                <Label htmlFor={id} className="my-1 text-base font-normal">
                    {label}
                </Label>
                <Input ref={ref} id={id} {...props} />
            </Fragment>
        );
    },
);
