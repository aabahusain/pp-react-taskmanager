export type User = {
    children: string | React.ReactNode,
    id: string,
    username: string,
    email: string,
    dob: Date,
    name : {
        fname: string,
        lname: string
    }
}

