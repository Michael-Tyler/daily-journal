let instructors = []

export const getInstructors = () => {
    return fetch("http://localhost:3000/instructors")
        .then(response => response.json())
        .then(parsedInstrusctors =>
            instructors = parsedInstrusctors)
}

export const useInstructors = () => {
    return instructors.slice()
}