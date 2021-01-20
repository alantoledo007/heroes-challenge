import Input from "../../shared/Input"
import { InputLabel } from "./styles";

const HeroSearch = ({search}) => {

    return <div className="text-center mb">
        <InputLabel>
            <label>Buscar héroe</label>
            <Input autofocus="autofocus" onChange={e => search(e.target.value)}/>
        </InputLabel>
    </div>
}

export default HeroSearch;