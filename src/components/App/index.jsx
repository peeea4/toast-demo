import { ToastProvider } from "@peeea4/toast-lib";

import { AppWrapper } from "@/components/App/styled";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";

export const App = () => {
    const position = "top-right";
    const animation = "flip";

    return (
        <AppWrapper>
            <Header />
            <Main />
            <ToastProvider position={position} animation={animation} />
        </AppWrapper>
    );
};
