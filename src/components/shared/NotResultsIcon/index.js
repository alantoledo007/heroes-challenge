import { Img, Title } from './styles';
import NotResults from '../../../illustrations/not_results.svg';

const NotResultsIcon = () => {
    return <div className="animated fadeIn fast text-center mb">
        <Img src={NotResults} />
        <Title>Sin resultados</Title>
    </div>
}

export default NotResultsIcon;