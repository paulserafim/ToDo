export function read() {
    const json = window.localStorage.getItem('actions');
    return json === null ? [] : JSON.parse(json);
}

export function write(elements) {
    const json = JSON.stringify(elements);
    window.localStorage.setItem('actions', json);
}

export function appendToStorage(element) {
    const elements = read();
    elements.push(element);
    write(elements);
}

export function remove(id) {
    const actions = read();
    const index = actions.findIndex(element => element.id === id);
    if (index !== -1) {
        actions.splice(index, 1);
        write(actions);
    }
}