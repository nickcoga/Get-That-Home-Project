import React from 'react';
import { CheckboxStyles, InputWithIconStyles, PropertyTypeStyles } from '../FormProperty/FormPropertyStyles';
import SelectOptions from '../Select/SelectOptions';
import Text from '../UI/Heading';
import Icons from '../UI/Icons';
import { InputNumberNoStyles, InputTextAreaNoStyles } from '../Inputs';
import AddImages from '../AddImages/AddImages';

const FormRent = () => {
    return (
        <div className="rent">   
            <div>
                <Text 
                    type="Inter" 
                    size="Caption" 
                    color="Gray" 
                    letter="1.5px"
                    transform="uppercase"
                    textAlign="justify"
                >
                    address
                </Text>

                <InputWithIconStyles>
                    <Icons type="search" className="inputSearch" />
                    <input />
                </InputWithIconStyles>
            </div>
            <div>
                <Text 
                    type="Inter" 
                    size="Caption" 
                    color="Gray" 
                    letter="1.5px"
                    transform="uppercase"
                    textAlign="justify"
                >
                    montly rent
                </Text>
                <InputWithIconStyles>
                    <Icons type="dollar" className="inputCoin" />
                    <InputNumberNoStyles 
                        type="text"
                        // value={value}
                        name="montly rent"
                        placeholder="2000"
                        maxLength="10"
                        // onChange={onChange}
                        className="montlyRent"
                    />
                </InputWithIconStyles>
            </div>
            <div>
                <Text 
                    type="Inter" 
                    size="Caption" 
                    color="Gray" 
                    letter="1.5px"
                    transform="uppercase"
                    textAlign="justify"
                >
                    maintanance
                </Text>
                <InputWithIconStyles>
                    <Icons type="dollar" className="inputCoin" />
                    <InputNumberNoStyles 
                        type="text"
                        // value={value}
                        name="maintanance"
                        placeholder="100"
                        maxLength="10"
                        // onChange={onChange}
                        className="maintanance"
                    />
                </InputWithIconStyles>
            </div>
            <div>
                <Text 
                    type="Inter" 
                    size="Caption" 
                    color="Gray" 
                    letter="1.5px"
                    transform="uppercase"
                    textAlign="justify"
                >
                    property type
                </Text>
                <PropertyTypeStyles>
                    <CheckboxStyles>
                        <input type="checkbox" />
                        <Text 
                            type="Inter" 
                            size="Body1" 
                            color="Gray" 
                            letter="1.5px"
                            transform="capitalize"
                            textAlign="justify"
                        >
                            apartment
                        </Text>
                    </CheckboxStyles>

                    <CheckboxStyles>
                        <input type="checkbox" />
                        <Text 
                            type="Inter" 
                            size="Body1" 
                            color="Gray" 
                            letter="0.25px"
                            transform="capitalize"
                            textAlign="justify"
                        >
                            house
                        </Text>
                    </CheckboxStyles>
                </PropertyTypeStyles>
            </div>
            <div>
                <div>
                    <Text 
                        type="Inter" 
                        size="Caption" 
                        color="Gray" 
                        letter="1.5px"
                        transform="uppercase"
                        textAlign="justify"
                    >
                        bedrooms
                    </Text>

                    <SelectOptions
                        placeholder="Favorite District"
                        name="district"
                        // value={state.district.code}
                        // onChange={(e) => handleChange(e)}
                        options={[
                        { value: "1Ba", text: "1" },
                        { value: "2Ba", text: "2" },
                        { value: "3Ba", text: "3" },
                        { value: "4Ba", text: "4" },
                        ]}
                    />

                </div>
                <div>
                    <Text 
                        type="Inter" 
                        size="Caption" 
                        color="Gray" 
                        letter="1.5px"
                        transform="uppercase"
                        textAlign="justify"
                    >
                        bathrooms
                    </Text>

                    <SelectOptions
                        placeholder="Favorite District"
                        name="district"
                        // value={state.district.code}
                        // onChange={(e) => handleChange(e)}
                        options={[
                        { value: "1Be", text: "1" },
                        { value: "2Be", text: "2" },
                        { value: "3Be", text: "3" },
                        { value: "4Be", text: "4" },
                        { value: "5Be", text: "5" },
                    ]}
                    />
                        
                </div>
                <div>
                    <Text 
                        type="Inter" 
                        size="Caption" 
                        color="Gray" 
                        letter="1.5px"
                        transform="uppercase"
                        textAlign="justify"
                    >
                        area in m2
                    </Text>

                    <InputNumberNoStyles 
                        type="text"
                        // value={value}
                        name="area"
                        placeholder="##"
                        maxLength="4"
                        // onChange={onChange}
                        className="area-input-form"
                    />
                        
                </div>
            </div>
            <CheckboxStyles>
                <input type="checkbox" />
                <Text 
                    type="Inter" 
                    size="Body1" 
                    color="Gray" 
                    letter="0.25px"
                    transform="capitalize"
                    textAlign="justify"
                >
                    pets allowed
                </Text>
            </CheckboxStyles>
            <Text 
                    type="Inter" 
                    size="Caption" 
                    color="Gray" 
                    letter="0.4px"
                    textAlign="justify"
            >
                Allowing pets increases the likehood of renters  liking the property by 9001%.
                It also makes you a better person.
            </Text>

            <div>
                <Text 
                    type="Inter" 
                    size="Caption" 
                    color="Gray" 
                    letter="1.5px"
                    transform="uppercase"
                    textAlign="justify"
                >
                    about this property
                </Text>

                <InputTextAreaNoStyles
                    // rows={rows}
                    // cols={cols}
                    // maxLength={maxLength}
                    // value={value}
                    name="about this property"
                    placeholder="My apartment is great because..."
                    // onChange={onChange}
                    className="about-this-property"
                />
                    
                <Text 
                    type="Inter" 
                    size="Caption" 
                    color="LightGray" 
                    letter="0.4px"
                    textAlign="justify"
                >
                    Renters will read this first, so highlight any features or important information the apartment has.
                </Text>    
            </div>
            <div>
                <AddImages />
            </div>
        </div>
    )
}

export default FormRent;
