import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
const List = ({ list, setList, showAlert, handleEdit }) => {
  const handleDelete = (id) => {
    const newList = list.filter((item) => {
      return item.id !== id;
    });
    setList(newList);
    showAlert(true, 'danger', 'item removed');
  };

  return list.map((item) => {
    const { id, title } = item;

    return (
      <article key={id} className='grocery-item'>
        <p className='title'>{title}</p>
        <div className='btn-container'>
          <button className='edit-btn' type='button'>
            <FaEdit onClick={() => handleEdit(id)} />
          </button>
          <button className='delete-btn' type='button'>
            <FaTrash onClick={() => handleDelete(id)} />
          </button>
        </div>
      </article>
    );
  });
};

export default List;
