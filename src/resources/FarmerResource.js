import React, { useState, useEffect } from 'react'
import {
  List,
  Datagrid,
  TextField,
  Create,
  Edit,
  SimpleForm,
  TextInput,
  DateTimeInput,
  DateField,
  DateInput,
  NumberInput,
  ShowButton,
  NullableBooleanInput,
  required,
  Pagination,
  DeleteButton,
  RadioButtonGroupInput,
  ImageInput,
  ImageField,
  SelectInput,
  minLength,
  maxLength,ReferenceInput

} from 'react-admin'
import { useFormState } from 'react-final-form';

import firebase from 'firebase'
const farmerFilters = [
  <TextInput source='mobileNumber' label='Mobile Number search' alwaysOn/>,
  <TextInput source='aadharNumber' label='Aadhar search' alwaysOn/>,
  <TextInput source='beneficiaryName' label='Farmer Name' alwaysOn/>,
  <TextInput source='state' label='State' alwaysOn/>,
  <TextInput source='district' label='District' alwaysOn/>,
  <TextInput source='areaManager' label='Area Manager' alwaysOn/>,
]

export const FarmerCreate = (props) => {
  return (
    <Create title='Create a Farmer' {...props}>
      <FarmerForm />
    </Create>
  )
}

export const FarmerEdit = (props) => {
  return (
    <Edit title='Edit a Farmer' {...props}>
      <FarmerForm />
    </Edit>
  )
}

