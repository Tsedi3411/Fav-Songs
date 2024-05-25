import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongs, deleteSong } from '../redux/songSlice';
import styled from '@emotion/styled';

const SongListItem = styled.div`
  background-color: white;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SongList = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs.data);

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteSong(id));
  };

  return (
    <div>
      <h2>Song List</h2>
      {songs.map((song) => (
        <SongListItem key={song.id}>
          <div>
            <h3>{song.title}</h3>
            <p>Artist: {song.artist}</p>
          </div>
          <button onClick={() => handleDelete(song.id)}>Delete</button>
        </SongListItem>
      ))}
    </div>
  );
};

export default SongList;