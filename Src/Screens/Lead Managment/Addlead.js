import { Pressable, ScrollView, StyleSheet, Text, View, Modal } from 'react-native'
import React, { useState, useEffect } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors } from '../../Comman/Styles';
import { TextInput } from 'react-native-paper';
import Button from '../../Components/Button';
import { Picker } from '@react-native-picker/picker';

const Addlead = ({ navigation }) => {
    const [mobilenumner, setmobilenumber] = useState('');
    const [fullname, setfullname] = useState('');
    const [email, setemail] = useState('');
    const [source, setsource] = useState([]);
    const [selectedSource, setSelectedSource] = useState('');
    const [type, settype] = useState([]);
    const [selectedtype, setselectedtype] = useState('')
    const [category, setcategory] = useState([]);
    const [selectedcategory, setselectedcategory] = useState('')
    const [subcategory, setsubcategory] = useState([]);
    const [selectedsubcategory, setselectedsubcategory] = useState('')
    const [project, setproject] = useState([]);
    const [selectedproject, setselectedproject] = useState('')
    const [campigns, setcampigns] = useState([]);
    const [selectedcampigns, setselectedcampigns] = useState('')
    const [city, setcity] = useState([]);
    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    const [classification, setclassification] = useState([]);
    const [selectedclassification, setselectedclassification] = useState('')
    const [comments, setcomments] = useState('');
    const [address, setaddress] = useState('');
    const [showCalendarModal, setShowCalendarModal] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedCity, setSelectedCity] = useState('')
    const [error, setError] = useState('');

    const handleaddleads = async () => {
      };
      

      const handleSourceChange = (itemValue) => {
        setSelectedSource(itemValue);
    };

    const handlecategoryChange = (itemValue) => {
        console.log(itemValue)
        const selectedType = category.find(typ => typ.id === itemValue);
        console.log(selectedType)
        setselectedcategory(itemValue);
        getsubcategoryapi(selectedType.id);
    };

    const handlesubcategoryChange = (itemValue) => {
        setselectedsubcategory(itemValue)
    }

    const handleclassificationChange = (itemValue) => {
        setselectedclassification(itemValue)
    }

    const handlecampignsChange = (itemValue) => {
        setselectedcampigns(itemValue)
    }

    const handleprojectChange = (itemValue) => {
        setselectedproject(itemValue)
    }

    const handleEmailChange = (text) => {
        setemail(text);
        if (validator.isEmail(text)) {
            setError('');
        } else {
            setError('Please enter a valid email address');
        }
    };

    
    const handleStateChange = (itemValue, itemIndex) => {
        setSelectedState(itemValue);
        getcity(itemValue);
    };

    const handletypeChange = (itemValue) => {
        console.log(itemValue)
        const selectedType = type.find(typ => typ.id === itemValue);
        setselectedtype(itemValue);
        gecategoryapi(selectedType.id);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.form}>
                <View>
                    <Pressable
                        style={{
                            position: 'absolute',
                            zIndex: 1,
                            top: 20,
                            width: 40,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <AntDesign name="phone" color="#625bc5" size={25} />
                    </Pressable>
                    <TextInput
                        label="Contact Number"
                        value={mobilenumner}
                        onChangeText={text => {
                            const formattedText = text.replace(/[^0-9]/g, '');
                            setmobilenumber(formattedText.slice(0, 10));
                        }}
                        style={[styles.textinput, { paddingLeft: 30 }]}
                        mode="outlined"
                        keyboardType="numeric"
                        maxLength={10}
                    />
                </View>

                <View>
                    <Pressable
                        style={{
                            position: 'absolute',
                            zIndex: 1,
                            top: 20,
                            width: 40,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <AntDesign name="user" color="#625bc5" size={25} />
                    </Pressable>
                    <TextInput
                        label="Full Name"
                        value={fullname}
                        onChangeText={text => setfullname(text)} 
                        style={[styles.textinput, { paddingLeft: 30 }]}
                        mode="outlined"
                    />
                </View>

                <View>
                    <Pressable
                        style={{
                            position: 'absolute',
                            zIndex: 1,
                            top: 20,
                            width: 40,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <AntDesign name="mail" color="#625bc5" size={25} />
                    </Pressable>
                    <>
                        <TextInput
                            label="Email"
                            value={email}
                            onChangeText={handleEmailChange}
                            style={[styles.textinput, { paddingLeft: 30 }]}
                            mode="outlined"
                            maxLength={100}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCompleteType="email"
                        />
                        {error ? <Text style={styles.errorText}>{error}</Text> : null}
                    </>
                </View>

                <View style={{ marginTop: 10 }}>
                    <View style={styles.dropdowncontainer1}>
                        <Picker
                            selectedValue={selectedSource}
                            style={styles.picker}
                            onValueChange={handleSourceChange}>
                            <Picker.Item label="Select Source" value="" />
                            {source.map((src, index) => (
                                <Picker.Item key={index} label={src.name} value={src.id} />
                            ))}
                        </Picker>
                    </View>
                </View>

                <View style={{ marginTop: 10 }}>
                    <View style={styles.dropdowncontainer1}>
                        <Picker
                            selectedValue={selectedtype}
                            style={styles.picker}
                            onValueChange={handletypeChange}>
                            <Picker.Item label="Select Type" value="" />
                            {type.map((src, index) => (
                                <Picker.Item key={index} label={src.name} value={src.id} />
                            ))}
                        </Picker>
                    </View>
                </View>

                <View style={{ marginTop: 10 }}>
                    <View style={styles.dropdowncontainer1}>
                        <Picker
                            selectedValue={selectedcategory}
                            style={styles.picker}
                            onValueChange={handlecategoryChange}>
                            <Picker.Item label="Select Category" value="" />
                            {category.map((src, index) => (
                                <Picker.Item key={index} label={src.name} value={src.id}/>
                            ))}
                        </Picker>
                    </View>
                </View>

                <View style={{ marginTop: 10 }}>
                    <View style={styles.dropdowncontainer1}>
                        <Picker
                            selectedValue={selectedsubcategory}
                            style={styles.picker}
                            onValueChange={handlesubcategoryChange}>
                            <Picker.Item label="Select Sub Category" value="" />
                            {subcategory.map((src, index) => (
                                <Picker.Item key={index} label={src.name} value={src.id}/>
                            ))}
                        </Picker>
                    </View>
                </View>

                <View style={{ marginTop: 10 }}>
                    <View style={styles.dropdowncontainer1}>
                        <Picker
                            selectedValue={selectedclassification}
                            style={styles.picker}
                            onValueChange={handleclassificationChange}>
                            <Picker.Item label="Select Classification" value="" />
                            {classification.map((src, index) => (
                                <Picker.Item key={index} label={src.name} value={src.id}/>
                            ))}
                        </Picker>
                    </View>
                </View>


                <View style={styles.dob}>
                    <View style={{ width: '49%' }}>
                        <View style={styles.dropdowncontainer1}>
                            <Picker
                                selectedValue={selectedcampigns}
                                style={styles.picker}
                                onValueChange={handlecampignsChange}>
                                <Picker.Item label="Select Campigns" value="" />
                                {campigns.map((src, index) => (
                                    <Picker.Item key={index} label={src.campaign_name} value={src.id} />
                                ))}
                            </Picker>
                        </View>
                    </View>

                    <View style={{ width: '49%' }}>
                        <View style={styles.dropdowncontainer1}>
                            <Picker
                                selectedValue={selectedproject}
                                style={styles.picker}
                                onValueChange={handleprojectChange}>
                                <Picker.Item label="Select Project" value="" />
                                {project.map((src, index) => (
                                    <Picker.Item key={index} label={src.name} value={src.id} />
                                ))}
                            </Picker>
                        </View>
                    </View>
                </View>


                <View style={styles.dob}>
                    <View style={styles.dropdowncontainer}>
                        <Picker
                            selectedValue={selectedState}
                            dropdownIconRippleColor={1}
                            style={styles.picker}
                            onValueChange={handleStateChange}>
                            <Picker.Item label="Select State" value="" />
                            {states.map((state, index) => (
                                <Picker.Item key={index} label={state} value={state} />
                            ))}
                        </Picker>

                    </View>

                    <View style={styles.dropdowncontainer}>
                        <Picker
                            selectedValue={selectedCity}
                            style={styles.picker}
                            onValueChange={(city) => setSelectedCity(city)}>
                            <Picker.Item label="Select City" value="" />
                            {city.map((district, index) => (
                                <Picker.Item key={index} label={district.District} value={district.District} />
                            ))}
                        </Picker>
                    </View>
                </View>

                <View>
                    <TextInput
                        label="Enter Address"
                        value={address}
                        onChangeText={text => setaddress(text)} 
                        style={[styles.textinput]}
                        mode="outlined"
                    />
                    
                </View>

                <View>
                    <TextInput
                        label="Enter Comments"
                        value={comments}
                        onChangeText={text => setcomments(text)} 
                        style={[styles.textinput]}
                        mode="outlined"
                    />
                </View>

            </View>

            <Pressable style={{ top: 20 }} onPress={handleaddleads}>
                <Button text="Submit" />
            </Pressable>

            <View style={{ height: 30 }}></View>
        </ScrollView>
    )
}

export default Addlead

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    textinput: {
        marginTop: 10,
    },
    form: {
        margin: 10
    },
    dob: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    picker: {
        borderBlockColor: 'black',
        borderWidth: 1,
        borderColor: 'black',
    },
    dropdowncontainer: {
        width: '49%',
        borderWidth: 1,
        height: 48,
        justifyContent: 'center',
        borderRadius: 5,
        borderColor: '#625bc5'
    },
    dropdowncontainer1: {
        borderWidth: 1,
        height: 48,
        justifyContent: 'center',
        borderRadius: 5,
        borderColor: '#625bc5'
    }
})