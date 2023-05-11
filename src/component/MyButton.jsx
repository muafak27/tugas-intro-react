import { useState } from "react"

const MyButton = ({onClick}) => {
   
    return (
        <div>
            <button onClick={onClick}>Tambah navigation</button>
        </div>
    )
}
export default MyButton;