export const FarmerList = (props) => {
  const [employeeUser, setEmployeeUser] = useState('')
  const [employeeRole, setEmployeeRole] = useState('')
  const db = firebase.firestore()
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        db.collection('users')
          .where('user', '==', user.email)
          .get()
          .then((querySnapshot) => {
            if (querySnapshot.size > 0) {
              querySnapshot.forEach((snapshot) => {
                let userData = snapshot.data()
                setEmployeeRole(userData.role)
              })
            }
          })
      }
      setEmployeeUser(user.email)
      // console.log('employeeRole', employeeRole)
    })
  }, [])

  return (
<List
      {...props}
      pagination={<Pagination rowsPerPageOptions={[10, 20, 50]} perPage={30} />}
      filter={{ createdby: employeeRole!=='admin' ? employeeUser : ''}}
      filters={farmerFilters}
    >
      <Datagrid>
        <ImageField source='pictures.src' label='Farmer Image' />
        <TextField source='beneficiaryName' />
        <DateField
          source='createdate'
          options={{
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }}
        />
        <TextField source='aadharNumber' label='Aadhar Number' />
        <TextField source='mobileNumber' label='Mobile' />
        <ShowButton label='' />
        <DeleteButton />
      </Datagrid>
    </List>
  )
}
const state = ['Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Ladakh', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Narora', 'Odisha', 'Pondicherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'];
const districts = {
  'Andaman and Nicobar Islands': ['Bombuflat', 'Garacharma', 'Port Blair', 'Rangat'], 
  'Andhra Pradesh': [  
    'Anantapur',
    'Chittoor',
    'East Godavari',
    'Guntur',
    'Krishna',
    'Kurnool',
    'Nellore',
    'Prakasam',
    'Srikakulam',
    'Visakhapatnam',
    'Vizianagaram',
    'West Godavari',
    'YSR Kadapa'
 ],
'Arunachal Pradesh': [  
    'Tawang',
    'West Kameng',
    'East Kameng',
    'Papum Pare',
    'Kurung Kumey',
    'Kra Daadi',
    'Lower Subansiri',
    'Upper Subansiri',
    'West Siang',
    'East Siang',
    'Siang',
    'Upper Siang',
    'Lower Siang',
    'Lower Dibang Valley',
    'Dibang Valley',
    'Anjaw',
    'Lohit',
    'Namsai',
    'Changlang',
    'Tirap',
    'Longding'
 ],
'Assam':[  
    'Baksa',
    'Barpeta',
    'Biswanath',
    'Bongaigaon',
    'Cachar',
    'Charaideo',
    'Chirang',
    'Darrang',
    'Dhemaji',
    'Dhubri',
    'Dibrugarh',
    'Goalpara',
    'Golaghat',
    'Hailakandi',
    'Hojai',
    'Jorhat',
    'Kamrup Metropolitan',
    'Kamrup',
    'Karbi Anglong',
    'Karimganj',
    'Kokrajhar',
    'Lakhimpur',
    'Majuli',
    'Morigaon',
    'Nagaon',
    'Nalbari',
    'Dima Hasao',
    'Sivasagar',
    'Sonitpur',
    'South Salmara-Mankachar',
    'Tinsukia',
    'Udalguri',
    'West Karbi Anglong'
 ],
'Bihar':[  
    'Araria',
    'Arwal',
    'Aurangabad',
    'Banka',
    'Begusarai',
    'Bhagalpur',
    'Bhojpur',
    'Buxar',
    'Darbhanga',
    'East Champaran (Motihari)',
    'Gaya',
    'Gopalganj',
    'Jamui',
    'Jehanabad',
    'Kaimur (Bhabua)',
    'Katihar',
    'Khagaria',
    'Kishanganj',
    'Lakhisarai',
    'Madhepura',
    'Madhubani',
    'Munger (Monghyr)',
    'Muzaffarpur',
    'Nalanda',
    'Nawada',
    'Patna',
    'Purnia (Purnea)',
    'Rohtas',
    'Saharsa',
    'Samastipur',
    'Saran',
    'Sheikhpura',
    'Sheohar',
    'Sitamarhi',
    'Siwan',
    'Supaul',
    'Vaishali',
    'West Champaran'
 ],
'Chandigarh':[  
    'Chandigarh'
 ],
'Chhattisgarh':[  
    'Balod',
    'Baloda Bazar',
    'Balrampur',
    'Bastar',
    'Bemetara',
    'Bijapur',
    'Bilaspur',
    'Dantewada (South Bastar)',
    'Dhamtari',
    'Durg',
    'Gariyaband',
    'Janjgir-Champa',
    'Jashpur',
    'Kabirdham (Kawardha)',
    'Kanker (North Bastar)',
    'Kondagaon',
    'Korba',
    'Korea (Koriya)',
    'Mahasamund',
    'Mungeli',
    'Narayanpur',
    'Raigarh',
    'Raipur',
    'Rajnandgaon',
    'Sukma',
    'Surajpur  ',
    'Surguja'
 ],
'Dadra and Nagar Haveli': ['Dadra and Nagar Haveli'],
'Daman and Diu':[  
    'Daman',
    'Diu'
 ],
'Delhi':[  
    'Central Delhi',
    'East Delhi',
    'New Delhi',
    'North Delhi',
    'North East  Delhi',
    'North West  Delhi',
    'Shahdara',
    'South Delhi',
    'South East Delhi',
    'South West  Delhi',
    'West Delhi'
 ],
'Goa':[  
    'North Goa',
    'South Goa'
 ],
'Gujarat':[  
    'Ahmedabad',
    'Amreli',
    'Anand',
    'Aravalli',
    'Banaskantha (Palanpur)',
    'Bharuch',
    'Bhavnagar',
    'Botad',
    'Chhota Udepur',
    'Dahod',
    'Dangs (Ahwa)',
    'Devbhoomi Dwarka',
    'Gandhinagar',
    'Gir Somnath',
    'Jamnagar',
    'Junagadh',
    'Kachchh',
    'Kheda (Nadiad)',
    'Mahisagar',
    'Mehsana',
    'Morbi',
    'Narmada (Rajpipla)',
    'Navsari',
    'Panchmahal (Godhra)',
    'Patan',
    'Porbandar',
    'Rajkot',
    'Sabarkantha (Himmatnagar)',
    'Surat',
    'Surendranagar',
    'Tapi (Vyara)',
    'Vadodara',
    'Valsad'
 ],
'Haryana':[  
    'Ambala',
    'Bhiwani',
    'Charkhi Dadri',
    'Faridabad',
    'Fatehabad',
    'Gurgaon',
    'Hisar',
    'Jhajjar',
    'Jind',
    'Kaithal',
    'Karnal',
    'Kurukshetra',
    'Mahendragarh',
    'Mewat',
    'Palwal',
    'Panchkula',
    'Panipat',
    'Rewari',
    'Rohtak',
    'Sirsa',
    'Sonipat',
    'Yamunanagar'
 ],
'Himachal Pradesh':[  
    'Bilaspur',
    'Chamba',
    'Hamirpur',
    'Kangra',
    'Kinnaur',
    'Kullu',
    'Lahaul &amp; Spiti',
    'Mandi',
    'Shimla',
    'Sirmaur (Sirmour)',
    'Solan',
    'Una'
 ],
'Jammu and Kashmir':[  
    'Anantnag',
    'Bandipore',
    'Baramulla',
    'Budgam',
    'Doda',
    'Ganderbal',
    'Jammu',
    'Kargil',
    'Kathua',
    'Kishtwar',
    'Kulgam',
    'Kupwara',
    'Leh',
    'Poonch',
    'Pulwama',
    'Rajouri',
    'Ramban',
    'Reasi',
    'Samba',
    'Shopian',
    'Srinagar',
    'Udhampur'
 ],
'Jharkhand':[  
    'Bokaro',
    'Chatra',
    'Deoghar',
    'Dhanbad',
    'Dumka',
    'East Singhbhum',
    'Garhwa',
    'Giridih',
    'Godda',
    'Gumla',
    'Hazaribag',
    'Jamtara',
    'Khunti',
    'Koderma',
    'Latehar',
    'Lohardaga',
    'Pakur',
    'Palamu',
    'Ramgarh',
    'Ranchi',
    'Sahibganj',
    'Seraikela-Kharsawan',
    'Simdega',
    'West Singhbhum'
 ],
'Karnataka':[  
    'Bagalkot',
    'Ballari (Bellary)',
    'Belagavi (Belgaum)',
    'Bengaluru (Bangalore) Rural',
    'Bengaluru (Bangalore) Urban',
    'Bidar',
    'Chamarajanagar',
    'Chikballapur',
    'Chikkamagaluru (Chikmagalur)',
    'Chitradurga',
    'Dakshina Kannada',
    'Davangere',
    'Dharwad',
    'Gadag',
    'Hassan',
    'Haveri',
    'Kalaburagi (Gulbarga)',
    'Kodagu',
    'Kolar',
    'Koppal',
    'Mandya',
    'Mysuru (Mysore)',
    'Raichur',
    'Ramanagara',
    'Shivamogga (Shimoga)',
    'Tumakuru (Tumkur)',
    'Udupi',
    'Uttara Kannada (Karwar)',
    'Vijayapura (Bijapur)',
    'Yadgir'
 ],
'Kerala':[  
    'Alappuzha',
    'Ernakulam',
    'Idukki',
    'Kannur',
    'Kasaragod',
    'Kollam',
    'Kottayam',
    'Kozhikode',
    'Malappuram',
    'Palakkad',
    'Pathanamthitta',
    'Thiruvananthapuram',
    'Thrissur',
    'Wayanad'
 ],
'Ladakh':['Kargil', 'Leh'],
'Lakshadweep':[  
    'Agatti',
    'Amini',
    'Androth',
    'Bithra',
    'Chethlath',
    'Kavaratti',
    'Kadmath',
    'Kalpeni',
    'Kilthan',
    'Minicoy'
 ],
'Madhya Pradesh':[  
    'Agar Malwa',
    'Alirajpur',
    'Anuppur',
    'Ashoknagar',
    'Balaghat',
    'Barwani',
    'Betul',
    'Bhind',
    'Bhopal',
    'Burhanpur',
    'Chhatarpur',
    'Chhindwara',
    'Damoh',
    'Datia',
    'Dewas',
    'Dhar',
    'Dindori',
    'Guna',
    'Gwalior',
    'Harda',
    'Hoshangabad',
    'Indore',
    'Jabalpur',
    'Jhabua',
    'Katni',
    'Khandwa',
    'Khargone',
    'Mandla',
    'Mandsaur',
    'Morena',
    'Narsinghpur',
    'Neemuch',
    'Panna',
    'Raisen',
    'Rajgarh',
    'Ratlam',
    'Rewa',
    'Sagar',
    'Satna',
    'Sehore',
    'Seoni',
    'Shahdol',
    'Shajapur',
    'Sheopur',
    'Shivpuri',
    'Sidhi',
    'Singrauli',
    'Tikamgarh',
    'Ujjain',
    'Umaria',
    'Vidisha'
 ],
'Maharashtra':[  
    'Ahmednagar',
    'Akola',
    'Amravati',
    'Aurangabad',
    'Beed',
    'Bhandara',
    'Buldhana',
    'Chandrapur',
    'Dhule',
    'Gadchiroli',
    'Gondia',
    'Hingoli',
    'Jalgaon',
    'Jalna',
    'Kolhapur',
    'Latur',
    'Mumbai City',
    'Mumbai Suburban',
    'Nagpur',
    'Nanded',
    'Nandurbar',
    'Nashik',
    'Osmanabad',
    'Palghar',
    'Parbhani',
    'Pune',
    'Raigad',
    'Ratnagiri',
    'Sangli',
    'Satara',
    'Sindhudurg',
    'Solapur',
    'Thane',
    'Wardha',
    'Washim',
    'Yavatmal'
 ],
'Manipur':[  
    'Bishnupur',
    'Chandel',
    'Churachandpur',
    'Imphal East',
    'Imphal West',
    'Jiribam',
    'Kakching',
    'Kamjong',
    'Kangpokpi',
    'Noney',
    'Pherzawl',
    'Senapati',
    'Tamenglong',
    'Tengnoupal',
    'Thoubal',
    'Ukhrul'
 ],
'Meghalaya':[  
    'East Garo Hills',
    'East Jaintia Hills',
    'East Khasi Hills',
    'North Garo Hills',
    'Ri Bhoi',
    'South Garo Hills',
    'South West Garo Hills ',
    'South West Khasi Hills',
    'West Garo Hills',
    'West Jaintia Hills',
    'West Khasi Hills'
 ],
'Mizoram':[  
    'Aizawl',
    'Champhai',
    'Kolasib',
    'Lawngtlai',
    'Lunglei',
    'Mamit',
    'Saiha',
    'Serchhip'
 ],
'Nagaland':[  
    'Dimapur',
    'Kiphire',
    'Kohima',
    'Longleng',
    'Mokokchung',
    'Mon',
    'Peren',
    'Phek',
    'Tuensang',
    'Wokha',
    'Zunheboto'
 ],
'Odisha':[  
    'Angul',
    'Balangir',
    'Balasore',
    'Bargarh',
    'Bhadrak',
    'Boudh',
    'Cuttack',
    'Deogarh',
    'Dhenkanal',
    'Gajapati',
    'Ganjam',
    'Jagatsinghapur',
    'Jajpur',
    'Jharsuguda',
    'Kalahandi',
    'Kandhamal',
    'Kendrapara',
    'Kendujhar (Keonjhar)',
    'Khordha',
    'Koraput',
    'Malkangiri',
    'Mayurbhanj',
    'Nabarangpur',
    'Nayagarh',
    'Nuapada',
    'Puri',
    'Rayagada',
    'Sambalpur',
    'Sonepur',
    'Sundargarh'
 ],
'Pondicherry':[  
    'Karaikal',
    'Mahe',
    'Pondicherry',
    'Yanam'
 ],
'Punjab':[  
    'Amritsar',
    'Barnala',
    'Bathinda',
    'Faridkot',
    'Fatehgarh Sahib',
    'Fazilka',
    'Ferozepur',
    'Gurdaspur',
    'Hoshiarpur',
    'Jalandhar',
    'Kapurthala',
    'Ludhiana',
    'Mansa',
    'Moga',
    'Muktsar',
    'Nawanshahr (Shahid Bhagat Singh Nagar)',
    'Pathankot',
    'Patiala',
    'Rupnagar',
    'Sahibzada Ajit Singh Nagar (Mohali)',
    'Sangrur',
    'Tarn Taran'
 ],
'Rajasthan':[  
    'Ajmer',
    'Alwar',
    'Banswara',
    'Baran',
    'Barmer',
    'Bharatpur',
    'Bhilwara',
    'Bikaner',
    'Bundi',
    'Chittorgarh',
    'Churu',
    'Dausa',
    'Dholpur',
    'Dungarpur',
    'Hanumangarh',
    'Jaipur',
    'Jaisalmer',
    'Jalore',
    'Jhalawar',
    'Jhunjhunu',
    'Jodhpur',
    'Karauli',
    'Kota',
    'Nagaur',
    'Pali',
    'Pratapgarh',
    'Rajsamand',
    'Sawai Madhopur',
    'Sikar',
    'Sirohi',
    'Sri Ganganagar',
    'Tonk',
    'Udaipur'
 ],
'Sikkim':[  
    'East Sikkim',
    'North Sikkim',
    'South Sikkim',
    'West Sikkim'
 ],
'Tamil Nadu':[  
    'Ariyalur',
    'Chennai',
    'Coimbatore',
    'Cuddalore',
    'Dharmapuri',
    'Dindigul',
    'Erode',
    'Kanchipuram',
    'Kanyakumari',
    'Karur',
    'Krishnagiri',
    'Madurai',
    'Nagapattinam',
    'Namakkal',
    'Nilgiris',
    'Perambalur',
    'Pudukkottai',
    'Ramanathapuram',
    'Salem',
    'Sivaganga',
    'Thanjavur',
    'Theni',
    'Thoothukudi (Tuticorin)',
    'Tiruchirappalli',
    'Tirunelveli',
    'Tiruppur',
    'Tiruvallur',
    'Tiruvannamalai',
    'Tiruvarur',
    'Vellore',
    'Viluppuram',
    'Virudhunagar'
 ],
'Telangana':[  
    'Adilabad',
    'Bhadradri Kothagudem',
    'Hyderabad',
    'Jagtial',
    'Jangaon',
    'Jayashankar Bhoopalpally',
    'Jogulamba Gadwal',
    'Kamareddy',
    'Karimnagar',
    'Khammam',
    'Komaram Bheem Asifabad',
    'Mahabubabad',
    'Mahabubnagar',
    'Mancherial',
    'Medak',
    'Medchal',
    'Nagarkurnool',
    'Nalgonda',
    'Nirmal',
    'Nizamabad',
    'Peddapalli',
    'Rajanna Sircilla',
    'Rangareddy',
    'Sangareddy',
    'Siddipet',
    'Suryapet',
    'Vikarabad',
    'Wanaparthy',
    'Warangal (Rural)',
    'Warangal (Urban)',
    'Yadadri Bhuvanagiri'
 ],
'Tripura':[  
    'Dhalai',
    'Gomati',
    'Khowai',
    'North Tripura',
    'Sepahijala',
    'South Tripura',
    'Unakoti',
    'West Tripura'
 ],

'Uttarakhand':[  
    'Almora',
    'Bageshwar',
    'Chamoli',
    'Champawat',
    'Dehradun',
    'Haridwar',
    'Nainital',
    'Pauri Garhwal',
    'Pithoragarh',
    'Rudraprayag',
    'Tehri Garhwal',
    'Udham Singh Nagar',
    'Uttarkashi'
 ],
'Uttar Pradesh':[  
    'Agra',
    'Aligarh',
    'Allahabad',
    'Ambedkar Nagar',
    'Amethi (Chatrapati Sahuji Mahraj Nagar)',
    'Amroha (J.P. Nagar)',
    'Auraiya',
    'Azamgarh',
    'Baghpat',
    'Bahraich',
    'Ballia',
    'Balrampur',
    'Banda',
    'Barabanki',
    'Bareilly',
    'Basti',
    'Bhadohi',
    'Bijnor',
    'Budaun',
    'Bulandshahr',
    'Chandauli',
    'Chitrakoot',
    'Deoria',
    'Etah',
    'Etawah',
    'Faizabad',
    'Farrukhabad',
    'Fatehpur',
    'Firozabad',
    'Gautam Buddha Nagar',
    'Ghaziabad',
    'Ghazipur',
    'Gonda',
    'Gorakhpur',
    'Hamirpur',
    'Hapur (Panchsheel Nagar)',
    'Hardoi',
    'Hathras',
    'Jalaun',
    'Jaunpur',
    'Jhansi',
    'Kannauj',
    'Kanpur Dehat',
    'Kanpur Nagar',
    'Kanshiram Nagar (Kasganj)',
    'Kaushambi',
    'Kushinagar (Padrauna)',
    'Lakhimpur - Kheri',
    'Lalitpur',
    'Lucknow',
    'Maharajganj',
    'Mahoba',
    'Mainpuri',
    'Mathura',
    'Mau',
    'Meerut',
    'Mirzapur',
    'Moradabad',
    'Muzaffarnagar',
    'Pilibhit',
    'Pratapgarh',
    'RaeBareli',
    'Rampur',
    'Saharanpur',
    'Sambhal (Bhim Nagar)',
    'Sant Kabir Nagar',
    'Shahjahanpur',
    'Shamali (Prabuddh Nagar)',
    'Shravasti',
    'Siddharth Nagar',
    'Sitapur',
    'Sonbhadra',
    'Sultanpur',
    'Unnao',
    'Varanasi'
 ],
'West Bengal':[  
    'Alipurduar',
    'Bankura',
    'Birbhum',
    'Burdwan (Bardhaman)',
    'Cooch Behar',
    'Dakshin Dinajpur (South Dinajpur)',
    'Darjeeling',
    'Hooghly',
    'Howrah',
    'Jalpaiguri',
    'Kalimpong',
    'Kolkata',
    'Malda',
    'Murshidabad',
    'Nadia',
    'North 24 Parganas',
    'Paschim Medinipur (West Medinipur)',
    'Purba Medinipur (East Medinipur)',
    'Purulia',
    'South 24 Parganas',
    'Uttar Dinajpur (North Dinajpur)'
 ]

};
// const states = {
//   INDIA: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'],
//   UK: ['London', 'Birmingham', 'Glasgow', 'Liverpool', 'Bristol'],
//   France: ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice'],
// };
const toChoices = items => items.map(item => ({ id: item, name: item }));

// const StateInput = props => {
//   const { values } = useFormState();
//   return (
//       <SelectInput
//           choices={values.state ? toChoices(states[values.state]) : []}
//           {...props}
//       />
//   );
// };

const CityInput = props => {
    const { values } = useFormState();
    return (
        <SelectInput
            choices={values.state ? toChoices(districts[values.state]) : []}
            {...props}
        />
    );
};

const mobileNumberValidation = (value, allValues) => {
  if (value.toString().length< 10) {
    return 'Mobile number should be minimum 10 characters in length';
}
}
const validateAadhar = [required(), minLength(12), maxLength(12) ]
const validateMobileNumber = [required(), mobileNumberValidation ]
const FarmerForm = (props) => (
  <SimpleForm {...props}>
    <TextInput source='beneficiaryName' fullWidth validate={[required()]} />
    <TextInput source='fatherName_husbandName' label='Father / Husband Name' fullWidth validate={[required()]} />
    <NumberInput source='mobileNumber' fullWidth validate={validateMobileNumber}/>
    <TextInput source='aadharNumber' fullWidth validate={validateAadhar}/>
    <TextInput source='panNumber' fullWidth />
    <NumberInput source='accountNumber' fullWidth />
    <TextInput source='ifscNumber' fullWidth />
    <TextInput source='bankName' fullWidth />
    <TextInput source='branch' fullWidth />
    <TextInput source='areaManager' fullWidth validate={[required()]}/>
    <DateInput source='dob' label='Date of Birth' fullWidth validate={[required()]} />
    <NumberInput source='age' fullWidth min={18} validate={[required()]} />
    <RadioButtonGroupInput
      source='gender'
      choices={[
        { id: 'M', name: 'Male' },
        { id: 'F', name: 'Female' },
        { id: 'O', name: 'Others' },
      ]}
    />
    <TextInput source='caste' fullWidth validate={[required()]} />
    <TextInput source='category' fullWidth validate={[required()]} />
    <TextInput source='nationality' fullWidth validate={[required()]} />
    <TextInput source='emailid' fullWidth />
    <TextInput source='subject' fullWidth  />
    <SelectInput source='state' choices={toChoices(state)} fullWidth/>
    <CityInput source='district' label='District' fullWidth/>
    <TextInput source='completeAddress' fullWidth validate={[required()]} />
    <TextInput source='totalLand' fullWidth validate={[required()]} />
    <TextInput source='anyLoan' fullWidth validate={[required()]} />
    <ImageInput source='pictures' label='Farmer pictures' accept='image/*'>
      <ImageField source='src' title='title' />
    </ImageInput>
    <NullableBooleanInput
      label='Loan Free'
      source='loanfree'
      nullLabel='Either'
      falseLabel='No'
      trueLabel='Yes'
      fullWidth
      validate={[required()]}
    />
  </SimpleForm>
)
