import PropTypes from 'prop-types';

function DeleteModal(props) {
  const { type, title, deleteBtnClick, setIsDeleteModalOpen } = props;

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && setIsDeleteModalOpen(false)}
      className="fixed right-0 left-0 top-0 bottom-0 px-2 py-4 overflow-scroll scrollbar-hide z-50 flex justify-center items-center bg-black/50"
    >
      <div className="scrollbar-hide overflow-y-scroll max-w-md max-h-[95vh] my-auto bg-white dark:bg-customCharade text-back dark:text-white w-full px-8 py-8 rounded-xl">
        <h3 className="font-bold text-red-500 text-xl">Delete this {type} ? </h3>
        {type === 'task' ? (
          <p className="text-gray-500 font-semibold tracking-wider text-sm pt-6">
            Are you sure you want to delete the &quot;{title}&quot; task and it&apos; subtasks?
            <br />
            This action cannot be reversed.
          </p>
        ) : (
          <p className="text-gray-500 font-semibold tracking-wider text-sm pt-6">
            Are you sure you want to delete the &quot;{title}&quot; task and it&apos; subtasks?
            <br />
            This action cannot be reversed.
          </p>
        )}

        <div className="flex w-full mt-4 items-center justify-center space-x-4">
          <button onClick={deleteBtnClick} className="w-full items-center text-white hover:opacity-75 font-semibold bg-red-500 py-2 rounded-full">
            Delete
          </button>
          <button
            onClick={() => setIsDeleteModalOpen(false)}
            className="w-full items-center text-customBgBtn hover:opacity-75 font-semibold bg-customCharade/10 py-2 rounded-full"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;

DeleteModal.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  setIsDeleteModalOpen: PropTypes.func.isRequired,
  deleteBtnClick: PropTypes.func.isRequired,
};
