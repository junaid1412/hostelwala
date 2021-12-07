import React from "react";
import { Step1 } from "./Step1"
import { Step2 } from "./Step2"
import { Step3 } from "./Step3"
import { Step4 } from "./Step4"
export function StepsRender(props: any) {
    switch (props.step) {
        case 0:
        default:
            return <Step1 onNext={() => props.onNext()} />;
        case 1:
            return <Step2 onNext={() => props.onNext()} onPrev={() => props.onPrev()} />;
        case 2:
            return <Step3 onNext={() => props.onNext()} onPrev={() => props.onPrev()} />;
        case 3:
            return <Step4 onSubmit={() => props.onRegister()} onPrev={() => props.onPrev()} />;
    }
    return <Step1 />;
}