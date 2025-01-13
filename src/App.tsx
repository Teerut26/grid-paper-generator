/* eslint-disable @typescript-eslint/no-unused-vars */
import clsx from "clsx"
import { useState } from "react"

export default function App() {
    const [horizontalLines, setHorizontalLines] = useState<number>(1)
    const [verticalLines, setVerticalLines] = useState<number>(4)
    return (
        <>
            <div className="print:hidden mx-3 mb-3 flex">
                <input
                    type="number"
                    value={horizontalLines}
                    onChange={(e) => setHorizontalLines(Number(e.target.value))}
                />
                <input
                    type="number"
                    value={verticalLines}
                    onChange={(e) => setVerticalLines(Number(e.target.value))}
                />
            </div>
            <div className="h-screen relative border mx-3 print:m-0 print:border-0">
                {/* horizontal grid */}
                <div className={clsx("absolute top-0 bottom-0 left-0 right-0 z-10 flex flex-col justify-evenly")}>
                    {[...Array(horizontalLines)].map((_, i) => (
                        <div className="h-[0.5px] w-full bg-gray-300" key={i}></div>
                    ))}
                </div>

                {/* vertical grid */}
                <div className="absolute top-0 bottom-0 left-0 right-0 z-20 flex items-center justify-evenly">
                    {[...Array(verticalLines)].map((_, i) => (
                        <div className="w-[0.5px] h-full bg-gray-300" key={i}></div>
                    ))}
                </div>
            </div>
        </>
    )
}