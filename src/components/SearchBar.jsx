import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import Search from '@mui/icons-material/Search';



const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.prevetDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  }

  return (
    <Paper
      component="from"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        boder: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: {sm: 5},
      }}
    >
      <input
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type='submit' sx={{ p: "10px", color: "red"}}>
        <Search />
      </IconButton>
      
    </Paper>
  )
}

export default SearchBar