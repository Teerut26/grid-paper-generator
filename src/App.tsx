/* eslint-disable @typescript-eslint/no-unused-vars */
import clsx from "clsx"
import { useEffect, useState } from "react"

export default function App() {
    const [horizontalLines, setHorizontalLines] = useState<number>(1)
    const [verticalLines, setVerticalLines] = useState<number>(3)
    const onPrint = () => {
        window.print()
    }

    useEffect(() => {
      document.title = `Grid: ${horizontalLines}x${verticalLines}`
    }, [horizontalLines, verticalLines])
    

    return (
        <>
            <div className="print:hidden mb-3 flex p-3">
                <div className="flex flex-col gap-3 w-full">
                    <div className="flex flex-col">
                        <span>Horizontal lines:</span>
                        <input
                            type="number"
                            className="border-2 p-2 rounded-md"
                            value={horizontalLines}
                            onChange={(e) => setHorizontalLines(Number(e.target.value) < 1 ? 1 : Number(e.target.value))}
                        />
                    </div>
                    <div className="flex flex-col">
                        <span>Vertical lines:</span>
                        <input
                            type="number"
                            className="border-2 p-2 rounded-md"
                            value={verticalLines}
                            onChange={(e) => setVerticalLines(Number(e.target.value) < 1 ? 1 : Number(e.target.value))}
                        />
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-fit" onClick={onPrint}>Print</button>
                </div>
            </div>
            <div className="print:h-screen print:w-full h-screen w-full relative border mx-3 print:m-0 print:border-0 border-gray-300">
                {/* horizontal grid */}
                <div className={clsx("absolute top-0 bottom-0 left-0 right-0 z-10 flex flex-col justify-evenly")}>
                    {[...Array(horizontalLines)].map((_, i) => (
                        <div className="h-[0.5px] w-full bg-gray-500 print:bg-gray-200" key={i}></div>
                    ))}
                </div>

                {/* vertical grid */}
                <div className="absolute top-0 bottom-0 left-0 right-0 z-20 flex items-center justify-evenly">
                    {[...Array(verticalLines)].map((_, i) => (
                        <div className="w-[0.5px] h-full bg-gray-500 print:bg-gray-200" key={i}></div>
                    ))}
                </div>
            </div>
        </>
    )
}