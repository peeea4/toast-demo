import { useDispatch, useSelector } from "react-redux";

import { getUserListAsync } from "@/actions/user";

import { AppWrapper } from "./styled";

export const App = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    console.log(state);
    const clickHandler = () => {
        dispatch(getUserListAsync());
    };
    
    return (
        <AppWrapper>
            <button onClick={clickHandler}>Click me</button>
        </AppWrapper>
    );
};
