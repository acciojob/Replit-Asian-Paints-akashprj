//your JS code here. If required.
const gridItems = document.querySelectorAll('.grid-item');
const blockInput = document.getElementById('block_id');
const colorInput = document.getElementById('color_id');
const changeButton = document.getElementById('change_button');
const resetButton = document.getElementById('reset_button');

let selectedBlockId = null;

gridItems.forEach(gridItem => {
  gridItem.addEventListener('click', () => {
    gridItems.forEach(gridItem => {
      gridItem.classList.remove('selected');
    });
    gridItem.classList.add('selected');
    selectedBlockId = gridItem.id;
  });
});

changeButton.addEventListener('click', () => {
  const selectedBlock = document.getElementById(selectedBlockId);
  const colorValue = colorInput.value;
  selectedBlock.style.backgroundColor = colorValue;
});

resetButton.addEventListener('click', () => {
  gridItems.forEach(gridItem => {
    gridItem.style.backgroundColor = 'transparent';
    gridItem.classList.remove('selected');
  });
  selectedBlockId = null;
});
