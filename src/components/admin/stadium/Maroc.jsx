import React from 'react';
import { Autocomplete, TextField } from '@mui/material';

// Array of Moroccan cities
const moroccanCities = [
    'Agadir', 'Al Hoceima', 'Asilah', 'Azemmour', 'Azrou', 'Beni Mellal', 'Berkane', 'Berrechid', 'Casablanca', 'Chefchaouen', 'Dakhla', 'El Jadida',
    'El Kelaa des Sraghna', 'Errachidia', 'Essaouira', 'Fes', 'Fnideq', 'Guelmim', 'Ifrane', 'Khenifra', 'Khouribga', 'Laayoune', 'Larache', 'Marrakech',
    'Martil', 'Meknes', 'Midelt', 'Mohammedia', 'Nador', 'Ouarzazate', 'Ouezzane', 'Oujda', 'Rabat', 'Safi', 'Salé', 'Sefrou', 'Settat', 'Sidi Bennour',
    'Sidi Ifni', 'Sidi Kacem', 'Sidi Slimane', 'Sidi Yahya El Gharb', 'Skhirat', 'Tangier', 'Taroudant', 'Taza', 'Temara', 'Tetouan', 'Tifelt', 'Tiznit',
    'Youssoufia', 'Zagora'
];

const Maroc = ({ handleGetV, city }) => {
    const handleChange = (e, value) => {
        handleGetV(value);
    };

    return (
        <Autocomplete
            freeSolo
            options={moroccanCities}
            value={city}
            renderInput={(params) => (
                <TextField {...params} label="City" variant="outlined" />
            )}
            onChange={handleChange}
        />
    );
};

export default Maroc;
