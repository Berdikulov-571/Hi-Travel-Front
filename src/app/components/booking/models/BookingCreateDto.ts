export interface CreateBookingCommand {
    "idPackage": number,
    "firstName": string,
    "lastName": string,
    "personCount": number,
    "price": number,
    "phoneNumber": string,
    "email": string,
    "date": Date,
    "startDate": Date,
    "endDate": Date
}