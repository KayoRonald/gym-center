import { IconType } from 'react-icons';
import { FaBoxes, FaBicycle, FaSwimmer, FaRunning, FaDumbbell } from 'react-icons/fa';
import { GiPunch, GiMeditation } from 'react-icons/gi';
// import { MdDance } from 'react-icons/md';
import { IoMdFitness } from 'react-icons/io';

// Interface defining the structure of the gym activities
export interface Igym {
  name: string;
  description: string;
  icon: IconType; // Use IconType for react-icons
}

// Array of gym activities with updated icons
export const gymData: Igym[] = [
  {
    name: 'General Gym',
    description: 'A place where people go to exercise with various equipment for strength training and cardiovascular fitness.',
    icon: IoMdFitness
  },
  {
    name: 'Yoga',
    description: 'A practice that combines physical postures, breathing exercises, and meditation to enhance flexibility and mental clarity.',
    icon: FaBoxes
  },
  {
    name: 'Boxing',
    description: 'A combat sport where participants throw punches at each other, often involving rigorous training and conditioning.',
    icon: FaBoxes
  },
  {
    name: 'Cycling',
    description: 'Exercise involving riding a bicycle, either on a stationary bike or outdoors, focusing on cardiovascular endurance.',
    icon: FaBicycle
  },
  {
    name: 'Swimming',
    description: 'A full-body workout that involves moving through water using the arms and legs, enhancing both strength and cardiovascular health.',
    icon: FaSwimmer
  },
  {
    name: 'Running',
    description: 'A cardiovascular exercise that involves moving at a fast pace on foot, promoting overall fitness and endurance.',
    icon: FaRunning
  },
  {
    name: 'Dance',
    description: 'A rhythmic activity that combines movement and music, offering a fun and engaging way to improve fitness and coordination.',
    icon: FaBoxes
  },
  {
    name: 'Martial Arts',
    description: 'Various systems of combat training focusing on self-defense, discipline, and physical fitness through techniques and forms.',
    icon: GiPunch
  },
  {
    name: 'Pilates',
    description: 'A form of exercise that emphasizes balance, posture, strength, and flexibility through controlled movements and breathing.',
    icon: GiMeditation
  },
  {
    name: 'Weightlifting',
    description: 'Strength training involving lifting heavy weights to build muscle mass and overall strength.',
    icon: FaDumbbell
  }
];
