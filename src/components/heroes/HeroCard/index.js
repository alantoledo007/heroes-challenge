import Button from '../../shared/Button';
import Card, {CardTitle, CardContent, CardHeader} from '../../shared/Card'

import { useDispatch } from 'react-redux';
import { DELETE_HERO } from '../../../redux/actions/heroes';

const HeroCard = ({hero}) => {
    const dispatch = useDispatch();

    const genders = {
        male: 'Masculino',
        female: 'Femenino',
        'n/a': 'Ninguno'
    }

    const deleteHero = (payload) => {
        dispatch({type: DELETE_HERO, payload});
    }

    return <Card className="animated fadeIn fast">
        <CardHeader>
            <CardTitle>{hero.name}</CardTitle>
            <Button variant="danger" toDelete onClick={() => deleteHero(hero.name)}>&times;</Button>
        </CardHeader>
        <CardContent>
            <li>Altura: {hero.height}</li>
            <li>Género: {genders[hero.gender] || hero.gender}</li>
        </CardContent>
    </Card>
}

export default HeroCard;