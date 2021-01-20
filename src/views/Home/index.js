//components
import { useEffect, useState } from "react";
import HeroCardsList from "../../components/heroes/HeroCardsList"
import Wrapper from '../../components/shared/Wrapper'
import Header from '../../components/shared/Header';
import HeroSearch from '../../components/heroes/HeroSearch';
import Loader from "../../components/shared/Loader";
import NotResultsIcon from '../../components/shared/NotResultsIcon';

//redux
import {connect} from 'react-redux';
import { getHeroes } from "../../redux/actions/heroes";

const Home = ({heroes, getHeroes}) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [items, setItems] = useState([])

    const search = (value) => {
        if(!value) {
            setItems(heroes);
        }else{
            setItems(heroes.filter(item => formatSearch(item.name).includes(formatSearch(value))));
        }
    }
    
    const formatSearch = (value) => {
        return value
                .replace(/ /g, '')
                .toLocaleUpperCase();
    }
    
    useEffect(() => {
        if(!heroes) return;
        if(heroes.length > 0) {
            setItems(heroes);
            return;
        };

        setLoading(true);
        getHeroes()
            .catch(() => setError(true))    
            .finally(() => setLoading(false));

    },[heroes, getHeroes]);

    return <div className='animated fadeIn fast'>
        <Wrapper>
            <Header getHeroes={getHeroes} onGetHeroes={() => setLoading(true)} onFinally={() => setLoading(false)} />
            <HeroSearch search={search} onSearch={() => setLoading(true)} onFinally={() => setLoading(false)} />
            <Loader loading={loading} />
            {error && <span>¡Whops! Algo salió mal...</span>}
            {!loading && <HeroCardsList heroes={items} />}
            {!loading && items.length < 1 && heroes.length > 0 && <NotResultsIcon />}
        </Wrapper>
    </div>
}

const mapStateToProps = state => ({
    heroes: state.heroes.heroes
});

const mapDispatchToPros = dispatch => ({
    getHeroes: () => dispatch(getHeroes())
});

export default connect(
    mapStateToProps,
    mapDispatchToPros
)(Home);