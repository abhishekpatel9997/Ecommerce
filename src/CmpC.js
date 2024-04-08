import { data } from "./CmpA"
function CmpC() {

    <div>
        <data.consumer>
            {
                (name) => {
                    return (
                        <h1>My name is {name}</h1>
                    )
                }
            }
        </data.consumer>
    </div>

} 
export default CmpC