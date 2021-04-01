import React, { useState } from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';

export const InputPlace = () => {
    const [address, setAddress] = useState('');

    const handleSelect = async value => {
        const addressLocation = await geocodeByAddress(value);
        const latLng = await getLatLng(addressLocation[0]);
        setAddress(value);
    };

    return (
        <div>
            <PlacesAutocomplete 
                value={address} 
                onChange={setAddress} 
                onSelect={handleSelect}
            >
                {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                    <div>
                        <input 
                            {...getInputProps({ placeholder: 'Start typing to autocomplete'})}
                        />
                        <div>
                            { loading ? <div>...loading</div> : null }
                            { suggestions.map((suggestion) => {

                                const style = {
                                    background: suggestion.active ? "#41b6e6" : "#fff"
                                }

                                return (
                                    <div {...getSuggestionItemProps(suggestion, { style })}>
                                        {suggestion.description}
                                    </div>
                            )})}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        </div>
    )
}
