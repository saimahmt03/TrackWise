import { tableStyles } from "./table.style";

function Table({ columns, data }) {
    return (
        <table className={tableStyles.table}>
            <thead className={tableStyles.thead}>
                <tr>
                    {columns.map((col, index) => (
                        <th key={index} className={tableStyles.th}>
                            {col.header}
                        </th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {data?.length > 0 ? (
                    data.map((row, rowIndex) => (
                        <tr key={row.id || rowIndex} className={tableStyles.tr}>
                            {columns.map((col, colIndex) => (
                                <td key={colIndex} className={tableStyles.td}>
                                    {col.accessor(row)}
                                </td>
                            ))}
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td
                            colSpan={columns.length}
                            className={tableStyles.empty}
                        >
                            No data available
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default Table;