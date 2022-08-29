import bg1 from '../public/bg1.webp'
import bg2 from '../public/bg2.webp'
import bg3 from '../public/bg3.webp'
import room1 from '../public/room1.webp'
import room2 from '../public/room2.webp'
import bed from '../public/bed.webp'
import plate from '../public/plate.webp'
import xperson_1 from '../public/xperson_1.webp';
import xperson_2 from '../public/xperson_2.webp';
import xperson_3 from '../public/xperson_3.webp';
import xperson_4 from '../public/xperson_4.webp';
import fireExit from '../public/fire-exit.png'
import swimming from '../public/swimming.png'
import hairdryer from '../public/hairdryer.png'
import vehicle from '../public/vehicle.png'
import information from '../public/information-desk.png'
import cocktail from '../public/cocktail.png'
import taxi from '../public/taxi.png'
import minibar from '../public/minibar.png'

export const navLinks = [
  { path: '/', title: 'HOME' },
  { path: '/room', title: 'ROOMS' },
  { path: '/event', title: 'EVENTS' },
  { path: '/about', title: 'ABOUT' },
  { path: '/contact', title: 'CONTACT' },
]

export const roomData = [
  { img: bg1, title: 'STANDARD ROOM', price: ' $350.00 / per night' },
  { img: room1, title: 'FAMILY ROOM', price: ' $400.00 / per night' },
  { img: room2, title: 'SINGLE ROOM', price: ' $250.00 / per night' },
  { img: bg1, title: 'DELUXE ROOM', price: ' $550.00 / per night' },
  { img: room2, title: 'LUXUARY ROOM', price: ' $750.00 / per night' },
  { img: room2, title: 'STANDARD ROOM', price: ' $250.00 / per night' },
]
export const staffData = [
  { img: xperson_1, title: 'MEGAN PEARSON', price: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta labore recusandae soluta quis.' },
  { img: xperson_2, title: 'ANGELLA LOPEZ', price: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta labore recusandae soluta quis.' },
  { img: xperson_3, title: 'MARINA STALKS', price: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta labore recusandae soluta quis.' },
  { img: xperson_2, title: 'ETHAN HOOVER', price: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta labore recusandae soluta quis.' },
  { img: xperson_3, title: 'CRISTINE SMITH', price: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta labore recusandae soluta quis.' },
  { img: xperson_1, title: 'MARINA STALKS', price: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta labore recusandae soluta quis.' },
]

export const featureIcon = [
  { img: fireExit, title: 'FireExit' },
  { img: swimming, title: 'Swimming' },
  { img: hairdryer, title: 'Hairdryer' },
  { img: vehicle, title: 'Vehicle' },
  { img: information, title: 'Information Desk' },
  { img: cocktail, title: 'Cocktail' },
  { img: taxi, title: 'Taxi' },
  { img: minibar, title: 'Minibar' }
]

export const galleryImg = [bg1, bg2, bg3, bed, room1, room2, bed, plate]