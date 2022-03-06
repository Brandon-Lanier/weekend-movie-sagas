import { useDispatch, useSelector } from 'react-redux';
import MovieItem from '../MoveItem/MovieItem';
import WatchItem from '../WatchItem/WatchItem';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';

function WatchList() {

    const movieList = useSelector(store => store.watchList)
    
    console.log('Watch list is', movieList);
    return (
        <>
        <Typography variant="h3" sx={{mt: '10px'}}>
            Watchlist
        </Typography>
        <Container
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                m: 'auto',
                spacing: '5'
            }}>
            {movieList.map(movie => (
                    <WatchItem
                        key={movie.id}
                        movie={movie}
                    />
                ))}
            </Container>
            </>
    )
}

export default WatchList;