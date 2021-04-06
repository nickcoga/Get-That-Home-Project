import React, { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import Icons from "../UI/Icons";
import { colors } from "../UI/ColorStyles";

let autoComplete;

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

function handleScriptLoad(updateQuery, autoCompleteRef) {
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    // { types: ["(cities)"], componentRestrictions: { country: "PE" } }
    { componentRestrictions: { country: "PE" } }
  );
  autoComplete.setFields(["address_components", "formatted_address"]);
  autoComplete.addListener("place_changed", () =>
    handlePlaceSelect(updateQuery)
  );
}

async function handlePlaceSelect(updateQuery) {
  const addressObject = autoComplete.getPlace();
  const query = addressObject.formatted_address;
  updateQuery(query);
  console.log(addressObject);
}

function SearchLocationInput() {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);

  console.log(process.env);

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);

  return (
    <StyledContainer className="search-location-input">
      <Icons type="search" />
      <input
        ref={autoCompleteRef}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Enter a City"
        value={query}
      />
    </StyledContainer>
  );
}


const StyledContainer = styled.div`
  border: 1px solid ${colors.gray4};
  background-color: #fff;
  width: 250px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  justify-content: space-between;
  padding: 8px;
  gap: 4px;
  & > input {
    border: none;
    flex: 1;
  }
  & > input:focus {
    outline: none;
  }
`;

export default SearchLocationInput;
