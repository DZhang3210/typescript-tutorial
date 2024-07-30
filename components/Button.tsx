import React, { ComponentProps, Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { type ButtonColor } from '@/lib/types'


// type ButtonProps = {
//     backgroundColor: Color
//     textColor: Color
//     fontSize: number
//     pillShape: boolean
//     padding: number[] //List of numbers (unlimited size)
//     list: [number, number, number] //Limit number of numbers in a tuple
// }
type styleProps = {
    // style: {
    //     backgroundColor: string;
    //     fontSize: number;
    //     textColor: string;
    // }
    style: React.CSSProperties;
}

// type ButtonProps = {
//     type: "submit" | "reset" | "button";
//     autoFocus?: boolean
// }

// type ButtonProps = {
//     type?: "button" | "submit" | "reset";
//     color?: "red" | "blue" | "green";
// }
// type SuperButtonProps = ButtonProps & {
//     size: "md" | "lg"
// }

// type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
//     variant?: "primary" | "secondary";
// }
// React.ComponentPropsWithoutRef<"button"> --> if using reference

// const Button = ({ type, color }: ButtonProps) => {
//     const handleClick = (
//         event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
//         console.log("Clicked")
//     return (
//         <button
//             onClick={handleClick}
//         >
//             Click Me
//         </button>
//     )
// }

// type ButtonProps = {
//     // onClick: () => void
//     children: React.ReactNode
//     setCount: React.Dispatch<SetStateAction<number>>
// }

// //React.ReactNode accepts text and JSX elements
// //JSX.element only accept JSX elements
// const Button = ({ children, setCount }: ButtonProps) => {
//     return (
//         <button type="button" onClick={() => setCount(1)}>
//             {children}
//         </button>
//     )
// }

// const Button = ({ onClick }: ButtonProps) => {
//     return (
//         <button onClick={onClick}>

//         </button>
//     )
// }

// const Button = ({ style }: styleProps) => {
//     return (
//         <button>
//             {style.backgroundColor}
//             {style.fontSize}
//             {style.color}
//         </button>
//     )
// }

// type User = {
//     name: string;
//     age: number
// }

const buttonTextOptions = [
    "Click me!",
    "Click me again!",
    "Click me one more time",
] as const

type User = {
    sessionId: string;
    name: string
}

type Guest = Omit<User, "name">




// const Button = () => {
//     useEffect(() => {
//         const previousButtohnColor = localStorage.getItem("buttonColor") as ButtonColor
//     })
//     const ref = useRef<HTMLButtonElement>(null)
//     return (
//         <button ref={ref}>
//             {buttonTextOptions.map((option) => {
//                 return option
//             })}
//         </button>
//     )
// }

type ButtonProps<T> = {
    countValue: T;
    countHistory: T[]
}

function Button<T>({ countValue, countHistory }: ButtonProps<T>) {
    return (
        <div>

        </div>
    )
}


export default Button
