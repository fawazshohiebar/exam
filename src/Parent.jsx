import './App.css';
import axios from "axios";
import react from "react"
import { useState, useEffect } from 'react';
function Parent() {

    const [data, setData] = useState();
    const [oth_id, setoth_id] = useState(null);
    const [secdata, setsecdata] = useState();
    const [title, settitle] = useState();
    const [name, setname] = useState();
    const [editid, seteditid] = useState(null);
    const [editname, seteditname] = useState()

    const getter = async () => {
        await axios.get("http://localhost:4000/crud")

            .then((response) => {
                console.log(response.data);
                setData(response.data)

            })
    }

    const secondgetter = async () => {

        await axios.get(`http://localhost:4000/faz/other/?other_id=${oth_id}`)

            .then((response) => {
                console.log(response.data);
                setsecdata(response.data)

            })
    }



    const updateer = async () => {
        const data = { id: editid, title: title, name: editname };
        try {
            const response = await axios.put(`http://localhost:4000/crud/`, data);
            const movies = response.data;
            return movies;
        } catch (error) {
            console.error(error);
            return null;
        }

    }

    const deleter = async () => {

        try {
            const response = await axios.delete(`http://localhost:4000/crud/?_id=${editid}`);
            const movies = response.data;
            return movies;
        } catch (error) {
            console.error(error);
            return null;
        }

    }



    const adder = async () => {
        const data = { title: title, name: editname }
        try {
            const poster = await axios.post(`http://localhost:4000/crud`, data)
        }
        catch (error) {
            console.error(error);
            return null;
        }
    }



    const handleInputChange = (event) => {

        settitle(event.target.value);
    }

    const handle = (event) => {

        seteditname(event.target.value);
    }


    useEffect(() => {
        getter();

    }, [oth_id, title, name]);

    return (
        <div>

            <div >
                <label htmlFor="">enter the title</label>
                <input type="text" value={title} onChange={handleInputChange} />
                <br />
                <label htmlFor="">enter the name</label>
                <input type="text" value={editname} onChange={handle} />
                <br />
                <button onClick={() => adder()}>add new post</button>

            </div>

            <br />



            {data?.map((hourframe, index) => (

                <div>

                    <h1> {hourframe.title}</h1>
                    <h2>{hourframe.name}</h2>
                    <button onClick={() => { setoth_id(hourframe._id); secondgetter() }}>show the other table </button>
                    <br />
                    <br />
                    <label htmlFor="">title</label>
                    <input type="text" value={title} onChange={handleInputChange} />
                    <br />
                    <label htmlFor="">name</label>
                    <input type="text" value={editname} onChange={handle} />
                    <br />


                    <button onClick={() => { seteditid(hourframe._id); updateer() }}>edit</button>

                    <br />
                    <button onClick={() => { seteditid(hourframe._id); deleter() }}>delete</button>





                </div>



            ))}
            <br />
            <br />


            {secdata?.map((ind) => (
                <div className='back'>
                    <p>{ind.description}</p>

                    <p> {ind.feed}</p>





                </div>
            ))}

        </div>





    )






}
export default Parent;