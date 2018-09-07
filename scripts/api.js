const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/richie';

  const getItems = function() {
    return $.getJSON(BASE_URL + '/items');
  };

  const createItem = function(name) {
    const newItem = JSON.stringify({ name });
    return $.ajax({
      url: BASE_URL + '/items',
      method: 'POST',
      contentType: 'application/json',
      data: newItem
    });
  };

  const updateItem = function(id, updateData, callback) {
    $.ajax({
      url: BASE_URL + '/items/' + id,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updateData),
      success: callback
    });
  };

  const deleteItem = function(id, callback) {
    $.ajax({
      url: BASE_URL + '/items/' + id,
      method: 'DELETE',
      success: callback
    });
  };

  return {
    getItems,
    createItem,
    updateItem,
    deleteItem,
  };
}());