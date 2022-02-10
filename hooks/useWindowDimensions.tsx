import { useState, useEffect } from 'react'

interface WindowDimentionType {
	width: number
	height: number
}

const initialDimensions: WindowDimentionType = {
	width: 0,
	height: 0
}

export default function useWindowDimensions(): WindowDimentionType {
	const [ dimensions, setDimensions ] = useState(initialDimensions)

	useEffect(() => {
		function getWindowDimensions() {
			if (typeof window !== 'undefined') {
				const { innerWidth: width, innerHeight: height } = window
				return { width, height }
			}
		}

		function handleResize() {
			setDimensions(getWindowDimensions())
		}

		window.addEventListener('resize', handleResize)
		window.addEventListener('load', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
			window.removeEventListener('load', handleResize)
		}
	}, [])
	console.log(dimensions)
	return dimensions
}
