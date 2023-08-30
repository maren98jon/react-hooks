import { useLayoutEffect, useRef, useState } from "react"


export const Pokemon = ({name, location}) => {

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({width: 0, height: 0})

    useLayoutEffect(() => {
        const {height, width}= pRef.current.getBoundingClientRect();
        setBoxSize({height, width})
    }, [location])

  return (
    <>
        <blockquote 
        className='blockquote text-end'
        //style={{display: 'flex'}}
        >
            <p ref={pRef} className='mb-1'>{location}</p>
            <footer className='blockquote-footer'>{name}</footer>
        </blockquote>

        <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}
