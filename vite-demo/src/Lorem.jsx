// const Lorem = () => {
// return <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, similique.</p>
// }

import { useState } from "react";

const Lorem = function() {

    // const stateArr = useState(10);


    // let count = stateArr[0];
    // let  setCount = stateArr[1];

    const[count, setCount] = useState(0)

    setTimeout(() => {
        setCount(count => count + 1)
    }, 1000)

    return <>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, similique.</p>
        <div> Counter {count}</div>
    </>
}

export default Lorem;