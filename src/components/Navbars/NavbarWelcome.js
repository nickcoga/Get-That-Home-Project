import styled from "@emotion/styled";
import React, { useReducer } from "react";
import { colors } from "../UI/ColorStyles";
import ButtonNavbarWelcome from "../UI/ButtonNavbarWelcome";
import "../CardProperty/CardProperty.css";
import SelectOptions from "../Select/SelectOptions";
import formReducer from "../../reducers/formReducer";

const NavbarWelcomeStyles = styled.div`
  width: 800px;
  height: 56px;
  box-shadow: 0 8px 8px ${colors.ShadowBox};
  border-radius: 8px;
  padding: 8px 16px;
  margin: 56px 0 0 0;
  display: flex;
  align-items: center;
`;

const LeftOptionsStyles = styled.div`
  width: 168px;
  height: 56px;
  padding: 0 8px;
  margin: 0 8px 0 0;
  border-right: ${colors.BackgroundLight} solid 1px;
`;

const RightOptionsStyles = styled.div`
  width: 312px;
  height: 56px;
  padding: 0 8px;
  margin: 0 8px 0 0;
  border-right: ${colors.BackgroundLight} solid 1px;
`;

const HeaderNavbarStyles = styled.p`
  text-transform: uppercase;
  color: ${colors.HeaderNavbar};
  font-family: "Inter";
  font-size: 10px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 1.5px;
`;

const NavbarWelcome = () => {
  const [state, dispatch] = useReducer(formReducer, {
    property: { code: "" },
    payMode: { code: "" },
    district: { code: "" },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "CHANGE_FIELD", payload: { name, value } });
  };

  return (
    <div>
      <NavbarWelcomeStyles>
        <LeftOptionsStyles>
          <HeaderNavbarStyles>i'm looking for</HeaderNavbarStyles>
          {/* Modo prueba del selection */}
          <SelectOptions
            placeholder="Choose an option"
            name="property"
            value={state.property.code}
            onChange={(e) => handleChange(e)}
            options={[
              { value: "A", text: "Apartment" },
              { value: "H", text: "House" },
            ]}
          />
        </LeftOptionsStyles>
        <LeftOptionsStyles>
          <HeaderNavbarStyles>i want to</HeaderNavbarStyles>
          {/* Modo prueba del selection */}
          <SelectOptions
            placeholder="Pay Mode"
            name="payMode"
            value={state.payMode.code}
            onChange={(e) => handleChange(e)}
            options={[
              { value: "S", text: "Sale" },
              { value: "R", text: "Rent" },
            ]}
          />
        </LeftOptionsStyles>
        <RightOptionsStyles>
          <HeaderNavbarStyles>where</HeaderNavbarStyles>
          {/* Modo prueba del selection */}
          <SelectOptions
            placeholder="Favorite District"
            name="district"
            value={state.district.code}
            onChange={(e) => handleChange(e)}
            options={[
              { value: "C", text: "Callao" },
              { value: "Be", text: "Bellavista" },
              { value: "CL", text: "Carmen de La Legua" },
              { value: "Pe", text: "La Perla" },
              { value: "LP", text: "La Punta" },
              { value: "MP", text: "Mi Perú" },
              { value: "V", text: "Ventanilla" },
              { value: "L", text: "Lima" },
              { value: "An", text: "Ancón" },
              { value: "At", text: "Ate" },
              { value: "Ba", text: "Barranco" },
              { value: "Br", text: "Breña" },
              { value: "Ca", text: "Carabayllo" },
              { value: "Cha", text: "Chaclacayo" },
              { value: "Cho", text: "Chorrillos" },
              { value: "Ci", text: "Cieneguilla" },
              { value: "Co", text: "Comas" },
              { value: "Ag", text: "El Agustino" },
              { value: "In", text: "Independencia" },
              { value: "JM", text: "Jesús María" },
              { value: "Mo", text: "La Molina" },
              { value: "Vi", text: "La Victoria" },
              { value: "Li", text: "Lince" },
              { value: "Ol", text: "Los Olivos" },
              { value: "Lo", text: "Lurigancho" },
              { value: "Ln", text: "Lurín" },
              { value: "MM", text: "Magdalena del Mar" },
              { value: "Mi", text: "Miraflores" },
              { value: "Pa", text: "Pachacámac" },
              { value: "Pu", text: "Pucusana" },
              { value: "PL", text: "Pueblo Libre" },
              { value: "PP", text: "Puente Piedra" },
              { value: "PH", text: "Punta Hermosa" },
              { value: "PN", text: "Punta Negra" },
              { value: "Ri", text: "Rímac" },
              { value: "SBa", text: "San Bartolo" },
              { value: "SBo", text: "San Borja" },
              { value: "SI", text: "San Isidro" },
              { value: "SJL", text: "San Juan de Lurigancho" },
              { value: "SJM", text: "San Juan de Miraflores" },
              { value: "SL", text: "San Luis" },
              { value: "SMP", text: "San Martín de Porres" },
              { value: "SM", text: "San Miguel" },
              { value: "SA", text: "Santa Anita" },
              { value: "SMM", text: "Santa María del Mar" },
              { value: "SR", text: "Santa Rosa" },
              { value: "SS", text: "Santiago de Surco" },
              { value: "S", text: "Surquillo" },
              { value: "VS", text: "Villa El Salvador" },
              { value: "VMT", text: "Villa María del Triunfo" },
            ]}
          />
        </RightOptionsStyles>
        <ButtonNavbarWelcome
          padding="8px 16px"
          size="14px"
          family="Inter"
          letter="1.25px"
          nameButton="search"
          backgroundH={colors.White}
          background={colors.Pink}
          colorH={colors.Pink}
          color={colors.White}
          borderColorH={colors.Pink}
          borderColor={colors.Pink}
          borderRadius="16px"
          borderSizeH="1px"
          borderSize="1px"
          transform="uppercase"
        />
      </NavbarWelcomeStyles>
    </div>
  );
};

export default NavbarWelcome;
