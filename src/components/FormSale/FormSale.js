import React, { useState } from 'react';
import { CheckboxStyles, InputWithIconStyles, PropertyTypeStyles } from '../FormProperty/FormPropertyStyles';
import SelectOptions from '../Select/SelectOptions';
import Text from '../UI/Heading';
import Icons from '../UI/Icons';
import { InputNumberNoStyles, InputTextAreaNoStyles } from '../Inputs';
import AddImages from '../AddImages/AddImages';
// import SearchLocationInput from '../InputPlace/InputPlacesAutocomplete';

const FormSale = () => {
    const [saleForm, setSaleForm] = useState({
        address: '',
        price: '',
        property: '',
        bedrooms: {code: ''},
        bathrooms: {code: ''},
        area: '',
        aboutThisProperty: '',
        file: '',
    });

    const handleUpload = (e) => {
        e.preventDefault();
        console.log(saleForm);

        console.log(saleForm.file);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const completeForm=e.target.value;
        setSaleForm({...saleForm, [e.target.name]: completeForm});
        console.log(saleForm)
    }

    const handleChange = (e) => {
        setSaleForm({[e.target.name]: e.target.value})
        console.log(e.target.value)
    }

    return (
        <form
            onChange={(e) => handleSubmit(e)}
            className="rent"
        >
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
                    {/* <SearchLocationInput 
                        name="address" 
                        valueLocation={saleForm.address}
                        // setValueLocation={}
                        onChange={(e) => handleChange(e)}
                    /> */}
                    <input name="address" value={saleForm.address} onChange={(e) => handleChange(e)}/>
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
                    price
                </Text>
                <InputWithIconStyles>
                    <Icons type="dollar" className="inputCoin" />
                    <InputNumberNoStyles
                        type="text"
                        value={saleForm.price}
                        name="price"
                        placeholder="2000"
                        maxLength="10"
                        onChange={(e) => handleChange(e)}
                        className="price"
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
                        <input
                            type="radio"
                            name="property"
                            value="apartment"
                            className="checkbox"
                            onChange={(e) => handleChange(e)}
                        />
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
                        <input
                            type="radio"
                            name="property"
                            value="house"
                            className="checkbox"
                            onChange={(e) => handleChange(e)}
                        />
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
                        placeholder="Choose a Number"
                        name="bedrooms"
                        value={saleForm.bedrooms.code}
                        onChange={(e) => handleChange(e)}
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
                        placeholder="Choose a Number"
                        name="bathrooms"
                        value={saleForm.bathrooms.code}
                        onChange={(e) => handleChange(e)}
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
                        value={saleForm.area}
                        name="area"
                        placeholder="##"
                        maxLength="4"
                        onChange={(e) => handleChange(e)}
                        className="area-input-form"
                    />

                </div>
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
                    about this property
                </Text>

                <InputTextAreaNoStyles
                    textAlign="justify"
                    maxLength="200"
                    value={saleForm.aboutThisProperty}
                    name="aboutThisProperty"
                    placeholder="My apartment is great because..."
                    onChange={(e) => handleChange(e)}
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
                <AddImages
                    handleUpload={(e) => handleUpload(e)}
                    fileValue={saleForm.file}
                    handleChange={(e) => handleChange(e)}
                />
            </div>
        </form>
    )
}

export default FormSale;