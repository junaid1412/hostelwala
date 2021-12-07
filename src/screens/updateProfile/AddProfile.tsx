import React from "react";
import { StepsRender } from "../../components/AddProfile/StepRender";
import { styles as s, n } from "../../util";
import { Wizard } from "react-native-ui-lib";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";

export function AddProfile(props: any) {
    const [step, SetStep] = React.useState(0);
    const dispatch = useDispatch();
    const register = () => {
        console.log("register");
        dispatch({ type: "AddProfile" });
    }
    return (
        <SafeAreaProvider style={[s.flex1]}>
            <Wizard activeIndex={step} onActiveIndexChanged={(e: any) => SetStep(e)}>
                <Wizard.Step state={Wizard.States.ENABLED} label={"Personal Info"} />
                <Wizard.Step state={Wizard.States.ENABLED} label={"Guardian Details"} />
                <Wizard.Step state={Wizard.States.ENABLED} label={"Address"} />
                <Wizard.Step state={Wizard.States.ENABLED} label={"Id Proof"} />
            </Wizard>
            <StepsRender step={step} onNext={() => SetStep(step + 1)} onPrev={() => SetStep(step - 1)} onRegister={register} />
        </SafeAreaProvider>
    );
}

