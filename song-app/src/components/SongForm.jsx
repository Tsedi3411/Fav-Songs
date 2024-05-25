import{ useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSong, updateSong } from '../redux/songSlice';
import styled from '@emotion/styled';

const FormContainer = styled.div`
  background-color: white;
  padding: 20px;
  margin-bottom: 20px;
`;

const FormInput = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 5px;
`;

const SongForm = () => {
  const dispatch = useDispatch();
  const [song, setSong] = useState({ id: null, title: '', artist: '' });

  const handleChange = (e) => {
    setSong({ ...song, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (song.id) {
      dispatch(updateSong(song));
    } else {
      dispatch(addSong(song));
      setSong({ id: null, title: '', artist: '' });
    }
  };

  return (
    <FormContainer>
      <h2>{song.id ? 'Edit Song' : 'Add Song'}</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="title"
          placeholder="Song Title"
          value={song.title}
          onChange={handleChange}
        />
        <FormInput
          type="text"
          name="artist"
          placeholder="Artist"
          value={song.artist}
          onChange={handleChange}
        />
        <button type="submit">{song.id ? 'Update' : 'Add'}</button>
      </form>
    </FormContainer>
  );
};

export default SongForm;