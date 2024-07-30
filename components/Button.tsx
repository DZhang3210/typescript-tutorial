import React, { ComponentProps, Dispatch, SetStateAction } from 'react'

type Color = "red" | "blue" | "green";
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

type ButtonProps = {
    type?: "button" | "submit" | "reset";
    color?: "red" | "blue" | "green";
}
type SuperButtonProps = ButtonProps & {
    size: "md" | "lg"
}

// type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
//     variant?: "primary" | "secondary";
// }
// React.ComponentPropsWithoutRef<"button"> --> if using reference

const Button = ({ type, color }: ButtonProps) => {
    const handleClick = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
        console.log("Clicked")
    return (
        <button
            onClick={handleClick}
        >
            Click Me
        </button>
    )
}

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

export default Button
