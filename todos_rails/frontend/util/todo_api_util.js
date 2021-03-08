export const fetchTodos = () => {
    return $.ajax({
        method: "GET",
        url: "/api/todos"
    })
}



// .then will take result of get request and pass it into the first cb