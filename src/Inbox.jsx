import React, { useState, useEffect } from 'react';

function Inbox() {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Load items from local storage and remove completed ones when the component mounts
  useEffect(() => {
    const storedItems = localStorage.getItem('inboxItems');
    // if (storedItems) {
    //   const parsedItems = JSON.parse(storedItems);
    //   // Filter out completed tasks
    //   const activeItems = parsedItems.filter(item => !item.completed);
    //   setItems(activeItems);
    //   localStorage.setItem('inboxItems', JSON.stringify(activeItems)); // Update local storage
    // }
  }, []);

  const handleAdd = () => {
    if (newItem.trim()) {
      if (editIndex !== null) {
        // Edit existing item
        const updatedItems = [...items];
        updatedItems[editIndex].description = newItem;
        setItems(updatedItems);
        setEditIndex(null); // Reset edit state after saving
      } else {
        // Add new item with default "completed" status as false
        const updatedItems = [...items, { description: newItem, completed: false }];
        setItems(updatedItems);
      }

      setNewItem(''); // Clear input field

      // Save updated items to local storage
      localStorage.setItem('inboxItems', JSON.stringify(editIndex !== null ? items : [...items, { description: newItem, completed: false }]));
    }
  };

  const handleEdit = (index) => {
    setNewItem(items[index].description); // Place the selected item in the input field
    setEditIndex(index); // Track which item is being edited
  };

  const handleToggleComplete = (index) => {
    const updatedItems = [...items];
    updatedItems[index].completed = !updatedItems[index].completed; // Toggle the completed status
    setItems(updatedItems);

    // Save updated items to local storage
    localStorage.setItem('inboxItems', JSON.stringify(updatedItems));
  };

  return (
    <div className='h-[100vh] w-[650px] border'>
      <div className='h-[120px] w-[649px] flex justify-around items-center flex-col'>
        <div className='h-[50px] w-[649px] flex justify-between items-center'>
          <div className='h-[49px] w-[100px] flex gap-1 justify-around items-center'>
            <img className='h-[30px] w-[30px]' src="src/assets/3.png" alt="Inbox Icon" />
            <p className='text-xl font-bold'>Inbox</p>
          </div>
          <div className='h-[49px] w-[80px] flex justify-around items-center'>
            <img className='h-[18px] w-[20px]' src="src/assets/sort.png" alt="Sort" />
            <img className='h-[18px] w-[18px]' src="src/assets/....png" alt="Another Action" />
          </div>
        </div>
        <div className='h-[50px] w-[600px] flex justify-around items-center'>
          <input
            className='h-[40px] w-[500px] border bg-neutral-50 rounded-lg focus:outline-none'
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button className='ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg' onClick={handleAdd}>
            {editIndex !== null ? 'Save' : 'Add'}
          </button>
        </div>
      </div>

      {/* Displaying the list of items */}
      {items.map((item, index) => (
        <div key={index} className='w-full flex justify-around  items-center mb-2'>
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => handleToggleComplete(index)}
          />
          <p className={`flex-grow ${item.completed ? 'line-through' : ''}`}>{item.description}</p>
          <button onClick={() => handleEdit(index)}>
            <img className='h-[30px] w-[30px]' src="src/assets/icons8-edit-48.png" alt="Edit Icon" />
          </button>
        </div>
      ))}

    </div>
  );
}

export default Inbox;
