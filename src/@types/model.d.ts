type Staff = {
  key?: number;
  UserID?: number;
  StaffID: number;
  FirstName: string;
  LastName: string;
  Email?: string;
  Birthday: string;
  Department?: string;
  DepartmentName: string;
  Shortname?: string;
  Avatar?: string;
  Role?: number;
};

interface DataAddCheckin {
  StaffID: number;
  TimeCheckin: number;
}
