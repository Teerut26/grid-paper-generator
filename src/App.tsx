/* eslint-disable @typescript-eslint/no-unused-vars */
import clsx from "clsx"
import { useEffect, useState } from "react"

export default function App() {
    const [horizontalLines, setHorizontalLines] = useState<number>(1)
    const [verticalLines, setVerticalLines] = useState<number>(3)
    const [showDotted, setShowDotted] = useState<boolean>(false)
    const [showBorder, setShowBorder] = useState<boolean>(true)

    const onPrint = () => {
        window.print()
    }

    useEffect(() => {
        document.title = `Grid: ${horizontalLines}x${verticalLines}_${showDotted ? "dotted" : ""}_${showBorder ? "border" : ""}`
    }, [horizontalLines, showBorder, showDotted, verticalLines])


    return (
        <>
            <div className="print:hidden mb-3 flex p-3">
                <div className="flex flex-col gap-3 w-full">
                    <div className="flex gap-3 justify-between">
                        <div className="flex flex-col w-full">
                            <span>Horizontal lines:</span>
                            <input
                                type="number"
                                className="border-2 p-2 rounded-md"
                                value={horizontalLines}
                                onChange={(e) => setHorizontalLines(Number(e.target.value) < 1 ? 1 : Number(e.target.value))}
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <span>Vertical lines:</span>
                            <input
                                type="number"
                                className="border-2 p-2 rounded-md"
                                value={verticalLines}
                                onChange={(e) => setVerticalLines(Number(e.target.value) < 1 ? 1 : Number(e.target.value))}
                            />
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex flex-col items-start">
                            <span>Show dotted grid:</span>
                            <input
                                type="checkbox"
                                className="border-2 p-2 rounded-md"
                                checked={showDotted}
                                onChange={(e) => setShowDotted(e.target.checked)}
                            />
                        </div>
                        <div className="flex flex-col items-start">
                            <span>Show border</span>
                            <input
                                type="checkbox"
                                className="border-2 p-2 rounded-md"
                                checked={showBorder}
                                onChange={(e) => setShowBorder(e.target.checked)}
                            />
                        </div>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-fit" onClick={onPrint}>Print</button>
                </div>
            </div>
            <div className="print:h-screen print:w-full h-screen w-full relative border mx-3 print:m-0 print:border-0 border-gray-300">
                {showBorder ? <>
                    <div className="absolute top-0 bottom-0 left-0 right-0 m-5 border overflow-hidden">
                        <div className={clsx("absolute top-0 bottom-0 left-0 right-0 z-20 flex flex-col justify-evenly")}>
                            {[...Array(horizontalLines)].map((_, i) => (
                                <div className="h-[0.5px] w-full bg-gray-500 print:bg-gray-200" key={i}></div>
                            ))}
                        </div>

                        {/* vertical grid */}
                        <div className="absolute top-0 bottom-0 left-0 right-0 z-30 flex items-center justify-evenly">
                            {[...Array(verticalLines)].map((_, i) => (
                                <div className="w-[0.5px] h-full bg-gray-500 print:bg-gray-200" key={i}></div>
                            ))}
                        </div>
                        {/* Dotted grid */}
                        {showDotted && <div className="flex gap-[4px] flex-col z-50 overflow-hidden ml-1 mt-1 min-w-fit">
                            {[...Array(200)].map((_, i) => (
                                <div className="flex gap-[4px] overflow-hidden min-w-fit" key={i}>
                                    {[...Array(280)].map((_, j) => (
                                        <div className="min-w-[1px] min-h-[1px] bg-gray-100 print:bg-gray-200 rounded-full" key={j}></div>
                                    ))}
                                </div>
                            ))}
                        </div>}

                    </div>
                </> : <>
                    {/* horizontal grid */}
                    <div className={clsx("absolute top-0 bottom-0 left-0 right-0 z-20 flex flex-col justify-evenly")}>
                        {[...Array(horizontalLines)].map((_, i) => (
                            <div className="h-[0.5px] w-full bg-gray-500 print:bg-gray-200" key={i}></div>
                        ))}
                    </div>
                    {/* vertical grid */}
                    <div className="absolute top-0 bottom-0 left-0 right-0 z-30 flex items-center justify-evenly">
                        {[...Array(verticalLines)].map((_, i) => (
                            <div className="w-[0.5px] h-full bg-gray-500 print:bg-gray-200" key={i}></div>
                        ))}
                    </div>
                    {/* Dotted grid */}
                    {showDotted && <div className="flex gap-[4px] flex-col z-50 overflow-hidden ml-1 mt-1 min-w-fit">
                        {[...Array(200)].map((_, i) => (
                            <div className="flex gap-[4px] overflow-hidden min-w-fit" key={i}>
                                {[...Array(280)].map((_, j) => (
                                    <div className="min-w-[1px] min-h-[1px] bg-gray-100 print:bg-gray-200 rounded-full" key={j}></div>
                                ))}
                            </div>
                        ))}
                    </div>}
                </>
                }
            </div>
        </>
    )
}