import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Table = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [editingCell, setEditingCell] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [contextMenu, setContextMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
    rowIndex: null,
    columnIndex: null,
    type: null,
  });

  useEffect(() => {
    if (location.state && location.state.apiData) {
      const { columns, rows } = location.state.apiData;
      console.log("before giving col value", location.state.apiData);
      setColumns(["S.No.", ...columns]);
      setData(rows.map((row, index) => [index + 1, ...Object.values(row)]));
    }
  }, [location.state]);

  const handleAddRow = (index) => {
    const newRow = ["", ...Array(columns.length - 1).fill("")];
    const newData = [...data];
    newData.splice(index + 1, 0, newRow);

    // Rearrange S.No.
    for (let i = index + 1; i < newData.length; i++) {
      newData[i][0] = i + 1;
    }

    setData(newData);
    setContextMenu({
      visible: false,
      x: 0,
      y: 0,
      rowIndex: null,
      columnIndex: null,
      type: null,
    });
  };

  const handleAddColumn = (index) => {
    const newColumnName = prompt("Enter column name:");
    if (newColumnName) {
      const newColumns = [...columns];
      newColumns.splice(index + 1, 0, newColumnName);

      const newData = data.map((row) => {
        const newRow = [...row];
        newRow.splice(index + 1, 0, "");
        return newRow;
      });

      setColumns(newColumns);
      setData(newData);
      setContextMenu({
        visible: false,
        x: 0,
        y: 0,
        rowIndex: null,
        columnIndex: null,
        type: null,
      });
    }
  };

  const handleDeleteRow = (index) => {
    const newData = [...data];
    newData.splice(index, 1);

    // Rearrange S.No.
    for (let i = index; i < newData.length; i++) {
      newData[i][0] = i + 1;
    }

    setData(newData);
    setContextMenu({
      visible: false,
      x: 0,
      y: 0,
      rowIndex: null,
      columnIndex: null,
      type: null,
    });
  };

  const handleDeleteColumn = (index) => {
    if (index === 0) {
      alert("Cannot delete the S.No. column.");
      return;
    }

    const newColumns = [...columns];
    newColumns.splice(index, 1);

    const newData = data.map((row) => {
      const newRow = [...row];
      newRow.splice(index, 1);
      return newRow;
    });

    setColumns(newColumns);
    setData(newData);
    setContextMenu({
      visible: false,
      x: 0,
      y: 0,
      rowIndex: null,
      columnIndex: null,
      type: null,
    });
  };

  const handleEditCell = (rowIndex, cellIndex, newValue) => {
    const newData = [...data];
    newData[rowIndex][cellIndex] = newValue;
    setData(newData);
    setEditingCell(null);
    setEditValue("");
  };

  const handleCellClick = (rowIndex, cellIndex, cellValue) => {
    if (cellIndex !== 0) {
      setEditingCell({ rowIndex, cellIndex });
      setEditValue(cellValue);
    }
  };

  const handleInputChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleInputKeyDown = (e, rowIndex, cellIndex) => {
    if (e.key === "Enter") {
      handleEditCell(rowIndex, cellIndex, editValue);
    } else if (e.key === "Escape") {
      setEditingCell(null);
      setEditValue("");
    }
  };

  const handleRightClick = (
    event,
    rowIndex = null,
    columnIndex = null,
    type = null
  ) => {
    event.preventDefault();
    setContextMenu({
      visible: true,
      x: event.clientX,
      y: event.clientY,
      rowIndex: rowIndex,
      columnIndex: columnIndex,
      type: type,
    });
  };

  const handleCloseContextMenu = () => {
    setContextMenu({
      visible: false,
      x: 0,
      y: 0,
      rowIndex: null,
      columnIndex: null,
      type: null,
    });
  };

  return (
    <div className="container mx-auto p-4" onClick={handleCloseContextMenu}>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-700">Data Table</h1>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          SAVE
        </button>
      </div>

      <div className="max-h-[500px] overflow-x-scroll overflow-y-auto border border-gray-300 rounded-lg shadow">
        <table className="min-w-full bg-white">
          <thead className="sticky top-0 bg-gray-100">
            <tr>
              {columns.map((column, columnIndex) => (
                <th
                  key={columnIndex}
                  className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700"
                  onContextMenu={(e) =>
                    handleRightClick(e, null, columnIndex, "column")
                  }
                >
                  <button
                    className="w-full text-left bg-blue-100 hover:bg-blue-200 text-blue-700 py-1 px-2 rounded transition duration-300"
                    onClick={() => console.log(`Column ${column} clicked`)}
                  >
                    {column}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="hover:bg-gray-50 transition duration-300"
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="py-2 px-4 border-b border-gray-300 text-sm text-gray-700"
                    onContextMenu={(e) =>
                      handleRightClick(e, rowIndex, null, "row")
                    }
                  >
                    {editingCell &&
                    editingCell.rowIndex === rowIndex &&
                    editingCell.cellIndex === cellIndex ? (
                      <input
                        type="text"
                        value={editValue}
                        onChange={handleInputChange}
                        onBlur={() =>
                          handleEditCell(rowIndex, cellIndex, editValue)
                        }
                        onKeyDown={(e) =>
                          handleInputKeyDown(e, rowIndex, cellIndex)
                        }
                        autoFocus
                        className="w-full p-1 border border-blue-300 rounded"
                      />
                    ) : (
                      <div
                        onClick={() =>
                          handleCellClick(rowIndex, cellIndex, cell)
                        }
                        className={
                          cellIndex !== 0
                            ? "cursor-pointer hover:bg-blue-100 p-1 rounded"
                            : ""
                        }
                      >
                        {cell}
                      </div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {contextMenu.visible && contextMenu.type === "column" && (
        <div
          className="absolute bg-white border border-gray-300 rounded shadow-lg p-2"
          style={{ top: contextMenu.y, left: contextMenu.x }}
        >
          <button
            className="block w-full text-left text-sm text-blue-700 py-1 px-2 hover:bg-blue-100 rounded transition duration-300"
            onClick={() => handleAddColumn(contextMenu.columnIndex)}
          >
            Add Column
          </button>
          <button
            className="block w-full text-left text-sm text-blue-700 py-1 px-2 hover:bg-blue-100 rounded transition duration-300"
            onClick={() => handleDeleteColumn(contextMenu.columnIndex)}
          >
            Delete Column
          </button>
        </div>
      )}

      {contextMenu.visible && contextMenu.type === "row" && (
        <div
          className="absolute bg-white border border-gray-300 rounded shadow-lg p-2"
          style={{ top: contextMenu.y, left: contextMenu.x }}
        >
          <button
            className="block w-full text-left text-sm text-blue-700 py-1 px-2 hover:bg-blue-100 rounded transition duration-300"
            onClick={() => handleAddRow(contextMenu.rowIndex)}
          >
            Add Row
          </button>
          <button
            className="block w-full text-left text-sm text-blue-700 py-1 px-2 hover:bg-blue-100 rounded transition duration-300"
            onClick={() => handleDeleteRow(contextMenu.rowIndex)}
          >
            Delete Row
          </button>
        </div>
      )}
    </div>
  );
};

export default Table;
