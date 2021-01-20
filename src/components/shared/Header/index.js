import Logo from '../Logo';
import H1 from '../H1';

import { HeaderStayles, Slogan, Title } from './styles';
import Button from '../Button';

const Header = ({getHeroes, onGetHeroes, onFinally}) => {

    const handleGetHeroes = () => {
        if(onGetHeroes) onGetHeroes();
        getHeroes()
            .finally(() => {
                if(onFinally) onFinally();
            });
    }

    return <HeaderStayles className="text-center mt mb">
        <Logo />
        <Title>
            <H1>Héroes Challenge</H1>
            <Slogan>Personajes para algunos, <strong>héroes</strong> para otros...</Slogan>
        </Title>
        <Button variant="blue" onClick={handleGetHeroes}>Actualizar</Button>
    </HeaderStayles>
}

export default Header;