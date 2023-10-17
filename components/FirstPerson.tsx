import { PointerLockControls, useKeyboardControls } from "@react-three/drei";
import { Controls } from "@/app/page";

export const FirstPerson = () =>{
    const [_, getKeyBoardControls] = useKeyboardControls<Controls>();
    return <PointerLockControls/>
}