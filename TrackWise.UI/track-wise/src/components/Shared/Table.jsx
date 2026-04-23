function Table({ columns, data }) {
    return (
        <table
            className="table table-striped table-bordered"
            border="1"
            cellPadding="10"
            style={{ width: "100%" }}
        >
            <thead>
                <tr>
                    {columns.map((col, index) => (
                        <th key={index}>{col.header}</th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {data?.length > 0 ? (
                    data.map((row, rowIndex) => (
                        <tr key={row.id || rowIndex}>
                            {columns.map((col, colIndex) => (
                                <td key={colIndex}>
                                    {col.accessor(row)}
                                </td>
                            ))}
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={columns.length} style={{ textAlign: "center" }}>
                            No data available
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default Table;