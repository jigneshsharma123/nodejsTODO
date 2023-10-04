document.querySelectorAll('.check-box').forEach((checkBox) => {
    checkBox.addEventListener('change', () => {
      const taskId = checkBox.parentElement.dataset.taskId;
      const completed = checkBox.checked;
  
      // Send a request to update the task's completion status
      fetch(`/update-task/${taskId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to update task');
          }
        })
        .catch((error) => {
          console.error(error);
          alert('Failed to update task. Please try again.');
        });
    });
  });
  
  document.querySelectorAll('.delete-button').forEach((button) => {
    button.addEventListener('click', () => {
      const taskId = button.parentElement.dataset.taskId;
  
      // Send a request to delete the task
      fetch(`/delete-task/${taskId}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to delete task');
          }
        })
        .catch((error) => {
          console.error(error);
          alert('Failed to delete task. Please try again.');
        });
    });
  });
  