import HeroCard from "../HeroCard"
import {Container} from './styles';

const HeroCardsList = ({heroes}) => {
    return (
        <Container>
            {heroes?.length > 0 && heroes.map((item, key) => <HeroCard key={key} hero={item} />)}
        </Container>
    );
}

export default HeroCardsList;