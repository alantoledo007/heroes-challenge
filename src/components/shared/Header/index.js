import Logo from '../Logo';
import H1 from '../H1';

import { HeaderStayles } from './styles';
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
        <H1>Heroes Challenge</H1>
        <Button variant="blue" onClick={handleGetHeroes}>Actualizar</Button>
    </HeaderStayles>
}

export default Header;