import PropTypes from 'prop-types';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function AddEditBoardModal(props) {
  const { setBoardModalOpen, type } = props;
  const [name, setName] = useState('');
  const [newColumns, setNewColumns] = useState([
    { name: 'Todo', task: [], id: uuidv4() },
    { name: 'Doing', task: [], id: uuidv4() },
    { name: 'Goal', task: [], id: uuidv4() },
  ]);

  const handleChange = (id, newValue) => {
    setNewColumns((prevState) => {
      const newState = [...prevState];
      const column = newState.find((col) => col.id === id);
      column.name = newValue;
      return newState;
    });
  };

  return (
    <div className="fixed right-0 left-0 top-0 bottom-0 px-2 py-4 scrollbar-hide overflow-scroll z-50 justify-center items-center flex bg-black/50">
      {/* Modal Section */}
      <div className="scrollbar-hide overflow-y-scroll max-h-[95vh] bg-white dark:bg-darkPrimary text-black dark:text-white  font-bold shadow-md shadow-customTurquoiseBlue/50s max-w-md mx-auto w-full px-8 py-8 rounded-xl">
        <h3 className="text-lg capitalize font-sans">{type === 'edit' ? 'Edit' : 'Add New'}</h3>
        {/* task name */}
        <div className="mt-8 flex flex-col space-y-3">
          <label className="text-sm dark:text-white text-gray-500">Board Columns</label>
          <input
            className="bg-transparent px-4 py-2 rounded-md text-sm border border-gray-600 focus:outline-customBgBtn outline-1 ring-0"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="e.g web design"
            id="board-name-input"
          />
        </div>

        {/* board columns */}
        <div className="mt-8 flex flex-col space-y-3">
          <label className="text-sm dark:text-white text-gray-500">Boards columns</label>
          {newColumns.map((perColumn, index) => {
            return (
              <div key={index} className="flex items-center w-full">
                <input
                  className="bg-transparent flex-grow px-4 py-2 rounded-md text-sm border border-gray-600 outline-none focus:outline-blueMarguerite"
                  type="text"
                  onChange={(event) => handleChange(perColumn.id, event.target.value)}
                  value={perColumn.name}
                />
              </div>
            );
          })}
        </div>

        {/* modal close button */}
        <button className="button mt-10" onClick={() => setBoardModalOpen(false)}>
          Close Modal
        </button>
      </div>
    </div>
  );
}

export default AddEditBoardModal;

AddEditBoardModal.propTypes = {
  setBoardModalOpen: PropTypes.func.isRequired,
  type: PropTypes.any.isRequired,
};