export class UserProfile implements IUserProfile{
    UserGuid: string;
    AccountName: string;
    DisplayName: string;
    Email: string;
    JobTitle: string;
    Department: string;
    ManagerEmail: string
}

export interface IUserProfile {
    UserGuid: string;
    AccountName: string;
    DisplayName: string;
    Email: string;
    JobTitle: string;
    Department: string;
    ManagerEmail: string
}