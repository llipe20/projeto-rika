import React from "react";
import Form from "../Form";

const MedicoPage = ({user}) => {
    return (
        <div className="flex flex-col justify-start items-center gap-5 w-full min-h-screen bg-gray-300">
           <div>
                {/* ADICIONAR UMA NAV BAR AQUI */}
           </div>
           <main className="flex justify-between items-center w-full h-auto gap-5 p-5">
                <section className="flex flex-col justify-start items-center w-1/4 h-auto p-5 bg-white rounded-lg gap-5">
                    <div className="flex flex-col justify-between items-start bg-gray-200 rounded-lg w-full h-20 p-2">
                        <div className="flex justify-between items-center w-full">
                            <span>Nome do paciente</span>
                            <span>Horário</span>
                        </div>
                        <div className="flex justify-between items-center w-full">
                            <span>Tipo de consulta</span>
                            <span>Status</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-start bg-gray-200 rounded-lg w-full h-20 p-2">
                        <div className="flex justify-between items-center w-full">
                            <span>Nome do paciente</span>
                            <span>Horário</span>
                        </div>
                        <div className="flex justify-between items-center w-full">
                            <span>Tipo de consulta</span>
                            <span>Status</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-start bg-gray-200 rounded-lg w-full h-20 p-2">
                        <div className="flex justify-between items-center w-full">
                            <span>Nome do paciente</span>
                            <span>Horário</span>
                        </div>
                        <div className="flex justify-between items-center w-full">
                            <span>Tipo de consulta</span>
                            <span>Status</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-start bg-gray-200 rounded-lg w-full h-20 p-2">
                        <div className="flex justify-between items-center w-full">
                            <span>Nome do paciente</span>
                            <span>Horário</span>
                        </div>
                        <div className="flex justify-between items-center w-full">
                            <span>Tipo de consulta</span>
                            <span>Status</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-start bg-gray-200 rounded-lg w-full h-20 p-2">
                        <div className="flex justify-between items-center w-full">
                            <span>Nome do paciente</span>
                            <span>Horário</span>
                        </div>
                        <div className="flex justify-between items-center w-full">
                            <span>Tipo de consulta</span>
                            <span>Status</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-start bg-gray-200 rounded-lg w-full h-20 p-2">
                        <div className="flex justify-between items-center w-full">
                            <span>Nome do paciente</span>
                            <span>Horário</span>
                        </div>
                        <div className="flex justify-between items-center w-full">
                            <span>Tipo de consulta</span>
                            <span>Status</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-start bg-gray-200 rounded-lg w-full h-20 p-2">
                        <div className="flex justify-between items-center w-full">
                            <span>Nome do paciente</span>
                            <span>Horário</span>
                        </div>
                        <div className="flex justify-between items-center w-full">
                            <span>Tipo de consulta</span>
                            <span>Status</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-start bg-gray-200 rounded-lg w-full h-20 p-2">
                        <div className="flex justify-between items-center w-full">
                            <span>Nome do paciente</span>
                            <span>Horário</span>
                        </div>
                        <div className="flex justify-between items-center w-full">
                            <span>Tipo de consulta</span>
                            <span>Status</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-start bg-gray-200 rounded-lg w-full h-20 p-2">
                        <div className="flex justify-between items-center w-full">
                            <span>Nome do paciente</span>
                            <span>Horário</span>
                        </div>
                        <div className="flex justify-between items-center w-full">
                            <span>Tipo de consulta</span>
                            <span>Status</span>
                        </div>
                    </div>
                </section>
                <section className="flex justify-center items-center w-3/4 h-auto bg-white rounded-lg p-5">
                    <Form id={'readConsulta'}/>
                </section>
           </main>
        </div>
    )
}

export default MedicoPage