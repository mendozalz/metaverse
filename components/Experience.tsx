import { Sky } from '@react-three/drei';
import { Ground } from "./Ground";
import { Lighting } from './Lighting';
import {FirstPerson} from "./FirstPerson";

export const Experience = () => {
  const sunPosition = [2, 6, 4] as const;

  return (
    <>
      <Lighting sunPosition={sunPosition}/>
      <Sky sunPosition={sunPosition} />
      <Ground/>
      <FirstPerson/>
    </>
  );
};
