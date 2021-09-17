function getId(){
    let id = localStorage.getItem('ids');
    if (id === null) {
        id = 0;
    }
    id++;
    localStorage.setItem('ids', id);
    return id;
}

export { getId };