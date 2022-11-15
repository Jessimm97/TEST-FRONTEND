import React, { useState } from "react";
import { useSelector } from 'react-redux'



const Modall = (props) => {
 

    var { value = [] } = useSelector((state) => state.info)

    const [showModal, setShowModal] = useState(false);
    const [showCode, setShowCode] = useState(false);
    const [number, setNumber] = useState(1);
    const [numberNight, setNumberNight] = useState(1);


    const codeGenerator = () => {
        //Función para generar núnmeros aleatorios para el código de reservación
        var code = Math.floor(Math.random() * 100000);
        return (<p className="text-xl text-green-500 text-center"> XCARET{code}</p>)
    }

    const addPersons = () => {
        //Funcón para cambio de valor de agregar personas
        const changeAddPerson = (e) => {
            e.preventDefault();
            setNumber(e.target.value)

        }
        //Función para cambio de valor de agregar noche
        const changeAddNight = (e) => {
            e.preventDefault();
            setNumberNight(e.target.value)

        }



        const priceNigth = 10000 * numberNight
        const pricePerson = 1300 * number
        const total = priceNigth + pricePerson
        const currencyFormatter = (value) => {
            if (typeof value !== 'number') value = 0.0
            value = value.toFixed(2)

            const [currency, decimal] = value.split('.')
            return `$${currency.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}.${decimal}`
        }


        return (
            <div className=" flex flex-col text-center items-center">
                <label className="text-xl ark:text-gray-500 font-sans" for="tentacles">{value.navbar?.menu?.lang.title == "es" ? "Add Pepole" : "Agregar Personas"}</label>
                <input className="" type="number" onChange={(e) => changeAddPerson(e)} value={number} name="tentacles" min="1" max="100" />
                <label className="text-xl ark:text-gray-500 font-sans" for="tentacles">{value.navbar?.menu?.lang.title == "es" ? "Add Nights" : "Agregar Noches"}</label>
                <input className="" type="number" onChange={(e) => changeAddNight(e)} value={numberNight} name="tentacles" min="1" max="100" />

                <div className="py-6">
                    <p className="text-xl ark:text-gray-500 font-sans">{value.navbar?.menu?.lang.title == "es" ? "Nights" : "Noches"}   {numberNight}</p>
                    <p className="text-xl ark:text-gray-500 font-sans">{value.navbar?.menu?.lang.title == "es" ? "Pepole" : "Personas"} {number} </p>
                    <p className="text-xl ark:text-gray-500 font-sans">Total: {currencyFormatter(total)}</p>
                </div>

                <button className="className='border font-serif border-gray border-2 w-40 py-5 " onClick={() => setShowCode(true)}>Save</button>
            </div>
        )

    }
    return (
        <>
            <button
                className="className='border font-serif border-black border-2 w-40 py-5 '"
                type="button"
                onClick={() => setShowModal(true)}
            >
                {props.value}
            </button>
            {showModal ? (
                <>
                    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">

                                    {value.navbar?.menu?.lang.title == "es" ? <h3 className="text-3xl font-semibold">General Info</h3> : <h3 className="text-3xl font-semibold">Información General</h3>}
                                    <button
                                        className="bg-transparent border-0 text-black float-right"
                                        onClick={() => (setShowModal(false), setShowCode(false))}
                                    >
                                        <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                                            x
                                        </span>
                                    </button>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    {value.navbar?.menu?.lang.title == "es" ? <div className="text-2xl p-5"> This is your code of reservation</div> : <div className="text-2xl p-5"> Este es tu código de reservación </div>}
                                    {addPersons()}
                                    {showCode == false ? " " : codeGenerator()}
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={() => (setShowModal(false), setShowCode(false))}
                                    >

                                        {value.navbar?.menu?.lang.title == "es" ? "Close" : "Cerrar"}

                                    </button>
                                    <a
                                        className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        href="/thankYouPage"
                                    >
                                        {value.navbar?.menu?.lang.title == "es" ? "Reserve" : "Reservar"}

                                    </a>


                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );


};

export default Modall