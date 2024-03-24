import React from "react";
import Inputs from "./Input";

const Form = ({ id, style }) => {

    const especialidades = [
        {
            "id" : 1,
            "tipo" : "Diabetes",
            "medico" : 1
        },
        {
            "id" : 2,
            "tipo" : "Revisional",
            "medico" : 1
        },
        {
            "id" : 3,
            "tipo" : "ASO/Admicional",
            "medico" : 2
        },
        {
            "id" : 4,
            "tipo" : "Criança",
            "medico" : 2
        },
        {
            "id" : 5,
            "tipo" : "Colesterol",
            "medico" : 3
        },
        {
            "id" : 6,
            "tipo" : "Urgencia",
            "medico" : 3
        }
    ]
    const exames = [
        {
            "id" : 1,
            "tipo" : "Glicemia"
        },
        {
            "id" : 2,
            "tipo" : "Colesterol"
        },
        {
            "id" : 3,
            "tipo" : "Raio X"
        },
        {
            "id" : 4,
            "tipo" : "Ultrassom"
        },
        {
            "id" : 5,
            "tipo" : "Sangue"
        },
        {
            "id" : 6,
            "tipo" : "Teste fisico"
        },
        {
            "id" : 7,
            "tipo" : "Exame de urina"
        },
        {
            "id" : 8,
            "tipo" : "Exame cardiovascular"
        }
    ]

    return (
        <div className="w-full h-full">
            <form id={id} className="flex flex-col justify-start items-start w-full h-full gap-6 p-3">
                {/* Dados do usuário */}
                <section className="flex flex-col justify-start items-start w-full h-auto gap-6">
                    <span className="text-xl font-bold border-b-2 border-black w-full text-start pb-3">Dados do paciente</span>

                    <div className="flex justify-between items-start w-full h-auto">
                        <Inputs id={"paciente"} type={"text"} label={"Nome completo:"} />
                        <Inputs id={"cpf"} type={"text"} label={"CPF/CNPJ:"} />
                    </div>
                    <div className="flex justify-between items-start w-full h-auto">
                        <Inputs id={"nascimento"} type={"date"} label={"Nascimento:"} />
                        <Inputs id={"contato"} type={"text"} label={"Contato:"} />
                    </div>
                </section>
                {/* Dados do médico */}
                <section className="flex flex-col justify-start items-start w-full h-auto gap-6">
                    <span className="text-xl font-bold border-b-2 border-black w-full text-start pb-3">Médico</span>

                    <div className="flex justify-between items-start w-full h-auto">
                        <Inputs id={"medico"} type={"text"} label={"Médico:"} />
                        <Inputs id={"dataAgendamento"} type={"date"} label={"Data agendamento:"} />
                    </div>
                </section>
                {/* Dados da consulta */}
                <section className="flex flex-col justify-start items-start w-full h-auto gap-6">
                    <span className="text-xl font-bold border-b-2 border-black w-full text-start pb-3">Dados da consulta</span>

                    <div className="flex justify-between items-start w-full h-auto">
                        <div className="flex flex-col justify-start items-start gap-2 W-full">
                            <label htmlFor="status">Especialidade: </label>
                            <select name="status" id="status" className="w-96 h-8 bg-gray-200 p-1 rounded-lg shadow">
                            {especialidades.map((element) => (
                                <option key={element.tipo} value={element.tipo}>
                                {element.tipo}
                                </option>
                            ))}
                            </select>
                        </div>
                        <Inputs id={"dataConsulta"} type={"datetime-local"} label={"Data da consulta:"} />
                    </div>
                    <div className="flex justify-between items-start w-full h-auto">
                        <div className="flex flex-col justify-start items-start gap-3 w-full h-auto">
                            <span className="text-bold">Exames requisitados:</span>
                            {exames.map((element) => (
                            <div key={element.tipo} className="flex justify-start items-center gap-3">
                                <input type="radio" id={element.tipo} name={element.tipo} value={element.tipo} />
                                <label htmlFor={element.tipo}>{element.tipo}</label>
                            </div>
                            ))}
                        </div>
                        <div className="flex flex-col justify-between items-start w-full h-auto gap-5">
                            <div className="flex flex-col justify-start items-start gap-2">
                                <label htmlFor="sintomas">Sintomas:</label>
                                <textarea name="sintomas" id="sintomas" cols="60" rows="4" className="shadow p-3 bg-gray-200 rounded-lg"></textarea>
                            </div>
                            <div className="flex flex-col justify-start items-start gap-2">
                                <label htmlFor="status">Status: </label>
                                <select name="status" id="status" className="w-36 h-8 bg-gray-200 p-1 rounded-lg shadow">
                                    <option value="agendado">Agendado</option>
                                    <option value="proximo">Em andamento</option>
                                    <option value="concluido">Concluido</option>
                                    <option value="concelado">Cancelado</option>
                                </select>
                            </div>
                            <div className="flex justify-end items-center w-full h-auto">
                                <button className="w-32 h-10 p-1 bg-green-600 shadow rounded-lg">
                                    Salvar
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        </div>
    )
}

export default Form;
