import React, { useEffect, useState } from "react";
import * as C from './style'
import apiTransactions from "../../services/api";
import {FcSearch} from 'react-icons/fc'

export const Home = () => {

    const[transactions, setTransactions] = useState();
    const[loading, setLoading] = useState(true) 

    useEffect(() => {
            apiTransactions.get()
            .then((response) => {
                setTransactions(response.data)
                console.log(response.data)
                setLoading(false)
            })
    }, [])

    return(
        <C.Container>
            <C.Filters>
                <FcSearch/>
                <input placeholder="Pesquise pelo titulo"/>
                <select>
                    <option>Status</option>
                    <option>Processando</option>
                    <option>Solicitado</option>
                    <option>Concluída</option>
                </select>
            </C.Filters>
            <C.DataTable>
                <table>
                    <thead>
                        <tr>
                            <th>Olá</th>
                            <th>Olá</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Hello</td>
                            <td>Hello</td>
                        </tr>
                    </tbody>
                </table>
            </C.DataTable>
        </C.Container>
    )
}