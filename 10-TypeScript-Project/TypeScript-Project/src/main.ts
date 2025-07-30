import './CSS/style.css';
import ListItem from './model/ListItem';
import FullList from './model/FullList';
import ListTemplate from './templates/ListTemplates';

// Initialize the app
const initApp = (): void => {
  const fullList = FullList.instance;
  const templates = ListTemplate.instance;

  const itemEntryForm = document.getElementById('itemEntryForm') as HTMLFormElement;

  itemEntryForm.addEventListener('submit', (event: SubmitEvent): void => {
    // Prevent default form behavior (page reload)
    event.preventDefault();

    const input = document.getElementById('newItem') as HTMLInputElement;
    const newEntryItem: string = input.value.trim();

    // Prevent empty entries
    if (!newEntryItem.length) return;

    // Calculate the item ID
    // We can't use the list length directly as IDs might not be continuous (due to deletions)
    // So we get the last item's ID and add 1; if the list is empty, start from 1
    const itemId: number = fullList.list.length
      ? parseInt(fullList.list[fullList.list.length - 1].id) + 1
      : 1;

    // Create a new ListItem and add it to the list
    const newItem = new ListItem(itemId.toString(), newEntryItem);
    fullList.addItems(newItem);

    // Render the updated list on the webpage
    templates.render(fullList);

    // Clear the input field after adding
    input.value = '';
  });

  const clearItems = document.getElementById('clearItemsButton') as HTMLButtonElement;

  // Clear the list and UI when "Clear Items" is clicked
  clearItems.addEventListener('click', (): void => {
    fullList.clearList();
    templates.clear();
  });

  // Load any previously saved items and render them
  fullList.load();
  templates.render(fullList);
};

// Ensure DOM is fully loaded before initializing the app
document.addEventListener('DOMContentLoaded', initApp);
