export interface CreateBookingCommand {
    "idPackage": number,
    "firstName": string,
    "lastName": string,
    "personCount": number,
    "price": number,
    "phoneNumber": string,
    "email": string,
    "startDate": Date,
    "endDate": Date
}