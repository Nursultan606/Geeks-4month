import {useState, useEffect, useLayoutEffect} from 'react'


function User () {
    const [text, setText ] = useState("old text")
    const [width, setWidth] = useState(100)

    const [show, setShow] = useState(false)

    useLayoutEffect(() => {
        setWidth(400)
    },[])

    return (
        <>
            <h2 className={show && "active"}>User - {text}</h2>
            {
                show
                    &&
                    <div style={{width: width + 'px', height: '200px', background: "blue"}}></div>
            }


            <button onClick={() => setText("new text")}>click</button>
            <button onClick={() => setShow(!show)}>show</button>
        </>
    )
}

export default User;