import React, {useState} from 'react'
import { DatePicker, Form, Input, Button, Table } from 'antd'
import { SwapOutlined } from '@ant-design/icons'
import axios from 'axios';
import "./Homepage.css";

export function HomePage() {

  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState(null);
  const [data, setData] = useState([]);

  const submitHandler = async() =>{
    // console.log(source, destination, date);
  const response = await axios.get(
    'https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${source}&destination=${destination}&date=${date}')

    const data = response.data.map(bus =>{
      return {
        key: bus.id,
        name: bus.busName,
        departure: bus.departureTime,
        arrival: bus.arrivalTime,
        rating: "8/10",
        price: bus.ticketPrice,
      }
    })
    [
      {
         "id": "1",
         "busName": "zing Bus",
         "ticketPrice": "480",
         "arrivalTime": "12:09AM",
         "departureTime": "6:00PM",
         "source": "jaipur",
         "destination": "delhi",
         "date": "2023-01-21"
      },
      {
         "id": "2",
         "busName": "Shree Bus",
         "ticketPrice": "300",
         "arrivalTime": "12:00PM",
         "departureTime": "6:00AM",
         "source": "chandigarh",
         "destination": "delhi",
         "date": "2023-03-20"
      },
      {
         "id": "3",
         "busName": "maxx Bus",
         "ticketPrice": "900",
         "arrivalTime": "5:00AM",
         "departureTime": "6:00AM",
         "source": "pune",
         "destination": "mumbai",
         "date": "2023-03-25"
      },
      {
         "id": "4",
         "busName": "A1 Express",
         "ticketPrice": "550",
         "arrivalTime": "11:00PM",
         "departureTime": "5:00AM",
         "source": "mumbai",
         "destination": "goa",
         "date": "2023-02-14"
      },
      {
         "id": "5",
         "busName": "Super Fast",
         "ticketPrice": "400",
         "arrivalTime": "9:00AM",
         "departureTime": "4:00PM",
         "source": "kolkata",
         "destination": "bhubaneswar",
         "date": "2023-04-01"
      },
      {
         "id": "6",
         "busName": "Traveller",
         "ticketPrice": "320",
         "arrivalTime": "8:00PM",
         "departureTime": "6:00AM",
         "source": "chennai",
         "destination": "bangalore",
         "date": "2023-05-10"
      },
      {
         "id": "7",
         "busName": "Green Line",
         "ticketPrice": "250",
         "arrivalTime": "7:00PM",
         "departureTime": "6:00AM",
         "source": "hyderabad",
         "destination": "vijayawada",
         "date": "2023-06-15"
      },
      {
         "id": "8",
         "busName": "King's Bus",
         "ticketPrice": "600",
         "arrivalTime": "6:00PM",
         "departureTime": "5:00AM",
         "source": "ahmedabad",
         "destination": "surat",
         "date": "2023-07-05"
      },
      {
         "id": "9",
         "busName": "Royal Express",
         "ticketPrice": "750",
         "arrivalTime": "9:00PM",
         "departureTime": "7:00AM",
         "source": "lucknow",
         "destination": "kanpur",
         "date": "2023-08-20"
      },
      {
         "id": "10",
         "busName": "City Rider",
         "ticketPrice": "350",
         "arrivalTime": "8:00PM",
         "departureTime": "6:00AM",
         "source": "jaipur",
         "destination": "ajmer",
         "date": "2023-09-15"
      },
      {
         "id": "11",
         "busName": "Star Bus",
         "ticketPrice": "450",
         "arrivalTime": "9:00PM",
         "departureTime": "7:00AM",
         "source": "kolkata",
         "destination": "siliguri",
         "date": "2023-10-01"
      },
      {
         "id": "12",
         "busName": "Jupiter",
         "ticketPrice": "500",
         "arrivalTime": "10:00PM",
         "departureTime": "8:00AM",
         "source": "mumbai",
         "destination": "pune",
         "date": "2023-11-15"
      },
      {
         "id": "13",
         "busName": "Delta",
         "ticketPrice": "600",
         "arrivalTime": "11:00PM",
         "departureTime": "9:00AM",
         "source": "delhi",
         "destination": "jaipur",
         "date": "2023-12-01"
      },
      {
         "id": "14",
         "busName": "Sky Bus",
         "ticketPrice": "700",
         "arrivalTime": "12:00AM",
         "departureTime": "10:00AM",
         "source": "bangalore",
         "destination": "mysore",
         "date": "2023-01-01"
      },
      {
         "id": "16",
         "busName": "Super Ultra ProMax Train",
         "ticketPrice": "550",
         "arrivalTime": "1:00AM",
         "departureTime": "11:00AM",
         "source": "chandigarh",
         "destination": "ludhiana",
         "date": "2023-02-14"
      },
      {
         "id": "16",
         "busName": "Superior",
         "ticketPrice": "550",
         "arrivalTime": "1:00AM",
         "departureTime": "11:00AM",
         "source": "chandigarh",
         "destination": "ludhiana",
         "date": "2023-02-14"
      },
      {
         "id": "17",
         "busName": "Rapid",
         "ticketPrice": "400",
         "arrivalTime": "2:00AM",
         "departureTime": "12:00PM",
         "source": "hyderabad",
         "destination": "vijayawada",
         "date": "2023-03-01"
      },
      {
         "id": "18",
         "busName": "Voyager",
         "ticketPrice": "320",
         "arrivalTime": "3:00AM",
         "departureTime": "1:00PM",
         "source": "ahmedabad",
         "destination": "surat",
         "date": "2023-04-10"
      },
      {
         "id": "19",
         "busName": "Ace",
         "ticketPrice": "250",
         "arrivalTime": "4:00AM",
         "departureTime": "2:00PM",
         "source": "pune",
         "destination": "mumbai",
         "date": "2023-05-15"
      },
      {
         "id": "20",
         "busName": "Express",
         "ticketPrice": "450",
         "arrivalTime": "5:00AM",
         "departureTime": "3:00PM",
         "source": "kolkata",
         "destination": "bhubaneswar",
         "date": "2023-06-01"
      },
      {
         "id": "21",
         "busName": "zing Bus-Luxury",
         "ticketPrice": "480",
         "arrivalTime": "12:09AM",
         "departureTime": "6:00PM",
         "source": "jaipur",
         "destination": "delhi",
         "date": "2023-01-21"
      },
      {
         "id": "22",
         "busName": "Shree Bus-Luxury",
         "ticketPrice": "300",
         "arrivalTime": "12:00PM",
         "departureTime": "6:00AM",
         "source": "chandigarh",
         "destination": "delhi",
         "date": "2023-03-20"
      },
      {
         "id": "23",
         "busName": "maxx Bus-Luxury",
         "ticketPrice": "900",
         "arrivalTime": "5:00AM",
         "departureTime": "6:00AM",
         "source": "pune",
         "destination": "mumbai",
         "date": "2023-03-25"
      },
      {
         "id": "24",
         "busName": "A1 Express-Luxury",
         "ticketPrice": "550",
         "arrivalTime": "11:00PM",
         "departureTime": "5:00AM",
         "source": "mumbai",
         "destination": "goa",
         "date": "2023-02-14"
      },
      {
         "id": "25",
         "busName": "Super Fast-Luxury",
         "ticketPrice": "400",
         "arrivalTime": "9:00AM",
         "departureTime": "4:00PM",
         "source": "kolkata",
         "destination": "bhubaneswar",
         "date": "2023-04-01"
      },
      {
         "id": "26",
         "busName": "Traveller-Luxury",
         "ticketPrice": "320",
         "arrivalTime": "8:00PM",
         "departureTime": "6:00AM",
         "source": "chennai",
         "destination": "bangalore",
         "date": "2023-05-10"
      },
      {
         "id": "27",
         "busName": "Green Line-Luxury",
         "ticketPrice": "250",
         "arrivalTime": "7:00PM",
         "departureTime": "6:00AM",
         "source": "hyderabad",
         "destination": "vijayawada",
         "date": "2023-06-15"
      },
      {
         "id": "28",
         "busName": "King's Bus-Luxury",
         "ticketPrice": "600",
         "arrivalTime": "6:00PM",
         "departureTime": "5:00AM",
         "source": "ahmedabad",
         "destination": "surat",
         "date": "2023-07-05"
      },
      {
         "id": "29",
         "busName": "Royal Express-Luxury",
         "ticketPrice": "750",
         "arrivalTime": "9:00PM",
         "departureTime": "7:00AM",
         "source": "lucknow",
         "destination": "kanpur",
         "date": "2023-08-20"
      },
      {
         "id": "30",
         "busName": "State Rider",
         "ticketPrice": "350",
         "arrivalTime": "8:00PM",
         "departureTime": "6:00AM",
         "source": "jaipur",
         "destination": "ajmer",
         "date": "2023-09-15"
      },
      {
         "id": "31",
         "busName": "Moon Bus",
         "ticketPrice": "450",
         "arrivalTime": "9:00PM",
         "departureTime": "7:00AM",
         "source": "kolkata",
         "destination": "siliguri",
         "date": "2023-10-01"
      },
      {
         "id": "32",
         "busName": "Marshall Bus",
         "ticketPrice": "500",
         "arrivalTime": "10:00PM",
         "departureTime": "8:00AM",
         "source": "mumbai",
         "destination": "pune",
         "date": "2023-11-15"
      }
   ]
    setData(data);
  };

  const columns = [
    {
      title: "Name",
      dataindex: "name",
      key: "name",
    },
    {
      title: "Departure",
      dataindex: "departure",
      key: "departure",
    },
    {
      title: "Arrival",
      dataindex: "arrival",
      key: "arrival",
    },
    {
      title: "Rating",
      dataindex: "rating",
      key: "drating",
    },
    {
      title: "Price",
      dataindex: "price",
      key: "price",
    }

  ]

  return (
    <div className='formcontainer'>
        <Form className='form-wrapper'>
            <div>
            <label htmlFor="from">From</label>
            <Form.Item
              id="from"
              name="from"
              rules={[
                { 
                  required:"true",
                  message: 'Please input your source!' }]}>
                <Input value={source} onChange={(e) => setSource(e.target.value)}/>
            </Form.Item>
            </div>

            <div className='swap'>
            <Form.Item
              id="swap"
              name="swap">

              <Button onClick={(e) =>{
                const currentSource = source;
                const currentDestination = destination;
                setDestination(currentSource);
                setSource(currentDestination);
                console.log("clicked", source, destination);
              }}>
              <SwapOutlined />
              </Button>

            </Form.Item>
            </div>

            <div>
            <label htmlFor="to">To</label>
            <Form.Item
              id="to"
              name="to"
              rules={[
                { 
                  required:"true",
                  message: 'Please input your destination!' }]}>
                <Input value={destination} onChange={(e) => setDestination(e.target.value)}/>
            </Form.Item>
            </div>

            <div>
              <label htmlFor='date'>Date</label>
              <Form.Item
              id="date"
              name="date"
              rules={[
                { 
                  required:"true",
                  message: 'Please input your journey date!'}]}>
              <DatePicker 
                value={date}
                onChange={(date,dateString) =>{
                setDate(dateString);
              }}/>
              </Form.Item>
            </div>

            <Form.Item>
              <Button
               className='button'
               type="primary" danger
               htmlType="submit"
               onClick={submitHandler}>Search Buses</Button>
            </Form.Item>
        </Form>
        {data? (
        <Table columns={columns} dataSource={data}/>
        ) : (
          <h4>No buses available</h4>
        )}
    </div>
  )
}
