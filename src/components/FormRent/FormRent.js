import React, { useState } from 'react';
import { CheckboxStyles, InputWithIconStyles, PropertyTypeStyles } from '../FormProperty/FormPropertyStyles';
import SelectOptions from '../Select/SelectOptions';
import Text from '../UI/Heading';
import Icons from '../UI/Icons';
import { InputNumberNoStyles, InputTextAreaNoStyles } from '../Inputs';
import AddImages from '../AddImages/AddImages';
import defaultImage from '../../assets/Missing.png';

const FormRent = () => {
    const [rentForm, setRentForm] = useState({
        address: '',
        montlyRent: '',
        maintanance: '',
        property: '',
        bedrooms: {code: ''},
        bathrooms: {code: ''},
        area: '',
        pets: '',
        aboutThisProperty: '',
        file: defaultImage,
    });

    const [cannotBeLetters, setCannotBeLetters] = useState(false)

    const handleUpload = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        const newObject = {...rentForm, file: reader.result}
        reader.onload = () => {
            if(reader.readyState===0) {
                setRentForm(newObject);
            }
        }
        // console.log(e.target.files[0])
        // reader.readAsDataURL(e.target.files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const completeForm=e.target.value;
        setRentForm({...rentForm, [e.target.name]: completeForm});
        console.log(rentForm)
    }

    const handleChange = (e) => {
        setRentForm({[e.target.name]: e.target.value})
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
                    <input name="address" value={rentForm.address} onChange={(e) => handleChange(e)}/>
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
                        value={rentForm.montlyRent}
                        name="montlyRent"
                        placeholder="2000"
                        maxLength="10"
                        onChange={(e) => handleChange(e)}
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
                        value={rentForm.maintanance}
                        name="maintanance"
                        placeholder="100"
                        maxLength="10"
                        onChange={(e) => handleChange(e) }
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
                        value={rentForm.bedrooms.code}
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
                        value={rentForm.bathrooms.code}
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
                        value={rentForm.area}
                        name="area"
                        placeholder="##"
                        maxLength="4"
                        onChange={(e) => handleChange(e)}
                        className="area-input-form"
                    />

                </div>
            </div>
            <CheckboxStyles>
                <input type="checkbox" name="pets" value="pet" onChange={(e) => handleChange(e)}/>
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
                    textAlign="justify"
                    maxLength="200"
                    value={rentForm.aboutThisProperty}
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
                    fileValue={rentForm.file}
                    handleChange={(e) => handleChange(e)}
                />
            </div>
        </form>
    )
}

export default FormRent;
