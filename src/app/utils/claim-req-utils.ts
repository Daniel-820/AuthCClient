
export const claimReq={
    adminOnly: (c: any) => c.role == "Admin",
  adminOrTeacher: (c: any) => c.role == "Admin" || c.role == "Teacher",
  hasLibraryId: (c: any) => parseInt(c.libraryID)!=0,
  femaleAndTeacher: (c: any) => c.gender == "Female" && c.role == "Teacher",
  femaleAndBelow10 : (c: any) => c.gender == "Female" && parseInt(c.age) < 10


}