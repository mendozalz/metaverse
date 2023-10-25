import { Sky } from '@react-three/drei';
import { Ground } from "./Ground";
import { Lighting } from './Lighting';
import {FirstPerson} from "./FirstPerson";
import { Flora } from "./Flora";
import { Model as Table } from './Table';
import { Vendor } from "./Vendor";


export const Experience = () => {
  const sunPosition = [2, 6, 4] as const;

  return (
    <>
      <Lighting sunPosition={sunPosition}/>
      <Sky sunPosition={sunPosition} />
      <Ground/>
      <FirstPerson/>
      <Flora/>
      <Table scale={1.75} position={[0.8,0.4,1]} rotation={[0, 0, 0]}/>
      <Vendor/>
    </>
  );
};
