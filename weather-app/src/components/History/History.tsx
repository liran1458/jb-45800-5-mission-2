import { useEffect, useState } from "react";
import "./History.css";
import type SearchHistoryModel from "../../models/searchHistoryModel";

function History() {
    const [history, setHistory] = useState<SearchHistoryModel[]>([]);

    useEffect(() => {
        const historyFromStorage = localStorage.getItem("weatherHistory");

        if (historyFromStorage) {
            const historyArray: SearchHistoryModel[] = JSON.parse(historyFromStorage);
            setHistory(historyArray);
        }
    }, []);

    return (
        <div className="History">
            <h2>Search History</h2>

            <table>
                <thead>
                    <tr>
                        <th>Date And Time</th>
                        <th>City</th>
                        <th>Country</th>
                    </tr>
                </thead>

                <tbody>
                    {history.map((item) => (
                        <tr key={item.dateTime + item.city}>
                            <td>{item.dateTime}</td>
                            <td>{item.city}</td>
                            <td>{item.country}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default History;