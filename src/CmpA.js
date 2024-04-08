import { createContext } from "react"
const data=creatConstext()
function CmpA(){
    var name="ram"
    return(
        <div>
            <data.provider value={name}>
                <CmpB></CmpB>
            </data.provider>
        </div>
    )
}
export default CmpA 