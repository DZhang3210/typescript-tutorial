import React, { Dispatch, SetStateAction } from 'react'

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


const Button = ({ count = 0 }) => {
    return (
        <button>
            {count}
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
